import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

// Inline SVG components to replace missing brand icons in lucide-react
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M16.6 5.82c-1.02-.94-1.65-2.27-1.65-3.75h-3.06v14.44c0 1.55-1.26 2.8-2.8 2.8a2.8 2.8 0 0 1-2.8-2.8 2.8 2.8 0 0 1 2.8-2.8c.29 0 .57.05.83.13v-3.1a5.9 5.9 0 0 0-.83-.06c-3.24 0-5.86 2.62-5.86 5.86s2.62 5.86 5.86 5.86 5.86-2.62 5.86-5.86V9.05a8.5 8.5 0 0 0 4.96 1.6V7.6a5.4 5.4 0 0 1-3.31-1.78z" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  )
}

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M21.9 4.7 18.6 20.3c-.25 1.1-.9 1.38-1.83.86l-5.06-3.73-2.44 2.35c-.27.27-.5.5-1.02.5l.37-5.18 9.42-8.51c.41-.36-.09-.57-.63-.2L6.3 13.2l-5-1.57c-1.1-.34-1.12-1.1.23-1.63L20.5 3.4c.91-.34 1.71.21 1.4 1.3z" />
    </svg>
  )
}

const ljSocialLinks = [
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
  { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { Icon: TikTokIcon, href: '#', label: 'TikTok' },
  { Icon: FacebookIcon, href: '#', label: 'Facebook' },
  { Icon: TelegramIcon, href: '#', label: 'Telegram' },
]

const platformLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Training Programs', to: '/training' },
  { label: 'Workshops', to: '/workshops' },
]

const companyLinks = [
  { label: 'Consulting', to: '/consulting' },
  { label: 'Resources', to: '/resources' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

const careerLinks = [
  { label: 'LagosJobs.', to: '/lagos-jobs', isMain: true },
  { label: 'Tools Hub', to: '/lagos-jobs/tools', isMain: false },
  { label: 'Job Listings', to: '/lagos-jobs/listings', isMain: false },
]

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-20 pb-10"
      style={{
        backgroundColor: '#0B3C2D',
        color: '#FBF9F5',
        borderTop: '1px solid rgba(29, 165, 74, 0.2)',
      }}
    >
      {/* Ambient Lighting Spheres */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-[350px] w-[350px] rounded-full opacity-15 blur-[120px]"
        style={{ backgroundColor: '#D97706' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full opacity-15 blur-[140px]"
        style={{ backgroundColor: '#1DA54A' }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-6">
        {/* Main Footer Grid */}
        <div
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-12"
          style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <img
                  src="/Workplace - 6.png"
                  alt="WorkplaceHQ"
                  className="h-7 w-auto object-contain"
                />
              </div>

              <p
                className="mt-4 text-sm leading-relaxed max-w-sm"
                style={{
                  color: 'rgba(251, 249, 245, 0.7)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Building AI-ready, high-performing teams across Africa through
                structured training, workshops, and consulting.
              </p>
            </div>

            {/* Social Links & System Indicator */}
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {[
                  { Icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { Icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-150 hover:scale-105"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              <div
                className="flex items-center gap-2 text-xs"
                style={{ color: 'rgba(251, 249, 245, 0.6)' }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full brand-dot-pulse"
                    style={{ backgroundColor: '#1DA54A' }}
                  />
                  <span
                    className="relative inline-flex h-2 w-2 rounded-full brand-dot-pulse"
                    style={{ backgroundColor: '#1DA54A' }}
                  />
                </span>
                Systems Operational • All Services Active
              </div>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Platform */}
            <div>
              <h3
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#1DA54A', fontFamily: 'var(--font-display)' }}
              >
                Platform
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {platformLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="transition-colors duration-150 hover:text-[#1DA54A]"
                      style={{
                        color: 'rgba(251, 249, 245, 0.8)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h3
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#1DA54A', fontFamily: 'var(--font-display)' }}
              >
                Company
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {companyLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="transition-colors duration-150 hover:text-[#1DA54A]"
                      style={{
                        color: 'rgba(251, 249, 245, 0.8)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Careers Product */}
            <div
              className="col-span-2 sm:col-span-1 rounded-2xl p-5 backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="flex items-center justify-between">
                <h3
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: '#17B26A', fontFamily: 'var(--font-display)' }}
                >
                  Careers Product
                </h3>
                <span
                  className="h-1.5 w-1.5 rounded-full brand-dot-pulse"
                  style={{ backgroundColor: '#17B26A' }}
                />
              </div>

              <ul className="mt-4 space-y-3 text-sm">
                {careerLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className={`group flex items-center justify-between transition-colors duration-150 hover:text-[#17B26A] ${
                        l.isMain ? 'font-semibold text-white' : ''
                      }`}
                      style={{
                        color: l.isMain ? '#FFFFFF' : 'rgba(251, 249, 245, 0.8)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {l.label}
                      {l.isMain && (
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-2.5">
                {ljSocialLinks.map(({ Icon, href, label }) => (
                  // TODO: Add live social URLs
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-7 w-7 items-center justify-center transition-colors duration-150"
                    style={{ color: '#6B7280' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#17B26A')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            color: 'rgba(251, 249, 245, 0.5)',
            fontFamily: 'var(--font-body)',
          }}
        >
          <p>© {new Date().getFullYear()} WorkplaceHQ. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors duration-150">
              Terms of Service
            </Link>
            <Link to="/security" className="hover:text-white transition-colors duration-150">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}