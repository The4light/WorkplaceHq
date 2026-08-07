import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import {
  GraduationCap,
  Users,
  Briefcase,
  ArrowRight,
  Clock,
  BookOpen,
  Calendar,
  Search,
  Lightbulb,
  Wrench,
  TrendingUp,
  X,
} from 'lucide-react'

type ServiceId = 'training' | 'workshops' | 'consulting'

const services: {
  id: ServiceId
  label: string
  icon: typeof GraduationCap
  description: string
}[] = [
  {
    id: 'training',
    label: 'Training',
    icon: GraduationCap,
    description:
      'Structured corporate training programs that build the skills your teams need to perform — from AI and automation to sales, communication, and performance management. Every program is practical, measurable, and built around real workplace outcomes.',
  },
  {
    id: 'workshops',
    label: 'Workshops',
    icon: Users,
    description:
      'Focused, hands-on sessions that move teams from knowing to doing. Delivered for teams of any size — every session ends with clear actions your people can implement immediately.',
  },
  {
    id: 'consulting',
    label: 'Consulting',
    icon: Briefcase,
    description:
      'We identify what is holding your teams back and build a clear plan to fix it. From performance systems to organisational structure and talent development — you leave with a roadmap, not just a conversation.',
  },
]

const programs = [
  {
    title: 'AI Transformation',
    duration: '4 weeks',
    size: '10–50',
    modules: ['AI Fundamentals', 'Prompt Engineering', 'Tool Integration', 'Change Readiness'],
    outcomes: 'Teams capable of deploying AI tools autonomously within 60 days post-training.',
    level: 'Foundation',
  },
  {
    title: 'Customer Experience',
    duration: '5 weeks',
    size: '10–60',
    modules: ['Journey Mapping', 'Service Blueprinting', 'Frontline Excellence', 'NPS Optimization'],
    outcomes: '+15 NPS improvement within 90 days of deployment.',
    level: 'Practitioner',
  },
  {
    title: 'Sales',
    duration: '4 weeks',
    size: '10–40',
    modules: ['Pipeline Discipline', 'Objection Handling', 'Negotiation Tactics', 'Closing Frameworks'],
    outcomes: 'Structured sales process with measurable conversion lift within one quarter.',
    level: 'Practitioner',
  },
  {
    title: 'Communication',
    duration: '3 weeks',
    size: '10–50',
    modules: ['Clear Writing', 'Difficult Conversations', 'Cross-Team Alignment', 'Feedback Culture'],
    outcomes: 'Teams communicating with less friction and fewer dropped handoffs.',
    level: 'Foundation',
  },
  {
    title: 'Presentation Skills',
    duration: '2 weeks',
    size: '5–30',
    modules: ['Structuring a Narrative', 'Executive Presence', 'Visual Storytelling', 'Q&A Handling'],
    outcomes: 'Confident presenters ready for client and leadership rooms.',
    level: 'Foundation',
  },
  {
    title: 'Performance Tracking and Management',
    duration: '6 weeks',
    size: '15–80',
    modules: ['KPI Architecture', 'Review Cadences', 'Accountability Systems', 'Continuous Improvement'],
    outcomes: '25–40% improvement in goal-completion rates within one quarter.',
    level: 'Advanced',
  },
  {
    title: 'Automation',
    duration: '5 weeks',
    size: '10–50',
    modules: ['Workflow Mapping', 'No-Code Tooling', 'Integration Design', 'Maintenance & Ownership'],
    outcomes: 'Manual, repetitive work automated and documented within 90 days.',
    level: 'Advanced',
  },
]

const levelColors: Record<string, [string, string]> = {
  Foundation: ['rgba(16,185,129,0.12)', '#065F46'],
  Advanced: ['rgba(217,119,6,0.12)', '#92400E'],
  Executive: ['rgba(11,60,45,0.1)', '#0B3C2D'],
  Practitioner: ['rgba(59,130,246,0.1)', '#1D4ED8'],
}

