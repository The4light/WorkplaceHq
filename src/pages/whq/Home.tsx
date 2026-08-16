﻿import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, Users, Briefcase, ChevronLeft, ChevronRight, Star, Zap, Sparkles } from 'lucide-react'

const metrics = [
  { value: '98%', label: 'Efficiency Gain' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '12K+', label: 'Employees Upskilled' },
  { value: '4.9★', label: 'Client Satisfaction' },
]

const services = [
  {
    icon: GraduationCap,
    title: 'Training',
    desc: 'We build structured training programmes around the skills your team is missing — AI and automation, sales, communication, performance management, whatever the gap is. No generic modules. Every session is practical and built to hold up once people are back at their desks.',
    colSpan: 'col-span-1 md:col-span-2',
    dark: true,
  },
  {
    icon: Users,
    title: 'Workshops',
    desc: 'Workshops are where theory turns into action. We run focused sessions on AI tools, customer service, presentations, and automation — sized for teams big or small. Everyone leaves with something they can do on Monday, not just notes.',
    colSpan: 'col-span-1',
    dark: false,
  },
  {
    icon: Briefcase,
    title: 'Consulting',
    desc: 'We sit with your leadership team and find what\'s really holding your people back — not the symptom, the cause. Then we build a plan around it: performance systems, structure, talent development, whatever it takes. You walk away with a roadmap, not another meeting.',
    colSpan: 'col-span-1',
    dark: false,
  },
  {
    icon: Sparkles,
    title: 'Lagos Jobs',
    desc: 'Verified local hiring, migration, and study abroad advisory — part of the WorkplaceHQ ecosystem.',
    colSpan: 'col-span-1',
    dark: false,
    isLagosJobs: true,
  },
]

const testimonials = [
  {
    quote: "WorkplaceHQ transformed how our 400-person ops team collaborates. We went from 60% efficiency to 94% in 6 months.",
    author: 'Amara Osei',
    role: 'COO, TresBonTech',
    rating: 5,
  },
  {
    quote: "Their AI Adoption framework saved us 18 months of failed internal experimentation. The ROI was visible in week three.",
    author: 'Daniel Mensah',
    role: 'VP Engineering, Posh Accent',
    rating: 5,
  },
  {
    quote: "The consulting team doesn't just advise — they embed, build systems, and leave you with something that actually runs.",
    author: 'Chisom Eze',
    role: 'CEO, Nexbridge Africa',
    rating: 5,
  },
]

const clients = ['TresBonTech', 'Posh Accent', 'Nexbridge', 'Clearfield', 'VaultGroup', 'Meridian']

const consultationEmail = 'lagos@workplacehq.com'

type ConsultationFormData = {
  fullName: string
  email: string
  company: string
  interest: string
}

