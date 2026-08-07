import { Link } from 'react-router-dom'

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
)

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.846 2.378 1.522 4.977 2.293 7.38.476 1.111 1.712 1.286 2.395.616l2.478-2.271 4.521 3.638c.919.593 1.98.39 2.39-.765 1.486-4.745 3.023-9.489 4.51-14.242.39-1.392-.387-2.601-1.483-2.864z"/>
  </svg>
)

const socialLinks = [
  { label: 'Instagram', Icon: InstagramIcon, href: '#' },
  { label: 'LinkedIn', Icon: LinkedinIcon, href: '#' },
  { label: 'TikTok', Icon: TikTokIcon, href: '#' },
  { label: 'Facebook', Icon: FacebookIcon, href: '#' },
  { label: 'Telegram', Icon: TelegramIcon, href: '#' },
]

const platformLinks = [
  { label: 'Find Jobs', to: '/lagos-jobs/listings' },
  { label: 'Post a Job', to: '/lagos-jobs/contact' },
  { label: 'Career Resources', to: '/lagos-jobs/tools' },
  { label: 'Tools Hub', to: '/lagos-jobs/tools' },
]

const companyLinks = [
  { label: 'About Lagos Jobs', to: '/lagos-jobs/about' },
  { label: 'Contact', to: '/lagos-jobs/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Use', to: '/terms' },
]

export default function LagosJobsFooter() {
  return (
    <footer style={{ backgroundColor: '#0D0D0D', color: '#FFFFFF' }} className="pt-16 pb-8 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          {/* Left column */}
          <div>
            {/* TODO: Swap in a white/reversed logo file for dark backgrounds when supplied — current asset is black-on-white and not suited to inversion */}
            <div className="inline-block rounded-lg p-2" style={{ backgroundColor: '#FFFFFF' }}>
              <img src="/lagos-jobs-logo.png" alt="LagosJobs" className="h-6 w-auto object-contain" />
            </div>
            <p className="mt-3 text-sm leading-relaxed max-w-xs" style={{ color: '#6B7280' }}>
              Africa's most trusted career ecosystem.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, Icon, href }) => (
                // TODO: Add live social URLs
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-150"
                  style={{ color: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0.05)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#17B26A')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Platform column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#FFFFFF', fontFamily: 'var(--font-lj-display)' }}>
              Platform
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {platformLinks.map(l => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="transition-colors duration-150"
                    style={{ color: '#6B7280' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#17B26A')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#FFFFFF', fontFamily: 'var(--font-lj-display)' }}>
              Company
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {companyLinks.map(l => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="transition-colors duration-150"
                    style={{ color: '#6B7280' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#17B26A')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p style={{ color: '#6B7280' }}>© 2026 LagosJobs. All rights reserved.</p>
          <p style={{ color: '#6B7280' }}>A WorkplaceHQ product.</p>
        </div>
      </div>
    </footer>
  )
}