const workshops = [
  {
    title: '1-Day AI Integration Bootcamp',
    subtitle: 'From zero to AI-augmented workflows in 8 hours.',
    duration: '1 Day',
    seats: 20,
    agenda: [
      { time: '09:00', item: 'AI Landscape & Readiness Assessment' },
      { time: '10:30', item: 'Tool Selection Masterclass' },
      { time: '12:00', item: 'Lunch & Networking' },
      { time: '13:00', item: 'Live Integration Sprints' },
      { time: '15:30', item: 'Implementation Roadmapping' },
      { time: '17:00', item: 'Wrap-up & Action Plans' },
    ],
    next: 'Feb 14, 2025 · Lagos',
  },
  {
    title: 'Operations Streamlining Sprint',
    subtitle: 'Diagnose and redesign your core workflows in 2 days.',
    duration: '2 Days',
    seats: 15,
    agenda: [
      { time: 'Day 1', item: 'Current State Audit & Process Mapping' },
      { time: 'Day 1', item: 'Bottleneck Identification Workshop' },
      { time: 'Day 2', item: 'Future State Design Session' },
      { time: 'Day 2', item: 'SOP Writing & Handoff Protocols' },
      { time: 'Day 2', item: 'KPI Architecture & Pilot Planning' },
    ],
    next: 'Mar 3–4, 2025 · Lagos',
  },
]

const phases = [
  {
    phase: 'Phase 1',
    title: 'Consultation for Performance Management',
    duration: 'Weeks 1–3',
    icon: Search,
    desc: 'Deep-dive audit of how performance is currently tracked, reviewed, and rewarded. We identify root causes, not symptoms.',
    deliverables: ['Org Health Report', 'Performance System Gap Analysis', 'Accountability Framework'],
  },
  {
    phase: 'Phase 2',
    title: 'Consultation for Recruitment',
    duration: 'Weeks 4–7',
    icon: Lightbulb,
    desc: 'Design of a hiring system that finds and screens for the right people faster, with less guesswork.',
    deliverables: ['Hiring Scorecard Framework', 'Interview Structure Redesign', 'Sourcing Strategy'],
  },
  {
    phase: 'Phase 3',
    title: 'Execution & Build',
    duration: 'Weeks 8–18',
    icon: Wrench,
    desc: 'Embedded implementation support. We work alongside your teams to build the systems and habits defined above.',
    deliverables: ['Systems Deployed', 'Manager Training Delivered', 'Process Documentation'],
  },
  {
    phase: 'Phase 4',
    title: 'Optimization & Handoff',
    duration: 'Weeks 19–24',
    icon: TrendingUp,
    desc: 'Performance measurement, iteration, and capability transfer. We leave your team able to sustain what was built.',
    deliverables: ['Performance Dashboard', 'Capability Transfer Report', 'Ongoing Advisory (Optional)'],
  },
]

const panelVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' as const } },
} satisfies Variants

const gridVariants = {
  animate: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
} satisfies Variants

const itemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
} satisfies Variants

