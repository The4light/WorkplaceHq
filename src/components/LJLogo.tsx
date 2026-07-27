export default function LJLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`} aria-label="Lagos Job">
      <span
        className="text-ink leading-none tracking-tight"
        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.02em' }}
      >
        Lagos
      </span>
      <span
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 700,
          fontSize: '0.82rem',
          letterSpacing: '-0.01em',
          background: '#191919',
          color: '#F4F3EF',
          padding: '4px 10px 4px 8px',
          clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
          display: 'inline-block',
          lineHeight: 1,
        }}
      >
        Jobs.
      </span>
    </div>
  )
}
