import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FileText, Link2, Palette, Globe, User, ShieldCheck, Briefcase, CheckCircle } from 'lucide-react'

function RequestReceived({ message, onReset }: { message: string; onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 gap-5">
      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(23,178,106,0.12)' }}>
        <CheckCircle className="w-7 h-7" style={{ color: '#17B26A' }} />
      </div>
      <h3 className="font-display font-700 text-xl" style={{ color: '#0D0D0D' }}>Request received!</h3>
      <p className="text-sm max-w-sm leading-relaxed" style={{ color: '#6B7280' }}>{message}</p>
      <button onClick={onReset} className="text-sm font-semibold" style={{ color: '#17B26A' }}>
        Submit another request
      </button>
    </div>
  )
}

function WhatHappensNext({ steps }: { steps: { step: string; title: string; desc: string }[] }) {
  return (
    <div className="p-6 rounded-2xl flex flex-col gap-6" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(23,178,106,0.15)' }}>
      <h3 className="font-display font-700 text-lg text-white">What happens next</h3>

      <div className="flex flex-col gap-5">
        {steps.map(({ step, title, desc }) => (
          <div key={step} className="flex gap-4">
            <span className="font-display font-700 text-sm shrink-0 mt-0.5" style={{ color: '#17B26A' }}>{step}</span>
            <div>
              <p className="font-semibold text-sm text-white mb-1">{title}</p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto p-4 rounded-xl" style={{ backgroundColor: 'rgba(23,178,106,0.08)', border: '1px solid rgba(23,178,106,0.2)' }}>
        <p className="text-sm" style={{ color: '#17B26A' }}>
          <strong>Human-reviewed services.</strong> Fill in the details and our team handles the rest.
        </p>
      </div>
    </div>
  )
}

const fieldStyle = { border: '1px solid #E5E7EB', backgroundColor: '#F9FAFB' }

// -- Brand Designers Service --
function BrandDesigners() {
  const [selectedDesigner, setSelectedDesigner] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', brandName: '', brief: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const designers = [
    {
      id: 'designer-1',
      name: 'Designer 01',
      title: 'Senior Brand & Identity Strategist',
      services: ['Full Brand Identity', 'Logo Suite', 'Brand Guidelines & Design Systems'],
      startingPrice: '₦150,000',
      rateDetails: 'Includes 3 concepts, unlimited revisions during draft phase, and full brand book.',
    },
    {
      id: 'designer-2',
      name: 'Designer 02',
      title: 'Visual Identity & Product Designer',
      services: ['Brand Revamp', 'Social Media Branding Kit', 'Packaging & Print Materials'],
      startingPrice: '₦120,000',
      rateDetails: 'Includes brand assets, social templates, vector export files (AI, SVG, PDF).',
    },
    {
      id: 'designer-3',
      name: 'Designer 03',
      title: 'Creative Brand Specialist',
      services: ['Custom Brand Identity', 'Marketing Collateral', 'Digital Brand Assets'],
      startingPrice: 'Rate Card Pending',
      rateDetails: 'Full details and rate card updating shortly.',
      pending: true,
    },
  ]

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !selectedDesigner) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <RequestReceived
        message="Your request has been received. Our team and the selected brand designer will reach out with a detailed proposal and contract within 24 hours."
        onReset={() => {
          setSubmitted(false)
          setSelectedDesigner(null)
          setForm({ name: '', email: '', phone: '', brandName: '', brief: '' })
        }}
      />
    )
  }

  const disabled = loading || !form.name || !form.email || !selectedDesigner

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="font-display font-700 text-xl mb-1" style={{ color: '#0D0D0D' }}>
          Vetted Brand Designers
        </h3>
        <p className="text-sm" style={{ color: '#6B7280' }}>
          Select a verified designer to review their services, rate cards, and request direct engagement.
        </p>
      </div>

      {/* Designer Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {designers.map((d) => {
          const isSelected = selectedDesigner === d.id
          return (
            <div
              key={d.id}
              onClick={() => !d.pending && setSelectedDesigner(d.id)}
              className={`p-6 rounded-2xl flex flex-col justify-between border transition-all duration-200 ${
                d.pending ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:border-[#17B26A]'
              }`}
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: isSelected ? '#17B26A' : '#E5E7EB',
                boxShadow: isSelected ? '0 0 0 2px #17B26A' : 'none',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#17B26A]">
                    {d.pending ? 'Coming Soon' : 'Available'}
                  </span>
                  <Briefcase className="w-4 h-4 text-[#6B7280]" />
                </div>
                <h4 className="font-display font-700 text-lg mb-1" style={{ color: '#0D0D0D' }}>
                  {d.name}
                </h4>
                <p className="text-xs font-medium mb-4" style={{ color: '#6B7280' }}>
                  {d.title}
                </p>

                <div className="border-t py-3 my-3" style={{ borderColor: '#F4F5F7' }}>
                  <p className="text-xs font-semibold mb-2" style={{ color: '#0D0D0D' }}>
                    Services Offered:
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {d.services.map((s) => (
                      <li key={s} className="text-xs flex items-center gap-1.5" style={{ color: '#6B7280' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#17B26A]" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t mt-3" style={{ borderColor: '#F4F5F7' }}>
                <p className="text-xs text-[#6B7280] mb-1">Full Cost / Rates</p>
                <p className="font-display font-700 text-base" style={{ color: '#0D0D0D' }}>
                  {d.startingPrice}
                </p>
                <p className="text-[11px] mt-1 leading-snug" style={{ color: '#9CA3AF' }}>
                  {d.rateDetails}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Booking / Request Form */}
      <div className="grid lg:grid-cols-2 gap-6 mt-4">
        <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
          <div>
            <h4 className="font-display font-700 text-lg mb-1" style={{ color: '#0D0D0D' }}>
              Request Selected Designer
            </h4>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              {selectedDesigner
                ? `You selected ${designers.find((d) => d.id === selectedDesigner)?.name}. Fill in your details below.`
                : 'Please select a designer above to proceed with your booking request.'}
            </p>
          </div>

          <input
            className="px-4 py-3 text-sm outline-none w-full rounded-lg"
            style={fieldStyle}
            placeholder="Your Full Name *"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
          />
          <input
            className="px-4 py-3 text-sm outline-none w-full rounded-lg"
            style={fieldStyle}
            placeholder="Email Address *"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
          />
          <input
            className="px-4 py-3 text-sm outline-none w-full rounded-lg"
            style={fieldStyle}
            placeholder="Phone / WhatsApp Number"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
          />
          <input
            className="px-4 py-3 text-sm outline-none w-full rounded-lg"
            style={fieldStyle}
            placeholder="Business / Brand Name"
            value={form.brandName}
            onChange={(e) => update('brandName', e.target.value)}
          />
          <textarea
            className="px-4 py-3 text-sm outline-none resize-none rounded-lg"
            style={{ ...fieldStyle, minHeight: '100px' }}
            placeholder="Brief description of what you need..."
            value={form.brief}
            onChange={(e) => update('brief', e.target.value)}
          />

          <button
            onClick={handleSubmit}
            disabled={disabled}
            className="w-full py-3 rounded-lg font-semibold text-sm transition-all"
            style={{
              backgroundColor: disabled ? '#D1D5DB' : '#17B26A',
              color: '#FFFFFF',
              cursor: disabled ? 'not-allowed' : 'pointer',
              fontFamily: 'var(--font-lj-display)',
            }}
          >
            {loading ? 'Submitting…' : 'Hire / Request Designer'}
          </button>
        </div>

        <WhatHappensNext
          steps={[
            { step: '01', title: 'Choose your designer', desc: 'Select from our vetted brand designers based on their rate cards and portfolio focus.' },
            { step: '02', title: 'We align project scope', desc: 'Our team confirms scope, deliverables, timeline, and final payment structures.' },
            { step: '03', title: 'Direct execution', desc: 'Kick off work directly with your chosen designer with guaranteed deliverable timelines.' },
          ]}
        />
      </div>
    </div>
  )
}

