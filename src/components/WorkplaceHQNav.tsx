import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, Hexagon } from 'lucide-react'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Training', to: '/training' },
  { label: 'Workshops', to: '/workshops' },
  { label: 'Consulting', to: '/consulting' },
  { label: 'Resources', to: '/resources' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

export default function WorkplaceHQNav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(244,243,239,0.92)', borderBottom: '1px solid #E5E1D8' }}
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
        <nav className="hidden xl:flex items-center gap-6">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: pathname === l.to ? '#0B3C2D' : '#6B7280', fontFamily: 'var(--font-body)' }}
            >
              {l.label}
            </Link>
          ))}
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
        <button className="xl:hidden" onClick={() => setOpen(o => !o)}>
          {open ? <X className="w-5 h-5" style={{ color: '#0B3C2D' }} /> : <Menu className="w-5 h-5" style={{ color: '#0B3C2D' }} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden border-t px-6 py-4 flex flex-col gap-3" style={{ borderColor: '#E5E1D8', backgroundColor: 'var(--whq-bg)' }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} className="text-sm font-medium" style={{ color: '#111827', fontFamily: 'var(--font-body)' }} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link to="/lagos-jobs" className="mt-2 flex items-center gap-1 text-sm font-semibold" style={{ color: '#1DA54A' }} onClick={() => setOpen(false)}>
            Lagos Job <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </header>
  )
}
