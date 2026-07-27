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

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  )
}

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
  { label: 'Lagos Job', to: '/lagos-jobs', isMain: true },
  { label: 'Tools Hub', to: '/lagos-jobs/tools', isMain: false },
  { label: 'Job Listings', to: '/lagos-jobs/listings', isMain: false },
]

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-12"
      style={{
        backgroundColor: '#0B3C2D',
        color: '#FBF9F5',
        borderTop: '1px solid rgba(16, 185, 129, 0.2)',
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
        style={{ backgroundColor: '#10B981' }}
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
                <span
                  className="text-2xl font-bold tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Workplace<span style={{ color: '#10B981' }}>HQ</span>
                </span>
              </div>

              <p
                className="mt-4 text-sm leading-relaxed max-w-sm"
                style={{
                  color: 'rgba(251, 249, 245, 0.7)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Operational systems, AI adoption, and performance infrastructure
                engineered for enterprise teams across Africa.
              </p>
            </div>

            {/* Social Links & System Indicator */}
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {[
                  { Icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { Icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
                  { Icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
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
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                    style={{ backgroundColor: '#10B981' }}
                  />
                  <span
                    className="relative inline-flex h-2 w-2 rounded-full"
                    style={{ backgroundColor: '#10B981' }}
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
                style={{ color: '#10B981', fontFamily: 'var(--font-display)' }}
              >
                Platform
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {platformLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="transition-colors duration-150 hover:text-[#10B981]"
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
                style={{ color: '#10B981', fontFamily: 'var(--font-display)' }}
              >
                Company
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {companyLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="transition-colors duration-150 hover:text-[#10B981]"
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
                  style={{ color: '#FF5A36', fontFamily: 'var(--font-display)' }}
                >
                  Careers Product
                </h3>
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: '#FF5A36' }}
                />
              </div>

              <ul className="mt-4 space-y-3 text-sm">
                {careerLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className={`group flex items-center justify-between transition-colors duration-150 hover:text-[#06B6D4] ${
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
          <p>© {new Date().getFullYear()} WorkplaceHQ Systems Ltd. All rights reserved.</p>
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