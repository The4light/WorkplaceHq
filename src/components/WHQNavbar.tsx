import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import WHQLogo from './WHQLogo'

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Training', path: '/training-programs' },
  { label: 'Workshops', path: '/workshops' },
  { label: 'Consulting', path: '/consulting' },
  { label: 'Resources', path: '/resources' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
]

export default function WHQNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header
      className="sticky top-0 z-50 bg-paper transition-shadow duration-200"
      style={{ boxShadow: scrolled ? '0 1px 0 #E6E5E0' : '0 1px 0 transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <WHQLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="text-[13px] font-medium text-slate hover:text-ink transition-colors"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: location.pathname === l.path ? '#191919' : undefined,
                borderBottom: location.pathname === l.path ? '2px solid #1DA54A' : '2px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Lagos Job badge */}
          <Link
            to="/lagos-jobs"
            className="flex items-center gap-1.5 text-[12px] font-medium transition-opacity hover:opacity-80"
            style={{
              fontFamily: 'Inter, sans-serif',
              background: '#191919',
              color: '#F4F3EF',
              padding: '6px 12px',
              borderRadius: '100px',
              whiteSpace: 'nowrap',
            }}
          >
            Lagos Job →
          </Link>

          {/* Hamburger */}
          <button
            className="xl:hidden flex flex-col gap-1.5 p-2"
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

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-paper border-t border-silver px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="py-2.5 text-sm font-medium border-b border-silver last:border-0"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: location.pathname === l.path ? '#1DA54A' : '#191919',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/lagos-jobs"
            className="mt-3 text-center text-sm font-medium py-3 rounded-full"
            style={{ fontFamily: 'Inter, sans-serif', background: '#191919', color: '#F4F3EF' }}
          >
            Visit Lagos Job →
          </Link>
        </div>
      )}
    </header>
  )
}
