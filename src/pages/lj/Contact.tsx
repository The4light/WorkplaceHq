import { Mail, MessageSquare } from 'lucide-react'

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.6 5.82c-1.02-.94-1.65-2.27-1.65-3.75h-3.06v14.44c0 1.55-1.26 2.8-2.8 2.8a2.8 2.8 0 0 1-2.8-2.8 2.8 2.8 0 0 1 2.8-2.8c.29 0 .57.05.83.13v-3.1a5.9 5.9 0 0 0-.83-.06c-3.24 0-5.86 2.62-5.86 5.86s2.62 5.86 5.86 5.86 5.86-2.62 5.86-5.86V9.05a8.5 8.5 0 0 0 4.96 1.6V7.6a5.4 5.4 0 0 1-3.31-1.78z" />
  </svg>
)

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
  </svg>
)

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.9 4.7 18.6 20.3c-.25 1.1-.9 1.38-1.83.86l-5.06-3.73-2.44 2.35c-.27.27-.5.5-1.02.5l.37-5.18 9.42-8.51c.41-.36-.09-.57-.63-.2L6.3 13.2l-5-1.57c-1.1-.34-1.12-1.1.23-1.63L20.5 3.4c.91-.34 1.71.21 1.4 1.3z" />
  </svg>
)

const socialLinks = [
  { label: 'Instagram', Icon: InstagramIcon, href: '#' },
  { label: 'LinkedIn', Icon: LinkedinIcon, href: '#' },
  { label: 'TikTok', Icon: TikTokIcon, href: '#' },
  { label: 'Facebook', Icon: FacebookIcon, href: '#' },
  { label: 'Telegram', Icon: TelegramIcon, href: '#' },
]

export default function LJContact() {
  return (
    <div style={{ backgroundColor: '#F4F5F7', minHeight: '100vh', fontFamily: 'var(--font-lj-body)' }}>
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-[450px] h-[450px] rounded-full" style={{ background: '#17B26A', filter: 'blur(140px)', opacity: 0.2 }} />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <h1 className="font-lj-display font-700 text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4" style={{ color: '#0D0D0D' }}>Contact LagosJobs</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>Hiring partner inquiry, tool feedback, or general support — we're here.</p>
        </div>
      </div>

      <section className="px-6 pb-20">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F4F5F7' }}>
            <h2 className="font-lj-display font-700 text-xl mb-6" style={{ color: '#0D0D0D' }}>Support Ticket</h2>
            <div className="flex flex-col gap-4">
              <input className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7' }} placeholder="Your Name" />
              <input className="px-4 py-3 text-sm outline-none" type="email" style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7' }} placeholder="Email Address" />
              <select className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7', color: '#6B7280' }}>
                <option value="">Inquiry Type</option>
                <option>Tool Feedback</option>
                <option>Hiring Partner / Post a Job</option>
                <option>Technical Issue</option>
                <option>Partnership</option>
                <option>General Inquiry</option>
              </select>
              <textarea className="px-4 py-3 text-sm outline-none resize-none h-32" style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7' }} placeholder="Describe your issue or inquiry..." />
              <button className="w-full py-3.5 rounded-lg font-semibold text-sm text-white" style={{ backgroundColor: '#17B26A', fontFamily: 'var(--font-lj-display)' }}>
                Submit Ticket
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(23,178,106,0.2)' }}>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5" style={{ color: '#17B26A' }} />
                <span className="font-lj-display font-600 text-white">Email Support</span>
              </div>
              <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>hello@lagosjob.ng</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Replies within 4 business hours</p>
            </div>
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F4F5F7' }}>
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-5 h-5" style={{ color: '#17B26A' }} />
                <span className="font-lj-display font-600" style={{ color: '#0D0D0D' }}>Hiring Partners</span>
              </div>
              <p className="text-sm mb-2" style={{ color: '#6B7280' }}>Post jobs, access talent, and partner with LagosJobs to reach Africa's best candidates.</p>
              <a href="mailto:partners@lagosjob.ng" className="text-sm font-semibold" style={{ color: '#17B26A' }}>partners@lagosjob.ng</a>
            </div>
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F4F5F7' }}>
              <div className="font-lj-display font-600 text-base mb-2" style={{ color: '#0D0D0D' }}>Response Times</div>
              <div className="flex flex-col gap-2">
                {[['General inquiries', '4–8 hours'], ['Technical issues', '2–4 hours'], ['Hiring partnerships', '24 hours'], ['Tool feedback', '1–2 business days']].map(([type, time]) => (
                  <div key={type} className="flex justify-between text-sm">
                    <span style={{ color: '#6B7280' }}>{type}</span>
                    <span className="font-medium" style={{ color: '#0D0D0D' }}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto mt-10">
          <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F4F5F7' }}>
            <h3 className="font-lj-display font-600 text-base mb-4" style={{ color: '#0D0D0D' }}>Follow LagosJobs</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, Icon, href }) => (
                // TODO: Add live social URLs
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-200"
                  style={{ borderColor: '#F4F5F7', color: '#0D0D0D' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#17B26A')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#0D0D0D')}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
