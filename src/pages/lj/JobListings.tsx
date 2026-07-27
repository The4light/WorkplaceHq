import { useState } from 'react'
import { Link } from 'react-router-dom'

const allJobs = [
  { id: 1, title: 'Product Manager', company: 'TresBonTech', location: 'Lagos', workMode: 'Hybrid', type: 'Full-time', sector: 'Technology', date: 'Jul 22, 2025', desc: 'Lead product strategy and roadmap for a growing SaaS platform serving enterprise clients across West Africa.' },
  { id: 2, title: 'Senior UX Designer', company: 'Posh Accent', location: 'Remote', workMode: 'Remote', type: 'Full-time', sector: 'Technology', date: 'Jul 21, 2025', desc: 'Design intuitive digital experiences for a premium retail and lifestyle brand with a growing digital presence.' },
  { id: 3, title: 'HR Business Partner', company: 'Confidential', location: 'Lagos', workMode: 'Onsite', type: 'Full-time', sector: 'Human Resources', date: 'Jul 20, 2025', desc: 'Partner with business leaders to drive people strategy in a fast-scaling financial services firm in Lagos.' },
  { id: 4, title: 'Marketing Manager', company: 'Lagos Fintech Group', location: 'Lagos', workMode: 'Hybrid', type: 'Full-time', sector: 'Marketing', date: 'Jul 19, 2025', desc: 'Lead brand and growth marketing for a fintech company serving 500,000+ users across Nigeria.' },
  { id: 5, title: 'Business Analyst', company: 'AfriCapital', location: 'Abuja', workMode: 'Hybrid', type: 'Contract', sector: 'Finance', date: 'Jul 18, 2025', desc: 'Support investment analysis and portfolio reporting for a pan-African private equity firm.' },
  { id: 6, title: 'Data Scientist', company: 'TresBonTech', location: 'Remote', workMode: 'Remote', type: 'Full-time', sector: 'Technology', date: 'Jul 17, 2025', desc: 'Build ML models and data pipelines for an enterprise analytics platform serving African businesses.' },
  { id: 7, title: 'Operations Manager', company: 'HealthBridge Nigeria', location: 'Lagos', workMode: 'Onsite', type: 'Full-time', sector: 'Healthcare', date: 'Jul 16, 2025', desc: 'Oversee daily clinical and administrative operations for a growing chain of private healthcare facilities.' },
  { id: 8, title: 'Learning & Development Lead', company: 'Posh Accent', location: 'Lagos', workMode: 'Hybrid', type: 'Full-time', sector: 'Human Resources', date: 'Jul 15, 2025', desc: 'Design and implement an L&D strategy for a premium retail brand with 800+ employees.' },
  { id: 9, title: 'Communications Manager', company: 'Confidential', location: 'Lagos', workMode: 'Onsite', type: 'Full-time', sector: 'Marketing', date: 'Jul 14, 2025', desc: 'Lead internal and external communications for a major Nigerian energy company.' },
  { id: 10, title: 'Financial Controller', company: 'AfriCapital', location: 'Lagos', workMode: 'Onsite', type: 'Full-time', sector: 'Finance', date: 'Jul 13, 2025', desc: 'Oversee financial reporting, controls, and compliance for an investment management firm.' },
  { id: 11, title: 'Software Engineer (Backend)', company: 'TresBonTech', location: 'Remote', workMode: 'Remote', type: 'Full-time', sector: 'Technology', date: 'Jul 12, 2025', desc: 'Build and maintain scalable backend services in Node.js and Python for a fast-growing SaaS platform.' },
  { id: 12, title: 'Talent Acquisition Specialist', company: 'Lagos Fintech Group', location: 'Lagos', workMode: 'Hybrid', type: 'Full-time', sector: 'Human Resources', date: 'Jul 10, 2025', desc: 'Source, screen, and place top-tier talent for a high-growth fintech team expanding across Nigeria.' },
]

const sectors = ['All sectors', 'Technology', 'Finance', 'Human Resources', 'Marketing', 'Healthcare']
const workModes = ['All locations', 'Remote', 'Hybrid', 'Onsite']
const types = ['All types', 'Full-time', 'Contract']

