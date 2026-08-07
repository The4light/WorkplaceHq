import { useState } from 'react'
import { Mail, Clock, CheckCircle2 } from 'lucide-react'

const contact = {
  email: 'info@workplacehq.com', // confirm with client
  whatsapp: '', // awaiting from client
}

type InquiryFormData = {
  firstName: string
  lastName: string
  email: string
  company: string
  inquiryType: string
  message: string
}

export default function WHQContact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<InquiryFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  })

  const updateForm = (field: keyof InquiryFormData, value: string) => {
    setFormData(current => ({ ...current, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `${formData.inquiryType || 'General inquiry'} from ${formData.firstName} ${formData.lastName}`.trim(),
    )
    const body = encodeURIComponent(
      [
        'WorkplaceHQ inquiry',
        '',
        `Name: ${formData.firstName} ${formData.lastName}`.trim(),
        `Corporate Email: ${formData.email}`,
        `Company: ${formData.company}`,
        `Inquiry Type: ${formData.inquiryType}`,
        '',
        'Project Notes:',
        formData.message,
      ].join('\n'),
    )

    setSubmitted(true)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      
      {/* Hero Section with Brand Ring */}
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        {/* Out-of-Frame Ring + Dot Pattern */}
        <div className="absolute -top-20 -right-20 w-80 h-80 pointer-events-none z-0 hidden sm:block">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="44" stroke="#1DA54A" strokeWidth="2" opacity="0.35" />
            <circle cx="50" cy="50" r="14" fill="#1DA54A" opacity="0.25" className="brand-dot-pulse" />
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="text-xs font-bold tracking-wider uppercase mb-2 block" style={{ color: '#1DA54A' }}>
            Get In Touch
          </span>
          <h1 className="font-display font-700 text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4" style={{ color: '#111827' }}>
            Contact Us
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: '#6B7280' }}>
            Enterprise inquiry, partnership, or general contact — we respond within 24 hours.
          </p>
        </div>
      </div>

      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-10">
          
          {/* Form Card */}
          <div className="p-8 sm:p-10 rounded-2xl transition-all" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
            <h2 className="font-display font-700 text-xl mb-6" style={{ color: '#111827' }}>
              Send an Inquiry
            </h2>
            {submitted ? (
              <div
                className="rounded-2xl border p-5"
                style={{ borderColor: '#CFE9DB', backgroundColor: '#F4FBF7' }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: '#1DA54A' }} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#0B3C2D' }}>
                      Your inquiry has been prepared.
                    </p>
                    <p className="mt-2 text-sm" style={{ color: '#6B7280' }}>
                      If your mail app did not open, send your message directly to{' '}
                      <a href={`mailto:${contact.email}`} style={{ color: '#0B3C2D' }}>
                        {contact.email}
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    required
                    value={formData.firstName}
                    onChange={e => updateForm('firstName', e.target.value)}
                    className="px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]"
                    style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '8px' }}
                    placeholder="First Name"
                  />
                  <input
                    required
                    value={formData.lastName}
                    onChange={e => updateForm('lastName', e.target.value)}
                    className="px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]"
                    style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '8px' }}
                    placeholder="Last Name"
                  />
                </div>
                <input
                  required
                  value={formData.email}
                  onChange={e => updateForm('email', e.target.value)}
                  className="px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]"
                  type="email"
                  style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '8px' }}
                  placeholder="Corporate Email"
                />
                <input
                  required
                  value={formData.company}
                  onChange={e => updateForm('company', e.target.value)}
                  className="px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]"
                  style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '8px' }}
                  placeholder="Company Name & Size"
                />

                <select
                  required
                  value={formData.inquiryType}
                  onChange={e => updateForm('inquiryType', e.target.value)}
                  className="px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]"
                  style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '8px', color: formData.inquiryType ? '#111827' : '#6B7280' }}
                >
                  <option value="">Inquiry Type</option>
                  <option>Enterprise Consulting</option>
                  <option>Training Programs</option>
                  <option>Workshop Booking</option>
                  <option>Partnership</option>
                  <option>General Inquiry</option>
                </select>

                <textarea
                  required
                  value={formData.message}
                  onChange={e => updateForm('message', e.target.value)}
                  className="h-28 resize-none px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]"
                  style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '8px' }}
                  placeholder="Describe your challenge or project in a few sentences..."
                />

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 border hover:!bg-[#1DA54A] hover:!border-[#1DA54A] hover:!text-[#0B3C2D]"
                  style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', borderColor: '#0B3C2D', fontFamily: 'var(--font-display)' }}
                >
                  Submit Inquiry
                </button>

                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4" style={{ color: '#1DA54A' }} />
                    <span className="text-sm" style={{ color: '#6B7280' }}>info@workplacehq.com</span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Extra Info Column */}
          <div className="flex flex-col gap-6">
            {/* Dark Information Box with Embedded Ring Element */}
            <div className="relative p-6 rounded-2xl overflow-hidden mt-2" style={{ backgroundColor: '#0B3C2D', border: '1px solid rgba(29,165,74,0.2)' }}>
              {/* Subtle Embedded Ring */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 pointer-events-none opacity-20">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="44" stroke="#FFFFFF" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="14" fill="#FFFFFF" className="brand-dot-pulse" />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[#1DA54A] font-bold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4" /> SLA Response Guarantee
                </div>
                <h3 className="font-display font-600 text-white text-base">
                  Direct Line to Practice Leads
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  All incoming inquiries are routed directly to the appropriate regional practice lead within 24 hours.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}
