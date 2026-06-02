'use client'

const projects = [
  {
    id: '01',
    title: 'Bihar Education Loan System',
    category: 'Government Digital Transformation',
    description: 'Large-scale government platform streamlining the education loan lifecycle for students across Bihar. Features secure microservices, document management, and real-time approvals.',
    tech: ['Spring Boot', 'Spring Cloud', 'Angular', 'Keycloak', 'RabbitMQ', 'MinIO', 'ELK', 'Docker'],
    highlights: ['5+ Microservices', 'OAuth2 / JWT Security', 'Async Messaging', 'CI/CD Pipeline'],
    color: '#f59e0b',
  },
  {
    id: '02',
    title: 'Telecom CRM Platform',
    category: 'Enterprise CRM',
    description: 'End-to-end enterprise CRM for telecom operations — customer onboarding, order processing, service management, and product lifecycle — built on distributed microservices.',
    tech: ['Java', 'Spring Boot', 'Angular', 'RxJS', 'Drools', 'AWS', 'Jenkins', 'Docker'],
    highlights: ['Drools Rule Engine', 'AWS Deployment', 'Reusable UI Components', 'Audit Microservice'],
    color: '#a78bfa',
  },
  {
    id: '03',
    title: 'Centralized Audit Microservice',
    category: 'Infrastructure / Platform',
    description: 'Cross-cutting audit service integrated across all distributed applications for transaction tracking, event logging, and compliance reporting.',
    tech: ['Spring Boot', 'REST API', 'PostgreSQL', 'Spring Security'],
    highlights: ['Cross-system Logging', 'Compliance Ready', 'Event-driven', 'RESTful API'],
    color: '#34d399',
  },
  {
    id: '04',
    title: 'Rule Engine Order Processing',
    category: 'Business Logic Automation',
    description: 'Configurable order workflow engine using Drools for the Telecom CRM platform. Enables dynamic business rule management without code changes.',
    tech: ['Drools', 'Spring Boot', 'Java', 'REST APIs'],
    highlights: ['Dynamic Rules', 'No-code Config', 'Telecom Domain', 'Spring Integration'],
    color: '#f87171',
  },
  {
    id: '05',
    title: 'Dockerized CI/CD Deployment Platform',
    category: 'DevOps / Infrastructure',
    description: 'Containerized deployment platform for multiple frontend and backend services, with automated CI/CD pipelines enabling zero-downtime deployments.',
    tech: ['Docker', 'Jenkins', 'AWS EC2', 'AWS ECR', 'AWS S3'],
    highlights: ['Zero-downtime Deploy', 'Jenkins Pipelines', 'AWS ECR Registry', 'Multi-service Orchestration'],
    color: '#38bdf8',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '8rem 0', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#f59e0b', letterSpacing: '0.15em' }}>
            02 / PROJECTS
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginTop: '0.5rem', letterSpacing: '-0.02em', color: '#e8e8f0' }}>
            Featured Work
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectRow({ project: p, index }: { project: typeof projects[0]; index: number }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '60px 1fr auto',
      gap: '2rem',
      padding: '2rem 1.5rem',
      border: '1px solid rgba(255,255,255,0.04)',
      borderRadius: '4px',
      background: 'rgba(255,255,255,0.01)',
      transition: 'all 0.3s ease',
      cursor: 'default',
      alignItems: 'start',
    }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(255,255,255,0.03)'
        el.style.borderColor = 'rgba(255,255,255,0.1)'
        el.style.transform = 'translateX(4px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(255,255,255,0.01)'
        el.style.borderColor = 'rgba(255,255,255,0.04)'
        el.style.transform = 'translateX(0)'
      }}
      className="proj-row"
    >
      {/* Number */}
      <div style={{ fontFamily: 'DM Mono, monospace', fontWeight: 500, fontSize: '1.5rem', color: 'rgba(255,255,255,0.08)', lineHeight: 1 }}>{p.id}</div>

      {/* Content */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#e8e8f0' }}>{p.title}</h3>
          <span style={{
            fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', padding: '2px 10px',
            background: `${p.color}15`, border: `1px solid ${p.color}30`,
            color: p.color, borderRadius: '2px', letterSpacing: '0.06em',
          }}>{p.category}</span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1rem', maxWidth: '600px' }}>{p.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
          {p.tech.map(t => (
            <span key={t} style={{
              fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', padding: '3px 8px',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              color: 'rgba(255,255,255,0.4)', borderRadius: '2px',
            }}>{t}</span>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {p.highlights.map(h => (
            <span key={h} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'DM Mono, monospace', fontSize: '0.63rem', color: p.color }}>
              <span>✓</span> {h}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div style={{ color: 'rgba(255,255,255,0.15)', fontSize: '1.2rem', paddingTop: '2px' }}>→</div>

      <style>{`
        .proj-row { grid-template-columns: 60px 1fr auto !important; }
        @media (max-width: 600px) {
          .proj-row { grid-template-columns: 1fr !important; }
          .proj-row > div:first-child { display: none; }
          .proj-row > div:last-child { display: none; }
        }
      `}</style>
    </div>
  )
}
