import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/lagos-jobs" },
  { label: "Services", to: "/lagos-jobs/services" },
  { label: "Job Listings", to: "/lagos-jobs/listings" },
  { label: "About", to: "/lagos-jobs/about" },
  { label: "Contact", to: "/lagos-jobs/contact" },
];

export default function LagosJobNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#f4f6f6]/95 backdrop-blur-md border-b border-gray-200/60 px-4 sm:px-6 py-4 transition-all">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Left Side: Brand Logo */}
          <div className="flex items-center gap-3 sm:gap-6">
            <Link
              to="/lagos-jobs"
              className="flex items-center gap-1.5 text-lg sm:text-xl font-bold tracking-tight text-slate-900 shrink-0"
            >
              <span>Lagos</span>
              <span className="bg-[#0b1f24] text-white px-2 sm:px-2.5 py-0.5 rounded-lg text-base sm:text-lg font-semibold">
                Jobs.
              </span>
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
                  className={`relative py-1 text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "text-slate-900 font-semibold"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00a896] rounded-full" />
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
              className="hidden lg:inline-flex items-center justify-center bg-[#0F2C34] hover:bg-[#163f4b] text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-150 shadow-sm shrink-0 border border-white/10"
            >
              Go to Workplace
            </Link>

            {/* Hamburger Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-200/60 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#f4f6f6] border-b border-gray-200/80 shadow-lg px-6 py-6 flex flex-col gap-4 transition-all animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-1 transition-colors ${
                    isActive
                      ? "text-[#00a896] font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Go to Workplace inside Hamburger for Mobile */}
            <div className="pt-4 mt-2 border-t border-gray-200/80">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center bg-[#0F2C34] hover:bg-[#163f4b] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-150 shadow-sm border border-white/10 text-center"
              >
                Go to Workplace
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent page content from tucking under the fixed navbar */}
      <div className="h-[73px]" />
    </>
  );
}