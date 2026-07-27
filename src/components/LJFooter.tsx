import { Link } from 'react-router-dom'
import LJLogo from './LJLogo'

export default function LJFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-1">
            <LJLogo className="mb-4" />
            <p className="text-[13px] leading-relaxed" style={{ color: '#8a8a8a', fontFamily: 'DM Sans, sans-serif' }}>
              Career tools for every professional in motion. CV writing, LinkedIn, portfolio — all in one place.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-5" style={{ color: '#5a5a5a', fontFamily: 'Inter, sans-serif' }}>Navigate</p>
            <div className="flex flex-col gap-3">
              {[['Home', '/lagos-jobs'], ['Services', '/lagos-jobs/services'], ['About', '/lagos-jobs/about'], ['Contact', '/lagos-jobs/contact']].map(([l, p]) => (
                <Link key={p} to={p} className="text-[13px] hover:text-lj-teal transition-colors" style={{ color: '#aaa', fontFamily: 'DM Sans, sans-serif' }}>{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-5" style={{ color: '#5a5a5a', fontFamily: 'Inter, sans-serif' }}>Tools</p>
            <div className="flex flex-col gap-3">
              {['CV Optimiser', 'LinkedIn Optimiser', 'Portfolio Creator', 'Personal Website', 'Personal Branding'].map((l) => (
                <Link key={l} to="/lagos-jobs/tools" className="text-[13px] hover:text-lj-teal transition-colors" style={{ color: '#aaa', fontFamily: 'DM Sans, sans-serif' }}>{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-5" style={{ color: '#5a5a5a', fontFamily: 'Inter, sans-serif' }}>By WorkplaceHQ</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-3 text-[13px] font-medium border border-[#333] hover:border-whq-green hover:text-whq-green transition-colors rounded"
              style={{ fontFamily: 'Inter, sans-serif', color: '#aaa' }}
            >
              WorkplaceHQ →
            </Link>
            <p className="text-[12px] mt-3 leading-relaxed" style={{ color: '#5a5a5a', fontFamily: 'DM Sans, sans-serif' }}>B2B workforce transformation for organisations.</p>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between gap-4" style={{ borderColor: '#2a2a2a' }}>
          <p className="text-[12px]" style={{ color: '#4a4a4a', fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} Lagos Job, a WorkplaceHQ product. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms'].map((l) => (
              <a key={l} href="#" className="text-[12px] hover:text-paper transition-colors" style={{ color: '#4a4a4a', fontFamily: 'Inter, sans-serif' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
