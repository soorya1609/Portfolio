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
            Featured Work
          </span>
          <h2 className="section-title">
            Recent <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="section-subtitle">
            A curated showcase of web applications, developer tools, and architectures I've built.
          </p>
        </div>

        {/* Category Filters */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
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
