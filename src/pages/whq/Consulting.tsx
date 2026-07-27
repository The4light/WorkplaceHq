import { Link } from 'react-router-dom'

const engagements = [
  {
    title: 'Diagnostic Sprint',
    duration: '2–3 weeks',
    desc: 'A rapid organisational diagnostic that identifies your most critical people, process, and capability gaps — with a prioritised recommendation report.',
    outputs: ['Stakeholder interview synthesis', 'Process and workflow gap analysis', 'Prioritised recommendation report', 'Engagement options and next steps'],
  },
  {
    title: 'Embedded Consulting',
    duration: '3–6 months',
    desc: 'Ongoing consulting with regular working sessions, implementation support, and accountability structures. Best for complex transformation programmes.',
    outputs: ['Monthly progress and milestone reporting', 'Ongoing stakeholder alignment support', 'Implementation coaching for internal leads', 'Mid-point and end-of-engagement reviews'],
  },
  {
    title: 'Strategic Advisory',
    duration: 'Quarterly retainer',
    desc: 'Senior advisory access for HR, L&D, and operations leaders who need an experienced external perspective on strategic decisions.',
    outputs: ['Monthly advisory sessions (CEO/CPO level)', 'On-demand strategic input and challenge', 'Annual planning and review facilitation', 'Industry benchmarking and insight'],
  },
]

const process = [
  { step: '01', title: 'Scope', desc: 'We define the challenge, stakeholders, timelines, and what success looks like before any engagement begins.' },
  { step: '02', title: 'Diagnose', desc: 'We talk to the right people, map the right processes, and surface the real constraints — not just the presenting problem.' },
  { step: '03', title: 'Design', desc: 'We develop a structured response: a programme, a framework, a roadmap, or a recommendation — depending on what the diagnosis reveals.' },
  { step: '04', title: 'Deliver', desc: 'We implement with your team, not for your team. Capability transfer is a condition of every WorkplaceHQ engagement.' },
  { step: '05', title: 'Embed', desc: 'We stay until change is embedded. Follow-up accountability sessions ensure outcomes outlast our involvement.' },
]

export default function WHQConsulting() {
  return (
    <main>
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5 text-whq-green" style={{ fontFamily: 'Inter, sans-serif' }}>Consulting</p>
            <h1 className="text-5xl font-bold text-ink mb-6" style={{ letterSpacing: '-0.03em' }}>Diagnostic first. Outcomes always.</h1>
            <p className="text-xl leading-relaxed" style={{ color: '#545454' }}>
              Our consulting practice is built on a simple belief: you can't prescribe before you diagnose. Every engagement starts with rigorous listening before any solution is proposed.
            </p>
          </div>
          <div className="lg:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=700&h=500&fit=crop&auto=format"
              alt="Consulting session in progress"
              className="w-full h-[320px] object-cover"
              style={{ background: '#E6E5E0' }}
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: '#F0EFE9' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-12 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>How we engage</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((p) => (
              <div key={p.step} style={{ borderTop: '2px solid #E6E5E0', paddingTop: '1.5rem' }}>
                <span className="text-[11px] font-semibold text-whq-green block mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>{p.step}</span>
                <p className="text-[1rem] font-semibold text-ink mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{p.title}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: '#545454' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement types */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-12 text-whq-green" style={{ fontFamily: 'Inter, sans-serif' }}>Engagement types</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagements.map((e) => (
              <div key={e.title} className="bg-paper p-8" style={{ border: '1px solid #E6E5E0' }}>
                <span className="text-[12px] font-medium px-3 py-1.5 inline-block mb-5" style={{ fontFamily: 'Inter, sans-serif', background: '#E6E5E0', color: '#545454', borderRadius: '2px' }}>
                  {e.duration}
                </span>
                <h2 className="text-xl font-bold text-ink mb-3" style={{ letterSpacing: '-0.02em' }}>{e.title}</h2>
                <p className="text-[14px] leading-relaxed mb-6" style={{ color: '#545454' }}>{e.desc}</p>
                <p className="text-[11px] font-semibold tracking-wider uppercase mb-3 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>Outputs</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {e.outputs.map((o) => (
                    <li key={o} className="text-[13px] flex gap-2" style={{ color: '#545454' }}>
                      <span style={{ color: '#1DA54A', flexShrink: 0 }}>✓</span> {o}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-block text-[13px] font-semibold text-ink px-5 py-2.5 hover:bg-ink hover:text-paper transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif', border: '1px solid #191919', borderRadius: '3px' }}
                >
                  Enquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-paper mb-3" style={{ letterSpacing: '-0.03em' }}>Ready to start a conversation?</h2>
            <p style={{ color: '#6a6a6a' }}>Tell us your challenge. We'll tell you how we'd approach it.</p>
          </div>
          <Link to="/contact" className="flex-shrink-0 text-[13px] font-semibold bg-whq-green text-paper px-8 py-4 hover:bg-whq-deep transition-colors" style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}>
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
