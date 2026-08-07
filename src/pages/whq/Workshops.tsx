import { useState } from 'react'
import { Calendar, Users, ArrowRight, X } from 'lucide-react'

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
    next: 'Feb 14, 2025 Â· Lagos',
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
    next: 'Mar 3â€“4, 2025 Â· Lagos',
  },
]

export default function WHQWorkshops() {
  const [modalWorkshop, setModalWorkshop] = useState<string | null>(null)
  const [seats, setSeats] = useState(1)

  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full" style={{ background: '#D97706', filter: 'blur(120px)', opacity: 0.15 }} />
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-display font-700 text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4" style={{ color: '#111827' }}>Workshops</h1>
          <p className="text-lg max-w-xl" style={{ color: '#6B7280' }}>Immersive, hands-on intensives designed to deliver breakthroughs in focused time windows.</p>
        </div>
      </div>

      <section className="px-6 pb-20">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-8">
          {workshops.map(w => (
            <div key={w.title} className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}>
              <div className="p-7 pb-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: 'rgba(217,119,6,0.12)', color: '#92400E' }}>{w.duration}</span>
                  <div className="flex items-center gap-1 text-xs" style={{ color: '#9CA3AF' }}>
                    <Users className="w-3 h-3" /> Max {w.seats} seats
                  </div>
                </div>
                <h3 className="font-display font-700 text-xl mb-1 mt-3" style={{ color: '#111827' }}>{w.title}</h3>
                <p className="text-sm mb-5" style={{ color: '#6B7280' }}>{w.subtitle}</p>
                <div className="flex items-center gap-2 text-sm mb-6" style={{ color: '#6B7280' }}>
                  <Calendar className="w-3.5 h-3.5" style={{ color: '#1DA54A' }} />
                  Next session: <strong style={{ color: '#0B3C2D' }}>{w.next}</strong>
                </div>
              </div>

              {/* Agenda */}
              <div className="px-7 pb-7">
                <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#9CA3AF' }}>Agenda</div>
                <div className="relative">
                  <div className="absolute left-[46px] top-0 bottom-0 w-px" style={{ backgroundColor: '#E5E1D8' }} />
                  <div className="flex flex-col gap-4">
                    {w.agenda.map((a, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <span className="text-xs font-mono shrink-0 w-10 text-right" style={{ color: '#9CA3AF' }}>{a.time}</span>
                        <div className="relative z-10 w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: '#1DA54A' }} />
                        <span className="text-sm" style={{ color: '#111827' }}>{a.item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setModalWorkshop(w.title)}
                  className="mt-6 flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}
                >
                  Reserve a Seat <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {modalWorkshop && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }} onClick={() => setModalWorkshop(null)}>
          <div className="w-full max-w-md p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display font-700 text-xl" style={{ color: '#111827' }}>Reserve Your Seat</h3>
              <button onClick={() => setModalWorkshop(null)}><X className="w-4 h-4" style={{ color: '#9CA3AF' }} /></button>
            </div>
            <p className="text-sm mb-5" style={{ color: '#6B7280' }}>{modalWorkshop}</p>
            <div className="flex flex-col gap-3">
              <input className="w-full px-4 py-3 text-sm outline-none" style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '6px' }} placeholder="Full Name" />
              <input className="w-full px-4 py-3 text-sm outline-none" type="email" style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '6px' }} placeholder="Corporate Email" />
              <div className="flex items-center gap-3">
                <label className="text-sm" style={{ color: '#6B7280' }}>Seats:</label>
                <div className="flex items-center gap-3">
                  <button onClick={() => setSeats(s => Math.max(1, s - 1))} className="w-8 h-8 rounded-full border flex items-center justify-center font-bold" style={{ borderColor: '#E5E1D8' }}>âˆ’</button>
                  <span className="font-display font-700 text-lg" style={{ color: '#111827' }}>{seats}</span>
                  <button onClick={() => setSeats(s => Math.min(10, s + 1))} className="w-8 h-8 rounded-full border flex items-center justify-center font-bold" style={{ borderColor: '#E5E1D8' }}>+</button>
                </div>
              </div>
              <button className="w-full py-3 rounded-lg font-semibold text-sm" style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }} onClick={() => setModalWorkshop(null)}>
                Confirm Reservation ({seats} seat{seats > 1 ? 's' : ''})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
