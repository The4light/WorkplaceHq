import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

const resend = new Resend(process.env.RESEND_API_KEY)

const supabase = createClient(
  process.env.VITE_SUPABASE_URL as string,
  process.env.VITE_SUPABASE_ANON_KEY as string
)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { name, email, resourceId } = req.body

    if (!email || typeof email !== 'string' || !EMAIL_RE.test(email)) {
      return res.status(400).json({ error: 'A valid email is required' })
    }
    if (!resourceId || typeof resourceId !== 'string') {
      return res.status(400).json({ error: 'resourceId is required' })
    }

    const { data: resource, error } = await supabase
      .from('resources')
      .select('title, file_url')
      .eq('id', resourceId)
      .single()

    if (error || !resource) {
      return res.status(404).json({ error: 'Resource not found' })
    }

    const safeName = escapeHtml(name || 'there')
    const safeTitle = escapeHtml(resource.title)
    const safeFileUrl = escapeHtml(resource.file_url)

    const data = await resend.emails.send({
      from: 'WorkplaceHQ <onboarding@resend.dev>', // Free test sender
      to: [email], // NOTE: Must be the email you registered your Resend account with during testing!
      subject: `Your requested resource: ${resource.title}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>WorkplaceHQ Knowledge Base</h2>
          <p>Hello ${safeName},</p>
          <p>Here is your requested resource: <strong>${safeTitle}</strong></p>
          <p><a href="${safeFileUrl}" target="_blank">Download Resource</a></p>
        </div>
      `,
    })

    return res.status(200).json(data)
  } catch (error: any) {
    console.error('Resend Error:', error)
    return res.status(500).json({ error: error.message || 'Internal Server Error' })
  }
}
