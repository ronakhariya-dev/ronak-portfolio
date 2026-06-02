'use client'

const expertiseGroups = [
  {
    label: 'Backend',
    icon: '⬡',
    color: '#f59e0b',
    skills: ['Java 8/11/17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Hibernate', 'Spring Data JPA', 'REST APIs'],
  },
  {
    label: 'Frontend',
    icon: '◈',
    color: '#a78bfa',
    skills: ['Angular', 'TypeScript', 'RxJS', 'Reactive Forms', 'HTML5', 'CSS3'],
  },
  {
    label: 'Microservices',
    icon: '◎',
    color: '#34d399',
    skills: ['Microservices Architecture', 'Distributed Systems', 'API Gateway', 'Service Discovery', 'Circuit Breaker', 'Event-Driven Architecture', 'Spring Cloud'],
  },
  {
    label: 'AI-Assisted Development',
    icon: '✦',
    color: '#ec4899',
    skills: ['GitHub Copilot', 'ChatGPT', 'Claude', 'Google Gemini', 'Prompt Engineering', 'AI-Assisted Code Generation', 'Code Review & Refactoring', 'Technical Documentation', 'Architecture Brainstorming'],
  },
  {
    label: 'Security',
    icon: '⬟',
    color: '#f87171',
    skills: ['OAuth2', 'JWT', 'Keycloak', 'RBAC', 'Spring Security'],
  },
  {
    label: 'Cloud & DevOps',
    icon: '◐',
    color: '#38bdf8',
    skills: ['Docker','Kubernetes', 'Jenkins', 'CI/CD', 'AWS EC2', 'AWS ECR', 'AWS S3', 'Oracle Cloud Infrastructure (OCI)'],
  },
  {
    label: 'Messaging',
    icon: '⬡',
    color: '#fbbf24',
    skills: ['RabbitMQ', 'Async Messaging', 'Event Streaming'],
  },
  {
    label: 'Databases',
    icon: '◫',
    color: '#818cf8',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    label: 'Monitoring & Storage',
    icon: '◉',
    color: '#fb923c',
    skills: ['ELK Stack', 'MinIO', 'JCache', 'Distributed Caching'],
  },
  {
    label: 'Tools',
    icon: '⊕',
    color: '#a3e635',
    skills: ['Git', 'Jira', 'Maven', 'Swagger / OpenAPI', 'Drools', 'Keycloak Admin'],
  },
]

const domains = [
  { name: 'Telecom CRM', level: 70 },
  { name: 'Government Digital Services', level: 80 },
  { name: 'Enterprise Software', level: 88 },
  { name: 'BFS', level: 20 },
]

export default function Expertise() {
  return (
    <section id="expertise" style={{ padding: '8rem 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#f59e0b', letterSpacing: '0.15em' }}>
            03 / EXPERTISE
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginTop: '0.5rem', letterSpacing: '-0.02em', color: '#e8e8f0' }}>
            Skills & Stack
          </h2>
        </div>

        {/* Skill groups */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1px', marginBottom: '5rem' }}>
          {expertiseGroups.map((group) => (
            <div key={group.label}
              style={{
                padding: '1.5rem',
                background: 'rgba(255,255,255,0.015)',
                border: '1px solid rgba(255,255,255,0.04)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = `${group.color}08`
                el.style.borderColor = `${group.color}25`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(255,255,255,0.015)'
                el.style.borderColor = 'rgba(255,255,255,0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <span style={{ color: group.color, fontSize: '1rem' }}>{group.icon}</span>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: group.color, letterSpacing: '0.04em' }}>
                  {group.label}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {group.skills.map(s => (
                  <span key={s} style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', padding: '3px 8px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                    color: 'rgba(255,255,255,0.55)', borderRadius: '2px',
                  }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Domain proficiency */}
        <div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#e8e8f0', marginBottom: '2rem' }}>
            Domain Proficiency
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: '600px' }}>
            {domains.map(d => (
              <div key={d.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)' }}>{d.name}</span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: '#f59e0b' }}>{d.level}%</span>
                </div>
                <div style={{ height: '3px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${d.level}%`,
                    background: d.level > 70 ? '#f59e0b' : 'rgba(245,158,11,0.4)',
                    borderRadius: '2px',
                    transition: 'width 1s ease',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