// -- CAC Registration Service --
function CACRegistration() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', businessType: 'Business Name', nameOption1: '', nameOption2: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone || !form.nameOption1) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <RequestReceived
        message="Your CAC Registration request has been received! Our accredited representative will contact you via WhatsApp/Email to verify your NIN/NUBAN details and begin name reservation."
        onReset={() => {
          setSubmitted(false)
          setForm({ name: '', email: '', phone: '', businessType: 'Business Name', nameOption1: '', nameOption2: '' })
        }}
      />
    )
  }

  const disabled = loading || !form.name || !form.email || !form.phone || !form.nameOption1

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
        <div>
          <h3 className="font-display font-700 text-lg mb-1" style={{ color: '#0D0D0D' }}>
            CAC Business Registration
          </h3>
          <p className="text-sm" style={{ color: '#6B7280' }}>
            Register your Business Name, Company (Limited), or NGO directly with CAC accredited agents.
          </p>
        </div>

        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Full Legal Name *"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
        />
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Email Address *"
          type="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
        />
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Phone / WhatsApp Number *"
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
        />

        <select
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={{ ...fieldStyle, color: '#0D0D0D' }}
          value={form.businessType}
          onChange={(e) => update('businessType', e.target.value)}
        >
          <option value="Business Name">Business Name (Sole Proprietorship / Enterprise)</option>
          <option value="Private Limited Company (LTD)">Private Limited Company (LTD)</option>
          <option value="Incorporated Trustee (NGO/Church)">Incorporated Trustee (NGO / Foundation)</option>
        </select>

        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Proposed Business Name Option 1 *"
          value={form.nameOption1}
          onChange={(e) => update('nameOption1', e.target.value)}
        />
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Proposed Business Name Option 2 (Alternative)"
          value={form.nameOption2}
          onChange={(e) => update('nameOption2', e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={disabled}
          className="w-full py-3 rounded-lg font-semibold text-sm transition-all"
          style={{
            backgroundColor: disabled ? '#D1D5DB' : '#17B26A',
            color: '#FFFFFF',
            cursor: disabled ? 'not-allowed' : 'pointer',
            fontFamily: 'var(--font-lj-display)',
          }}
        >
          {loading ? 'Submitting…' : 'Start CAC Registration'}
        </button>
      </div>

      <WhatHappensNext
        steps={[
          { step: '01', title: 'Name availability check', desc: 'We run immediate availability checks on the Corporate Affairs Commission portal for your proposed names.' },
          { step: '02', title: 'Document collection', desc: 'We collect your valid ID (NIN/Passport), passport photos, and signature via secure chat.' },
          { step: '03', title: 'Certificate & Status Report', desc: 'Receive your official CAC Certificate, Status Report, and TIN within 5-7 business days.' },
        ]}
      />
    </div>
  )
}

