export default function WHQLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-baseline ${className}`} aria-label="Workplace HQ">
      <span className="text-ink tracking-tight leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
        Work
      </span>
      <span className="relative text-ink leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: '#1DA54A',
            top: '-8px',
            left: '1px',
          }}
        />
        p
      </span>
      <span className="text-ink leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
        lace
      </span>
      <span className="text-ink leading-none ml-[3px]" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
        H
      </span>
      <span className="relative text-ink leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
        Q
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: '9px',
            height: '2.5px',
            background: '#1DA54A',
            borderRadius: '1px',
            bottom: '1px',
            right: '-7px',
            transform: 'rotate(38deg)',
            transformOrigin: 'left center',
          }}
        />
      </span>
    </div>
  )
}