export default function WHQHome() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [consultationSubmitted, setConsultationSubmitted] = useState(false)
  const [consultationForm, setConsultationForm] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    company: '',
    interest: '',
  })

  const next = () => setActiveTestimonial(i => (i + 1) % testimonials.length)
  const prev = () => setActiveTestimonial(i => (i - 1 + testimonials.length) % testimonials.length)
  const consultationMailto = `mailto:${consultationEmail}`

  const openConsultationModal = () => {
    setConsultationSubmitted(false)
    setModalOpen(true)
  }

  const closeConsultationModal = () => {
    setModalOpen(false)
  }

  const updateConsultationForm = (field: keyof ConsultationFormData, value: string) => {
    setConsultationForm(current => ({ ...current, [field]: value }))
  }

  const handleConsultationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Executive consultation request from ${consultationForm.fullName}`)
    const body = encodeURIComponent(
      [
        'Executive consultation request',
        '',
        `Full Name: ${consultationForm.fullName}`,
        `Corporate Email: ${consultationForm.email}`,
        `Company Name: ${consultationForm.company}`,
        `Area of Interest: ${consultationForm.interest}`,
      ].join('\n'),
    )

    setConsultationSubmitted(true)
    window.location.href = `${consultationMailto}?subject=${subject}&body=${body}`
  }

  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center px-4 sm:px-6 py-12 sm:py-16 overflow-hidden" style={{ minHeight: 'calc(100vh - 64px)' }}>
        <div className="max-w-[1440px] mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{ backgroundColor: 'rgba(11,60,45,0.08)', color: '#0B3C2D', border: '1px solid #E5E1D8' }}
              >
                <Zap className="w-3 h-3" style={{ color: '#1DA54A' }} />
                Enterprise Transformation Partners
              </div>
              <h1
                className="font-display font-700 text-4xl sm:text-6xl md:text-7xl leading-[1.08] tracking-tight mb-6"
                style={{ color: '#111827' }}
              >
                We engineer<br />
                <span style={{ color: '#0B3C2D' }}>how teams</span><br />
                work.
              </h1>
              <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl" style={{ color: '#6B7280' }}>
                WorkplaceHQ helps African teams trade guesswork for a system that works — training, workshops, and consulting built around how your people actually get things done, not a template.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* 1. Explore Services */}
                <Link
                  to="/services"
                  className="w-full sm:w-auto justify-center flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: '#0B3C2D',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-display)',
                    boxShadow: '0 4px 24px rgba(11,60,45,0.25)',
                  }}
                >
                  See what we do <ArrowRight className="w-4 h-4" />
                </Link>

                {/* 2. Direct Action / Modal Trigger */}
                <button
                  onClick={openConsultationModal}
                  className="w-full sm:w-auto justify-center flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#0B3C2D',
                    border: '1px solid #E5E1D8',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  Book a Consultation
                </button>
              </div>
            </div>

            {/* Right Hero Image Frame */}
            <div className="lg:col-span-5 relative">
              {/* Thin Brand Ring + Dot (System + Activation) placed BEHIND image card (z-0) & extending out of frame */}
              <div className="absolute -top-16 -right-16 w-64 h-64 pointer-events-none z-0 hidden sm:block">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Subtle thin Ring (System) */}
                  <circle cx="50" cy="50" r="44" stroke="#1DA54A" strokeWidth="2.5" />
                  {/* Inner Dot (People Activation) */}
                  <circle cx="50" cy="50" r="14" fill="#1DA54A" className="brand-dot-pulse" />
                </svg>
              </div>

              {/* Main Image Grid sitting ABOVE the ring element (z-10) */}
              <div className="relative z-10 rounded-2xl overflow-hidden border" style={{ borderColor: '#E5E1D8', boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
                {/* TODO: Replace with approved photography — all people shown must be Black, real work settings only (meetings, training rooms, laptops, collaboration), no lifestyle or abstract images */}
                <img
                  src="https://images.unsplash.com/photo-1655720357872-ce227e4164ba?auto=format&fit=crop&w=1200&q=80"
                  alt="High performing Nigerian team collaborating in modern office"
                  className="w-full h-[420px] object-cover grayscale-[20%] contrast-[1.05]"
                />
              </div>
            </div>

          </div>

          {/* Metrics Grid */}
          <div className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {metrics.map(m => (
              <div
                key={m.label}
                className="p-5 sm:p-6 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}
              >
                <div className="font-display font-700 text-3xl sm:text-4xl mb-1.5 tracking-tight" style={{ color: '#0B3C2D' }}>{m.value}</div>
                <div className="text-xs sm:text-sm font-medium" style={{ color: '#545454' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8 sm:mb-10">
            <h2 className="font-display font-700 text-2xl sm:text-4xl mb-2 sm:mb-3" style={{ color: '#111827' }}>For teams that are tired of winging it.</h2>
            <p className="text-sm sm:text-base" style={{ color: '#6B7280' }}>Training, workshops, and consulting — every WorkplaceHQ service exists to close one gap: the distance between where your team is and where it needs to be. We work directly with the HR leaders, COOs, and business owners who carry that gap every day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map(s => {
              const Icon = s.icon
              const CardTag: any = s.isLagosJobs ? Link : 'div'
              const cardProps = s.isLagosJobs ? { to: '/lagos-jobs' } : {}
              return (
                <CardTag
                  key={s.title}
                  {...cardProps}
                  className={`${s.colSpan} relative p-6 sm:p-7 rounded-2xl group cursor-pointer transition-all duration-300 hover:-translate-y-1 block`}
                  style={{
                    backgroundColor: s.dark ? '#0B3C2D' : '#FFFFFF',
                    border: `1px solid ${s.dark ? 'rgba(29,165,74,0.25)' : '#E5E1D8'}`,
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: s.dark ? 'rgba(29,165,74,0.15)' : 'rgba(11,60,45,0.07)' }}>
                    <Icon className="w-5 h-5" style={{ color: s.dark ? '#1DA54A' : '#0B3C2D' }} />
                  </div>
                  <h3 className="font-display font-600 text-lg mb-2" style={{ color: s.dark ? '#FFFFFF' : '#191919' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-6 md:mb-0" style={{ color: s.dark ? 'rgba(255,255,255,0.65)' : '#545454' }}>{s.desc}</p>
                  <ArrowRight className="static sm:absolute sm:bottom-6 sm:right-6 w-4 h-4 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity mt-4 sm:mt-0" style={{ color: s.dark ? '#1DA54A' : '#0B3C2D' }} />
                </CardTag>
              )
            })}
          </div>
        </div>
      </section>

      {/* Structured Systems Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}>
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold tracking-wider uppercase" style={{ color: '#1DA54A' }}>Structured Systems</span>
              <h2 className="font-display font-700 text-2xl sm:text-4xl" style={{ color: '#111827' }}>No fluff. No filler. Just training that works.</h2>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#6B7280' }}>
                Practical — your team walks out able to use what they learned, not just talk about it. Structured — we don't guess and hope. We diagnose the problem, design for it, then deliver. Measurable — we track what changed, not just who showed up. Human — behind every performance problem is a person, and we start there.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border" style={{ borderColor: '#E5E1D8' }}>
                {/* TODO: Replace with approved photography — all people shown must be Black, real work settings only (meetings, training rooms, laptops, collaboration), no lifestyle or abstract images */}
                <img
                  src="https://plus.unsplash.com/premium_photo-1707155465527-c5a2935b21cc?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern structured workplace execution session"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lagos Jobs Ecosystem Bridge Banner */}
      <section className="px-4 sm:px-6 py-12">
        <div className="max-w-[1440px] mx-auto">
          <div 
            className="rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
            style={{ backgroundColor: '#0F2C34', color: '#FFFFFF' }}
          >
            {/* Background Accent Glows */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full" style={{ background: '#FF5A36', filter: 'blur(100px)', opacity: 0.2 }} />

            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4" style={{ backgroundColor: 'rgba(255,90,54,0.15)', color: '#FF5A36', border: '1px solid rgba(255,90,54,0.3)' }}>
                Part of the WorkplaceHQ Ecosystem
              </div>
              <h2 className="font-display font-700 text-2xl sm:text-4xl text-white mb-3">
                Looking for Verified Lagos Careers or Advisory Services?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Visit <strong>Lagos Jobs</strong> to inspect active local hiring roles, get 1-on-1 migration and study abroad advisory from human personnel, or hire vetted executive talent.
              </p>
            </div>

            <div className="shrink-0 relative z-10 w-full md:w-auto">
              <Link
                to="/lagos-jobs"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white transition-all hover:opacity-90 shadow-lg"
                style={{ backgroundColor: '#FF5A36', fontFamily: 'var(--font-display)' }}
              >
                Go to Lagos Jobs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Trust Strip */}
      <section className="px-4 sm:px-6 py-8 sm:py-12 border-y" style={{ borderColor: '#E5E1D8' }}>
        <div className="max-w-[1440px] mx-auto">
          <p className="text-xs tracking-widest uppercase mb-6 sm:mb-8 text-center" style={{ color: '#1A1A1A', fontWeight: 600 }}>Trusted by leading enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-16">
            {clients.map(c => (
              <span key={c} className="font-display font-600 text-base sm:text-lg" style={{ color: '#545454' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="font-display font-700 text-2xl sm:text-4xl mb-2 sm:mb-4" style={{ color: '#111827' }}>What our clients say</h2>
              <p className="text-sm sm:text-base mb-6 sm:mb-8" style={{ color: '#6B7280' }}>Real outcomes from real partnerships.</p>
              <div className="flex gap-3 mb-6 md:mb-0">
                <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:bg-white" style={{ borderColor: '#E5E1D8' }}>
                  <ChevronLeft className="w-4 h-4" style={{ color: '#0B3C2D' }} />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:bg-white" style={{ borderColor: '#E5E1D8' }}>
                  <ChevronRight className="w-4 h-4" style={{ color: '#0B3C2D' }} />
                </button>
              </div>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ color: '#D97706', fill: '#D97706' }} />
                ))}
              </div>
              <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: '#111827' }}>
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: '#0B3C2D', color: '#1DA54A' }}>
                  {testimonials[activeTestimonial].author[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#111827' }}>{testimonials[activeTestimonial].author}</div>
                  <div className="text-xs" style={{ color: '#9CA3AF' }}>{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative p-8 sm:p-12 rounded-2xl overflow-hidden text-center" style={{ backgroundColor: '#0B3C2D' }}>
            {/* Out of frame subtle Ring graphic background */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 pointer-events-none opacity-20 hidden sm:block">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="44" stroke="#FFFFFF" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="14" fill="#FFFFFF" className="brand-dot-pulse" />
              </svg>
            </div>

            <div className="relative z-10">
              <h2 className="font-display font-700 text-2xl sm:text-4xl lg:text-5xl text-white mb-3 sm:mb-4">Your team can do more than it's doing right now. Let's fix what's in the way.</h2>
              <p className="text-sm sm:text-base mb-6 sm:mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>Let's build the systems your next decade of growth depends on.</p>
              <button
                onClick={openConsultationModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: '#1DA54A', color: '#0B3C2D', fontFamily: 'var(--font-display)' }}
              >
                Let's build it <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }} onClick={closeConsultationModal}>
          <div
            className="w-full max-w-md p-6 sm:p-8 rounded-2xl animate-slide-up"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}
            onClick={e => e.stopPropagation()}
          >
            <h3 className="font-display font-700 text-xl mb-2" style={{ color: '#111827' }}>Book a Consultation</h3>
            <p className="text-sm mb-6" style={{ color: '#6B7280' }}>One of our senior consultants will reach out within 24 hours.</p>
            {consultationSubmitted ? (
              <div
                className="rounded-2xl border p-5"
                style={{ borderColor: '#CFE9DB', backgroundColor: '#F4FBF7' }}
              >
                <p className="text-sm font-semibold" style={{ color: '#0B3C2D' }}>
                  Your email app should open with the consultation request prefilled.
                </p>
                <p className="mt-2 text-sm" style={{ color: '#6B7280' }}>
                  If nothing opens, email us directly at{' '}
                  <a href={consultationMailto} style={{ color: '#0B3C2D' }}>
                    {consultationEmail}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-3" onSubmit={handleConsultationSubmit}>
                <input
                  required
                  value={consultationForm.fullName}
                  onChange={e => updateConsultationForm('fullName', e.target.value)}
                  className="w-full px-4 py-3 rounded-md text-sm outline-none"
                  style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '6px' }}
                  placeholder="Full Name"
                />
                <input
                  required
                  value={consultationForm.email}
                  onChange={e => updateConsultationForm('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-md text-sm outline-none"
                  style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '6px' }}
                  placeholder="Corporate Email"
                  type="email"
                />
                <input
                  required
                  value={consultationForm.company}
                  onChange={e => updateConsultationForm('company', e.target.value)}
                  className="w-full px-4 py-3 rounded-md text-sm outline-none"
                  style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '6px' }}
                  placeholder="Company Name"
                />
                <select
                  required
                  value={consultationForm.interest}
                  onChange={e => updateConsultationForm('interest', e.target.value)}
                  className="w-full px-4 py-3 rounded-md text-sm outline-none"
                  style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '6px', color: consultationForm.interest ? '#111827' : '#6B7280' }}
                >
                  <option value="">Area of Interest</option>
                  <option>Training</option>
                  <option>Workshops</option>
                  <option>Consulting</option>
                </select>
                <button
                  type="submit"
                  className="mt-2 w-full py-3 rounded-lg font-semibold text-sm"
                  style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