// Other Services retained from Tools Hub
function CVOptimiser() {
  const [form, setForm] = useState({ name: '', email: '', role: '', years: '1-3', resume: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.role || !form.resume) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <RequestReceived
        message="One of our team members will review your CV against your target role and send you a detailed ATS optimisation report within 2 business days."
        onReset={() => {
          setSubmitted(false)
          setForm({ name: '', email: '', role: '', years: '1-3', resume: '' })
        }}
      />
    )
  }

  const disabled = loading || !form.name || !form.email || !form.role || !form.resume

  return (
    <div className="grid lg:grid-cols-2 gap-6 h-full">
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
        <div>
          <h3 className="font-display font-700 text-lg mb-1" style={{ color: '#0D0D0D' }}>
            CV Details
          </h3>
          <p className="text-sm" style={{ color: '#6B7280' }}>
            Fill this in and a real person from our team will review your CV and send you tailored recommendations.
          </p>
        </div>
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Full Name *"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
        />
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Email Address *"
          type="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
        />
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Target Role (e.g. Product Manager) *"
          value={form.role}
          onChange={(e) => update('role', e.target.value)}
        />
        <select
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={{ ...fieldStyle, color: '#6B7280' }}
          value={form.years}
          onChange={(e) => update('years', e.target.value)}
        >
          <option value="0-1">0–1 years experience</option>
          <option value="1-3">1–3 years</option>
          <option value="3-6">3–6 years</option>
          <option value="6+">6+ years</option>
        </select>
        <textarea
          className="flex-1 px-4 py-3 text-sm outline-none resize-none rounded-lg"
          style={{ ...fieldStyle, minHeight: '140px' }}
          placeholder="Paste your CV / resume text here... *"
          value={form.resume}
          onChange={(e) => update('resume', e.target.value)}
        />
        <button
          onClick={handleSubmit}
          disabled={disabled}
          className="w-full py-3 rounded-lg font-semibold text-sm transition-all"
          style={{
            backgroundColor: disabled ? '#D1D5DB' : '#17B26A',
            color: '#FFFFFF',
            cursor: disabled ? 'not-allowed' : 'pointer',
            fontFamily: 'var(--font-lj-display)',
          }}
        >
          {loading ? 'Submitting…' : 'Request Human Review'}
        </button>
      </div>

      <WhatHappensNext
        steps={[
          { step: '01', title: 'We review your CV', desc: 'A Lagos Jobs team member reads through your CV against your target role and experience level.' },
          { step: '02', title: 'We run the ATS check', desc: 'We check keyword coverage, formatting, and structure against what actually gets past applicant tracking systems.' },
          { step: '03', title: 'You get it in your inbox', desc: 'Expect a detailed report within 2 business days. Real advice from real people.' },
        ]}
      />
    </div>
  )
}

