import { useState } from 'react'
import { 
  Building2, 
  GraduationCap, 
  PlaneTakeoff, 
  Briefcase, 
  UserCheck, 
  PhoneCall, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  Send,
  X,
  MessageSquare
} from 'lucide-react'

const services = [
  {
    id: 'travel-immigration',
    icon: PlaneTakeoff,
    title: 'Travel & Migration Advisory',
    category: 'Immigration & Visas',
    tagline: 'Personalized guidance from licensed migration specialists.',
    desc: 'Our dedicated travel advisors work directly with you to evaluate visa eligibility, prepare required documentation, and manage your migration application process end-to-end.',
    highlights: [
      '1-on-1 strategy session with an experienced migration consultant',
      'Full application document review and verification',
      'Visitor, work, and residency pathways (UK, Canada, USA, Europe)'
    ],
    directContact: '+2348025720847'
  },
  {
    id: 'study-abroad',
    icon: GraduationCap,
    title: 'Study Abroad Admissions Support',
    category: 'Education',
    tagline: 'End-to-end academic advisory and university placement.',
    desc: 'Skip the confusion of overseas applications. Our academic counselors evaluate your credentials, assist in selecting top global universities, and handle admission processing directly.',
    highlights: [
      'Personalized university and course selection strategy',
      'SOP, CV, and essay drafting assistance by academic specialists',
      'Student visa guidance and post-admission support'
    ],
    directContact: '+2348025720847'
  },
  {
    id: 'corporate-hiring',
    icon: Briefcase,
    title: 'Executive Talent Placement',
    category: 'Recruitment',
    tagline: 'Custom recruitment tailored to your business needs.',
    desc: 'We match businesses in Lagos and across Nigeria with vetted professionals. Our human resource personnel handle screening, interviewing, and candidate shortlisting.',
    highlights: [
      'Tailored candidate sourcing and multi-stage screening',
      'Dedicated recruitment specialist assigned to your hiring needs',
      'Post-placement onboarding follow-up'
    ],
    directContact: '+2348025720847'
  },
  {
    id: 'business-consulting',
    icon: Building2,
    title: 'Corporate Advisory & Strategy',
    category: 'Business Operations',
    tagline: 'Hands-on operational and growth consulting.',
    desc: 'Work directly with our corporate advisory team to scale operations, optimize workforce strategy, and resolve organizational bottlenecks.',
    highlights: [
      'Structured operational audit and growth roadmap',
      'Direct access to senior industry consultants',
      'Customized execution plans for SMEs and enterprises'
    ],
    directContact: '+2348025720847'
  }
]

