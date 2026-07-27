import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Bot, TrendingUp, Settings, HeartHandshake, BarChart3, ChevronLeft, ChevronRight, Star, Zap, Award } from 'lucide-react'

const metrics = [
  { value: '98%', label: 'Efficiency Gain' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '12K+', label: 'Employees Upskilled' },
  { value: '4.9★', label: 'Client Satisfaction' },
]

const services = [
  {
    icon: Bot,
    title: 'AI Adoption',
    desc: 'End-to-end enterprise AI integration strategies — from readiness audit to full deployment.',
    span: 'col-span-2',
    dark: true,
  },
  {
    icon: Settings,
    title: 'Productivity Infrastructure',
    desc: 'Systems, tools, and workflow architecture that multiply team output.',
    span: 'col-span-1',
    dark: false,
  },
  {
    icon: TrendingUp,
    title: 'Operational Excellence',
    desc: 'Lean methodologies applied to enterprise operations for measurable throughput gains.',
    span: 'col-span-1',
    dark: false,
  },
  {
    icon: HeartHandshake,
    title: 'CX Transformation',
    desc: 'Redesign your customer experience layer from contact to retention.',
    span: 'col-span-1',
    dark: false,
  },
  {
    icon: BarChart3,
    title: 'Strategic Consulting',
    desc: 'C-suite advisory for transformation roadmaps, OKR architecture, and change management.',
    span: 'col-span-2',
    dark: true,
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

export default function WHQHome() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  const next = () => setActiveTestimonial(i => (i + 1) % testimonials.length)
  const prev = () => setActiveTestimonial(i => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <div style={{ backgroundColor: '#FBF9F5', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Ambient spheres */}
        <div className="pointer-events-none absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full" style={{ background: '#D97706', filter: 'blur(120px)', opacity: 0.18 }} />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full" style={{ background: '#10B981', filter: 'blur(150px)', opacity: 0.15 }} />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{ backgroundColor: 'rgba(11,60,45,0.08)', color: '#0B3C2D', border: '1px solid #E5E1D8' }}>
              <Zap className="w-3 h-3" style={{ color: '#10B981' }} />
              Enterprise Transformation Partners
            </div>
            <h1 className="font-display font-700 text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight mb-6" style={{ color: '#111827' }}>
              We Engineer<br />
              <span style={{ color: '#0B3C2D' }}>How Teams</span><br />
              Work.
            </h1>
            <p className="text-lg leading-relaxed mb-10 max-w-xl" style={{ color: '#6B7280' }}>
              From AI integration to operational excellence — WorkplaceHQ partners with forward-thinking enterprises to build the systems, culture, and capabilities that drive compounding performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)', boxShadow: '0 4px 24px rgba(11,60,45,0.25)' }}
              >
                Book Executive Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/services"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: 'transparent', color: '#0B3C2D', border: '1px solid #E5E1D8', fontFamily: 'var(--font-display)' }}
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map(m => (
              <div key={m.label} className="p-5 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}>
                <div className="font-display font-700 text-3xl mb-1" style={{ color: '#0B3C2D' }}>{m.value}</div>
                <div className="text-sm" style={{ color: '#6B7280' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="px-6 py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-10">
            <h2 className="font-display font-700 text-[clamp(1.75rem,3vw,2.5rem)] mb-3" style={{ color: '#111827' }}>Our Services</h2>
            <p className="text-base" style={{ color: '#6B7280' }}>Five integrated disciplines. One transformation partner.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map(s => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className={`${s.span} relative p-7 rounded-2xl group cursor-pointer transition-all duration-300 hover:-translate-y-1`}
                  style={{
                    backgroundColor: s.dark ? '#0B3C2D' : '#FFFFFF',
                    border: `1px solid ${s.dark ? 'rgba(16,185,129,0.25)' : '#E5E1D8'}`,
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: s.dark ? 'rgba(16,185,129,0.15)' : 'rgba(11,60,45,0.07)' }}>
                    <Icon className="w-5 h-5" style={{ color: s.dark ? '#10B981' : '#0B3C2D' }} />
                  </div>
                  <h3 className="font-display font-600 text-lg mb-2" style={{ color: s.dark ? '#FFFFFF' : '#111827' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: s.dark ? 'rgba(255,255,255,0.65)' : '#6B7280' }}>{s.desc}</p>
                  <ArrowRight className="absolute bottom-6 right-6 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: s.dark ? '#10B981' : '#0B3C2D' }} />
                </div>
              )
            })}

            {/* Cross-pollination card */}
            <div
              className="relative p-7 rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#FBF9F5', border: '1px solid #E5E1D8', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(217,119,6,0.04) 8px, rgba(217,119,6,0.04) 9px)' }}
            >
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(217,119,6,0.1)' }}>
                  <Award className="w-5 h-5" style={{ color: '#D97706' }} />
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium mb-3" style={{ backgroundColor: 'rgba(217,119,6,0.12)', color: '#D97706' }}>
                  For Your Workforce
                </div>
                <h3 className="font-display font-600 text-lg mb-2" style={{ color: '#111827' }}>Individual Career Upskilling</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B7280' }}>
                  Empower your people with Lagos Job — our B2C career acceleration engine with AI tools, job listings, and personal branding support.
                </p>
                <Link to="/lagos-jobs" className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#D97706', fontFamily: 'var(--font-display)' }}>
                  Take your team to Lagos Job <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client trust strip */}
      <section className="px-6 py-12 border-y" style={{ borderColor: '#E5E1D8' }}>
        <div className="max-w-[1440px] mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-8 text-center" style={{ color: '#9CA3AF' }}>Trusted by leading enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clients.map(c => (
              <span key={c} className="font-display font-600 text-lg" style={{ color: '#D1CFC9' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-700 text-[clamp(1.75rem,3vw,2.5rem)] mb-4" style={{ color: '#111827' }}>What our clients say</h2>
              <p className="text-base mb-8" style={{ color: '#6B7280' }}>Real outcomes from real partnerships.</p>
              <div className="flex gap-3">
                <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:bg-white" style={{ borderColor: '#E5E1D8' }}>
                  <ChevronLeft className="w-4 h-4" style={{ color: '#0B3C2D' }} />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:bg-white" style={{ borderColor: '#E5E1D8' }}>
                  <ChevronRight className="w-4 h-4" style={{ color: '#0B3C2D' }} />
                </button>
              </div>
            </div>
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ color: '#D97706', fill: '#D97706' }} />
                ))}
              </div>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#111827' }}>
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: '#0B3C2D', color: '#10B981' }}>
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
      <section className="px-6 pb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative p-12 rounded-2xl overflow-hidden text-center" style={{ backgroundColor: '#0B3C2D' }}>
            <div className="pointer-events-none absolute -top-12 -right-12 w-64 h-64 rounded-full" style={{ background: '#D97706', filter: 'blur(80px)', opacity: 0.2 }} />
            <div className="pointer-events-none absolute -bottom-12 -left-12 w-64 h-64 rounded-full" style={{ background: '#10B981', filter: 'blur(100px)', opacity: 0.2 }} />
            <div className="relative z-10">
              <h2 className="font-display font-700 text-[clamp(1.75rem,3vw,2.75rem)] text-white mb-4">Ready to transform your organization?</h2>
              <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>Let's build the systems your next decade of growth depends on.</p>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: '#10B981', color: '#0B3C2D', fontFamily: 'var(--font-display)' }}
              >
                Book Executive Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

  

      {/* Consultation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }} onClick={() => setModalOpen(false)}>
          <div
            className="w-full max-w-md p-8 rounded-2xl animate-slide-up"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}
            onClick={e => e.stopPropagation()}
          >
            <h3 className="font-display font-700 text-xl mb-2" style={{ color: '#111827' }}>Book a Consultation</h3>
            <p className="text-sm mb-6" style={{ color: '#6B7280' }}>One of our senior consultants will reach out within 24 hours.</p>
            <div className="flex flex-col gap-3">
              <input className="w-full px-4 py-3 rounded-md text-sm outline-none" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '6px' }} placeholder="Full Name" />
              <input className="w-full px-4 py-3 rounded-md text-sm outline-none" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '6px' }} placeholder="Corporate Email" type="email" />
              <input className="w-full px-4 py-3 rounded-md text-sm outline-none" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '6px' }} placeholder="Company Name" />
              <select className="w-full px-4 py-3 rounded-md text-sm outline-none" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '6px', color: '#6B7280' }}>
                <option value="">Area of Interest</option>
                <option>AI Adoption</option>
                <option>Productivity Infrastructure</option>
                <option>Operational Excellence</option>
                <option>CX Transformation</option>
                <option>Strategic Consulting</option>
              </select>
              <button
                className="w-full py-3 rounded-lg font-semibold text-sm mt-2"
                style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}
                onClick={() => setModalOpen(false)}
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
