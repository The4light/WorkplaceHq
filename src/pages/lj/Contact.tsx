import { Mail, MessageSquare } from 'lucide-react'

export default function LJContact() {
  return (
    <div style={{ backgroundColor: '#F4F7F6', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-[450px] h-[450px] rounded-full" style={{ background: '#FF5A36', filter: 'blur(140px)', opacity: 0.2 }} />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <h1 className="font-display font-700 text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4" style={{ color: '#0D131A' }}>Contact Lagos Job</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>Hiring partner inquiry, tool feedback, or general support — we're here.</p>
        </div>
      </div>

      <section className="px-6 pb-20">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D6E2E0' }}>
            <h2 className="font-display font-700 text-xl mb-6" style={{ color: '#0D131A' }}>Support Ticket</h2>
            <div className="flex flex-col gap-4">
              <input className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #D6E2E0', borderRadius: '6px', backgroundColor: '#F4F7F6' }} placeholder="Your Name" />
              <input className="px-4 py-3 text-sm outline-none" type="email" style={{ border: '1px solid #D6E2E0', borderRadius: '6px', backgroundColor: '#F4F7F6' }} placeholder="Email Address" />
              <select className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #D6E2E0', borderRadius: '6px', backgroundColor: '#F4F7F6', color: '#6B7280' }}>
                <option value="">Inquiry Type</option>
                <option>Tool Feedback</option>
                <option>Hiring Partner / Post a Job</option>
                <option>Technical Issue</option>
                <option>Partnership</option>
                <option>General Inquiry</option>
              </select>
              <textarea className="px-4 py-3 text-sm outline-none resize-none h-32" style={{ border: '1px solid #D6E2E0', borderRadius: '6px', backgroundColor: '#F4F7F6' }} placeholder="Describe your issue or inquiry..." />
              <button className="w-full py-3.5 rounded-lg font-semibold text-sm text-white" style={{ backgroundColor: '#FF5A36', fontFamily: 'var(--font-display)' }}>
                Submit Ticket
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#0F2C34', border: '1px solid rgba(6,182,212,0.2)' }}>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5" style={{ color: '#06B6D4' }} />
                <span className="font-display font-600 text-white">Email Support</span>
              </div>
              <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>hello@lagosjob.ng</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Replies within 4 business hours</p>
            </div>
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D6E2E0' }}>
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-5 h-5" style={{ color: '#FF5A36' }} />
                <span className="font-display font-600" style={{ color: '#0D131A' }}>Hiring Partners</span>
              </div>
              <p className="text-sm mb-2" style={{ color: '#6B7280' }}>Post jobs, access talent, and partner with Lagos Job to reach Africa's best candidates.</p>
              <a href="mailto:partners@lagosjob.ng" className="text-sm font-semibold" style={{ color: '#FF5A36' }}>partners@lagosjob.ng</a>
            </div>
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D6E2E0' }}>
              <div className="font-display font-600 text-base mb-2" style={{ color: '#0D131A' }}>Response Times</div>
              <div className="flex flex-col gap-2">
                {[['General inquiries', '4–8 hours'], ['Technical issues', '2–4 hours'], ['Hiring partnerships', '24 hours'], ['Tool feedback', '1–2 business days']].map(([type, time]) => (
                  <div key={type} className="flex justify-between text-sm">
                    <span style={{ color: '#6B7280' }}>{type}</span>
                    <span className="font-medium" style={{ color: '#0D131A' }}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
