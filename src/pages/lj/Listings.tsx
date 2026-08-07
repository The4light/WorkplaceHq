import { useState } from 'react'
import { Search, MapPin, Clock, Mail, CheckCircle2, Sparkles, Building2, X, ArrowUpRight, Award, ShieldCheck, PhoneCall } from 'lucide-react'

const jobs = [
  {
    id: 1,
    title: 'Senior Social Media Manager',
    company: 'Fitcare Health',
    location: 'Lekki Phase 1, Lagos',
    type: 'Full-time',
    mode: 'On-site',
    salary: '₦300,000 – ₦400,000 / mo',
    applyContact: 'careers@fitcarehealth.com',
    contactType: 'email',
    isFeatured: true,
    posted: 'Just now',
    desc: 'Fitcare Health is seeking an experienced Senior Social Media Manager to drive brand growth and manage our presence across all digital channels.',
    responsibilities: [
      'Post daily across Instagram, TikTok, Snapchat, WhatsApp, and all brand channels.',
      'Develop original content concepts and execute daily high-converting Stories.',
      'Craft sharp, on-brand captions tailored to our target audience.',
      'Manage the full content calendar and posting schedule.'
    ],
    reqs: [
      'Extensive senior-level social media management experience (wellness, luxury, or lifestyle preference).',
      'Meticulous attention to detail with zero tolerance for mistakes.',
      'Up-to-date with current viral trends, platform algorithms, and emerging features.',
      'Bonus: Visual/phone photography and videography skills.',
      'Bonus: Owns a personal smartphone with an exceptional camera quality.'
    ]
  },
  {
    id: 2,
    title: 'Experienced Travel Manager',
    company: 'Light Heights Global Services Limited',
    location: 'Ikeja, Lagos',
    type: 'Full-time',
    mode: 'On-site',
    salary: '₦400,000 – ₦600,000 / mo',
    applyContact: 'bestrecruilltd@gmail.com',
    contactType: 'email',
    isFeatured: true,
    posted: '1 day ago',
    desc: 'Light Heights Global Services is seeking a results-driven Travel Manager to lead end-to-end travel operations, study abroad processing, and international migration consultancy.',
    responsibilities: [
      'Drive business growth and manage admissions processing across top global study destinations.',
      'Provide visa application support for visitor visas, employment pathways, and residency programs.',
      'Oversee lead generation, conversion, and sales pipeline management via CRM systems.',
      'Deliver immigration advisory services for UK, Canada, USA, Australia, Ireland, Germany, and Europe.'
    ],
    reqs: [
      'Minimum of 5 years professional experience in travel and education consultancy.',
      'Proven expertise in academic travel services (Study Abroad) and non-academic visa programs.',
      'Demonstrated success in admissions processing and visa advisory.',
      'Includes performance-based incentives and commission bonuses.'
    ]
  },
  {
    id: 3,
    title: 'English Language Teacher',
    company: 'Jadof College',
    location: 'Bariga or Ikorodu, Lagos',
    type: 'Full-time',
    mode: 'On-site',
    salary: '₦100,000 – ₦120,000 / mo',
    applyContact: 'jadofcollege9@gmail.com',
    contactType: 'email',
    isFeatured: false,
    posted: '2 days ago',
    desc: 'Jadof College is seeking a passionate and experienced English Language Teacher to join our academic faculty. Successful candidates may be posted to either our Bariga or Ikorodu branch.',
    responsibilities: [
      'Deliver engaging English Language lessons following modern curriculum standards.',
      'Evaluate student progress, facilitate coursework, and maintain academic records.'
    ],
    reqs: [
      'Minimum of 2 years teaching experience.',
      'B.A. or B.Ed. in English, Education, or a related discipline.',
      'Accommodation Provided.'
    ]
  },
  {
    id: 4,
    title: 'Front Desk Officer',
    company: 'Premium Spa & Wellness',
    location: 'Lekki Phase 1, Lagos',
    type: 'Full-time',
    mode: 'On-site',
    salary: '₦80,000 / mo',
    applyContact: '+2348025720847',
    contactType: 'phone',
    isFeatured: false,
    posted: '3 days ago',
    desc: 'Become part of a premium spa where wellness meets excellence. We are looking for a friendly, professional Front Desk Officer ready to deliver exceptional customer experiences.',
    responsibilities: [
      'Manage guest reception, booking appointments, and customer inquiries.',
      'Maintain an organized, welcoming front desk environment.'
    ],
    reqs: [
      'Friendly, professional demeanor with relevant customer service experience.',
      'Ready to start immediately.',
      'Accommodation Provided.',
      'How to Apply: Send CV and a recent picture via WhatsApp/Phone.'
    ]
  },
  {
    id: 5,
    title: 'Customer Sales Officer',
    company: 'Seal Group',
    location: 'Lagos',
    type: 'Full-time',
    mode: 'On-site',
    salary: 'Competitive / Performance Based',
    applyContact: 'HCM@sealgroupnigeria.com',
    contactType: 'email',
    isFeatured: false,
    posted: '3 days ago',
    desc: 'Seal Group is hiring a motivated Customer Sales Officer to expand client reach and drive revenue growth across key markets.',
    responsibilities: [
      'Identify new business opportunities and manage client outreach.',
      'Execute direct sales strategies to meet and exceed monthly targets.'
    ],
    reqs: [
      'Minimum of OND, HND, or B.Sc. in any discipline.',
      'Must have a strong sales track record and relevant sales experience.'
    ]
  }
]

