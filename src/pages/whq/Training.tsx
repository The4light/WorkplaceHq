import { Link } from 'react-router-dom'

const programs = [
  {
    title: 'AI for Teams',
    duration: '4 weeks',
    format: 'Hybrid · Cohort-based',
    audience: 'All staff · Manager edition available',
    desc: 'A structured four-week programme covering AI literacy, prompt engineering fundamentals, tool adoption (ChatGPT, Copilot, Gemini), and practical application by function.',
    modules: ['AI concepts and business relevance', 'Prompt design for your role', 'Tool-specific practice sessions', 'Ethics, risk, and responsible use', 'Implementation sprint and measurement'],
  },
  {
    title: 'Leadership Accelerator',
    duration: '8 weeks',
    format: 'In-person · Cohort of 12–20',
    audience: 'Mid-to-senior managers',
    desc: 'An intensive cohort programme that builds the leadership mindset, communication, and performance management skills needed for high-impact management.',
    modules: ['Leadership identity and style', 'Managing performance conversations', 'Building team psychological safety', 'Decision-making under uncertainty', 'Influence without authority', 'Capstone: 90-day team plan'],
  },
  {
    title: 'Operational Excellence',
    duration: '6 weeks',
    format: 'Hybrid · Team-based',
    audience: 'Operations, project, and process teams',
    desc: 'A practical programme focused on process optimisation, workflow design, and cross-functional collaboration for operations professionals.',
    modules: ['Process mapping and waste identification', 'Cross-functional collaboration models', 'KPI design and measurement', 'Change adoption in operations', 'Building standard operating procedures'],
  },
]

export default function WHQTraining() {
  return (
    <main>
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5 text-whq-green" style={{ fontFamily: 'Inter, sans-serif' }}>Training Programs</p>
          <h1 className="text-5xl font-bold text-ink mb-6" style={{ letterSpacing: '-0.03em' }}>Structured learning. Measurable outcomes.</h1>
          <p className="text-xl max-w-2xl leading-relaxed" style={{ color: '#545454' }}>
            Our programmes are built for working professionals — delivered in cohorts, designed to embed, and measured against outcomes that matter to your organisation.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
          {programs.map((p) => (
            <div
              key={p.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-12"
              style={{ borderTop: '1px solid #E6E5E0' }}
            >
              <div className="lg:col-span-5">
                <h2 className="text-2xl font-bold text-ink mb-4" style={{ letterSpacing: '-0.03em' }}>{p.title}</h2>
                <div className="flex flex-wrap gap-3 mb-5">
                  {[p.duration, p.format, p.audience].map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] font-medium px-3 py-1.5"
                      style={{ fontFamily: 'Inter, sans-serif', background: '#E6E5E0', color: '#545454', borderRadius: '2px' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-base leading-relaxed" style={{ color: '#545454' }}>{p.desc}</p>
              </div>

              <div className="lg:col-span-4">
                <p className="text-[11px] font-semibold tracking-wider uppercase mb-4 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>Programme modules</p>
                <ol className="flex flex-col gap-2.5">
                  {p.modules.map((m, j) => (
                    <li key={m} className="text-[14px] flex gap-3" style={{ color: '#545454' }}>
                      <span style={{ color: '#1DA54A', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, marginTop: '2px', flexShrink: 0 }}>
                        {String(j + 1).padStart(2, '0')}
                      </span>
                      {m}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="lg:col-span-3 flex flex-col justify-start">
                <Link
                  to="/contact"
                  className="inline-block text-[13px] font-semibold text-paper bg-ink px-6 py-3.5 hover:bg-whq-deep transition-colors mb-3 text-center"
                  style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}
                >
                  Enquire about this programme
                </Link>
                <p className="text-[12px] text-center" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>Custom cohort sizing available</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-paper mb-3" style={{ letterSpacing: '-0.03em' }}>Need a custom programme?</h2>
            <p style={{ color: '#6a6a6a' }}>We design bespoke training for teams with specific requirements.</p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 text-[13px] font-semibold bg-whq-green text-paper px-8 py-4 hover:bg-whq-deep transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}
          >
            Talk to us
          </Link>
        </div>
      </section>
    </main>
  )
}
