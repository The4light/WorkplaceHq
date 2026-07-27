import { Link } from 'react-router-dom'

const workshops = [
  {
    title: 'Team Performance Reset',
    duration: '1 day',
    size: '8–24 participants',
    desc: 'A full-day facilitated session that diagnoses team dynamics, surfaces blockers, and produces a shared action plan for elevated performance.',
    outcomes: ['Documented team health diagnosis', 'Agreed norms and working principles', 'Prioritised 30-day action plan', 'Follow-up accountability structure'],
  },
  {
    title: 'AI Strategy for Leaders',
    duration: 'Half day',
    size: '6–15 participants (senior leaders)',
    desc: 'An executive workshop that grounds leadership teams in AI realities, builds a shared view of organisational opportunity and risk, and produces an AI-readiness roadmap.',
    outcomes: ['Shared AI literacy baseline across leadership', 'Organisational AI risk and opportunity map', 'Draft AI-readiness roadmap', 'Decision framework for AI adoption policy'],
  },
  {
    title: 'Change Readiness Workshop',
    duration: '1–2 days',
    size: '10–30 participants',
    desc: 'A structured workshop for organisations facing major transformation — helping leadership and teams understand, plan for, and commit to change.',
    outcomes: ['Stakeholder change readiness assessment', 'Communication strategy and timeline', 'Resistance identification and mitigation plan', 'Change champion network structure'],
  },
  {
    title: 'L&D Strategy Offsite',
    duration: '2 days',
    size: 'HR/L&D teams, 4–12 participants',
    desc: 'A facilitated two-day offsite that produces a complete L&D strategy: capability framework, learning priorities, delivery model, and measurement system.',
    outcomes: ['Capability framework aligned to business strategy', 'Learning priorities for the next 12 months', 'Delivery model and content sourcing guide', 'L&D KPI and reporting framework'],
  },
]

export default function WHQWorkshops() {
  return (
    <main>
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5 text-whq-green" style={{ fontFamily: 'Inter, sans-serif' }}>Workshops</p>
          <h1 className="text-5xl font-bold text-ink mb-6" style={{ letterSpacing: '-0.03em' }}>Intensive facilitation. Clear deliverables.</h1>
          <p className="text-xl max-w-2xl leading-relaxed" style={{ color: '#545454' }}>
            Every WorkplaceHQ workshop is outcome-focused. You leave with documents, frameworks, and commitments — not just energy and ideas.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {workshops.map((w) => (
            <div key={w.title} className="bg-paper p-8" style={{ border: '1px solid #E6E5E0' }}>
              <div className="flex gap-3 mb-5">
                <span className="text-[12px] font-medium px-3 py-1.5" style={{ fontFamily: 'Inter, sans-serif', background: '#E6E5E0', color: '#545454', borderRadius: '2px' }}>
                  {w.duration}
                </span>
                <span className="text-[12px] font-medium px-3 py-1.5" style={{ fontFamily: 'Inter, sans-serif', background: '#E6E5E0', color: '#545454', borderRadius: '2px' }}>
                  {w.size}
                </span>
              </div>
              <h2 className="text-xl font-bold text-ink mb-3" style={{ letterSpacing: '-0.02em' }}>{w.title}</h2>
              <p className="text-[14px] leading-relaxed mb-6" style={{ color: '#545454' }}>{w.desc}</p>

              <p className="text-[11px] font-semibold tracking-wider uppercase mb-3 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>Deliverables</p>
              <ul className="flex flex-col gap-2 mb-6">
                {w.outcomes.map((o) => (
                  <li key={o} className="text-[13px] flex gap-2" style={{ color: '#545454' }}>
                    <span style={{ color: '#1DA54A', flexShrink: 0 }}>✓</span>
                    {o}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-block text-[13px] font-semibold text-ink px-5 py-2.5 hover:bg-ink hover:text-paper transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', border: '1px solid #191919', borderRadius: '3px' }}
              >
                Book this workshop
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-paper mb-3" style={{ letterSpacing: '-0.03em' }}>Need something custom?</h2>
            <p style={{ color: '#6a6a6a' }}>We design bespoke workshop formats for specific organisational challenges.</p>
          </div>
          <Link to="/contact" className="flex-shrink-0 text-[13px] font-semibold bg-whq-green text-paper px-8 py-4 hover:bg-whq-deep transition-colors" style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}>
            Enquire
          </Link>
        </div>
      </section>
    </main>
  )
}
