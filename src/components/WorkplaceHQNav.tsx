import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Resources', to: '/resources' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

export default function WorkplaceHQNav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(true)

   // 3. Add listener for the custom visibility event
  useEffect(() => {
    const handleVisibility = (e: Event) => {
      const customEvent = e as CustomEvent<{ visible: boolean }>
      setVisible(customEvent.detail.visible)
    }

    window.addEventListener('whq:navbar-visibility', handleVisibility)
    return () => window.removeEventListener('whq:navbar-visibility', handleVisibility)
  }, [])

  return (
    <>
    <header
      className="fixed left-0 right-0 z-50 transition-all duration-300"
      style={{
        top: 'var(--whq-countdown-h, 0px)',
        backdropFilter: 'blur(16px) saturate(140%)',
        WebkitBackdropFilter: 'blur(16px) saturate(140%)',
        backgroundColor: 'rgba(244,243,239,0.9)',
        borderBottom: '1px solid #E6E5E0',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/WorkPlacenavImage.png"
            alt="WorkplaceHQ"
            className="h-7 md:h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {links.map(l => {
            const isActive = pathname === l.to
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative py-1.5 text-sm transition-colors duration-200"
                style={{
                  color: isActive ? '#191919' : '#545454',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                }}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full transition-opacity duration-200"
                  style={{
                    backgroundColor: '#1DA54A',
                    opacity: isActive ? 1 : 0,
                  }}
                />
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <Link
          to="/lagos-jobs"
          className="hidden xl:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 shrink-0"
          style={{
            backgroundColor: '#0B3C2D',
            color: '#1DA54A',
            boxShadow: '0 0 0 2px #1DA54A',
            fontFamily: 'var(--font-display)',
          }}
        >
          Lagos Job <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        {/* Mobile menu button */}
        <button
          className="xl:hidden p-1.5 -mr-1.5 rounded-lg transition-colors duration-200"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" style={{ color: '#0B3C2D' }} /> : <Menu className="w-5 h-5" style={{ color: '#0B3C2D' }} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="xl:hidden border-t px-6 py-5 flex flex-col gap-1"
          style={{ borderColor: '#E6E5E0', backgroundColor: 'var(--whq-bg)' }}
        >
          {links.map(l => {
            const isActive = pathname === l.to
            return (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center gap-2.5 py-2.5 text-sm transition-colors duration-200"
                style={{ color: isActive ? '#191919' : '#545454', fontFamily: 'var(--font-body)', fontWeight: 500 }}
                onClick={() => setOpen(false)}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: isActive ? '#1DA54A' : 'transparent' }}
                />
                {l.label}
              </Link>
            )
          })}
          <Link
            to="/lagos-jobs"
            className="mt-3 flex items-center justify-center gap-1.5 py-2.5 rounded-full text-sm font-semibold"
            style={{ backgroundColor: '#0B3C2D', color: '#1DA54A', boxShadow: '0 0 0 2px #1DA54A', fontFamily: 'var(--font-display)' }}
            onClick={() => setOpen(false)}
          >
            Lagos Job <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </header>
    {/* Spacer to prevent page content from tucking under the fixed navbar */}
    <div style={{ height: 'calc(4rem + var(--whq-countdown-h, 0px))' }} />
    </>
  )
}