export default function LJJobListings() {
  const [sector, setSector] = useState('All sectors')
  const [workMode, setWorkMode] = useState('All locations')
  const [type, setType] = useState('All types')
  const [search, setSearch] = useState('')
  const [applyingId, setApplyingId] = useState<number | null>(null)
  const [appliedId, setAppliedId] = useState<number | null>(null)
  const [applyForm, setApplyForm] = useState({ name: '', email: '', note: '' })

  const filtered = allJobs.filter((j) => {
    const matchSector = sector === 'All sectors' || j.sector === sector
    const matchMode = workMode === 'All locations' || j.workMode === workMode
    const matchType = type === 'All types' || j.type === type
    const matchSearch = !search || j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase()) || j.sector.toLowerCase().includes(search.toLowerCase())
    return matchSector && matchMode && matchType && matchSearch
  })

  const handleApply = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setAppliedId(id)
    setApplyingId(null)
  }

  return (
    <main>
      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ fontFamily: 'Inter, sans-serif', color: '#0F6B5C' }}>Job Listings</p>
          <h1 className="text-5xl font-bold text-ink mb-4" style={{ letterSpacing: '-0.03em' }}>Curated roles. Serious companies.</h1>
          <p className="text-xl leading-relaxed" style={{ color: '#545454' }}>
            {allJobs.length} open positions across Nigeria and beyond. Apply in under two minutes.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 pb-8 mb-10" style={{ borderBottom: '1px solid #E6E5E0' }}>
            <input
              type="text"
              placeholder="Search roles, companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 text-[14px] bg-paper outline-none"
              style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }}
            />
            <div className="flex flex-wrap gap-2">
              {[
                { options: sectors, value: sector, set: setSector },
                { options: workModes, value: workMode, set: setWorkMode },
                { options: types, value: type, set: setType },
              ].map((f, fi) => (
                <select
                  key={fi}
                  value={f.value}
                  onChange={(e) => f.set(e.target.value)}
                  className="px-4 py-3 text-[13px] bg-paper outline-none appearance-none cursor-pointer"
                  style={{ border: '1px solid #E6E5E0', fontFamily: 'Inter, sans-serif', color: '#545454' }}
                >
                  {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-[13px] mb-8" style={{ color: '#888', fontFamily: 'Inter, sans-serif' }}>
            {filtered.length} {filtered.length === 1 ? 'role' : 'roles'} found
          </p>

          {/* Listings */}
          <div className="flex flex-col gap-4">
            {filtered.map((job) => (
              <div key={job.id}>
                <div
                  className="p-6 bg-paper"
                  style={{ border: '1px solid #E6E5E0', borderRadius: '3px' }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2 className="text-[1.05rem] font-semibold text-ink" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{job.title}</h2>
                        <span className="text-[11px] font-medium px-2.5 py-1" style={{ background: '#E6E5E0', color: '#545454', fontFamily: 'Inter, sans-serif', borderRadius: '2px' }}>{job.type}</span>
                        <span
                          className="text-[11px] font-medium px-2.5 py-1"
                          style={{
                            background: job.workMode === 'Remote' ? '#e8f5ee' : '#E6E5E0',
                            color: job.workMode === 'Remote' ? '#0F6B5C' : '#545454',
                            fontFamily: 'Inter, sans-serif',
                            borderRadius: '2px',
                          }}
                        >
                          {job.workMode}
                        </span>
                      </div>
                      <p className="text-[13px] mb-2" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
                        {job.company} · {job.location} · {job.sector}
                      </p>
                      <p className="text-[14px] leading-relaxed" style={{ color: '#545454' }}>{job.desc}</p>
                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0">
                      <p className="text-[12px]" style={{ color: '#aaa', fontFamily: 'Inter, sans-serif' }}>{job.date}</p>
                      {appliedId === job.id ? (
                        <span className="text-[13px] font-medium text-lj-teal" style={{ fontFamily: 'Inter, sans-serif' }}>Applied ✓</span>
                      ) : (
                        <button
                          onClick={() => setApplyingId(applyingId === job.id ? null : job.id)}
                          className="text-[13px] font-semibold py-2.5 px-5 transition-colors"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            background: applyingId === job.id ? '#191919' : '#0F6B5C',
                            color: '#F4F3EF',
                            borderRadius: '3px',
                          }}
                        >
                          {applyingId === job.id ? 'Close' : 'Apply now'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Inline apply form */}
                  {applyingId === job.id && (
                    <form
                      onSubmit={(e) => handleApply(e, job.id)}
                      className="mt-6 pt-6 flex flex-col gap-4"
                      style={{ borderTop: '1px solid #E6E5E0' }}
                    >
                      <p className="text-[13px] font-medium text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Apply for {job.title} at {job.company}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-medium mb-1.5 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Full name *</label>
                          <input required value={applyForm.name} onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })} type="text" className="w-full px-4 py-2.5 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif' }} placeholder="Your name" />
                        </div>
                        <div>
                          <label className="block text-[12px] font-medium mb-1.5 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Email *</label>
                          <input required value={applyForm.email} onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })} type="email" className="w-full px-4 py-2.5 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif' }} placeholder="you@email.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[12px] font-medium mb-1.5 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Why are you a good fit? (optional)</label>
                        <textarea value={applyForm.note} onChange={(e) => setApplyForm({ ...applyForm, note: e.target.value })} rows={2} className="w-full px-4 py-2.5 text-[14px] bg-paper outline-none resize-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif' }} placeholder="Brief note to the hiring team..." />
                      </div>
                      <div className="flex gap-3">
                        <button type="submit" className="text-[13px] font-semibold text-paper py-2.5 px-6 hover:opacity-90 transition-opacity" style={{ fontFamily: 'Inter, sans-serif', background: '#0F6B5C', borderRadius: '3px' }}>
                          Submit application
                        </button>
                        <button type="button" onClick={() => setApplyingId(null)} className="text-[13px] font-medium text-slate hover:text-ink transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-slate py-16 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>No roles match your filters. Try adjusting your search.</p>
          )}
        </div>
      </section>

      <section style={{ background: '#0F6B5C' }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-paper mb-2" style={{ letterSpacing: '-0.02em' }}>Make your application stand out.</h2>
            <p style={{ color: 'rgba(244,243,239,0.75)' }}>Get your CV and LinkedIn optimised before you apply.</p>
          </div>
          <Link
            to="/lagos-jobs/tools"
            className="flex-shrink-0 text-[13px] font-semibold bg-paper text-ink px-7 py-3.5 hover:opacity-90 transition-opacity"
            style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}
          >
            Use a tool
          </Link>
        </div>
      </section>
    </main>
  )
}
