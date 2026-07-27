import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/lagos-jobs' },
  { label: 'Services', to: '/lagos-jobs/services' },
  { label: 'Tools Hub', to: '/lagos-jobs/tools' },
  { label: 'Job Listings', to: '/lagos-jobs/listings' },
  { label: 'About', to: '/lagos-jobs/about' },
  { label: 'Contact', to: '/lagos-jobs/contact' },
]

export default function LagosJobNav() {
  const location = useLocation()

  return (
    <nav className="w-full bg-[#f4f6f6] border-b border-gray-200/60 px-6 py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Left Side: Brand Logo & Back Link */}
        <div className="flex items-center gap-6">
          <Link to="/lagos-jobs" className="flex items-center gap-1.5 text-xl font-bold tracking-tight text-slate-900">
            <span>Lagos</span>
            <span className="bg-[#0b1f24] text-white px-2.5 py-0.5 rounded-lg text-lg font-semibold">
              Jobs.
            </span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors duration-150"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to WorkplaceHQ</span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative py-1 text-sm font-medium transition-colors duration-150 ${
                  isActive ? 'text-slate-700' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00a896] rounded-full" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Right Side: CTA Button */}
        <div>
          <Link
            to="/lagos-jobs/tools"
            className="inline-flex items-center justify-center bg-[#ff5232] hover:bg-[#e04528] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-150 shadow-sm"
          >
            Launch Tools Hub
          </Link>
        </div>
      </div>
    </nav>
  )
}