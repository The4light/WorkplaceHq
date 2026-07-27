import { Link } from 'react-router-dom'

const team = [
  {
    name: 'Mrs Otito',
    role: 'Founder & CEO',
    bio: 'Otito founded WorkplaceHQ after 15 years leading HR transformation at pan-African financial institutions. She built the methodology that underpins every WorkplaceHQ engagement.',
    initials: 'OT',
  },
  {
    name: 'Stanley',
    role: 'Head of Training',
    bio: 'Stanley leads the design and delivery of all training programmes. A former corporate trainer at a Big 4 firm, he specialises in AI-readiness and skills transformation.',
    initials: 'ST',
  },
  {
    name: 'Bolanle',
    role: 'Consulting Lead',
    bio: 'Bolanle leads organisational consulting engagements, helping clients redesign team structures, workflows, and culture for sustained high performance.',
    initials: 'BL',
  },
  {
    name: 'Desire',
    role: 'L&D Strategist',
    bio: 'Desire designs bespoke learning strategies for clients across sectors. Her frameworks have shaped L&D functions at some of Nigeria\'s fastest-growing companies.',
    initials: 'DS',
  },
  {
    name: 'Mr Benson',
    role: 'Director of Operations',
    bio: 'Benson ensures every engagement runs with precision — from scoping to delivery. He manages partnerships, logistics, and the operational backbone of WorkplaceHQ.',
    initials: 'BN',
  },
]

const clients = ['TresBonTech', 'Posh Accent']

const values = [
  { title: 'Outcome-first', desc: 'We measure success by what changes after we leave, not by what we deliver during an engagement.' },
  { title: 'Radical clarity', desc: 'No jargon. No vague frameworks. Every recommendation is specific, actionable, and tied to a measurable result.' },
  { title: 'Structured rigour', desc: 'We bring methodology to every engagement. Instinct is a starting point, not a deliverable.' },
  { title: 'African context', desc: 'Our programmes are built for the realities of African organisations — not adapted from Western frameworks.' },
]

export default function WHQAbout() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5 text-whq-green" style={{ fontFamily: 'Inter, sans-serif' }}>About</p>
            <h1 className="text-5xl font-bold text-ink leading-tight mb-8" style={{ letterSpacing: '-0.03em' }}>
              Built to change how African organisations develop their people.
            </h1>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#545454' }}>
              WorkplaceHQ was founded on a straightforward observation: most organisational training in Africa is delivered from outside context, outside culture, and outside the realities of what teams here actually face.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#545454' }}>
              We built a different model. One that starts with diagnosis, not curriculum. One that stays until change is embedded, not just delivered. One that treats organisations as complex systems, not training recipients.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&h=600&fit=crop&auto=format"
              alt="WorkplaceHQ team at work"
              className="w-full h-[400px] object-cover"
              style={{ background: '#E6E5E0' }}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-ink py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div style={{ borderTop: '2px solid #1DA54A', paddingTop: '2rem' }}>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ fontFamily: 'Inter, sans-serif', color: '#1DA54A' }}>Mission</p>
            <p className="text-2xl font-medium leading-relaxed text-paper" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
              To engineer how African teams work — building the capability, culture, and systems for sustained high performance.
            </p>
          </div>
          <div style={{ borderTop: '2px solid #2a2a2a', paddingTop: '2rem' }}>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ fontFamily: 'Inter, sans-serif', color: '#5a5a5a' }}>Vision</p>
            <p className="text-2xl font-medium leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', color: '#aaa' }}>
              A continent where every organisation has the tools, talent, and structure to compete — and win — at the highest level.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-12 text-whq-green" style={{ fontFamily: 'Inter, sans-serif' }}>How we work</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} style={{ borderTop: '2px solid #E6E5E0', paddingTop: '1.5rem' }}>
                <p className="text-[1rem] font-semibold text-ink mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{v.title}</p>
                <p className="text-[14px] leading-relaxed" style={{ color: '#545454' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: '#F0EFE9' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-12 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>The team</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="bg-paper p-8" style={{ border: '1px solid #E6E5E0' }}>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-paper text-lg font-bold"
                  style={{ background: '#191919', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {m.initials}
                </div>
                <p className="text-[1.05rem] font-semibold text-ink mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{m.name}</p>
                <p className="text-[13px] mb-4 text-whq-green font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{m.role}</p>
                <p className="text-[14px] leading-relaxed" style={{ color: '#545454' }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-10 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>Trusted by</p>
          <div className="flex flex-wrap gap-8 items-center">
            {clients.map((c) => (
              <div
                key={c}
                className="px-8 py-4 bg-ink"
                style={{ borderRadius: '2px' }}
              >
                <span className="text-paper text-lg font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>{c}</span>
              </div>
            ))}
            <p className="text-[14px]" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>+47 more organisations across Nigeria and West Africa</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-paper mb-3" style={{ letterSpacing: '-0.03em' }}>Work with us.</h2>
            <p className="text-base" style={{ color: '#6a6a6a' }}>Tell us your challenge. We'll design the right response.</p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-block text-[13px] font-semibold bg-whq-green text-paper px-8 py-4 hover:bg-whq-deep transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
