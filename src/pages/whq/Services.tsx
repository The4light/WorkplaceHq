import { Link } from 'react-router-dom'

const services = [
  {
    id: '01',
    title: 'AI-Readiness Training',
    overview: 'Practical AI literacy and tool-adoption programmes that give your teams real capability — not just awareness.',
    challenges: ['Teams adopting AI tools superficially or resisting them entirely', 'Productivity gaps as AI transforms job functions', 'Skills deficits creating competitive vulnerability', 'Leaders unsure how to set AI policy or expectations'],
    benefits: ['Structured, tool-specific training across common AI platforms', 'Custom modules by role and department', 'Manager guides for sustaining adoption post-training', 'Measurable productivity benchmarks before and after'],
    outcomes: 'Teams demonstrating confident, measurable AI-tool adoption within 90 days of programme completion.',
    link: '/training-programs',
    linkLabel: 'View training programs',
  },
  {
    id: '02',
    title: 'Leadership & Team Development',
    overview: 'Management capability programmes designed to build the behaviours that drive team performance, retention, and culture.',
    challenges: ['Leadership gaps creating performance variance across teams', 'High-potential talent without development pathways', 'Low team cohesion and engagement', 'Managers promoted for technical skill, not leadership ability'],
    benefits: ['360-degree leadership diagnostics', 'Cohort-based development programmes', 'Individual coaching touchpoints', 'Structured peer learning networks'],
    outcomes: 'A measurable uplift in direct report engagement scores and team performance metrics within two quarters.',
    link: '/workshops',
    linkLabel: 'View workshops',
  },
  {
    id: '03',
    title: 'Organisational Consulting',
    overview: 'Strategic advisory that identifies and eliminates the structural friction slowing your organisation down.',
    challenges: ['Siloed teams working against each other', 'Misaligned processes creating duplicate effort', 'Unclear roles and accountability gaps', 'Scaling pressure revealing structural weaknesses'],
    benefits: ['Workflow and process audits with clear findings', 'Team structure redesign recommendations', 'RACI frameworks and accountability mapping', 'Implementation roadmaps with 60/90/180-day milestones'],
    outcomes: 'Documented process improvements and structural clarity delivered within the first 60 days of engagement.',
    link: '/consulting',
    linkLabel: 'View consulting',
  },
  {
    id: '04',
    title: 'L&D Strategy Design',
    overview: 'Build a learning and development function that creates long-term, measurable capability — not one-off training events.',
    challenges: ['Fragmented, reactive training with no coherent strategy', 'No clear L&D ROI or measurement framework', 'Skills gaps growing faster than training programmes can address', 'HR teams overwhelmed and under-resourced'],
    benefits: ['Capability framework and skills taxonomy', 'Custom L&D roadmap aligned to business strategy', 'Learning calendar and content sourcing guidance', 'KPI and measurement system for L&D effectiveness'],
    outcomes: 'A complete L&D strategy and implementation plan, ready for immediate execution by your HR team.',
    link: '/training-programs',
    linkLabel: 'View training programs',
  },
  {
    id: '05',
    title: 'Change Management',
    overview: 'Structured frameworks to navigate organisational transformation — from technology adoption to restructuring — with minimal disruption.',
    challenges: ['Resistance to change across teams and leadership levels', 'Transformation initiatives stalling mid-implementation', 'Poor communication creating rumour and anxiety', 'Change fatigue from poorly sequenced initiatives'],
    benefits: ['Change readiness assessments', 'Stakeholder communication planning', 'Manager enablement for leading through change', 'Post-change stabilisation and embedding support'],
    outcomes: 'Sustained adoption of the target change state with team stability restored within six months.',
    link: '/consulting',
    linkLabel: 'View consulting',
  },
]

export default function WHQServices() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5 text-whq-green" style={{ fontFamily: 'Inter, sans-serif' }}>Services</p>
          <h1 className="text-5xl font-bold text-ink mb-6" style={{ letterSpacing: '-0.03em' }}>
            Five ways we transform teams.
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed" style={{ color: '#545454' }}>
            Every engagement starts with a diagnosis. We deploy training, consulting, or facilitation — in any combination — based on what your organisation actually needs.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-paper py-8 pb-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-0">
          {services.map((s) => (
            <div
              key={s.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-16"
              style={{ borderTop: '1px solid #E6E5E0' }}
            >
              <div className="lg:col-span-4">
                <span className="text-[11px] font-semibold text-whq-green mb-3 block" style={{ fontFamily: 'Inter, sans-serif' }}>{s.id}</span>
                <h2 className="text-2xl font-bold text-ink mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}>{s.title}</h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#545454' }}>{s.overview}</p>
                <Link
                  to={s.link}
                  className="text-[13px] font-semibold text-ink hover:text-whq-green transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {s.linkLabel} →
                </Link>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-[11px] font-semibold tracking-wider uppercase mb-4 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>Challenges</p>
                  <ul className="flex flex-col gap-2.5">
                    {s.challenges.map((c) => (
                      <li key={c} className="text-[13px] leading-relaxed flex gap-2" style={{ color: '#545454' }}>
                        <span style={{ color: '#E6E5E0', marginTop: '4px' }}>—</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11px] font-semibold tracking-wider uppercase mb-4 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>What we deliver</p>
                  <ul className="flex flex-col gap-2.5">
                    {s.benefits.map((b) => (
                      <li key={b} className="text-[13px] leading-relaxed flex gap-2" style={{ color: '#545454' }}>
                        <span style={{ color: '#1DA54A', marginTop: '4px', flexShrink: 0 }}>✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11px] font-semibold tracking-wider uppercase mb-4 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>Outcome</p>
                  <p className="text-[14px] leading-relaxed font-medium text-ink" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.outcomes}</p>
                  <Link
                    to="/contact"
                    className="inline-block mt-6 text-[12px] font-semibold text-paper bg-ink px-5 py-2.5 hover:bg-whq-deep transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lagos Job cross-link */}
      <section style={{ background: '#F0EFE9' }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ fontFamily: 'Inter, sans-serif', color: '#0F6B5C' }}>For individuals</p>
            <p className="text-xl font-semibold text-ink" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Looking for individual career services?</p>
            <p className="text-sm mt-2" style={{ color: '#545454' }}>CV writing, LinkedIn, portfolio, and job listings — visit Lagos Job.</p>
          </div>
          <Link
            to="/lagos-jobs"
            className="flex-shrink-0 inline-block text-[13px] font-semibold px-7 py-3.5 text-paper transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', background: '#0F6B5C', borderRadius: '3px' }}
          >
            Visit Lagos Job →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-paper mb-3" style={{ letterSpacing: '-0.03em' }}>Not sure where to start?</h2>
            <p className="text-base" style={{ color: '#6a6a6a' }}>We'll help you identify the right entry point for your organisation.</p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-block text-[13px] font-semibold bg-whq-green text-paper px-8 py-4 hover:bg-whq-deep transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}
          >
            Speak to us
          </Link>
        </div>
      </section>
    </main>
  )
}
