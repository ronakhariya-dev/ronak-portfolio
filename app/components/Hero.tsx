'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.4 + 0.05,
      })
    }

    let raf: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245,158,11,${p.opacity})`
        ctx.fill()
      })
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(245,158,11,${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(raf)
  }, [])

  const tags = ['Java', 'Spring Boot', 'Angular', 'Microservices', 'Cloud & DevOps']

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, opacity: 0.7 }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Accent glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', paddingTop: '80px' }}>
        {/* Status badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2.5rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }} />
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em' }}>
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* Name */}
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, lineHeight: 0.92, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          <span style={{ display: 'block', fontSize: 'clamp(3.5rem, 9vw, 7.5rem)', color: '#e8e8f0' }}>Ronak</span>
          <span style={{ display: 'block', fontSize: 'clamp(3.5rem, 9vw, 7.5rem)', color: '#f59e0b' }}>Hariya</span>
        </h1>

        {/* Role */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
          <div style={{ width: '32px', height: '1px', background: '#f59e0b' }} />
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.06em' }}>
            SENIOR SOFTWARE ENGINEER
          </span>
        </div>

        {/* Bio */}
        <p style={{ maxWidth: '580px', lineHeight: 1.75, color: 'rgba(255,255,255,0.45)', fontSize: '1rem', marginBottom: '2.5rem', fontWeight: 300 }}>
          Full Stack Developer building enterprise-scale systems with Java, Spring Boot, Angular,
          and Microservices. Expert in secure distributed architectures, cloud-native deployments,
          and CI/CD automation. Based in Pune, India.
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '3rem' }}>
          {tags.map(t => (
            <span key={t} style={{
              fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', padding: '5px 12px',
              border: '1px solid rgba(245,158,11,0.25)', color: 'rgba(245,158,11,0.7)',
              borderRadius: '2px', letterSpacing: '0.06em',
            }}>{t}</span>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#experience" style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.85rem',
            padding: '14px 28px', background: '#f59e0b', color: '#000',
            textDecoration: 'none', borderRadius: '2px', letterSpacing: '0.04em',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#fbbf24'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#f59e0b'}
          >View My Work</a>
          <a href="#contact" style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.85rem',
            padding: '14px 28px', border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.7)', textDecoration: 'none', borderRadius: '2px',
            letterSpacing: '0.04em', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#f59e0b'; (e.currentTarget as HTMLElement).style.color = '#f59e0b' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)' }}
          >Get In Touch</a>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '3rem', marginTop: '5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap' }}>
          {[['3+', 'Years Experience'], ['2', 'Enterprise Projects'], ['10+', 'Microservices Built'], ['10+', 'Technologies']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#f59e0b', lineHeight: 1 }}>{num}</div>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', marginTop: '4px', letterSpacing: '0.1em' }}>{label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
