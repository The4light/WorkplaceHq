import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LJLogo from './LJLogo'

const links = [
  { label: 'Home', path: '/lagos-jobs' },
  { label: 'Services', path: '/lagos-jobs/services' },
  { label: 'Tools Hub', path: '/lagos-jobs/tools' },
  { label: 'Job Listings', path: '/lagos-jobs/jobs' },
  { label: 'About', path: '/lagos-jobs/about' },
  { label: 'Contact', path: '/lagos-jobs/contact' },
]

export default function LJNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  const isActive = (path: string) =>
    path === '/lagos-jobs' ? location.pathname === path : location.pathname.startsWith(path)

  return (
    <header
      className="sticky top-0 z-50 bg-paper transition-shadow duration-200"
      style={{ boxShadow: scrolled ? '0 1px 0 #E6E5E0' : '0 1px 0 transparent' }}
    >
      {/* Back to WHQ bar */}
      <div
        className="border-b"
        style={{ borderColor: '#E6E5E0', background: '#F4F3EF' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-8 flex items-center">
          <Link
            to="/"
            className="text-[12px] flex items-center gap-1.5 transition-colors hover:text-lj-teal"
            style={{ fontFamily: 'Inter, sans-serif', color: '#545454' }}
          >
            ← Back to WorkplaceHQ
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/lagos-jobs" className="flex-shrink-0">
          <LJLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="text-[13px] font-medium transition-colors"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: isActive(l.path) ? '#191919' : '#545454',
                borderBottom: isActive(l.path) ? '2px solid #0F6B5C' : '2px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/lagos-jobs/tools"
            className="hidden lg:inline-flex items-center text-[12px] font-medium transition-all hover:opacity-80"
            style={{
              fontFamily: 'Inter, sans-serif',
              background: '#0F6B5C',
              color: '#F4F3EF',
              padding: '7px 14px',
              borderRadius: '4px',
            }}
          >
            Use a tool
          </Link>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-[1.5px] bg-ink transition-all duration-200 origin-center"
              style={{ width: '22px', transform: open ? 'translateY(4px) rotate(45deg)' : '' }}
            />
            <span
              className="block h-[1.5px] bg-ink transition-all duration-200"
              style={{ width: '22px', opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-[1.5px] bg-ink transition-all duration-200 origin-center"
              style={{ width: '22px', transform: open ? 'translateY(-4px) rotate(-45deg)' : '' }}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-paper border-t border-silver px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="py-2.5 text-sm font-medium border-b border-silver last:border-0"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: isActive(l.path) ? '#0F6B5C' : '#191919',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
