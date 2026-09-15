import React, { useState } from 'react';
import { FolderGit2, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { projects, personal } = portfolioData;
  const [filter, setFilter] = useState('All');

  // Compute unique categories
  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} />
            Featured Engineering Work
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects &amp; Systems</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive portfolio of enterprise Clean Architecture platforms, low-level Windows Minifilter security drivers, high-throughput cloud pipelines, and AI integrations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="project-filters">
          {categories.map((cat) => {
            const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                <span>{cat}</span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    opacity: 0.8,
                    marginLeft: '6px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '1px 6px',
                    borderRadius: '9999px'
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <a
            href={personal.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <Github size={18} />
            <span>Explore More on GitHub</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
