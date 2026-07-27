import { useState } from 'react'

const services = ['AI-Readiness Training', 'Leadership Development', 'Organisational Consulting', 'L&D Strategy', 'Change Management', 'General enquiry']

export default function WHQContact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    organisation: '',
    role: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5 text-whq-green" style={{ fontFamily: 'Inter, sans-serif' }}>Contact</p>
            <h1 className="text-4xl font-bold text-ink mb-6" style={{ letterSpacing: '-0.03em' }}>
              Let's start a conversation.
            </h1>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#545454' }}>
              Tell us about your organisation and the challenge you're facing. We'll respond within one business day.
            </p>

            <div className="flex flex-col gap-6">
              <div style={{ borderTop: '1px solid #E6E5E0', paddingTop: '1.5rem' }}>
                <p className="text-[12px] font-semibold uppercase tracking-wider mb-2 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>Email</p>
                <a href="mailto:hello@workplacehq.africa" className="text-[15px] font-medium text-ink hover:text-whq-green transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  hello@workplacehq.africa
                </a>
              </div>
              <div style={{ borderTop: '1px solid #E6E5E0', paddingTop: '1.5rem' }}>
                <p className="text-[12px] font-semibold uppercase tracking-wider mb-2 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>Based in</p>
                <p className="text-[15px] font-medium text-ink" style={{ fontFamily: 'DM Sans, sans-serif' }}>Lagos, Nigeria</p>
                <p className="text-[13px]" style={{ color: '#888' }}>Serving organisations across West Africa</p>
              </div>
              <div style={{ borderTop: '1px solid #E6E5E0', paddingTop: '1.5rem' }}>
                <p className="text-[12px] font-semibold uppercase tracking-wider mb-2 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>Response time</p>
                <p className="text-[15px] font-medium text-ink" style={{ fontFamily: 'DM Sans, sans-serif' }}>Within 1 business day</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full py-16">
                <div className="w-12 h-12 rounded-full bg-whq-green flex items-center justify-center mb-6 text-paper text-xl">✓</div>
                <h2 className="text-2xl font-bold text-ink mb-4" style={{ letterSpacing: '-0.02em' }}>
                  Message received.
                </h2>
                <p className="text-base leading-relaxed" style={{ color: '#545454' }}>
                  Thank you for reaching out. Someone from the WorkplaceHQ team will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Full name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 text-[14px] bg-paper outline-none transition-colors"
                      style={{ fontFamily: 'DM Sans, sans-serif', border: '1px solid #E6E5E0', color: '#191919' }}
                      placeholder="Adaeze Nwosu"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Work email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 text-[14px] bg-paper outline-none"
                      style={{ fontFamily: 'DM Sans, sans-serif', border: '1px solid #E6E5E0', color: '#191919' }}
                      placeholder="adaeze@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Organisation *</label>
                    <input
                      type="text"
                      required
                      value={form.organisation}
                      onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                      className="w-full px-4 py-3 text-[14px] bg-paper outline-none"
                      style={{ fontFamily: 'DM Sans, sans-serif', border: '1px solid #E6E5E0', color: '#191919' }}
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Your role</label>
                    <input
                      type="text"
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full px-4 py-3 text-[14px] bg-paper outline-none"
                      style={{ fontFamily: 'DM Sans, sans-serif', border: '1px solid #E6E5E0', color: '#191919' }}
                      placeholder="Head of HR"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Area of interest</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 text-[14px] bg-paper outline-none appearance-none"
                    style={{ fontFamily: 'DM Sans, sans-serif', border: '1px solid #E6E5E0', color: form.service ? '#191919' : '#aaa' }}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Tell us about your challenge *</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 text-[14px] bg-paper outline-none resize-none"
                    style={{ fontFamily: 'DM Sans, sans-serif', border: '1px solid #E6E5E0', color: '#191919' }}
                    placeholder="Briefly describe what you're trying to solve..."
                  />
                </div>

                <button
                  type="submit"
                  className="self-start text-[13px] font-semibold text-paper bg-ink px-8 py-4 hover:bg-whq-deep transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