function LinkedInOptimiser() {
  const [form, setForm] = useState({ name: '', email: '', industry: '', headline: '', about: '', goals: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.industry) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <RequestReceived
        message="One of our team members will review your LinkedIn profile details and get back to you within 2 business days with personalised recommendations."
        onReset={() => {
          setSubmitted(false)
          setForm({ name: '', email: '', industry: '', headline: '', about: '', goals: '' })
        }}
      />
    )
  }

  const disabled = loading || !form.name || !form.email || !form.industry

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
        <div>
          <h3 className="font-display font-700 text-lg mb-1" style={{ color: '#0D0D0D' }}>
            Your LinkedIn Details
          </h3>
          <p className="text-sm" style={{ color: '#6B7280' }}>
            Fill this in and a real person from our team will review it and send you tailored recommendations.
          </p>
        </div>

        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Full Name *"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
        />
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Email Address *"
          type="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
        />
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Industry / Role (e.g. Fintech, Product Manager) *"
          value={form.industry}
          onChange={(e) => update('industry', e.target.value)}
        />
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Current LinkedIn Headline (optional)"
          value={form.headline}
          onChange={(e) => update('headline', e.target.value)}
        />
        <textarea
          className="px-4 py-3 text-sm outline-none resize-none rounded-lg"
          style={{ ...fieldStyle, minHeight: '100px' }}
          placeholder="Current About section (optional — paste it here)"
          value={form.about}
          onChange={(e) => update('about', e.target.value)}
        />
        <textarea
          className="px-4 py-3 text-sm outline-none resize-none rounded-lg"
          style={{ ...fieldStyle, minHeight: '72px' }}
          placeholder="What are you trying to achieve? (e.g. get hired, attract clients, build authority)"
          value={form.goals}
          onChange={(e) => update('goals', e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={disabled}
          className="w-full py-3 rounded-lg font-semibold text-sm transition-all"
          style={{
            backgroundColor: disabled ? '#D1D5DB' : '#17B26A',
            color: '#FFFFFF',
            cursor: disabled ? 'not-allowed' : 'pointer',
            fontFamily: 'var(--font-lj-display)',
          }}
        >
          {loading ? 'Submitting…' : 'Request Human Review'}
        </button>
      </div>

      <WhatHappensNext
        steps={[
          { step: '01', title: 'We review your details', desc: 'A Lagos Jobs team member reads through everything you submitted.' },
          { step: '02', title: 'We craft recommendations', desc: 'We write personalised suggestions for your headline, about section, and positioning.' },
          { step: '03', title: 'You get it in your inbox', desc: 'Expect a detailed response within 2 business days.' },
        ]}
      />
    </div>
  )
}

