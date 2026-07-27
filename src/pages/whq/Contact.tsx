import { MapPin, Mail, Phone } from 'lucide-react'

const offices = [
  { city: 'Lagos', address: '14 Ozumba Mbadiwe Ave, Victoria Island', phone: '+234 901 234 5678', email: 'lagos@workplacehq.com' },
  { city: 'Abuja', address: '11 Constitution Ave, Central Business District', phone: '+234 902 345 6789', email: 'abuja@workplacehq.com' },
  { city: 'London', address: '12 Bishopsgate, City of London, EC2N 4AJ', phone: '+44 20 7946 0958', email: 'london@workplacehq.com' },
]

export default function WHQContact() {
  return (
    <div style={{ backgroundColor: '#FBF9F5', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full" style={{ background: '#D97706', filter: 'blur(120px)', opacity: 0.15 }} />
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-display font-700 text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4" style={{ color: '#111827' }}>Contact Us</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>Enterprise inquiry, partnership, or general contact — we respond within 24 hours.</p>
        </div>
      </div>

      <section className="px-6 pb-20">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}>
            <h2 className="font-display font-700 text-xl mb-6" style={{ color: '#111827' }}>Send an Inquiry</h2>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '6px' }} placeholder="First Name" />
                <input className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '6px' }} placeholder="Last Name" />
              </div>
              <input className="px-4 py-3 text-sm outline-none" type="email" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '6px' }} placeholder="Corporate Email" />
              <input className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '6px' }} placeholder="Company Name & Size" />
              <select className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '6px', color: '#6B7280' }}>
                <option value="">Inquiry Type</option>
                <option>Enterprise Consulting</option>
                <option>Training Programs</option>
                <option>Workshop Booking</option>
                <option>Partnership</option>
                <option>General Inquiry</option>
              </select>
              <select className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '6px', color: '#6B7280' }}>
                <option value="">Preferred Office Location</option>
                {offices.map(o => <option key={o.city}>{o.city}</option>)}
              </select>
              <textarea className="px-4 py-3 text-sm outline-none resize-none h-28" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '6px' }} placeholder="Describe your challenge or project in a few sentences..." />
              <button className="w-full py-3.5 rounded-lg font-semibold text-sm" style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>
                Submit Inquiry
              </button>
            </div>
          </div>

          {/* Offices */}
          <div className="flex flex-col gap-5">
            <h2 className="font-display font-700 text-xl" style={{ color: '#111827' }}>Our Offices</h2>
            {offices.map(o => (
              <div key={o.city} className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}>
                <div className="font-display font-700 text-lg mb-3" style={{ color: '#0B3C2D' }}>{o.city}</div>
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
        </div>
      </section>
    </div>
  )
}
