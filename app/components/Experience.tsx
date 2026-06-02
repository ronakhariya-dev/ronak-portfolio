'use client'
import { useState } from 'react'

const experiences = [
  {
    company: 'LTIMindtree',
    role: 'Senior Software Engineer',
    period: 'May 2026 – Present',
    domain: 'Banking & Financial Services (BFS)',
    color: '#f59e0b',
    projects: [
      {
        name: 'European Banking Client',
        period: 'May 2026 – Present',
        description: 'Working as a Senior Software Engineer in the Banking & Financial Services domain for a leading European banking client.',
        highlights: [
          'Banking & Financial Services (BFS)',
          'Enterprise Banking Applications',
        ],
        tech: ['Java', 'Spring Boot', 'Microservices', 'Banking Systems','Azure'],
      },
    ],
  },
  {
    company: 'Avisys Services',
    role: 'Software Developer',
    period: 'May 2023 – May 2026',
    domain: 'Govt. Digital Transformation & Telecom',
    color: '#a78bfa',
    projects: [
      {
        name: 'Bihar Education Loan System',
        period: 'Dec 2024 – May 2026',
        description: 'Large-scale government digital platform that streamlines the education loan lifecycle for students across Bihar — from application to disbursement.',
        highlights: [
          'Designed and developed 5+ Spring Boot microservices (Loan, Beneficiary, Student Portal, Approval, Recovery)',
          'Developed scalable distributed architecture capable of handling thousands of student applications monthly',
          'Secured APIs using Spring Security, Keycloak, OAuth2, JWT, and RBAC',
          'Implemented RabbitMQ-based asynchronous communication between services',
          'Integrated MinIO for secure document management and distributed caching via JCache',
          'Applied Circuit Breaker, Event-Driven Architecture, API Gateway, Service Discovery, Retry Pattern, and centralized configuration management',
          'Deployed ELK Stack for monitoring and log analytics',
          'Applied externalized configuration and secrets management using Vault',
          'Managed containerized deployments through Docker and Jenkins CI/CD',
        ],
        tech: ['Java', 'Spring Boot', 'Spring Cloud', 'Angular', 'RabbitMQ', 'Keycloak', 'MinIO', 'ELK', 'PostgreSQL', 'Jenkins', 'Docker'],
      },
      {
        name: 'Telecom CRM Platform',
        period: 'May 2023 – Nov 2024',
        description: 'Enterprise CRM platform supporting customer onboarding, product management, service management, and order processing for a telecom operator.',
        highlights: [
          'Delivered end-to-end features across Angular UI and Spring Boot microservices',
          'Developed reusable Angular components and reactive forms with RxJS',
          'Built centralized Audit Microservice for transaction tracking across distributed systems',
          'Implemented Drools Rule Engine for configurable business rules',
          'Designed CI/CD pipelines using Jenkins; containerized services with Docker',
          'Worked with AWS EC2, ECR, and S3 for cloud deployments',
        ],
        tech: ['Java', 'Spring Boot', 'Angular', 'RxJS', 'TypeScript', 'Drools', 'AWS', 'Jenkins', 'Docker', 'PostgreSQL'],
      },
    ],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const [activeProject, setActiveProject] = useState<{ [key: number]: number }>({ 0: 0, 1: 0 })

  return (
    <section id="experience" style={{ padding: '8rem 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Section header */}
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#f59e0b', letterSpacing: '0.15em' }}>
            01 / EXPERIENCE
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginTop: '0.5rem', letterSpacing: '-0.02em', color: '#e8e8f0' }}>
            Work History
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '3rem' }} className="exp-grid">
          {/* Company list */}
          <div>
            {experiences.map((exp, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                width: '100%', textAlign: 'left', border: 'none',
                cursor: 'pointer', padding: '1.25rem 1rem',
                borderLeft: `2px solid ${active === i ? exp.color : 'rgba(255,255,255,0.06)'}`,
                marginBottom: '4px',
                transition: 'all 0.2s',
                background: active === i ? 'rgba(255,255,255,0.03)' : 'transparent',
              }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: active === i ? exp.color : 'rgba(255,255,255,0.55)' }}>{exp.company}</div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', marginTop: '4px', letterSpacing: '0.06em' }}>{exp.period}</div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: active === i ? exp.color : 'rgba(255,255,255,0.2)', marginTop: '3px', letterSpacing: '0.04em' }}>{exp.domain}</div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: '#e8e8f0' }}>{experiences[active].role}</h3>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: experiences[active].color }}>{experiences[active].company}</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)' }}>{experiences[active].period}</span>
              </div>
            </div>

            {/* Project tabs (only if multiple projects) */}
            {experiences[active].projects.length > 1 && (
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0' }}>
                {experiences[active].projects.map((p, pi) => (
                  <button key={pi} onClick={() => setActiveProject(prev => ({ ...prev, [active]: pi }))}
                    style={{
                      border: 'none', cursor: 'pointer',
                      fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.05em',
                      padding: '8px 14px',
                      color: activeProject[active] === pi ? experiences[active].color : 'rgba(255,255,255,0.35)',
                      borderBottom: `2px solid ${activeProject[active] === pi ? experiences[active].color : 'transparent'}`,
                      transition: 'all 0.2s',
                    }}>
                    {p.name.split(' ').slice(0, 3).join(' ')}
                  </button>
                ))}
              </div>
            )}

            {/* Project detail */}
            {(() => {
              const proj = experiences[active].projects[activeProject[active] ?? 0]
              return (
                <div>
                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1.05rem', color: '#e8e8f0' }}>{proj.name}</h4>
                    <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>{proj.period}</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{proj.description}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.5rem' }}>
                    {proj.highlights.map((h, hi) => (
                      <li key={hi} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: experiences[active].color, marginTop: '2px', flexShrink: 0, fontFamily: 'DM Mono, monospace', fontSize: '0.7rem' }}>▸</span>
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.6 }}>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {proj.tech.map(t => (
                      <span key={t} style={{
                        fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', padding: '3px 10px',
                        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.45)', borderRadius: '2px',
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      </div>

      <style>{`
        .exp-grid { grid-template-columns: 280px 1fr; }
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
