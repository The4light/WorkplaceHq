import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FileText, Link2, Palette, Globe, User, ShieldCheck, Briefcase, CheckCircle, X, Sparkles, Layers, Shield, ChevronRight } from 'lucide-react'
import SEO from '../../components/SEO'
import { FORMSPREE_IDS, sendFormspreeNotification } from '../../lib/formspree'

function RequestReceived({ message, onReset }: { message: string; onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(23,178,106,0.12)' }}>
        <CheckCircle className="w-7 h-7" style={{ color: '#17B26A' }} />
      </div>
      <h3 className="font-display font-700 text-xl" style={{ color: '#0D0D0D' }}>Request received!</h3>
      <p className="text-sm max-w-sm leading-relaxed" style={{ color: '#6B7280' }}>{message}</p>
      <button onClick={onReset} className="text-sm font-semibold hover:underline" style={{ color: '#17B26A' }}>
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

// Modal Wrapper component for clean scalable interaction
function StudioModal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-xl rounded-2xl p-6 relative shadow-2xl overflow-y-auto max-h-[90vh] border border-gray-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        <div className="mb-6">
          <h3 className="font-display font-700 text-xl text-[#0D0D0D]">{title}</h3>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  )
}

// -- Brand Designers Service --
function BrandDesigners() {
  const [selectedStudio, setSelectedStudio] = useState<any | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<string>('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', brandName: '', brief: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const studios = [
    {
      id: 'doxa-studios',
      name: 'Doxa Studios',
      tagline: 'FAST & ACCESSIBLE',
      badgeColor: '#EEF2FF',
      badgeTextColor: '#4F46E5',
      title: 'Affordable Brand Identity Package',
      startingPrice: '₦80,000',
      toolset: 'Canva & AI-Assisted Design Tools',
      rateDetails: 'Practical visual identity tailored for small businesses, startups, and personal brands.',
      icon: Sparkles,
      layoutType: 'compact',
      packages: [
        {
          name: 'Affordable Visual Identity',
          price: '₦80,000',
          items: [
            'Creative Direction (Moodboard & visual references)',
            'Primary Logo & basic variations',
            'Basic Brand Guidelines (Colour palette, typography, usage)',
            'Basic Brand Stationery (Business card, letterhead, or social assets)',
          ],
        },
      ],
    },
    {
      id: 'hive-studio',
      name: 'Hive Studio',
      tagline: 'VECTOR PRECISION',
      badgeColor: '#FEF3C7',
      badgeTextColor: '#D97706',
      title: 'Full Brand Identity Package',
      startingPrice: '₦250,000 – ₦300,000',
      toolset: 'Adobe Illustrator (100% Scalable Vector Artwork)',
      rateDetails: 'Comprehensive strategic and visual foundation built for long-term brand growth.',
      icon: Layers,
      layoutType: 'standard',
      packages: [
        {
          name: 'Full Identity Package',
          price: '₦250,000 – ₦300,000',
          items: [
            'Comprehensive Creative Direction',
            'Scalable Vector Logo Design',
            'Complete Brand Guide System',
            'Full Brand Stationery Suite',
          ],
        },
      ],
    },
    {
      id: 'lemonayd-studios',
      name: 'Lemonayd Studios',
      tagline: 'FULL AGENCY CREATIVE',
      badgeColor: '#ECFDF5',
      badgeTextColor: '#059669',
      title: 'Full-Scale Creative Brand Agency',
      startingPrice: 'Starting from ₦120,000',
      toolset: 'Professional Suite & Motion Workflows',
      rateDetails: 'Flexible options ranging from starter identity suites to full video, motion, and web styling.',
      icon: Shield,
      layoutType: 'expansive',
      packages: [
        {
          name: 'Brand Design (Starter)',
          price: '₦150,000 – ₦180,000',
          items: ['1 concept, 2 revisions, Basic suite, Simplified Guidelines Document'],
        },
        {
          name: 'Brand Design (Standard)',
          price: '₦300,000 – ₦450,000',
          items: ['2 concepts, 2 revisions, Standard suite, Simplified Guidelines Document'],
        },
        {
          name: 'Brand Design (Premium)',
          price: '₦600,000 – ₦1,200,000',
          items: ['3 concepts, 3 revisions, Premium suite, Full Guidelines Document'],
        },
        {
          name: 'Logo Refresh / Refinement',
          price: '₦120,000 – ₦250,000',
          items: ['Modernising an existing logo'],
        },
        {
          name: 'Social Media Brand Kit',
          price: '₦150,000 – ₦220,000',
          items: ['Templates for posts, stories & highlight covers'],
        },
        {
          name: 'Website Brand Styling',
          price: '₦300,000 – ₦500,000',
          items: ['Visual direction & UI styling for a website build'],
        },
      ],
    },
  ]

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleOpenBooking = (studio: any, pkgName?: string) => {
    setSelectedStudio(studio)
    setSelectedPackage(pkgName || studio.packages[0]?.name || 'General Inquiry')
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !selectedStudio) return
    setLoading(true)

    await sendFormspreeNotification(FORMSPREE_IDS.LAGOS_JOBS_CONTACT, {
      service: 'Lagos Jobs - Brand Designers',
      studioName: selectedStudio?.name,
      packageChoice: selectedPackage,
      clientName: form.name,
      clientEmail: form.email,
      clientPhone: form.phone,
      brandName: form.brandName,
      brief: form.brief,
      submittedAt: new Date().toISOString(),
    })

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="font-display font-700 text-xl mb-1" style={{ color: '#0D0D0D' }}>
          Vetted Branding Partners & Studios
        </h3>
        <p className="text-sm" style={{ color: '#6B7280' }}>
          Explore studio rate cards and directly request engagement with specialized creative partners.
        </p>
      </div>

      {/* Brand Cards - Asymmetric Unique Layouts per Studio */}
      <div className="flex flex-col gap-8">
        {studios.map((s) => {
          const IconComponent = s.icon
          const isExpansive = s.layoutType === 'expansive'

          return (
            <div
              key={s.id}
              className="p-6 md:p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-6"
            >
              {/* Header section with brand personality */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: s.badgeColor, color: s.badgeTextColor }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display font-700 text-xl text-[#0D0D0D]">{s.name}</h4>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase"
                        style={{ backgroundColor: s.badgeColor, color: s.badgeTextColor }}
                      >
                        {s.tagline}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{s.title}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-[11px] text-gray-400 uppercase font-mono">Starting From</p>
                    <p className="font-display font-700 text-base text-[#0D0D0D]">{s.startingPrice}</p>
                  </div>
                  <button
                    onClick={() => handleOpenBooking(s)}
                    className="px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-[#0D0D0D] hover:bg-[#17B26A] transition-colors flex items-center gap-1.5"
                  >
                    Request Booking <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Sub-details */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 bg-gray-50 p-3.5 rounded-xl">
                <span className="font-mono bg-white px-2.5 py-1 rounded border border-gray-200 text-gray-700">
                  Tooling: {s.toolset}
                </span>
                <span className="leading-relaxed">{s.rateDetails}</span>
              </div>

              {/* Package Display Grid */}
              <div className="mt-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Package Options ({s.packages.length})
                </p>

                <div className={`grid gap-4 ${isExpansive ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                  {s.packages.map((pkg) => (
                    <div
                      key={pkg.name}
                      onClick={() => handleOpenBooking(s, pkg.name)}
                      className="p-4 rounded-2xl border border-gray-200 hover:border-[#17B26A] bg-white hover:bg-emerald-50/20 transition-all cursor-pointer flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-semibold text-sm text-[#0D0D0D] group-hover:text-[#17B26A] transition-colors">
                            {pkg.name}
                          </span>
                          <span className="text-xs font-bold font-mono text-[#17B26A] shrink-0 bg-emerald-50 px-2 py-0.5 rounded">
                            {pkg.price}
                          </span>
                        </div>
                        <ul className="flex flex-col gap-1.5 my-3">
                          {pkg.items.map((item, idx) => (
                            <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#17B26A] shrink-0 mt-1.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span className="text-[11px] font-semibold text-[#17B26A] mt-2 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Select package & order &rarr;
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Scalable Modal Form */}
      <StudioModal
        isOpen={Boolean(selectedStudio)}
        onClose={() => setSelectedStudio(null)}
        title={submitted ? 'Request Received' : `Hire ${selectedStudio?.name}`}
        subtitle={submitted ? undefined : 'Fill in your project scope details to initiate discovery.'}
      >
        {submitted ? (
          <RequestReceived
            message="Your request has been received. Our team and the selected branding studio will reach out with a detailed quote and discovery call booking within 24 hours."
            onReset={() => {
              setSubmitted(false)
              setSelectedStudio(null)
              setForm({ name: '', email: '', phone: '', brandName: '', brief: '' })
            }}
          />
        ) : (
          <div className="flex flex-col gap-4">
            {selectedStudio && (
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#0D0D0D]">Package Choice *</label>
                <select
                  className="px-4 py-3 text-sm outline-none w-full rounded-lg"
                  style={fieldStyle}
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                >
                  {selectedStudio.packages.map((pkg: any) => (
                    <option key={pkg.name} value={pkg.name}>
                      {pkg.name} ({pkg.price})
                    </option>
                  ))}
                </select>
              </div>
            )}

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
              placeholder="Brief description of what your business does and your design timeline..."
              value={form.brief}
              onChange={(e) => update('brief', e.target.value)}
            />

            <button
              onClick={handleSubmit}
              disabled={loading || !form.name || !form.email}
              className="w-full py-3 rounded-lg font-semibold text-sm transition-all mt-2"
              style={{
                backgroundColor: loading || !form.name || !form.email ? '#D1D5DB' : '#17B26A',
                color: '#FFFFFF',
                cursor: loading || !form.name || !form.email ? 'not-allowed' : 'pointer',
                fontFamily: 'var(--font-lj-display)',
              }}
            >
              {loading ? 'Submitting…' : 'Submit Direct Engagement Request'}
            </button>
          </div>
        )}
      </StudioModal>
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

    await sendFormspreeNotification(FORMSPREE_IDS.LAGOS_JOBS_CONTACT, {
      service: 'Lagos Jobs - CAC Registration',
      fullName: form.name,
      email: form.email,
      phone: form.phone,
      businessType: form.businessType,
      proposedNameOption1: form.nameOption1,
      proposedNameOption2: form.nameOption2,
      submittedAt: new Date().toISOString(),
    })

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

function CVOptimiser() {
  const [form, setForm] = useState({ name: '', email: '', role: '', years: '1-3', resume: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.role || !form.resume) return
    setLoading(true)

    await sendFormspreeNotification(FORMSPREE_IDS.LAGOS_JOBS_CONTACT, {
      service: 'Lagos Jobs - CV Optimiser',
      fullName: form.name,
      email: form.email,
      targetRole: form.role,
      yearsOfExperience: form.years,
      resumeText: form.resume,
      submittedAt: new Date().toISOString(),
    })

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

    await sendFormspreeNotification(FORMSPREE_IDS.LAGOS_JOBS_CONTACT, {
      service: 'Lagos Jobs - LinkedIn Optimiser',
      fullName: form.name,
      email: form.email,
      industry: form.industry,
      headline: form.headline,
      about: form.about,
      goals: form.goals,
      submittedAt: new Date().toISOString(),
    })

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

    await sendFormspreeNotification(FORMSPREE_IDS.LAGOS_JOBS_CONTACT, {
      service: 'Lagos Jobs - Portfolio Creator',
      fullName: name,
      email,
      projects: JSON.stringify(titled),
      submittedAt: new Date().toISOString(),
    })

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

    await sendFormspreeNotification(FORMSPREE_IDS.LAGOS_JOBS_CONTACT, {
      service: 'Lagos Jobs - Website Creator',
      fullName: form.name,
      email: form.email,
      role: form.role,
      bio: form.bio,
      twitter: form.twitter,
      github: form.github,
      linkedin: form.linkedin,
      submittedAt: new Date().toISOString(),
    })

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

    await sendFormspreeNotification(FORMSPREE_IDS.LAGOS_JOBS_CONTACT, {
      service: 'Lagos Jobs - Personal Branding Guide',
      fullName: form.name,
      email: form.email,
      industry: form.industry,
      strength: form.strength,
      platform: form.platform,
      submittedAt: new Date().toISOString(),
    })

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
      <SEO
        title="Career Tools & Services | Lagos Jobs"
        description="CV review, ATS scoring, and career support tools from Lagos Jobs — built to help job seekers apply with confidence."
        path="/lagos-jobs/services"
      />
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