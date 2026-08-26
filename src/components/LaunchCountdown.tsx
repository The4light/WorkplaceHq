import { useState, useEffect, useRef } from 'react'

const LAUNCH_DATE = new Date('2026-08-28T12:00:00+01:00') // Friday 29 Aug 2026, 12:00 noon WAT

export default function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [launched, setLaunched] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tick = () => {
      const diff = LAUNCH_DATE.getTime() - Date.now()
      if (diff <= 0) {
        setLaunched(true)
        return
      }
      setTimeLeft({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const setVar = (h: number) => document.documentElement.style.setProperty('--whq-countdown-h', `${h}px`)
    if (launched || !ref.current) {
      setVar(0)
      return
    }
    setVar(ref.current.offsetHeight)
    const observer = new ResizeObserver(entries => setVar(entries[0].contentRect.height))
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [launched])

  if (launched) return null

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div ref={ref} className="fixed top-0 left-0 right-0 z-[60] w-full text-sm font-medium"
      style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-body)' }}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-center sm:justify-between gap-3 flex-wrap px-4 sm:px-6 py-2.5">
        <span style={{ color: 'rgba(255,255,255,0.7)' }}>🚀 Site goes live in</span>
        <div className="flex items-center gap-2">
          {[['Days', timeLeft.days], ['Hrs', timeLeft.hours], ['Min', timeLeft.minutes], ['Sec', timeLeft.seconds]].map(([label, val]) => (
            <div key={label as string} className="flex items-center gap-1">
              <span className="font-display font-bold tabular-nums" style={{ color: '#1DA54A', fontSize: '1rem' }}>
                {pad(val as number)}
              </span>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</span>
              {label !== 'Sec' && <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>}
            </div>
          ))}
        </div>
        <span style={{ color: 'rgba(255,255,255,0.7)' }}>— Friday 29 August, 12:00 noon</span>
      </div>
    </div>
  )
}