export default function LJServices() {
  const [selectedService, setSelectedService] = useState(services[0])
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false)

  const handleSelectService = (service: typeof services[0]) => {
    setSelectedService(service)
    setIsMobileDrawerOpen(true)
  }

  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-[#F4F3EF] font-sans">
      
      {/* Header Banner */}
      <div className="relative pt-28 pb-8 px-4 sm:px-6 overflow-hidden bg-[#191919]">
        {/* Soft Intelligence Green Glow */}
        <div 
          className="pointer-events-none absolute -top-20 right-0 w-96 h-96 rounded-full" 
          style={{ background: '#1DA54A', filter: 'blur(130px)', opacity: 0.08 }} 
        />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 text-[#1DA54A] bg-[#1DA54A]/10 border border-[#1DA54A]/20">
            <UserCheck className="w-3.5 h-3.5 text-[#1DA54A]" /> Human-Led Advisory
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white mb-3">
            Advisory & Consulting Services
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl">
            Direct access to dedicated human specialists for travel, study abroad, recruitment, and corporate advisory.
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Feed Column */}
          <div className="lg:col-span-5 flex flex-col h-full min-h-0">
            <div className="text-xs font-bold uppercase tracking-wider text-[#545454] mb-3 flex justify-between items-center shrink-0">
              <span>{services.length} Core Services Available</span>
              <span className="text-[#FF5A36]">Tap to inspect details</span>
            </div>

            {/* Scrollable Feed List */}
            <div className="space-y-3 overflow-y-auto pr-1 flex-1 min-h-0 scrollbar-thin scrollbar-thumb-gray-300">
              {services.map(s => {
                const isSelected = selectedService.id === s.id
                const Icon = s.icon

                return (
                  <div
                    key={s.id}
                    onClick={() => handleSelectService(s)}
                    className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                      isSelected 
                        ? 'bg-white border-[#FF5A36] shadow-md ring-2 ring-[#FF5A36]/15' 
                        : 'bg-white border-[#E6E5E0] hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#1DA54A]/10 text-[#1DA54A] border border-[#1DA54A]/20">
                        {s.category}
                      </span>
                      <span className="text-xs font-bold text-[#FF5A36] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                        Inspect <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div className="flex items-start gap-3 mt-1">
                      <div className={`p-2.5 rounded-xl shrink-0 ${isSelected ? 'bg-[#FF5A36] text-white' : 'bg-gray-100 text-[#191919]'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base sm:text-lg text-[#191919] group-hover:text-[#FF5A36] transition-colors mb-1">
                          {s.title}
                        </h3>
                        <p className="text-xs text-[#545454] leading-relaxed line-clamp-2">
                          {s.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Desktop Right Detail Reader */}
          <div className="hidden lg:block lg:col-span-7">
            <ServiceDetailPanel service={selectedService} />
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-xl bg-white h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#E6E5E0]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">Service Details</span>
                <button 
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <ServiceDetailPanel service={selectedService} />
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

/* Service Detailed Inspection Card & Consultation Form */
function ServiceDetailPanel({ service }: { service: typeof services[0] }) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    notes: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsFormSubmitted(true)
  }

  const whatsappHref = `https://wa.me/${service.directContact.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello, I would like to make an inquiry regarding your ${service.title} service.`)}`

  return (
    <div className="bg-white rounded-3xl border border-[#E6E5E0] p-6 sm:p-8 shadow-sm relative overflow-hidden h-full">
      
      {/* Header Info */}
      <div className="relative z-10 mb-6 pb-6 border-b border-[#E6E5E0]">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1DA54A]/10 text-[#1DA54A] border border-[#1DA54A]/20 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1DA54A]" /> Human Personnel Handled
          </span>
        </div>

        <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#191919] mb-2">
          {service.title}
        </h2>

        <p className="text-sm font-medium text-[#545454] mb-4">
          {service.tagline}
        </p>

        {/* Action Header Banner */}
        <div className="p-4 rounded-2xl bg-[#191919] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#1DA54A] font-bold">Consultation Mode</div>
            <div className="font-display font-bold text-sm sm:text-base text-white">Direct Specialist Access</div>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all hover:bg-[#FF5A36]/90 flex items-center justify-center gap-2 shadow-sm bg-[#FF5A36]"
          >
            <PhoneCall className="w-4 h-4" /> Speak on WhatsApp
          </a>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="font-display font-bold text-xs uppercase tracking-wider text-gray-400 mb-2">
          Service Overview
        </h3>
        <p className="text-sm sm:text-base text-[#545454] leading-relaxed">
          {service.desc}
        </p>
      </div>

      {/* Key Features / Highlights */}
      <div className="mb-8 p-5 rounded-2xl bg-[#F4F3EF] border border-[#E6E5E0]">
        <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#545454] mb-3">
          What Our Specialist Handles
        </h3>
        <ul className="space-y-2.5">
          {service.highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-[#191919]">
              <CheckCircle2 className="w-4 h-4 text-[#1DA54A] shrink-0 mt-0.5" />
              <span className="leading-normal font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Intake Form */}
      <div className="border-t border-[#E6E5E0] pt-6">
        <h3 className="font-display font-bold text-base text-[#191919] mb-1 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-[#FF5A36]" /> Request a Consultation Meeting
        </h3>
        <p className="text-xs text-[#545454] mb-4">
          Fill out the details below and an assigned specialist will get back to you promptly.
        </p>

        {isFormSubmitted ? (
          <div className="p-6 rounded-2xl bg-[#1DA54A]/10 border border-[#1DA54A]/20 text-center">
            <CheckCircle2 className="w-10 h-10 text-[#1DA54A] mx-auto mb-2" />
            <h4 className="font-display font-bold text-[#191919] text-base">Request Submitted</h4>
            <p className="text-xs text-[#545454] mt-1">
              Thank you! Our advisory team will review your message and contact you within 24 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#191919] mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-[#E6E5E0] outline-none focus:border-[#FF5A36] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#191919] mb-1">Phone / WhatsApp</label>
                <input
                  required
                  type="tel"
                  placeholder="+234..."
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-[#E6E5E0] outline-none focus:border-[#FF5A36] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#191919] mb-1">Email Address</label>
              <input
                required
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-[#E6E5E0] outline-none focus:border-[#FF5A36] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#191919] mb-1">Notes or Specific Requirements</label>
              <textarea
                rows={2}
                placeholder="Tell us briefly how we can assist..."
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-[#E6E5E0] outline-none focus:border-[#FF5A36] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#191919] hover:bg-black transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" /> Submit Intake Request
            </button>
          </form>
        )}
      </div>

    </div>
  )
}