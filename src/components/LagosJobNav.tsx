import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/lagos-jobs" },
  { label: "Jobs", to: "/lagos-jobs/listings" },
  { label: "Services", to: "/lagos-jobs/services" },
  { label: "About", to: "/lagos-jobs/about" },
  { label: "Contact", to: "/lagos-jobs/contact" },
];

export default function LagosJobNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <nav
        className="fixed left-0 right-0 z-50 w-full backdrop-blur-md border-b px-4 sm:px-6 py-4 transition-all"
        style={{ top: 'var(--whq-countdown-h, 0px)', backgroundColor: 'rgba(255,255,255,0.95)', borderColor: '#F4F5F7' }}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Left Side: Brand Logo */}
          <div className="flex items-center gap-3 sm:gap-6">
            <Link to="/lagos-jobs" className="flex items-center shrink-0">
              <img
                src="/lagos-jobs-logo.png"
                alt="LagosJobs"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative py-1 text-sm font-medium transition-colors duration-150"
                  style={{
                    fontFamily: 'var(--font-lj-body)',
                    color: isActive ? '#0D0D0D' : '#6B7280',
                    fontWeight: isActive ? 600 : 500,
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                      style={{ backgroundColor: '#17B26A' }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop Only Button */}
            <Link
              to="/"
              className="hidden lg:inline-flex items-center justify-center text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-150 shadow-sm shrink-0"
              style={{ backgroundColor: '#0D0D0D', fontFamily: 'var(--font-lj-body)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#17B26A')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0D0D0D')}
            >
              Go to Workplace
            </Link>

            {/* Hamburger Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: '#0D0D0D' }}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Dropdown */}
        {isOpen && (
          <div
            className="lg:hidden absolute top-full left-0 right-0 border-b shadow-lg px-6 py-6 flex flex-col gap-4 transition-all animate-in fade-in slide-in-from-top-2"
            style={{ backgroundColor: '#FFFFFF', borderColor: '#F4F5F7' }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium py-1 transition-colors"
                  style={{
                    fontFamily: 'var(--font-lj-body)',
                    color: isActive ? '#17B26A' : '#6B7280',
                    fontWeight: isActive ? 600 : 500,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Go to Workplace inside Hamburger for Mobile */}
            <div className="pt-4 mt-2 border-t" style={{ borderColor: '#F4F5F7' }}>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-150 shadow-sm text-center"
                style={{ backgroundColor: '#0D0D0D', fontFamily: 'var(--font-lj-body)' }}
              >
                Go to Workplace
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent page content from tucking under the fixed navbar */}
      <div style={{ height: 'calc(73px + var(--whq-countdown-h, 0px))' }} />
    </>
  );
}