function PortfolioCreator() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projects, setProjects] = useState([{ title: '', desc: '', link: '' }])
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const addProject = () => setProjects((p) => [...p, { title: '', desc: '', link: '' }])
  const update = (i: number, k: keyof (typeof projects)[0], v: string) => {
    setProjects((p) => p.map((item, idx) => (idx === i ? { ...item, [k]: v } : item)))
  }

  const titled = projects.filter((p) => p.title)

  const handleSubmit = async () => {
    if (!name || !email || titled.length === 0) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <RequestReceived
        message="One of our team members will review your projects and build you a polished portfolio page, then send it over within 2 business days."
        onReset={() => {
          setSubmitted(false)
          setName('')
          setEmail('')
          setProjects([{ title: '', desc: '', link: '' }])
        }}
      />
    )
  }

  const disabled = loading || !name || !email || titled.length === 0

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display font-700 text-lg mb-1" style={{ color: '#0D0D0D' }}>
              Your Projects
            </h3>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              A real person will turn these into a polished portfolio for you.
            </p>
          </div>
          <button
            onClick={addProject}
            className="text-xs font-semibold px-3 py-1.5 rounded-full shrink-0"
            style={{ backgroundColor: 'rgba(23,178,106,0.12)', color: '#17B26A' }}
          >
            + Add Project
          </button>
        </div>
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Full Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Email Address *"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-col gap-4 overflow-y-auto" style={{ maxHeight: '320px' }}>
          {projects.map((p, i) => (
            <div key={i} className="flex flex-col gap-2 p-4 rounded-xl" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
              <input
                className="px-3 py-2 text-sm outline-none bg-white"
                style={{ borderRadius: '6px', border: '1px solid #E5E7EB' }}
                placeholder={`Project ${i + 1} Title`}
                value={p.title}
                onChange={(e) => update(i, 'title', e.target.value)}
              />
              <textarea
                className="px-3 py-2 text-sm outline-none resize-none bg-white h-16"
                style={{ borderRadius: '6px', border: '1px solid #E5E7EB' }}
                placeholder="What you built & impact"
                value={p.desc}
                onChange={(e) => update(i, 'desc', e.target.value)}
              />
              <input
                className="px-3 py-2 text-sm outline-none bg-white"
                style={{ borderRadius: '6px', border: '1px solid #E5E7EB' }}
                placeholder="Link (GitHub, live URL)"
                value={p.link}
                onChange={(e) => update(i, 'link', e.target.value)}
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          disabled={disabled}
          className="w-full py-3 rounded-lg font-semibold text-sm transition-all"
          style={{
            backgroundColor: disabled ? '#D1D5DB' : '#17B26A',
            color: '#FFFFFF',
            cursor: disabled ? 'not-allowed' : 'pointer',
            fontFamily: 'var(--font-lj-display)',
          }}
        >
          {loading ? 'Submitting…' : 'Request Human Review'}
        </button>
      </div>

      <WhatHappensNext
        steps={[
          { step: '01', title: 'We review your projects', desc: 'A Lagos Jobs team member reads through each project you submitted.' },
          { step: '02', title: 'We build your portfolio', desc: 'We write sharp summaries and lay them out in a clean portfolio page.' },
          { step: '03', title: 'You get it in your inbox', desc: 'Expect your finished portfolio within 2 business days.' },
        ]}
      />
    </div>
  )
}

function WebsiteCreator() {
  const [form, setForm] = useState({ name: '', email: '', role: '', bio: '', twitter: '', github: '', linkedin: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.role) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <RequestReceived
        message="One of our team members will put together your personal website copy and layout, then send it over within 2 business days."
        onReset={() => {
          setSubmitted(false)
          setForm({ name: '', email: '', role: '', bio: '', twitter: '', github: '', linkedin: '' })
        }}
      />
    )
  }

  const disabled = loading || !form.name || !form.email || !form.role

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
        <div>
          <h3 className="font-display font-700 text-lg mb-1" style={{ color: '#0D0D0D' }}>
            Site Details
          </h3>
          <p className="text-sm" style={{ color: '#6B7280' }}>
            Fill this in and a real person from our team will put together your site copy and layout.
          </p>
        </div>
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Your Name *"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
        />
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Email Address *"
          type="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
        />
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Role Title (e.g. Software Engineer) *"
          value={form.role}
          onChange={(e) => update('role', e.target.value)}
        />
        <textarea
          className="px-4 py-3 text-sm outline-none resize-none rounded-lg"
          style={{ ...fieldStyle, minHeight: '96px' }}
          placeholder="Your professional bio (optional — paste a draft)"
          value={form.bio}
          onChange={(e) => update('bio', e.target.value)}
        />
        <div className="grid grid-cols-3 gap-2">
          {(['twitter', 'github', 'linkedin'] as const).map((k) => (
            <input
              key={k}
              className="px-3 py-2.5 text-sm outline-none rounded-lg"
              style={fieldStyle}
              placeholder={k.charAt(0).toUpperCase() + k.slice(1)}
              value={form[k]}
              onChange={(e) => update(k, e.target.value)}
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          disabled={disabled}
          className="w-full py-3 rounded-lg font-semibold text-sm transition-all"
          style={{
            backgroundColor: disabled ? '#D1D5DB' : '#17B26A',
            color: '#FFFFFF',
            cursor: disabled ? 'not-allowed' : 'pointer',
            fontFamily: 'var(--font-lj-display)',
          }}
        >
          {loading ? 'Submitting…' : 'Request Human Review'}
        </button>
      </div>

      <WhatHappensNext
        steps={[
          { step: '01', title: 'We review your details', desc: 'A Lagos Jobs team member reads through your role, bio draft, and links.' },
          { step: '02', title: 'We write your site copy', desc: 'We craft a polished bio and layout structure tailored to your role.' },
          { step: '03', title: 'You get it in your inbox', desc: 'Expect your finished site copy within 2 business days.' },
        ]}
      />
    </div>
  )
}

function BrandingGuide() {
  const [form, setForm] = useState({ name: '', email: '', industry: '', strength: '', platform: 'LinkedIn' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.industry) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <RequestReceived
        message="One of our team members will put together your personal branding playbook — content pillars and bio hooks — and send it over within 2 business days."
        onReset={() => {
          setSubmitted(false)
          setForm({ name: '', email: '', industry: '', strength: '', platform: 'LinkedIn' })
        }}
      />
    )
  }

  const disabled = loading || !form.name || !form.email || !form.industry

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
        <div>
          <h3 className="font-display font-700 text-lg mb-1" style={{ color: '#0D0D0D' }}>
            Your Positioning
          </h3>
          <p className="text-sm" style={{ color: '#6B7280' }}>
            Fill this in and a real person from our team will build your branding playbook.
          </p>
        </div>
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Full Name *"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
        />
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Email Address *"
          type="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
        />
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Industry / Field (e.g. FinTech, Healthcare) *"
          value={form.industry}
          onChange={(e) => update('industry', e.target.value)}
        />
        <input
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={fieldStyle}
          placeholder="Your Core Strength (e.g. building data pipelines)"
          value={form.strength}
          onChange={(e) => update('strength', e.target.value)}
        />
        <select
          className="px-4 py-3 text-sm outline-none w-full rounded-lg"
          style={{ ...fieldStyle, color: '#6B7280' }}
          value={form.platform}
          onChange={(e) => update('platform', e.target.value)}
        >
          <option>LinkedIn</option>
          <option>Twitter / X</option>
          <option>All Channels</option>
        </select>
        <button
          onClick={handleSubmit}
          disabled={disabled}
          className="w-full py-3 rounded-lg font-semibold text-sm transition-all"
          style={{
            backgroundColor: disabled ? '#D1D5DB' : '#17B26A',
            color: '#FFFFFF',
            cursor: disabled ? 'not-allowed' : 'pointer',
            fontFamily: 'var(--font-lj-display)',
          }}
        >
          {loading ? 'Submitting…' : 'Request Human Review'}
        </button>
      </div>

      <WhatHappensNext
        steps={[
          { step: '01', title: 'We review your positioning', desc: 'A Lagos Jobs team member reads through your industry, strength, and target platform.' },
          { step: '02', title: 'We build your playbook', desc: 'We write content pillars and bio hooks tailored to your industry.' },
          { step: '03', title: 'You get it in your inbox', desc: 'Expect your branding playbook within 2 business days.' },
        ]}
      />
    </div>
  )
}

