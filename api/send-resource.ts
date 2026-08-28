import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { name, email, resourceTitle, fileUrl } = req.body

    if (!email || !fileUrl) {
      return res.status(400).json({ error: 'Email and File URL are required' })
    }

    const data = await resend.emails.send({
      from: 'WorkplaceHQ <onboarding@resend.dev>', // Free test sender
      to: [email], // NOTE: Must be the email you registered your Resend account with during testing!
      subject: `Your requested resource: ${resourceTitle}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>WorkplaceHQ Knowledge Base</h2>
          <p>Hello ${name || 'there'},</p>
          <p>Here is your requested resource: <strong>${resourceTitle}</strong></p>
          <p><a href="${fileUrl}" target="_blank">Download Resource</a></p>
        </div>
      `,
    })

    return res.status(200).json(data)
  } catch (error: any) {
    console.error('Resend Error:', error)
    return res.status(500).json({ error: error.message || 'Internal Server Error' })
  }
}