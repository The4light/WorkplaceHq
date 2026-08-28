import { useState, useEffect } from 'react'
import { Download, FileText, Wrench, BarChart2, BookOpen, X, Loader2, CheckCircle2 } from 'lucide-react'
import { supabase } from '../../lib/supabase'

const iconMap: Record<string, any> = {
  Whitepapers: FileText,
  Toolkits: Wrench,
  Frameworks: BookOpen,
  Reports: BarChart2,
}

const tags = ['All', 'Whitepapers', 'Toolkits', 'Frameworks', 'Reports']

interface ResourceItem {
  id: string
  title: string
  tag: string
  description: string
  cover_image_url: string
  file_url: string
  resource_type: string
  created_at?: string
}

export default function WHQResources() {
  const [resources, setResources] = useState<ResourceItem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTag, setActiveTag] = useState('All')
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null)

  // Form & submission states
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    fetchResources()
  }, [])

  const fetchResources = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      if (data) setResources(data)
    } catch (err) {
      console.error('Error fetching resources:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedResource?.file_url || submitting) return

    setSubmitting(true)
    setErrorMessage('')

    try {
      // 1. Log lead to Supabase leads table (optional fallback tracking)
      await supabase.from('resource_leads').insert([
        {
          full_name: fullName,
          email: email,
          resource_id: selectedResource.id,
          resource_title: selectedResource.title,
        },
      ])

      // 2. Call serverless route to deliver PDF via Resend
      const response = await fetch('/api/send-resource', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email: email,
          resourceTitle: selectedResource.title,
          fileUrl: selectedResource.file_url,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email. Please check your email address.')
      }

      setSubmitted(true)
    } catch (err: any) {
      console.error('Error submitting resource request:', err)
      setErrorMessage(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const closeModal = () => {
    setSelectedResource(null)
    setFullName('')
    setEmail('')
    setSubmitted(false)
    setErrorMessage('')
  }

  const filtered = resources.filter(r => activeTag === 'All' || r.tag === activeTag)

  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* Header Section with Brand Ring Graphic */}
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 pointer-events-none z-0 hidden sm:block">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="44" stroke="#1DA54A" strokeWidth="2" opacity="0.35" />
            <circle cx="50" cy="50" r="14" fill="#1DA54A" opacity="0.25" className="brand-dot-pulse" />
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="text-xs font-bold tracking-wider uppercase mb-2 block" style={{ color: '#1DA54A' }}>
            Knowledge Base
          </span>
          <h1 className="font-display font-700 text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4" style={{ color: '#111827' }}>
            Resources Hub
          </h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            Whitepapers toolkits frameworks and reports free for enterprise teams.
          </p>
        </div>
      </div>

      <section className="px-6 pb-20 relative">
        <div className="max-w-[1440px] mx-auto">
          {/* Tag filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {tags.map(t => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: activeTag === t ? '#0B3C2D' : '#FFFFFF',
                  color: activeTag === t ? '#FFFFFF' : '#6B7280',
                  border: `1px solid ${activeTag === t ? '#0B3C2D' : '#E5E1D8'}`,
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Loading Indicator */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <Loader2 className="w-8 h-8 animate-spin" style={{ color: '#0B3C2D' }} />
              <p className="text-sm text-gray-500 font-medium">Loading resources...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 border border-dashed rounded-2xl" style={{ borderColor: '#E5E1D8' }}>
              <p className="text-base text-gray-500 font-medium">No resources found in this category.</p>
            </div>
          ) : (
            /* Cards Grid */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map(r => {
                const Icon = iconMap[r.tag] || FileText
                return (
                  <div
                    key={r.id}
                    className="rounded-2xl flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/5"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}
                  >
                    <div className="relative h-56 w-full overflow-hidden bg-[#07271D] flex items-center justify-center p-6">
                      <img
                        src={r.cover_image_url}
                        alt={r.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C2D] via-transparent to-black/30" />

                      <div className="absolute top-4 left-4 z-20 w-9 h-9 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: '#FFFFFF' }}>
                        <Icon className="w-4 h-4" style={{ color: '#0B3C2D' }} />
                      </div>

                      <span className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase shadow-sm" style={{ backgroundColor: 'rgba(217,119,6,0.18)', color: '#F59E0B', backdropFilter: 'blur(4px)' }}>
                        {r.tag}
                      </span>

                      <div className="relative z-10 w-36 h-44 rounded-r-md rounded-l-xs shadow-2xl transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105 flex flex-col justify-between p-3.5 border-l-4 border-[#1DA54A]"
                           style={{ backgroundColor: '#0B3C2D', backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.35) 100%)' }}>
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-mono tracking-wider text-[#1DA54A] uppercase font-semibold">
                            {r.resource_type}
                          </span>
                          <div className="w-2 h-2 rounded-full bg-amber-400" />
                        </div>

                        <div>
                          <span className="text-[9px] font-bold tracking-widest text-white/50 block uppercase">WorkplaceHQ</span>
                          <h4 className="font-display font-700 text-xs text-white leading-tight mt-1 line-clamp-3">
                            {r.title}
                          </h4>
                        </div>

                        <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                          <span className="text-[8px] text-white/60">Free Download</span>
                          <span className="text-[8px] text-[#1DA54A] font-semibold">2026</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-display font-700 text-lg mb-2 line-clamp-2" style={{ color: '#111827' }}>
                          {r.title}
                        </h3>
                        <p className="text-xs leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                          {r.description}
                        </p>
                      </div>

                      <button
                        onClick={() => setSelectedResource(r)}
                        className="w-full py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-all border duration-200 hover:!bg-[#1DA54A] hover:!border-[#1DA54A] hover:!text-[#0B3C2D]"
                        style={{ borderColor: '#0B3C2D', color: '#0B3C2D', backgroundColor: 'transparent', fontFamily: 'var(--font-display)' }}
                      >
                        <Download className="w-4 h-4" /> Download Free
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Download Modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} onClick={closeModal}>
          <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl relative" style={{ backgroundColor: '#FFFFFF' }} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display font-700 text-xl" style={{ color: '#111827' }}>Download Resource</h3>
              <button onClick={closeModal} className="p-1 rounded-lg hover:bg-gray-100">
                <X className="w-4 h-4" style={{ color: '#9CA3AF' }} />
              </button>
            </div>

            {submitted ? (
              <div className="py-6 flex flex-col items-center text-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 animate-bounce" />
                <h4 className="font-display font-700 text-lg" style={{ color: '#111827' }}>Check your inbox</h4>
                <p className="text-xs leading-relaxed text-gray-500">
                  We sent <strong style={{ color: '#0B3C2D' }}>{selectedResource.title}</strong> directly to <strong>{email}</strong>.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-4 px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white"
                  style={{ backgroundColor: '#0B3C2D' }}
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                  Enter your details to receive <strong style={{ color: '#0B3C2D' }}>{selectedResource.title}</strong> directly in your email inbox.
                </p>
                <form onSubmit={handleDownload} className="flex flex-col gap-3">
                  <input
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]"
                    style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '8px' }}
                    placeholder="Full Name"
                  />
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]"
                    style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '8px' }}
                    placeholder="Corporate Email"
                  />
                  {errorMessage && (
                    <p className="text-xs text-red-500 font-medium">{errorMessage}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-opacity hover:opacity-95 mt-2 flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending to Inbox...
                      </>
                    ) : (
                      'Get Instant Access'
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}