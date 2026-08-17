import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import {
  ArrowRight,
  Clock,
  BookOpen,
  Calendar,
  X,
  ChevronRight,
  Target,
  Award,
  Zap,
  Video,
  CheckCircle2,
  Sparkles,
  Compass,
  Layout,
  Layers,
  Users,
} from 'lucide-react'
import {
  services,
  consultingPhases,
  programs,
  levelColors,
  workshops,
  bentoCards,
  type ServiceId,
  type DrawerContent,
} from '../../data/serviceData'

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
  const [searchParams, setSearchParams] = useSearchParams()
  const tabParam = searchParams.get('tab') as ServiceId | null

  const [active, setActive] = useState<ServiceId>(tabParam || 'training')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContext, setModalContext] = useState('')
  const [modalWorkshop, setModalWorkshop] = useState<string | null>(null)
  const [seats, setSeats] = useState(1)

  // Drawer state
  const [drawerData, setDrawerData] = useState<DrawerContent | null>(null)

  useEffect(() => {
    if (tabParam && ['training', 'workshops', 'consulting', 'business-branding'].includes(tabParam)) {
      setActive(tabParam)
    }
  }, [tabParam])

  const handleTabChange = (tabId: ServiceId) => {
    setActive(tabId)
    setSearchParams({ tab: tabId })
  }

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
            Everything your team needs to perform.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#4B4B4B' }}>
            WorkplaceHQ offers structured solutions to build skilled teams, optimize operations, and elevate business branding.
          </p>
        </div>
      </section>

      {/* Selector */}
      <section className="px-6">
        <div className="max-w-[1100px] mx-auto">
          <div
            role="tablist"
            aria-label="Service categories"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2 rounded-2xl"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #E6E5E0' }}
          >
            {services.map((s) => {
              const Icon = s.icon
              const isActive = active === s.id
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabChange(s.id as ServiceId)}
                  className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-200"
                  style={{
                    backgroundColor: isActive ? '#0B3C2D' : 'transparent',
                    color: isActive ? '#FFFFFF' : '#4B4B4B',
                    fontFamily: 'var(--font-display)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(11,60,45,0.06)'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <Icon className="w-4 h-4 shrink-0" style={{ color: isActive ? '#1DA54A' : '#0B3C2D' }} />
                  <span>{s.label}</span>
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

              {/* Training */}
              {active === 'training' && (
                <div className="flex flex-col gap-6">
                  {/* Direct Distinction Banner */}
                  <div className="p-4 rounded-xl border" style={{ backgroundColor: 'rgba(11,60,45,0.03)', borderColor: 'rgba(11,60,45,0.12)' }}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#0B3C2D' }}>
                        Main Aim: Learning & Instruction
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm" style={{ color: '#4B4B4B' }}>
                      Structured pathways designed for continuous skill acquisition delivered through <strong>virtual training</strong>, <strong>one-on-one coaching</strong>, and <strong>learning-focused sessions</strong>.
                    </p>
                  </div>

                  <motion.div
                    variants={gridVariants}
                    initial="initial"
                    animate="animate"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {programs.map((p) => {
                      const [bg, color] = levelColors[p.level]
                      return (
                        <motion.div
                          key={p.title}
                          variants={itemVariants}
                          className="p-6 rounded-2xl flex flex-col gap-4 cursor-pointer transition-all duration-200"
                          style={{ backgroundColor: '#FFFFFF', border: '1px solid #E6E5E0' }}
                          whileHover={{ y: -3, borderColor: '#1DA54A' }}
                          onClick={() =>
                            setDrawerData({
                              title: p.title,
                              subtitle: `${p.level} level · ${p.duration} duration`,
                              badge: p.format,
                              description: p.outcomes,
                              whoItsFor: p.whoItsFor,
                              deliverables: p.modules,
                              outcomes: p.outcomesList,
                            })
                          }
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span
                                className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold"
                                style={{ backgroundColor: bg, color }}
                              >
                                {p.level}
                              </span>
                              <span className="text-[11px] font-medium px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(11,60,45,0.06)', color: '#0B3C2D' }}>
                                {p.format}
                              </span>
                            </div>
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
                              Curriculum Breakdown
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {p.modules.map((m: string) => (
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

                          <div className="flex items-center justify-between pt-2 border-t mt-auto" style={{ borderColor: '#E6E5E0' }}>
                            <span className="text-xs font-semibold flex items-center gap-1" style={{ color: '#0B3C2D' }}>
                              See Details <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                openRequestModal(p.title)
                              }}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold text-xs cursor-pointer transition-all duration-200"
                              style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}
                            >
                              Request Deck
                            </button>
                          </div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                </div>
              )}

              {/* Workshops */}
              {active === 'workshops' && (
                <div className="flex flex-col gap-6">
                  {/* Direct Distinction Banner */}
                  <div className="p-4 rounded-xl border" style={{ backgroundColor: 'rgba(217,119,6,0.05)', borderColor: 'rgba(217,119,6,0.2)' }}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#92400E' }}>
                        Main Aim: Practical Execution
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm" style={{ color: '#4B4B4B' }}>
                      <strong>Interactive</strong>, hands-on working sessions focused on immediate execution. Build real assets and achieve a <strong>specific tangible result</strong>.
                    </p>
                  </div>

                  <motion.div variants={gridVariants} initial="initial" animate="animate" className="grid lg:grid-cols-2 gap-8">
                    {workshops.map((w) => (
                      <motion.div
                        key={w.title}
                        variants={itemVariants}
                        className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 flex flex-col justify-between"
                        style={{ backgroundColor: '#FFFFFF', border: '1px solid #E6E5E0' }}
                        whileHover={{ y: -3, borderColor: '#1DA54A' }}
                        onClick={() =>
                          setDrawerData({
                            title: w.title,
                            subtitle: `${w.duration} · Max ${w.seats} participants`,
                            badge: w.type,
                            description: w.subtitle,
                            whoItsFor: w.whoItsFor,
                            deliverables: w.agenda.map((a: { time: string; item: string }) => `${a.time} - ${a.item}`),
                            outcomes: w.outcomes,
                          })
                        }
                      >
                        <div className="p-7 pb-0">
                          <div className="flex items-center gap-3 mb-1">
                            <span
                              className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                              style={{ backgroundColor: 'rgba(217,119,6,0.12)', color: '#92400E' }}
                            >
                              {w.type}
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
                            Practical Agenda & Deliverables
                          </div>
                          <div className="relative mb-6">
                            <div className="absolute left-[46px] top-0 bottom-0 w-px" style={{ backgroundColor: '#E6E5E0' }} />
                            <div className="flex flex-col gap-4">
                              {w.agenda.slice(0, 3).map((a: { time: string; item: string }, i: number) => (
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

                          <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#E6E5E0' }}>
                            <span className="text-xs font-semibold flex items-center gap-1" style={{ color: '#0B3C2D' }}>
                              See Full Agenda <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setModalWorkshop(w.title)
                              }}
                              className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs cursor-pointer transition-all duration-200"
                              style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}
                            >
                              Reserve Seat <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}

              {/* Consulting Timeline */}
              {active === 'consulting' && (
                <motion.div variants={itemVariants} initial="initial" animate="animate">
                  <div className="relative">
                    <div className="hidden lg:block absolute left-[200px] top-8 bottom-8 w-px" style={{ backgroundColor: '#E6E5E0' }} />
                    <div className="flex flex-col gap-8">
                      {consultingPhases.map((p, i: number) => {
                        const Icon = p.icon
                        const isEven = i % 2 === 0
                        return (
                          <div key={p.title} className="grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-12 items-start">
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
                              className="p-7 rounded-2xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                              style={{
                                backgroundColor: isEven ? '#FFFFFF' : '#0B3C2D',
                                border: `1px solid ${isEven ? '#E6E5E0' : 'rgba(16,185,129,0.2)'}`,
                              }}
                              onClick={() =>
                                setDrawerData({
                                  title: p.title,
                                  subtitle: `${p.phase} · ${p.duration}`,
                                  description: p.desc,
                                  whoItsFor: p.whoItsFor,
                                  deliverables: p.deliverables,
                                  outcomes: p.outcomes,
                                })
                              }
                            >
                              <div className="flex items-center gap-3 mb-3">
                                <div
                                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                                  style={{ backgroundColor: isEven ? 'rgba(11,60,45,0.07)' : 'rgba(16,185,129,0.15)' }}
                                >
                                  <Icon className="w-5 h-5" style={{ color: isEven ? '#0B3C2D' : '#10B981' }} />
                                </div>
                                <h3
                                  className="font-display font-700 text-xl"
                                  style={{ color: isEven ? '#1A1A1A' : '#FFFFFF' }}
                                >
                                  {p.title}
                                </h3>
                              </div>
                              <p
                                className="text-sm leading-relaxed mb-4"
                                style={{ color: isEven ? '#4B4B4B' : 'rgba(255,255,255,0.65)' }}
                              >
                                {p.desc}
                              </p>
                              <div className="flex flex-wrap gap-2 mb-6">
                                {p.deliverables.map((d: string) => (
                                  <span
                                    key={d}
                                    className="px-3 py-1 rounded-full text-xs font-medium"
                                    style={{
                                      backgroundColor: isEven ? 'var(--whq-bg)' : 'rgba(255,255,255,0.08)',
                                      color: isEven ? '#0B3C2D' : '#10B981',
                                      border: `1px solid ${isEven ? '#E6E5E0' : 'rgba(16,185,129,0.3)'}`,
                                    }}
                                  >
                                    {d}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: isEven ? '#E6E5E0' : 'rgba(255,255,255,0.1)' }}>
                                <span className="text-xs font-semibold flex items-center gap-1" style={{ color: isEven ? '#0B3C2D' : '#10B981' }}>
                                  See More <ChevronRight className="w-3.5 h-3.5" />
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    openRequestModal(p.title)
                                  }}
                                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-xs cursor-pointer transition-all duration-200"
                                  style={{
                                    backgroundColor: isEven ? '#0B3C2D' : '#1DA54A',
                                    color: isEven ? '#FFFFFF' : '#0B3C2D',
                                    fontFamily: 'var(--font-display)',
                                  }}
                                >
                                  Request Consultation <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Bento Grid for Business Branding */}
              {active === 'business-branding' && (
                <motion.div variants={itemVariants} initial="initial" animate="animate" className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Featured Bento Box - Corporate Identity */}
                    <motion.div
                      className="md:col-span-2 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between cursor-pointer"
                      style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF' }}
                      whileHover={{ y: -3 }}
                      onClick={() =>
                        setDrawerData({
                          title: bentoCards[0].title,
                          subtitle: bentoCards[0].badge || '',
                          description: bentoCards[0].desc,
                          whoItsFor: bentoCards[0].whoItsFor,
                          deliverables: bentoCards[0].deliverables,
                          outcomes: bentoCards[0].outcomes,
                        })
                      }
                    >
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1DA54A] opacity-10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                      
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: 'rgba(29,165,74,0.2)', color: '#10B981' }}>
                            <Sparkles className="w-3.5 h-3.5" /> {bentoCards[0].badge}
                          </span>
                        </div>
                        <h3 className="font-display font-700 text-2xl sm:text-3xl mb-3">
                          {bentoCards[0].title}
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed opacity-80 max-w-xl mb-6">
                          {bentoCards[0].desc}
                        </p>
                      </div>

                      <div>
                        <div className="pt-4 border-t border-white/10 mb-4">
                          <div className="text-xs uppercase tracking-wider font-semibold opacity-60 mb-3">Core Deliverables</div>
                          <div className="flex flex-wrap gap-2">
                            {bentoCards[0].deliverables.map((item: string) => (
                              <span
                                key={item}
                                className="px-3 py-1.5 rounded-lg text-xs font-medium"
                                style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.12)' }}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xs font-semibold flex items-center gap-1 text-[#10B981]">
                            See More <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              openRequestModal(bentoCards[0].title)
                            }}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer"
                            style={{ backgroundColor: '#1DA54A', color: '#0B3C2D' }}
                          >
                            Inquire Now <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>

                    {/* Bento Box 2 - Strategy & Positioning */}
                    <motion.div
                      className="p-7 rounded-3xl flex flex-col justify-between cursor-pointer transition-all duration-200"
                      style={{ backgroundColor: '#FFFFFF', border: '1px solid #E6E5E0' }}
                      whileHover={{ y: -3, borderColor: '#1DA54A' }}
                      onClick={() =>
                        setDrawerData({
                          title: bentoCards[1].title,
                          subtitle: 'Brand Positioning',
                          description: bentoCards[1].desc,
                          whoItsFor: bentoCards[1].whoItsFor,
                          deliverables: bentoCards[1].deliverables,
                          outcomes: bentoCards[1].outcomes,
                        })
                      }
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(11,60,45,0.07)' }}>
                          <Compass className="w-5 h-5" style={{ color: '#0B3C2D' }} />
                        </div>
                        <h3 className="font-display font-700 text-xl mb-2" style={{ color: '#1A1A1A' }}>
                          {bentoCards[1].title}
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#4B4B4B' }}>
                          {bentoCards[1].desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t flex items-center justify-between" style={{ borderColor: '#E6E5E0' }}>
                        <span className="text-xs font-semibold flex items-center gap-1" style={{ color: '#0B3C2D' }}>
                          See More <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                        <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#0B3C2D' }}>
                          <CheckCircle2 className="w-4 h-4" style={{ color: '#1DA54A' }} /> Strategy
                        </div>
                      </div>
                    </motion.div>

                    {/* Bento Box 3 - Digital & Collateral */}
                    <motion.div
                      className="p-7 rounded-3xl flex flex-col justify-between cursor-pointer transition-all duration-200"
                      style={{ backgroundColor: '#FFFFFF', border: '1px solid #E6E5E0' }}
                      whileHover={{ y: -3, borderColor: '#1DA54A' }}
                      onClick={() =>
                        setDrawerData({
                          title: bentoCards[2].title,
                          subtitle: 'Enterprise Collateral',
                          description: bentoCards[2].desc,
                          whoItsFor: bentoCards[2].whoItsFor,
                          deliverables: bentoCards[2].deliverables,
                          outcomes: bentoCards[2].outcomes,
                        })
                      }
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(11,60,45,0.07)' }}>
                          <Layout className="w-5 h-5" style={{ color: '#0B3C2D' }} />
                        </div>
                        <h3 className="font-display font-700 text-xl mb-2" style={{ color: '#1A1A1A' }}>
                          {bentoCards[2].title}
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#4B4B4B' }}>
                          {bentoCards[2].desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t flex items-center justify-between" style={{ borderColor: '#E6E5E0' }}>
                        <span className="text-xs font-semibold flex items-center gap-1" style={{ color: '#0B3C2D' }}>
                          See More <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                        <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#0B3C2D' }}>
                          <CheckCircle2 className="w-4 h-4" style={{ color: '#1DA54A' }} /> Design Assets
                        </div>
                      </div>
                    </motion.div>

                    {/* Bento Box 4 - Employer Branding */}
                    <motion.div
                      className="md:col-span-2 p-7 rounded-3xl flex flex-col justify-between cursor-pointer transition-all duration-200"
                      style={{ backgroundColor: '#FFFFFF', border: '1px solid #E6E5E0' }}
                      whileHover={{ y: -3, borderColor: '#1DA54A' }}
                      onClick={() =>
                        setDrawerData({
                          title: bentoCards[3].title,
                          subtitle: 'Talent & Culture Branding',
                          description: bentoCards[3].desc,
                          whoItsFor: bentoCards[3].whoItsFor,
                          deliverables: bentoCards[3].deliverables,
                          outcomes: bentoCards[3].outcomes,
                        })
                      }
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(11,60,45,0.07)' }}>
                            <Layers className="w-5 h-5" style={{ color: '#0B3C2D' }} />
                          </div>
                          <h3 className="font-display font-700 text-xl" style={{ color: '#1A1A1A' }}>
                            {bentoCards[3].title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#4B4B4B' }}>
                          {bentoCards[3].desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t flex flex-wrap items-center justify-between gap-3" style={{ borderColor: '#E6E5E0' }}>
                        <span className="text-xs font-semibold flex items-center gap-1" style={{ color: '#0B3C2D' }}>
                          See More <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            openRequestModal('Employer Branding')
                          }}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200"
                          style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF' }}
                        >
                          Inquire Now <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Framework Process Strip */}
                  <div className="p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 mt-2" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E6E5E0' }}>
                    <div className="text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: '#0B3C2D' }}>
                      Brand Development Process:
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: '#4B4B4B' }}>
                      <span className="font-medium text-black">1. Brand Audit</span>
                      <span style={{ color: '#1DA54A' }}>→</span>
                      <span className="font-medium text-black">2. Narrative & Architecture</span>
                      <span style={{ color: '#1DA54A' }}>→</span>
                      <span className="font-medium text-black">3. Visual Design Sprint</span>
                      <span style={{ color: '#1DA54A' }}>→</span>
                      <span className="font-medium text-black">4. Rollout & Guidelines</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Slide-Over Canvas Drawer */}
      <AnimatePresence>
        {drawerData && (
          <div className="fixed inset-0 z-[120] flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(3px)' }}
              onClick={() => setDrawerData(null)}
            />

            {/* Slide-over Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative z-10 w-full max-w-xl h-full shadow-2xl flex flex-col justify-between overflow-y-auto"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div>
                {/* Header */}
                <div className="p-6 sm:p-8 border-b flex items-start justify-between" style={{ borderColor: '#E6E5E0' }}>
                  <div>
                    {drawerData.badge && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2" style={{ backgroundColor: 'rgba(11,60,45,0.08)', color: '#0B3C2D' }}>
                        {drawerData.badge}
                      </span>
                    )}
                    <h3 className="font-display font-700 text-2xl" style={{ color: '#1A1A1A' }}>
                      {drawerData.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium mt-1" style={{ color: '#9CA3AF' }}>
                      {drawerData.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setDrawerData(null)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" style={{ color: '#4B4B4B' }} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col gap-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#9CA3AF' }}>
                      Executive Summary
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#4B4B4B' }}>
                      {drawerData.description}
                    </p>
                  </div>

                  {/* Who It's For */}
                  {drawerData.whoItsFor.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5" style={{ color: '#0B3C2D' }}>
                        <Target className="w-4 h-4" style={{ color: '#1DA54A' }} /> Target Audience
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {drawerData.whoItsFor.map((item: string) => (
                          <span
                            key={item}
                            className="px-3 py-1 rounded-lg text-xs font-medium"
                            style={{ backgroundColor: 'var(--whq-bg)', color: '#1A1A1A', border: '1px solid #E6E5E0' }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Core Deliverables */}
                  {drawerData.deliverables.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5" style={{ color: '#0B3C2D' }}>
                        <CheckCircle2 className="w-4 h-4" style={{ color: '#1DA54A' }} /> Core Deliverables & Scope
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {drawerData.deliverables.map((item: string) => (
                          <li key={item} className="text-xs sm:text-sm flex items-start gap-2.5" style={{ color: '#4B4B4B' }}>
                            <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#1DA54A' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Expected Business Outcomes */}
                  {drawerData.outcomes.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5" style={{ color: '#0B3C2D' }}>
                        <Award className="w-4 h-4" style={{ color: '#1DA54A' }} /> Targeted Outcomes
                      </h4>
                      <div className="p-4 rounded-xl flex flex-col gap-2" style={{ backgroundColor: 'rgba(11,60,45,0.04)', border: '1px solid rgba(11,60,45,0.08)' }}>
                        {drawerData.outcomes.map((item: string) => (
                          <p key={item} className="text-xs font-medium flex items-center gap-2" style={{ color: '#0B3C2D' }}>
                            <span style={{ color: '#1DA54A' }}>✓</span> {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 sm:p-8 border-t flex items-center justify-between gap-4" style={{ borderColor: '#E6E5E0', backgroundColor: '#FFFFFF' }}>
                <button
                  onClick={() => setDrawerData(null)}
                  className="px-4 py-2.5 rounded-lg text-xs font-semibold cursor-pointer"
                  style={{ color: '#4B4B4B', border: '1px solid #E6E5E0' }}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const ctx = drawerData.title
                    setDrawerData(null)
                    openRequestModal(ctx)
                  }}
                  className="flex-1 py-2.5 px-4 rounded-lg font-semibold text-xs cursor-pointer flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}
                >
                  Request Information <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <section className="px-6 pb-20 sm:pb-28">
        <div className="max-w-[1100px] mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 text-center" style={{ backgroundColor: '#0B3C2D' }}>
            <h2 className="font-display font-700 text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
              Everything your team needs to perform.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: '#1DA54A', color: '#0B3C2D', fontFamily: 'var(--font-display)' }}
            >
              Talk to us about training <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Request Info Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[130] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="w-full max-w-md p-8 rounded-2xl"
            style={{ backgroundColor: '#FFFFFF' }}
            onClick={(e) => e.stopPropagation()}
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
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Workshop Reservation Modal */}
      {modalWorkshop && (
        <div
          className="fixed inset-0 z-[130] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
          onClick={() => setModalWorkshop(null)}
        >
          <div
            className="w-full max-w-md p-8 rounded-2xl"
            style={{ backgroundColor: '#FFFFFF' }}
            onClick={(e) => e.stopPropagation()}
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
                    onClick={() => setSeats((s) => Math.max(1, s - 1))}
                    className="w-8 h-8 rounded-full border flex items-center justify-center font-bold cursor-pointer"
                    style={{ borderColor: '#E6E5E0' }}
                  >
                    −
                  </button>
                  <span className="font-display font-700 text-lg" style={{ color: '#1A1A1A' }}>
                    {seats}
                  </span>
                  <button
                    onClick={() => setSeats((s) => Math.min(10, s + 1))}
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