'use client'

const certifications = [
  {
    title: 'GenAI for Software Development',
    issuer: 'Amazon',
    type: 'Certification',
    icon: '◈',
    color: '#f59e0b',
  },
  {
    title: 'Oracle Cloud Infrastructure Foundations Associate',
    issuer: 'Oracle',
    type: 'Certification',
    icon: '◎',
    color: '#f87171',
  },
  {
    title: 'CI/CD with Jenkins',
    issuer: 'Online',
    type: 'Certification',
    icon: '⬡',
    color: '#34d399',
  },
  {
    title: 'Ultimate Docker',
    issuer: 'Online',
    type: 'Certification',
    icon: '◐',
    color: '#f59e0b',
  },
  {
    title: 'Fundamentals of Liquibase',
    issuer: 'Liquibase',
    type: 'Certification',
    icon: '◐',
    color: '#a78bfa',
  },
  {
    title: 'PG-DAC',
    issuer: 'CDAC Pune',
    type: 'Post-Graduate Diploma',
    icon: '⬟',
    color: '#a78bfa',
  },
]

const learningAreas = [
  {
    area: 'Banking & Financial Services (BFS)',
    description: 'Building domain knowledge in banking operations, financial products, payments, lending, and enterprise banking technology.',
    status: 'In Progress',
    color: '#f59e0b',
  },
  {
    area: 'Capital Markets',
    description: 'Exploring financial instruments, securities trading, IPOs, derivatives, and capital markets technology platforms.',
    status: 'In Progress',
    color: '#f97316',
  },
  {
    area: 'Distributed Systems',
    description: 'Deep-diving into consensus algorithms, distributed transactions, and fault-tolerant architecture patterns.',
    status: 'Ongoing',
    color: '#a78bfa',
  },
  {
    area: 'Cloud-Native Architecture',
    description: 'Kubernetes-native deployments, service mesh, and multi-cloud strategies.',
    status: 'Ongoing',
    color: '#34d399',
  },
  {
    area: 'Event-Driven Microservices',
    description: 'Advanced Kafka patterns, event sourcing, CQRS architecture, and saga patterns.',
    status: 'Ongoing',
    color: '#38bdf8',
  },
  {
    area: 'AI-Assisted Development',
    description: 'Leveraging generative AI tools to accelerate software development, code review, and architecture decisions.',
    status: 'Exploring',
    color: '#fb923c',
  },
]

export default function Learnings() {
  return (
    <section id="learnings" style={{ padding: '8rem 0', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#f59e0b', letterSpacing: '0.15em' }}>
            04 / LEARNINGS
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginTop: '0.5rem', letterSpacing: '-0.02em', color: '#e8e8f0' }}>
            Certifications & Growth
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="learn-grid">
          {/* Certifications */}
          <div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Certifications & Education
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {certifications.map((cert) => (
                <div key={cert.title}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '1rem',
                    padding: '1rem 1.1rem',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '3px',
                    background: 'rgba(255,255,255,0.01)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = `${cert.color}08`
                    el.style.borderColor = `${cert.color}25`
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'rgba(255,255,255,0.01)'
                    el.style.borderColor = 'rgba(255,255,255,0.05)'
                  }}
                >
                  <span style={{ color: cert.color, fontSize: '1.1rem', marginTop: '1px', flexShrink: 0 }}>{cert.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.875rem', color: '#e8e8f0', lineHeight: 1.3 }}>{cert.title}</div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '4px' }}>
                      <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: cert.color }}>{cert.issuer}</span>
                      <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.6rem' }}>·</span>
                      <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)' }}>{cert.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active learning */}
          <div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Active Learning Areas
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {learningAreas.map((item) => (
                <div key={item.area}
                  style={{
                    paddingLeft: '1rem',
                    borderLeft: `2px solid ${item.color}40`,
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = item.color}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = `${item.color}40`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#e8e8f0' }}>{item.area}</span>
                    <span style={{
                      fontFamily: 'DM Mono, monospace', fontSize: '0.58rem', padding: '1px 8px',
                      background: `${item.color}18`, border: `1px solid ${item.color}35`,
                      color: item.color, borderRadius: '20px',
                    }}>{item.status}</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.82rem', lineHeight: 1.6 }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .learn-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .learn-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
