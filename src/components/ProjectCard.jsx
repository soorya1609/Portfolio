import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectCard({ project }) {
  return (
    <div className="glass-card project-card">
      <div className="project-top">
        <span className="project-category">{project.category}</span>
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
