import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Terminal, Code2, Sparkles, Cpu } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, stats } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [personal.roles.length]);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Intro & Call to Action */}
          <div className="hero-content">
            {/* Status Pill */}
            <div className="hero-status-pill">
              <span className="pulse-indicator"></span>
              <span>{personal.status}</span>
            </div>

            {/* Headline */}
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personal.name}</span>
              <span className="hero-typewriter">
                {personal.roles[roleIndex]}
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              {personal.bioSnippet}
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <Mail size={18} />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personal.socialLinks.email}
                className="social-icon-btn"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Visual with Floating Badges */}
          <div className="hero-visual">
            <div className="hero-card">
              <div className="code-header">
                <div className="code-dots">
                  <span className="code-dot dot-red"></span>
                  <span className="code-dot dot-yellow"></span>
                  <span className="code-dot dot-green"></span>
                </div>
                <span className="code-title">DeveloperProfile.ts</span>
                <Terminal size={14} color="#64748b" />
              </div>

              <div className="code-snippet">
                <p><span className="code-keyword">const</span> <span className="code-fn">engineer</span> = &#123;</p>
                <p style={{ paddingLeft: '1.2rem' }}>
                  <span className="code-prop">name</span>: <span className="code-str">"{personal.name}"</span>,
                </p>
                <p style={{ paddingLeft: '1.2rem' }}>
                  <span className="code-prop">role</span>: <span className="code-str">"{personal.role}"</span>,
                </p>
                <p style={{ paddingLeft: '1.2rem' }}>
                  <span className="code-prop">focus</span>: [<span className="code-str">"React"</span>, <span className="code-str">"Node"</span>, <span className="code-str">"Cloud"</span>],
                </p>
                <p style={{ paddingLeft: '1.2rem' }}>
                  <span className="code-prop">availableForHire</span>: <span className="code-keyword">true</span>,
                </p>
                <p style={{ paddingLeft: '1.2rem' }}>
                  <span className="code-prop">passion</span>: <span className="code-str">"Scalable & Intuitive Apps"</span>
                </p>
                <p>&#125;;</p>
                <br />
                <p><span className="code-keyword">export default</span> <span className="code-fn">engineer</span>;</p>
              </div>

              {/* Floating Badges */}
              <div className="floating-badge badge-top">
                <Code2 size={18} color="#06b6d4" />
                <span>Modern React 19</span>
              </div>

              <div className="floating-badge badge-bottom">
                <Cpu size={18} color="#8b5cf6" />
                <span>Full-Stack Architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
