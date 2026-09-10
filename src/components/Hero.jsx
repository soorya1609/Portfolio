import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Terminal, Code2, Cpu, Download, Phone, ShieldCheck } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, stats } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.roles.length);
    }, 3200);
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
              <a
                href={personal.resumeUrl}
                download={personal.resumeDownloadName || "Soorya_Sankar_Resume.pdf"}
                className="btn btn-primary"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
              <a href="#projects" className="btn btn-secondary">
                <span>Featured Projects</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Direct Reach */}
            <div className="hero-socials">
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="GitHub"
                title="GitHub Repositories"
              >
                <Github size={20} />
              </a>
              <a
                href={personal.socialLinks.email}
                className="social-icon-btn"
                aria-label="Email"
                title="Send Email"
              >
                <Mail size={20} />
              </a>
              {personal.socialLinks.phone && (
                <a
                  href={personal.socialLinks.phone}
                  className="social-icon-btn"
                  aria-label="Phone"
                  title="Call Phone"
                >
                  <Phone size={20} />
                </a>
              )}
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
                <span className="code-title">SoftwareArchitect.cs</span>
                <Terminal size={14} color="#64748b" />
              </div>

              <div className="code-snippet">
                <p><span className="code-keyword">public class</span> <span className="code-fn">EngineerProfile</span></p>
                <p>&#123;</p>
                <p style={{ paddingLeft: '1.2rem' }}>
                  <span className="code-keyword">public string</span> <span className="code-prop">Name</span> =&gt; <span className="code-str">"{personal.name}"</span>;
                </p>
                <p style={{ paddingLeft: '1.2rem' }}>
                  <span className="code-keyword">public string</span> <span className="code-prop">Role</span> =&gt; <span className="code-str">"{personal.role}"</span>;
                </p>
                <p style={{ paddingLeft: '1.2rem' }}>
                  <span className="code-keyword">public string[]</span> <span className="code-prop">CoreStack</span> =&gt; [
                </p>
                <p style={{ paddingLeft: '2.4rem' }}>
                  <span className="code-str">"C# / .NET 8"</span>, <span className="code-str">"C (Kernel Drivers)"</span>,
                </p>
                <p style={{ paddingLeft: '2.4rem' }}>
                  <span className="code-str">"Azure & Microservices"</span>, <span className="code-str">"React"</span>
                </p>
                <p style={{ paddingLeft: '1.2rem' }}>];</p>
                <p style={{ paddingLeft: '1.2rem' }}>
                  <span className="code-keyword">public bool</span> <span className="code-prop">ImmediateJoiner</span> =&gt; <span className="code-keyword">true</span>;
                </p>
                <p>&#125;</p>
              </div>

              {/* Floating Badges */}
              <div className="floating-badge badge-top">
                <ShieldCheck size={18} color="#06b6d4" />
                <span>Clean Architecture & .NET 8</span>
              </div>

              <div className="floating-badge badge-bottom">
                <Cpu size={18} color="#8b5cf6" />
                <span>Windows Kernel & Systems</span>
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
