'use client'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1rem',
      background: 'var(--surface)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, color: '#f59e0b' }}>RH</span>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)' }}>
          © {new Date().getFullYear()} Ronak Hariya
        </span>
      </div>
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em' }}>
        SENIOR SOFTWARE ENGINEER · PUNE, INDIA
      </div>
      <a href="mailto:ronak.hariya.dev@gmail.com" style={{
        fontFamily: 'DM Mono, monospace', fontSize: '0.65rem',
        color: '#f59e0b', textDecoration: 'none',
        transition: 'opacity 0.2s',
      }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        ronak.hariya.dev@gmail.com
      </a>
    </footer>
  )
}