export default function WHQServices() {
  const [active, setActive] = useState<ServiceId>('training')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContext, setModalContext] = useState('')
  const [modalWorkshop, setModalWorkshop] = useState<string | null>(null)
  const [seats, setSeats] = useState(1)

  const activeService = services.find(s => s.id === active)!

  const openRequestModal = (context: string) => {
    setModalContext(context)
    setModalOpen(true)
  }

  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* Hero */}
      <section className="px-6 pt-32 pb-14 sm:pt-36 sm:pb-16">
        <div className="max-w-[1100px] mx-auto text-center">
          <h1
            className="font-display font-700 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight mb-5"
            style={{ color: '#1A1A1A' }}
          >
            What We Do
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#4B4B4B' }}>
            Structured programmes and consulting engagements built around real workplace outcomes.
          </p>
        </div>
      </section>

      {/* Selector */}
      <section className="px-6">
        <div className="max-w-[1100px] mx-auto">
          <div
            role="tablist"
            aria-label="Service categories"
            className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #E6E5E0' }}
          >
            {services.map(s => {
              const Icon = s.icon
              const isActive = active === s.id
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(s.id)}
                  className="flex-1 flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200"
                  style={{
                    backgroundColor: isActive ? '#0B3C2D' : 'transparent',
                    color: isActive ? '#FFFFFF' : '#4B4B4B',
                    fontFamily: 'var(--font-display)',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(11,60,45,0.06)'
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: isActive ? '#1DA54A' : '#0B3C2D' }} />
                  {s.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detail panel */}
      <section className="px-6 py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={active} variants={panelVariants} initial="initial" animate="animate" exit="exit">
              <div className="flex items-start gap-4 mb-8 max-w-[1100px] mx-auto">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(11,60,45,0.07)' }}
                >
                  <activeService.icon className="w-6 h-6" style={{ color: '#0B3C2D' }} />
                </div>
                <div>
                  <h2 className="font-display font-700 text-2xl sm:text-3xl mb-2" style={{ color: '#1A1A1A' }}>
                    {activeService.label}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed max-w-2xl" style={{ color: '#4B4B4B' }}>
                    {activeService.description}
                  </p>
                </div>
              </div>

              {/* Training: full programme detail cards */}
              {active === 'training' && (
                <motion.div
                  variants={gridVariants}
                  initial="initial"
                  animate="animate"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {programs.map(p => {
                    const [bg, color] = levelColors[p.level]
                    return (
                      <motion.div
                        key={p.title}
                        variants={itemVariants}
                        className="p-6 rounded-2xl flex flex-col gap-4 transition-all duration-200"
                        style={{ backgroundColor: '#FFFFFF', border: '1px solid #E6E5E0' }}
                        whileHover={{ y: -3, borderColor: '#1DA54A' }}
                      >
                        <div>
                          <span
                            className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2"
                            style={{ backgroundColor: bg, color }}
                          >
                            {p.level}
                          </span>
                          <h3 className="font-display font-700 text-lg" style={{ color: '#1A1A1A' }}>
                            {p.title}
                          </h3>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex items-center gap-1.5 text-xs" style={{ color: '#4B4B4B' }}>
                            <Clock className="w-3.5 h-3.5" style={{ color: '#0B3C2D' }} /> {p.duration}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs" style={{ color: '#4B4B4B' }}>
                            <Users className="w-3.5 h-3.5" style={{ color: '#0B3C2D' }} /> {p.size} people
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9CA3AF' }}>
                            Module Breakdown
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {p.modules.map(m => (
                              <span
                                key={m}
                                className="px-2 py-1 rounded-md text-xs"
                                style={{ backgroundColor: 'var(--whq-bg)', color: '#1A1A1A', border: '1px solid #E6E5E0' }}
                              >
                                {m}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(11,60,45,0.04)' }}>
                          <div className="flex items-start gap-2">
                            <BookOpen className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: '#0B3C2D' }} />
                            <p className="text-xs" style={{ color: '#4B4B4B' }}>
                              {p.outcomes}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => openRequestModal(p.title)}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-xs cursor-pointer transition-all duration-200 hover:-translate-y-0.5 self-start"
                          style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}
                        >
                          Request Training Deck <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </motion.div>
                    )
                  })}
                </motion.div>
              )}

              {/* Workshops: full agenda cards */}
              {active === 'workshops' && (
                <motion.div variants={gridVariants} initial="initial" animate="animate" className="grid lg:grid-cols-2 gap-8">
                  {workshops.map(w => (
                    <motion.div
                      key={w.title}
                      variants={itemVariants}
                      className="rounded-2xl overflow-hidden transition-all duration-200"
                      style={{ backgroundColor: '#FFFFFF', border: '1px solid #E6E5E0' }}
                      whileHover={{ y: -3 }}
                    >
                      <div className="p-7 pb-0">
                        <div className="flex items-center gap-3 mb-1">
                          <span
                            className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                            style={{ backgroundColor: 'rgba(217,119,6,0.12)', color: '#92400E' }}
                          >
                            {w.duration}
                          </span>
                          <div className="flex items-center gap-1 text-xs" style={{ color: '#9CA3AF' }}>
                            <Users className="w-3 h-3" /> Max {w.seats} seats
                          </div>
                        </div>
                        <h3 className="font-display font-700 text-xl mb-1 mt-3" style={{ color: '#1A1A1A' }}>
                          {w.title}
                        </h3>
                        <p className="text-sm mb-5" style={{ color: '#4B4B4B' }}>
                          {w.subtitle}
                        </p>
                        <div className="flex items-center gap-2 text-sm mb-6" style={{ color: '#4B4B4B' }}>
                          <Calendar className="w-3.5 h-3.5" style={{ color: '#1DA54A' }} />
                          Next session: <strong style={{ color: '#0B3C2D' }}>{w.next}</strong>
                        </div>
                      </div>

                      <div className="px-7 pb-7">
                        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#9CA3AF' }}>
                          Agenda
                        </div>
                        <div className="relative">
                          <div className="absolute left-[46px] top-0 bottom-0 w-px" style={{ backgroundColor: '#E6E5E0' }} />
                          <div className="flex flex-col gap-4">
                            {w.agenda.map((a, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <span className="text-xs font-mono shrink-0 w-10 text-right" style={{ color: '#9CA3AF' }}>
                                  {a.time}
                                </span>
                                <div
                                  className="relative z-10 w-2 h-2 rounded-full mt-1.5 shrink-0 brand-dot-pulse"
                                  style={{ backgroundColor: '#1DA54A' }}
                                />
                                <span className="text-sm" style={{ color: '#1A1A1A' }}>
                                  {a.item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => setModalWorkshop(w.title)}
                          className="mt-6 flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                          style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}
                        >
                          Reserve a Seat <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Consulting: phase timeline */}
              {active === 'consulting' && (
                <motion.div variants={itemVariants} initial="initial" animate="animate">
                  <div className="relative">
                    <div className="hidden lg:block absolute left-[200px] top-8 bottom-8 w-px" style={{ backgroundColor: '#E6E5E0' }} />
                    <div className="flex flex-col gap-8">
                      {phases.map((p, i) => {
                        const Icon = p.icon
                        return (
                          <div key={p.phase} className="grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-12 items-start">
                            <div className="flex lg:flex-col items-center lg:items-end gap-4 lg:gap-2 lg:pr-12">
                              <div
                                className="hidden lg:flex w-3 h-3 rounded-full shrink-0 lg:ml-auto brand-dot-pulse"
                                style={{ backgroundColor: '#1DA54A', boxShadow: '0 0 0 4px rgba(29,165,74,0.2)' }}
                              />
                              <div className="text-right">
                                <div className="font-display font-700 text-sm" style={{ color: '#0B3C2D' }}>
                                  {p.phase}
                                </div>
                                <div className="text-xs" style={{ color: '#9CA3AF' }}>
                                  {p.duration}
                                </div>
                              </div>
                            </div>

                            <div
                              className="p-7 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
                              style={{
                                backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#0B3C2D',
                                border: `1px solid ${i % 2 === 0 ? '#E6E5E0' : 'rgba(16,185,129,0.2)'}`,
                              }}
                            >
                              <div className="flex items-center gap-3 mb-3">
                                <div
                                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                                  style={{ backgroundColor: i % 2 === 0 ? 'rgba(11,60,45,0.07)' : 'rgba(16,185,129,0.15)' }}
                                >
                                  <Icon className="w-5 h-5" style={{ color: i % 2 === 0 ? '#0B3C2D' : '#10B981' }} />
                                </div>
                                <h3
                                  className="font-display font-700 text-xl"
                                  style={{ color: i % 2 === 0 ? '#1A1A1A' : '#FFFFFF' }}
                                >
                                  {p.title}
                                </h3>
                              </div>
                              <p
                                className="text-sm leading-relaxed mb-4"
                                style={{ color: i % 2 === 0 ? '#4B4B4B' : 'rgba(255,255,255,0.65)' }}
                              >
                                {p.desc}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {p.deliverables.map(d => (
                                  <span
                                    key={d}
                                    className="px-3 py-1 rounded-full text-xs font-medium"
                                    style={{
                                      backgroundColor: i % 2 === 0 ? 'var(--whq-bg)' : 'rgba(255,255,255,0.08)',
                                      color: i % 2 === 0 ? '#0B3C2D' : '#10B981',
                                      border: `1px solid ${i % 2 === 0 ? '#E6E5E0' : 'rgba(16,185,129,0.3)'}`,
                                    }}
                                  >
                                    {d}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-20 sm:pb-28">
        <div className="max-w-[1100px] mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 text-center" style={{ backgroundColor: '#0B3C2D' }}>
            <h2 className="font-display font-700 text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
              Ready to build a high-performing team?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: '#1DA54A', color: '#0B3C2D', fontFamily: 'var(--font-display)' }}
            >
              Talk to Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Request Info Modal (Training / Consulting) */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="w-full max-w-md p-8 rounded-2xl"
            style={{ backgroundColor: '#FFFFFF' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display font-700 text-xl" style={{ color: '#1A1A1A' }}>
                Request Information
              </h3>
              <button onClick={() => setModalOpen(false)} className="cursor-pointer">
                <X className="w-4 h-4" style={{ color: '#9CA3AF' }} />
              </button>
            </div>
            <p className="text-sm mb-5" style={{ color: '#4B4B4B' }}>
              Interested in: <strong style={{ color: '#0B3C2D' }}>{modalContext}</strong>
            </p>
            <div className="flex flex-col gap-3">
              <input
                className="w-full px-4 py-3 text-sm outline-none"
                style={{ border: '1px solid #E6E5E0', backgroundColor: 'var(--whq-bg)', borderRadius: '6px' }}
                placeholder="Full Name"
              />
              <input
                className="w-full px-4 py-3 text-sm outline-none"
                type="email"
                style={{ border: '1px solid #E6E5E0', backgroundColor: 'var(--whq-bg)', borderRadius: '6px' }}
                placeholder="Corporate Email"
              />
              <button
                className="w-full py-3 rounded-lg font-semibold text-sm cursor-pointer"
                style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}
                onClick={() => setModalOpen(false)}
              >
                Send Me the Deck
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Workshop Reservation Modal */}
      {modalWorkshop && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
          onClick={() => setModalWorkshop(null)}
        >
          <div
            className="w-full max-w-md p-8 rounded-2xl"
            style={{ backgroundColor: '#FFFFFF' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display font-700 text-xl" style={{ color: '#1A1A1A' }}>
                Reserve Your Seat
              </h3>
              <button onClick={() => setModalWorkshop(null)} className="cursor-pointer">
                <X className="w-4 h-4" style={{ color: '#9CA3AF' }} />
              </button>
            </div>
            <p className="text-sm mb-5" style={{ color: '#4B4B4B' }}>
              {modalWorkshop}
            </p>
            <div className="flex flex-col gap-3">
              <input
                className="w-full px-4 py-3 text-sm outline-none"
                style={{ border: '1px solid #E6E5E0', backgroundColor: 'var(--whq-bg)', borderRadius: '6px' }}
                placeholder="Full Name"
              />
              <input
                className="w-full px-4 py-3 text-sm outline-none"
                type="email"
                style={{ border: '1px solid #E6E5E0', backgroundColor: 'var(--whq-bg)', borderRadius: '6px' }}
                placeholder="Corporate Email"
              />
              <div className="flex items-center gap-3">
                <label className="text-sm" style={{ color: '#4B4B4B' }}>
                  Seats:
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSeats(s => Math.max(1, s - 1))}
                    className="w-8 h-8 rounded-full border flex items-center justify-center font-bold cursor-pointer"
                    style={{ borderColor: '#E6E5E0' }}
                  >
                    −
                  </button>
                  <span className="font-display font-700 text-lg" style={{ color: '#1A1A1A' }}>
                    {seats}
                  </span>
                  <button
                    onClick={() => setSeats(s => Math.min(10, s + 1))}
                    className="w-8 h-8 rounded-full border flex items-center justify-center font-bold cursor-pointer"
                    style={{ borderColor: '#E6E5E0' }}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="w-full py-3 rounded-lg font-semibold text-sm cursor-pointer"
                style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}
                onClick={() => setModalWorkshop(null)}
              >
                Confirm Reservation ({seats} seat{seats > 1 ? 's' : ''})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
