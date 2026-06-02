'use client'

const contactLinks = [
  {
    label: 'Email',
    value: 'ronak.hariya.dev@gmail.com',
    href: 'mailto:ronak.hariya.dev@gmail.com',
    icon: '✉',
    color: '#f59e0b',
  },
  {
    label: 'LinkedIn',
    value: 'ronak-hariya-96b8a5312',
    href: 'https://linkedin.com/in/ronak-hariya-96b8a5312',
    icon: 'in',
    color: '#a78bfa',
  },
  {
    label: 'Location',
    value: 'Pune, Maharashtra, India',
    href: null,
    icon: '◉',
    color: '#34d399',
  },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '8rem 0', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute', bottom: '-200px', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#f59e0b', letterSpacing: '0.15em' }}>
            05 / CONTACT
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginTop: '0.5rem', letterSpacing: '-0.02em', color: '#e8e8f0' }}>
            Let&apos;s Connect
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }} className="contact-grid">
          <div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              I&apos;m currently working at LTIMindtree in the BFS domain. 
              Open to interesting conversations about distributed systems, enterprise architecture,
              or opportunities in fintech and cloud-native development.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactLinks.map(link => (
                <div key={link.label}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '1rem 1.25rem',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '3px',
                    background: 'rgba(255,255,255,0.02)',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = `${link.color}30`
                    el.style.background = `${link.color}06`
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(255,255,255,0.06)'
                    el.style.background = 'rgba(255,255,255,0.02)'
                  }}
                >
                  <span style={{
                    width: '36px', height: '36px', borderRadius: '4px',
                    background: `${link.color}15`, border: `1px solid ${link.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: link.color, fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', fontWeight: 500,
                    flexShrink: 0,
                  }}>{link.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', marginBottom: '2px', letterSpacing: '0.08em' }}>{link.label.toUpperCase()}</div>
                    {link.href ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#e8e8f0', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = link.color)}
                        onMouseLeave={e => (e.currentTarget.style.color = '#e8e8f0')}
                      >{link.value}</a>
                    ) : (
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>{link.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — availability card */}
          <div>
            <div style={{
              padding: '2.5rem',
              border: '1px solid rgba(245,158,11,0.15)',
              borderRadius: '6px',
              background: 'rgba(245,158,11,0.03)',
              marginBottom: '1.5rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', display: 'inline-block' }} />
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: '#22c55e', letterSpacing: '0.1em' }}>CURRENTLY EMPLOYED</span>
              </div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#e8e8f0', marginBottom: '0.75rem' }}>
                Senior Software Engineer @ LTIMindtree
              </h3>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>
                Working in Capital Markets domain.<br />
                Open to networking, collaborations &amp; interesting opportunities.
              </p>
            </div>

            <div style={{
              padding: '2rem 2.5rem',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '6px',
              background: 'rgba(255,255,255,0.01)',
            }}>
              <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1.25rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Expertise Summary
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Java', 'Spring Boot', 'Angular', 'Microservices', 'Docker', 'Kubernetes', 'AWS', 'Jenkins', 'PostgreSQL', 'RabbitMQ', 'Keycloak', 'ELK Stack'].map(t => (
                  <span key={t} style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', padding: '3px 9px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.5)', borderRadius: '2px',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
