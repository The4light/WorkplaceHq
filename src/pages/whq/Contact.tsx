import { MapPin, Mail, Phone, Clock, MessageSquare } from 'lucide-react'

const offices = [
  { 
    city: 'Lagos', 
    address: '14 Ozumba Mbadiwe Ave, Victoria Island', 
    phone: '+234 901 234 5678', 
    email: 'lagos@workplacehq.com',
    isHQ: true
  },
  { 
    city: 'Abuja', 
    address: '11 Constitution Ave, Central Business District', 
    phone: '+234 902 345 6789', 
    email: 'abuja@workplacehq.com' 
  },
]

export default function WHQContact() {
  return (
    <div style={{ backgroundColor: '#FBF9F5', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      
      {/* Hero Section with Brand Ring */}
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        {/* Out-of-Frame Ring + Dot Pattern */}
        <div className="absolute -top-20 -right-20 w-80 h-80 pointer-events-none z-0 hidden sm:block">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="44" stroke="#1DA54A" strokeWidth="2" opacity="0.35" />
            <circle cx="50" cy="50" r="14" fill="#1DA54A" opacity="0.25" />
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
          <div className="p-8 rounded-2xl shadow-sm transition-all" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}>
            <h2 className="font-display font-700 text-xl mb-6" style={{ color: '#111827' }}>
              Send an Inquiry
            </h2>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input className="px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '8px' }} placeholder="First Name" />
                <input className="px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '8px' }} placeholder="Last Name" />
              </div>
              <input className="px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]" type="email" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '8px' }} placeholder="Corporate Email" />
              <input className="px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '8px' }} placeholder="Company Name & Size" />
              
              <select className="px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '8px', color: '#6B7280' }}>
                <option value="">Inquiry Type</option>
                <option>Enterprise Consulting</option>
                <option>Training Programs</option>
                <option>Workshop Booking</option>
                <option>Partnership</option>
                <option>General Inquiry</option>
              </select>

              <select className="px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '8px', color: '#6B7280' }}>
                <option value="">Preferred Office Location</option>
                {offices.map(o => <option key={o.city}>{o.city}</option>)}
              </select>

              <textarea className="px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D] resize-none h-28" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '8px' }} placeholder="Describe your challenge or project in a few sentences..." />
              
              {/* Button with Pure Green (#10B981) Hover Effect */}
              <button 
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 border hover:!bg-[#10B981] hover:!border-[#10B981] hover:!text-[#0B3C2D]" 
                style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', borderColor: '#0B3C2D', fontFamily: 'var(--font-display)' }}
              >
                Submit Inquiry
              </button>
            </div>
          </div>

          {/* Offices & Extra Info Column */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display font-700 text-xl" style={{ color: '#111827' }}>
              Our Global Offices
            </h2>

            <div className="flex flex-col gap-4">
              {offices.map(o => (
                <div key={o.city} className="p-6 rounded-2xl group transition-all duration-200 hover:-translate-y-0.5" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display font-700 text-lg" style={{ color: '#0B3C2D' }}>{o.city}</span>
                    {o.isHQ && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{ backgroundColor: 'rgba(16,185,129,0.12)', color: '#0B3C2D' }}>
                        Primary HQ
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-start gap-2.5 text-sm" style={{ color: '#6B7280' }}>
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#10B981' }} /> {o.address}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm" style={{ color: '#6B7280' }}>
                      <Phone className="w-4 h-4 shrink-0" style={{ color: '#10B981' }} /> {o.phone}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm" style={{ color: '#6B7280' }}>
                      <Mail className="w-4 h-4 shrink-0" style={{ color: '#10B981' }} /> {o.email}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dark Information Box with Embedded Ring Element */}
            <div className="relative p-6 rounded-2xl overflow-hidden mt-2" style={{ backgroundColor: '#0B3C2D', border: '1px solid rgba(16,185,129,0.2)' }}>
              {/* Subtle Embedded Ring */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 pointer-events-none opacity-20">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="44" stroke="#FFFFFF" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="14" fill="#FFFFFF" />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[#10B981] font-bold text-xs uppercase tracking-wider">
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