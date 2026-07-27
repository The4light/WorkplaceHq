import { Link } from 'react-router-dom'
import WHQLogo from './WHQLogo'

export default function WHQFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-1">
            <WHQLogo className="mb-4" />
            <p className="text-[13px] leading-relaxed" style={{ color: '#8a8a8a', fontFamily: 'DM Sans, sans-serif' }}>
              We engineer how teams work. Workforce transformation for Africa's most ambitious organisations.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="text-[12px] font-medium text-paper hover:text-whq-green transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>LinkedIn</a>
              <span style={{ color: '#444' }}>·</span>
              <a href="#" className="text-[12px] font-medium text-paper hover:text-whq-green transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Twitter</a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-5" style={{ color: '#5a5a5a', fontFamily: 'Inter, sans-serif' }}>Company</p>
            <div className="flex flex-col gap-3">
              {[['About', '/about'], ['Services', '/services'], ['Insights', '/insights'], ['Contact', '/contact']].map(([l, p]) => (
                <Link key={p} to={p} className="text-[13px] hover:text-whq-green transition-colors" style={{ color: '#aaa', fontFamily: 'DM Sans, sans-serif' }}>{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-5" style={{ color: '#5a5a5a', fontFamily: 'Inter, sans-serif' }}>Solutions</p>
            <div className="flex flex-col gap-3">
              {[['Training Programs', '/training-programs'], ['Workshops', '/workshops'], ['Consulting', '/consulting'], ['Resources', '/resources']].map(([l, p]) => (
                <Link key={p} to={p} className="text-[13px] hover:text-whq-green transition-colors" style={{ color: '#aaa', fontFamily: 'DM Sans, sans-serif' }}>{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-5" style={{ color: '#5a5a5a', fontFamily: 'Inter, sans-serif' }}>Our Products</p>
            <Link
              to="/lagos-jobs"
              className="inline-flex items-center gap-2 px-4 py-3 text-[13px] font-medium border border-[#333] hover:border-lj-teal hover:text-lj-teal transition-colors rounded"
              style={{ fontFamily: 'Inter, sans-serif', color: '#aaa' }}
            >
              Lagos Job →
            </Link>
            <p className="text-[12px] mt-3 leading-relaxed" style={{ color: '#5a5a5a', fontFamily: 'DM Sans, sans-serif' }}>Career services for individual job seekers.</p>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between gap-4" style={{ borderColor: '#2a2a2a' }}>
          <p className="text-[12px]" style={{ color: '#4a4a4a', fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} WorkplaceHQ. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((l) => (
              <a key={l} href="#" className="text-[12px] hover:text-paper transition-colors" style={{ color: '#4a4a4a', fontFamily: 'Inter, sans-serif' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
