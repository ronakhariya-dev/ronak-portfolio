'use client'
import { useState, useEffect } from 'react'

const links = ['Experience', 'Projects', 'Expertise', 'Learnings', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <a href="#hero" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#f59e0b', letterSpacing: '-0.02em' }}>RH</span>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', marginLeft: '8px' }}>v1.0</span>
        </a>

        {/* Desktop */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', fontWeight: 400,
              color: 'rgba(255,255,255,0.45)', textDecoration: 'none', letterSpacing: '0.08em',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f59e0b')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
            >{l.toUpperCase()}</a>
          ))}
          <a href="mailto:ronak.hariya.dev@gmail.com" style={{
            fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', padding: '6px 14px',
            border: '1px solid #f59e0b', color: '#f59e0b', textDecoration: 'none',
            borderRadius: '2px', letterSpacing: '0.06em', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f59e0b'; (e.currentTarget as HTMLElement).style.color = '#000' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#f59e0b' }}
          >HIRE ME</a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: '#f59e0b', cursor: 'pointer', fontSize: '1.4rem' }} className="show-mobile">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(10,10,15,0.98)', padding: '1.5rem 2rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{
              fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none', letterSpacing: '0.1em',
            }}>{l.toUpperCase()}</a>
          ))}
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
