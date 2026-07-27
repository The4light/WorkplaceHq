import { useState } from 'react'
import { Link } from 'react-router-dom'

const topics = ['CV / Resume Optimisation', 'LinkedIn Optimisation', 'Portfolio Creator', 'Personal Website', 'Personal Branding', 'Job Listings', 'Partnership enquiry', 'Other']

export default function LJContact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ fontFamily: 'Inter, sans-serif', color: '#0F6B5C' }}>Contact</p>
            <h1 className="text-4xl font-bold text-ink mb-6" style={{ letterSpacing: '-0.03em' }}>
              We're here to help.
            </h1>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#545454' }}>
              Have a question about one of our tools, a job listing, or anything else? Send us a message and we'll get back to you within one business day.
            </p>

            <div className="flex flex-col gap-6">
              <div style={{ borderTop: '1px solid #E6E5E0', paddingTop: '1.5rem' }}>
                <p className="text-[12px] font-semibold uppercase tracking-wider mb-2 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>Email</p>
                <a href="mailto:hello@lagosjob.co" className="text-[15px] font-medium text-ink hover:text-lj-teal transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  hello@lagosjob.co
                </a>
              </div>
              <div style={{ borderTop: '1px solid #E6E5E0', paddingTop: '1.5rem' }}>
                <p className="text-[12px] font-semibold uppercase tracking-wider mb-2 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>Response time</p>
                <p className="text-[15px] font-medium text-ink" style={{ fontFamily: 'DM Sans, sans-serif' }}>Within 1 business day</p>
              </div>
              <div style={{ borderTop: '1px solid #E6E5E0', paddingTop: '1.5rem' }}>
                <p className="text-[12px] font-semibold uppercase tracking-wider mb-3 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>Use a tool directly</p>
                <Link
                  to="/lagos-jobs/tools"
                  className="inline-block text-[13px] font-semibold text-paper py-3 px-5 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: 'Inter, sans-serif', background: '#0F6B5C', borderRadius: '3px' }}
                >
                  Go to Tools Hub
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full py-16">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-paper text-xl"
                  style={{ background: '#0F6B5C' }}
                >
                  ✓
                </div>
                <h2 className="text-2xl font-bold text-ink mb-4" style={{ letterSpacing: '-0.02em' }}>Message sent.</h2>
                <p className="text-base leading-relaxed" style={{ color: '#545454' }}>
                  We've received your message and will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Full name *</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Email *</label>
                    <input required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="you@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>What's this about?</label>
                  <select value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} className="w-full px-4 py-3 text-[14px] bg-paper outline-none appearance-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: form.topic ? '#191919' : '#aaa' }}>
                    <option value="">Select a topic</option>
                    {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Message *</label>
                  <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full px-4 py-3 text-[14px] bg-paper outline-none resize-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="Tell us what's on your mind..." />
                </div>

                <button
                  type="submit"
                  className="self-start text-[13px] font-semibold text-paper py-3.5 px-8 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: 'Inter, sans-serif', background: '#0F6B5C', borderRadius: '3px' }}
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16" style={{ borderTop: '1px solid #E6E5E0' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[14px] font-medium text-ink mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Looking for organisational workforce solutions?</p>
            <p className="text-[13px]" style={{ color: '#888' }}>Lagos Job is for individuals. For teams and organisations, visit WorkplaceHQ.</p>
          </div>
          <Link to="/" className="flex-shrink-0 text-[13px] font-semibold text-ink hover:text-whq-green transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
            Visit WorkplaceHQ →
          </Link>
        </div>
      </section>
    </main>
  )
}
