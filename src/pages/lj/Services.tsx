import { Link } from 'react-router-dom'

const services = [
  {
    title: 'CV / Resume Optimisation',
    desc: 'A professional rewrite of your CV — structured for ATS, tuned for the roles you want, and written to make a strong first impression.',
    process: ['Fill a short brief about your experience and target roles', 'Our writers craft a polished, targeted CV', 'Receive your optimised CV by email within 24 hours'],
    includes: ['Full CV rewrite', 'ATS-friendly formatting', 'Role-specific tailoring', 'Unlimited format versions (PDF, Word)'],
    cta: 'Optimise my CV',
  },
  {
    title: 'LinkedIn Optimisation',
    desc: 'A complete LinkedIn profile overhaul — from headline and about section to skills, featured, and experience — designed to attract recruiters and opportunities.',
    process: ['Share your LinkedIn URL and target role information', 'We audit your profile and write updated copy', 'Receive a detailed report and all text within 48 hours'],
    includes: ['Profile headline and about section rewrite', 'Experience summary optimisation', 'Skills and endorsement recommendations', 'Featured section guidance'],
    cta: 'Optimise my LinkedIn',
  },
  {
    title: 'Portfolio Creator',
    desc: 'A clean, professional portfolio that showcases your projects and work — built and emailed to you, ready to share with anyone.',
    process: ['Describe your projects, skills, and goals in the brief form', 'We build a structured, professional portfolio', 'Receive your portfolio link via email'],
    includes: ['Professionally structured portfolio page', 'Mobile-responsive design', 'Project showcase with descriptions', 'Contact and downloadable CV section'],
    cta: 'Create my portfolio',
  },
  {
    title: 'Personal Website Creation',
    desc: 'Your own professional website — a polished, career-ready personal site delivered without any technical setup on your part.',
    process: ['Fill a brief: about you, your work, your goals, your style preference', 'We set up and populate your personal site', 'Receive your live site URL and management instructions by email'],
    includes: ['Custom personal domain consultation', 'Professional template, populated with your content', 'Bio, experience, and contact page', 'Mobile-responsive and SEO-ready'],
    cta: 'Get my website',
  },
  {
    title: 'Personal Branding',
    desc: 'A strategic branding document that defines who you are professionally, how to communicate it, and where to show up — built for people who want to be findable.',
    process: ['Answer questions about your career, values, and goals', 'We develop a complete personal branding strategy', 'Receive your strategy document within 48 hours'],
    includes: ['Professional identity statement', 'Tone of voice and communication guidelines', 'Platform strategy (LinkedIn, portfolio, networking)', 'Elevator pitch and bio variations'],
    cta: 'Build my brand',
  },
]

export default function LJServices() {
  return (
    <main>
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ fontFamily: 'Inter, sans-serif', color: '#0F6B5C' }}>Services</p>
          <h1 className="text-5xl font-bold text-ink mb-6" style={{ letterSpacing: '-0.03em' }}>
            Everything you need<br />to land the right role.
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed" style={{ color: '#545454' }}>
            Five professional career services. No account. No login. Fill a short form, and we deliver your result.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-0">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16"
              style={{ borderTop: '1px solid #E6E5E0' }}
            >
              <div className="lg:col-span-4">
                <span className="text-[11px] font-semibold text-lj-teal mb-3 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="text-2xl font-bold text-ink mb-4" style={{ letterSpacing: '-0.03em' }}>{s.title}</h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#545454' }}>{s.desc}</p>

                <p className="text-[11px] font-semibold tracking-wider uppercase mb-3 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>How it works</p>
                <ol className="flex flex-col gap-2.5 mb-6">
                  {s.process.map((step, j) => (
                    <li key={j} className="text-[13px] flex gap-3" style={{ color: '#545454' }}>
                      <span style={{ color: '#0F6B5C', fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, marginTop: '2px', flexShrink: 0 }}>
                        {j + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>

                <Link
                  to="/lagos-jobs/tools"
                  className="inline-block text-[13px] font-semibold text-paper py-3 px-6 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: 'Inter, sans-serif', background: '#0F6B5C', borderRadius: '3px' }}
                >
                  {s.cta}
                </Link>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-[11px] font-semibold tracking-wider uppercase mb-4 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>What's included</p>
                  <ul className="flex flex-col gap-3">
                    {s.includes.map((inc) => (
                      <li key={inc} className="text-[14px] flex gap-3" style={{ color: '#545454' }}>
                        <span style={{ color: '#0F6B5C', flexShrink: 0 }}>✓</span>
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="p-6"
                  style={{ background: '#F0EFE9', border: '1px solid #E6E5E0', borderRadius: '3px' }}
                >
                  <p className="text-[13px] font-semibold text-ink mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>No account needed.</p>
                  <p className="text-[13px] leading-relaxed mb-4" style={{ color: '#545454' }}>
                    Fill a short form. We'll do the work and deliver your result by email. That's it.
                  </p>
                  <Link
                    to="/lagos-jobs/tools"
                    className="text-[12px] font-semibold hover:opacity-80 transition-opacity"
                    style={{ color: '#0F6B5C', fontFamily: 'Inter, sans-serif' }}
                  >
                    Open the tool →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#0F6B5C' }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-paper mb-3" style={{ letterSpacing: '-0.03em' }}>Ready to get started?</h2>
            <p style={{ color: 'rgba(244,243,239,0.75)' }}>Choose a tool and fill a short form. Results arrive by email.</p>
          </div>
          <Link
            to="/lagos-jobs/tools"
            className="flex-shrink-0 text-[13px] font-semibold bg-paper text-ink px-8 py-4 hover:opacity-90 transition-opacity"
            style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}
          >
            Go to Tools Hub
          </Link>
        </div>
      </section>
    </main>
  )
}