// Service Tabs List
const tabs = [
  { id: 'designers', label: 'Brand Designers', icon: Palette, component: BrandDesigners },
  { id: 'cac', label: 'CAC Registration', icon: ShieldCheck, component: CACRegistration },
  { id: 'cv', label: 'CV Optimiser', icon: FileText, component: CVOptimiser },
  { id: 'linkedin', label: 'LinkedIn Optimiser', icon: Link2, component: LinkedInOptimiser },
  { id: 'portfolio', label: 'Portfolio Creator', icon: Briefcase, component: PortfolioCreator },
  { id: 'website', label: 'Website Creator', icon: Globe, component: WebsiteCreator },
  { id: 'branding', label: 'Personal Branding', icon: User, component: BrandingGuide },
]

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams()
  const tabParam = searchParams.get('tab') || 'designers'
  const activeTab = tabs.find((t) => t.id === tabParam) || tabs[0]
  const ActiveComponent = activeTab.component

  const setTab = (id: string) => setSearchParams({ tab: id })

  return (
    <div style={{ backgroundColor: '#F4F5F7', minHeight: '100vh', fontFamily: 'var(--font-lj-body)' }}>
      <div className="relative pt-32 pb-6 px-6 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-lj-display font-700 text-[clamp(2rem,4vw,3rem)] mb-2" style={{ color: '#0D0D0D' }}>
            Services
          </h1>
          <p className="text-base" style={{ color: '#6B7280' }}>
            Professional career services, brand identity solutions, and business setup tools.
          </p>
        </div>
      </div>

      {/* Sticky tab rail */}
      <div
        className="sticky top-16 z-40 px-6 py-3 overflow-x-auto"
        style={{
          backgroundColor: 'rgba(244,247,246,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #F4F5F7',
        }}
      >
        <div className="max-w-[1440px] mx-auto flex gap-2 min-w-max">
          {tabs.map((t) => {
            const Icon = t.icon
            const isActive = t.id === activeTab.id
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200"
                style={{
                  backgroundColor: isActive ? '#0D0D0D' : 'transparent',
                  color: isActive ? '#17B26A' : '#6B7280',
                  border: isActive ? '1px solid rgba(23,178,106,0.3)' : '1px solid transparent',
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                {t.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="max-w-[1440px] mx-auto">
          <ActiveComponent />
        </div>
      </div>
    </div>
  )
}