export default function LJListings() {
  const [selectedJob, setSelectedJob] = useState(jobs[0])
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [filterMode, setFilterMode] = useState('All')

  const filtered = jobs.filter(j => {
    const matchesQuery = j.title.toLowerCase().includes(search.toLowerCase()) ||
                         j.company.toLowerCase().includes(search.toLowerCase()) ||
                         j.location.toLowerCase().includes(search.toLowerCase())
    const matchesMode = filterMode === 'All' || j.mode === filterMode
    return matchesQuery && matchesMode
  })

  const handleSelectJob = (job: typeof jobs[0]) => {
    setSelectedJob(job)
    setIsMobileDrawerOpen(true)
  }

  return (
    <div style={{ backgroundColor: '#F4F5F7', minHeight: '100vh', fontFamily: 'var(--font-lj-body)' }}>
      
      {/* Header Banner */}
      <div className="relative pt-28 pb-8 px-4 sm:px-6 overflow-hidden bg-[#0D0D0D]">
        <div className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 rounded-full" style={{ background: '#17B26A', filter: 'blur(120px)', opacity: 0.25 }} />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-96 h-96 rounded-full" style={{ background: '#17B26A', filter: 'blur(120px)', opacity: 0.2 }} />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 text-[#17B26A] bg-[#17B26A]/10 border border-[#17B26A]/20">
            <Sparkles className="w-3.5 h-3.5" /> Curated Lagos Hiring
          </div>
          <h1 className="font-lj-display font-700 text-3xl sm:text-5xl text-white mb-3">
            Active Job Opportunities
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mb-6">
            Direct access to verified positions across top companies and brands in Lagos.
          </p>

          {/* Search Input */}
          <div className="max-w-2xl mb-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                className="w-full pl-11 pr-4 py-3 text-sm rounded-xl outline-none bg-white/10 text-white placeholder-gray-400 border border-white/15 focus:border-[#17B26A] backdrop-blur-md transition-all"
                placeholder="Search by job title, employer, or area..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Mobile-Friendly Horizontal Pill Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {['All', 'On-site', 'Hybrid', 'Remote'].map(mode => {
              const isActive = filterMode === mode
              return (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setFilterMode(mode)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all whitespace-nowrap shrink-0 border ${
                    isActive
                      ? 'bg-[#17B26A] text-white border-[#17B26A] shadow-md shadow-[#17B26A]/20'
                      : 'bg-white/10 text-gray-300 border-white/15 hover:bg-white/20'
                  }`}
                >
                  {mode === 'All' ? 'All Work Modes' : mode}
                </button>
              )
            })}
          </div>

        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6">
        {/* items-stretch ensures left and right columns share the exact same height */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Feed Column - Matched height to right panel */}
          <div className="lg:col-span-5 flex flex-col h-full min-h-0">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex justify-between items-center shrink-0">
              <span>Showing {filtered.length} Roles</span>
              <span className="text-[#17B26A]">Tap to inspect details</span>
            </div>

            {/* Scrollable Feed List strictly bounded to panel height */}
            <div className="space-y-3 overflow-y-auto pr-1 flex-1 min-h-0 scrollbar-thin scrollbar-thumb-gray-300">
              {filtered.map(j => {
                const isSelected = selectedJob.id === j.id

                return (
                  <div
                    key={j.id}
                    onClick={() => handleSelectJob(j)}
                    className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                      isSelected 
                        ? 'bg-white border-[#17B26A] shadow-md ring-2 ring-[#17B26A]/15' 
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2">
                        {j.isFeatured && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#17B26A] text-white">
                            Featured
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F4F5F7] text-[#0D0D0D] border border-[#F4F5F7]">
                          {j.mode}
                        </span>
                      </div>

                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {j.posted}
                      </span>
                    </div>

                    <h3 className="font-lj-display font-700 text-base sm:text-lg text-gray-900 group-hover:text-[#17B26A] transition-colors mb-1">
                      {j.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-3">
                      <span className="font-semibold text-gray-800 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-gray-400" /> {j.company}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#17B26A]" /> {j.location}
                      </span>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="font-lj-display font-700 text-sm text-[#0D0D0D]">
                        {j.salary}
                      </span>
                      <span className="text-xs font-bold text-[#17B26A] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                        Inspect <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Desktop Right Detail Reader */}
          <div className="hidden lg:block lg:col-span-7">
            <JobDetailPanel job={selectedJob} />
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-xl bg-white h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#17B26A]">Job Inspection</span>
                <button 
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <JobDetailPanel job={selectedJob} />
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

/* Detailed Inspection Card */
function JobDetailPanel({ job }: { job: typeof jobs[0] }) {
  const isPhone = job.contactType === 'phone'
  const actionHref = isPhone 
    ? `https://wa.me/${job.applyContact.replace(/[^0-9]/g, '')}`
    : `mailto:${job.applyContact}?subject=${encodeURIComponent(`Application for ${job.title}`)}`

  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-lg relative overflow-hidden h-full">
      
      <div className="relative z-10 mb-6 pb-6 border-b border-gray-100">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {job.isFeatured && (
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#17B26A] text-white flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> Verified Opportunity
            </span>
          )}
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#17B26A]/10 text-[#0D0D0D] border border-[#17B26A]/20 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#17B26A]" /> Active Hiring
          </span>
        </div>

        <h2 className="font-lj-display font-700 text-2xl sm:text-3xl text-gray-900 mb-2">
          {job.title}
        </h2>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 font-medium mb-4">
          <span className="flex items-center gap-1.5 text-gray-900 font-bold text-base">
            <Building2 className="w-4 h-4 text-[#17B26A]" /> {job.company}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#17B26A]" /> {job.location}
          </span>
          <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-gray-100 text-gray-700">
            {job.mode}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-[#0D0D0D] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#17B26A] font-bold">Monthly Compensation</div>
            <div className="font-lj-display font-700 text-xl sm:text-2xl text-white">{job.salary}</div>
          </div>
          <a
            href={actionHref}
            target={isPhone ? "_blank" : "_self"}
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all hover:bg-[#17B26A]/90 flex items-center justify-center gap-2 shadow-md"
            style={{ backgroundColor: '#17B26A', fontFamily: 'var(--font-lj-display)' }}
          >
            {isPhone ? <PhoneCall className="w-4 h-4" /> : <Mail className="w-4 h-4" />} 
            {isPhone ? 'Apply via WhatsApp' : 'Apply Directly'}
          </a>
        </div>
      </div>

      {/* About */}
      <div className="mb-6">
        <h3 className="font-lj-display font-700 text-xs uppercase tracking-wider text-gray-400 mb-2">
          About the Role
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {job.desc}
        </p>
      </div>

      {/* Responsibilities */}
      {job.responsibilities && job.responsibilities.length > 0 && (
        <div className="mb-6">
          <h3 className="font-lj-display font-700 text-xs uppercase tracking-wider text-gray-400 mb-3">
            Key Responsibilities
          </h3>
          <ul className="space-y-2.5">
            {job.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                <div className="w-2 h-2 rounded-full bg-[#17B26A] shrink-0 mt-1.5" />
                <span className="leading-normal">{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Requirements */}
      <div className="mb-8">
        <h3 className="font-lj-display font-700 text-xs uppercase tracking-wider text-gray-400 mb-3">
          Requirements & Qualifications
        </h3>
        <ul className="space-y-2.5">
          {job.reqs.map((req, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-[#17B26A] shrink-0 mt-0.5" />
              <span className="leading-normal">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Application Instructions */}
      <div className="p-5 rounded-2xl bg-[#17B26A]/10 border border-[#17B26A]/20 text-[#0D0D0D] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-bold text-sm text-[#0D0D0D]">Application Instructions</div>
          <div className="text-xs text-[#0D0D0D] mt-0.5">
            {isPhone ? (
              <>Send your CV and recent picture to <span className="font-semibold underline">{job.applyContact}</span>.</>
            ) : (
              <>Send your CV to <span className="font-semibold underline">{job.applyContact}</span> with subject <span className="font-mono bg-[#F4F5F7] px-1.5 py-0.5 rounded text-[#0D0D0D]">"{job.title}"</span>.</>
            )}
          </div>
        </div>
        <a
          href={actionHref}
          target={isPhone ? "_blank" : "_self"}
          rel="noreferrer"
          className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#0D0D0D] text-white font-bold text-xs uppercase tracking-wider hover:bg-black shrink-0 text-center"
        >
          {isPhone ? 'Open WhatsApp' : 'Send Email'}
        </a>
      </div>

    </div>
  )
} 