import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, CheckCircle2, Target, Sparkles, Cpu, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experiences, education, additionalInfo, personal, professionalPositioning } = portfolioData;

  return (
    <section id="experience" className="section" style={{ background: 'rgba(11, 17, 32, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Briefcase size={14} />
            Career Journey
          </span>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Milestones</span>
          </h2>
          <p className="section-subtitle">
            3 years of documented professional experience in enterprise .NET backend engineering, low-level Windows systems, and cloud-native solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">{exp.company}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <span className="timeline-period">
                      <Calendar size={13} style={{ display: 'inline', marginRight: '6px' }} />
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                        <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <p className="timeline-desc">{exp.description}</p>

                <div className="timeline-bullets">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="timeline-bullet">
                      <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tags" style={{ marginTop: '16px' }}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Target Roles & Positioning Grid */}
        {personal.targetRoles && (
          <div style={{ maxWidth: '900px', margin: '60px auto 0' }}>
            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Target size={22} color="#38bdf8" />
                <h3 style={{ fontSize: '1.35rem', color: '#f8fafc' }}>
                  Target Roles &amp; Professional Specialization
                </h3>
              </div>

              {professionalPositioning && (
                <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '20px' }}>
                  {professionalPositioning.primaryHeadline}
                </p>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {personal.targetRoles.map((role, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'rgba(99, 102, 241, 0.12)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      color: '#c7d2fe',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      fontSize: '0.84rem',
                      fontWeight: 500
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>

              {/* Skill Matrix Summary */}
              {professionalPositioning && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginTop: '16px' }}>
                  <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                      Primary Backend
                    </div>
                    <div style={{ fontSize: '0.86rem', color: '#e2e8f0' }}>{professionalPositioning.primaryExpertise}</div>
                  </div>
                  <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#06b6d4', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                      Cloud &amp; Architecture
                    </div>
                    <div style={{ fontSize: '0.86rem', color: '#e2e8f0' }}>{professionalPositioning.cloudArchitecture}</div>
                  </div>
                  <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#8b5cf6', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                      Windows Systems
                    </div>
                    <div style={{ fontSize: '0.86rem', color: '#e2e8f0' }}>{professionalPositioning.systems}</div>
                  </div>
                  <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#ec4899', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                      Emerging AI
                    </div>
                    <div style={{ fontSize: '0.86rem', color: '#e2e8f0' }}>{professionalPositioning.emerging}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Education Section */}
        <div style={{ maxWidth: '900px', margin: '50px auto 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <GraduationCap size={22} color="#06b6d4" />
            <h3 style={{ fontSize: '1.4rem' }}>Education</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {education.map((edu, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '1.15rem' }}>{edu.degree}</h4>
                  <span className="timeline-period">{edu.period}</span>
                </div>
                <div style={{ color: '#38bdf8', fontWeight: 600, marginBottom: '6px' }}>
                  {edu.institution}
                </div>
                {edu.honors && (
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '4px' }}>
                    {edu.honors}
                  </div>
                )}
                {edu.activities && (
                  <div style={{ color: '#64748b', fontSize: '0.85rem' }}>
                    {edu.activities}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Leadership & Competencies */}
        {additionalInfo && additionalInfo.length > 0 && (
          <div style={{ maxWidth: '900px', margin: '50px auto 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Award size={22} color="#8b5cf6" />
              <h3 style={{ fontSize: '1.4rem' }}>Leadership &amp; Domain Competencies</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {additionalInfo.map((item, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                    <h4 style={{ fontSize: '1.05rem', color: '#f8fafc' }}>{item.title}</h4>
                    {item.badge && (
                      <span className="hero-status-pill" style={{ margin: 0, padding: '4px 10px', fontSize: '0.75rem' }}>
                        <span className="pulse-indicator"></span>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
