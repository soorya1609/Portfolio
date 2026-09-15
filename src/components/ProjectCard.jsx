import React, { useState } from 'react';
import { ExternalLink, Layers, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectCard({ project }) {
  const [showArch, setShowArch] = useState(false);

  return (
    <div className={`glass-card project-card ${project.featured ? 'project-card-featured' : ''}`}>
      <div className="project-top">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="project-category">{project.category}</span>
          {project.featured && (
            <span
              style={{
                fontSize: '0.72rem',
                color: '#38bdf8',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '9999px',
                padding: '2px 8px',
                fontWeight: 600
              }}
            >
              Featured
            </span>
          )}
        </div>
        <div className="project-links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link-icon"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github size={19} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link-icon"
              aria-label={`${project.title} Live demo`}
            >
              <ExternalLink size={19} />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <div className="project-subtitle">{project.subtitle}</div>
      <p className="project-desc">{project.description}</p>

      {project.stats && (
        <div className="project-highlight">
          <span>{project.stats}</span>
        </div>
      )}

      {/* Architecture Toggle if available */}
      {project.architecture && (
        <div style={{ marginTop: '16px', marginBottom: '16px' }}>
          <button
            onClick={() => setShowArch(!showArch)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              fontSize: '0.8rem',
              fontWeight: 600,
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              borderRadius: '8px',
              color: '#a5b4fc',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Layers size={14} color="#818cf8" />
            <span>{showArch ? 'Hide Architecture' : 'View Clean Architecture Tiers'}</span>
            {showArch ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {showArch && (
            <div
              style={{
                marginTop: '12px',
                padding: '12px',
                background: 'rgba(10, 15, 28, 0.85)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38bdf8', fontWeight: 700 }}>
                {project.architecture.title}
              </div>
              {project.architecture.layers.map((layer, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '6px 8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '6px',
                    borderLeft: '2px solid #6366f1'
                  }}
                >
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#f8fafc' }}>
                    {layer.name}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    {layer.detail}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <ul className="project-bullets">
          {project.highlights.map((bullet, idx) => (
            <li key={idx} className="project-bullet-item">
              <span className="project-bullet-chevron">▹</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-pill">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
