import React from 'react';
import {
  Zap,
  Layers,
  Sparkles,
  Compass,
  CheckCircle2,
  User,
  Download,
  Database,
  Wrench,
  Server,
  Shield,
  Cloud,
  Layout,
  Cpu,
  Target
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Zap,
  Layers,
  Sparkles,
  Compass,
  Database,
  Wrench,
  Server,
  Shield,
  Cloud,
  Layout,
  Cpu,
  Target
};

export default function About() {
  const { personal, values, capabilities, professionalPositioning } = portfolioData;

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <User size={14} />
            Professional Profile
          </span>
          <h2 className="section-title">
            Architecting Scalable Systems with <span className="gradient-text">Clean Code & Deep Internals</span>
          </h2>
          <p className="section-subtitle">
            Software Development Engineer with 3 years of documented professional experience in enterprise backend development, Windows systems engineering, and cloud microservices.
          </p>
        </div>

        {/* Identity & Positioning Callout */}
        <div className="positioning-banner glass-card">
          <div className="positioning-content">
            <div className="positioning-badge">
              <Target size={15} />
              <span>Core Positioning</span>
            </div>
            <p className="positioning-text">
              "{personal.oneLineIdentity}"
            </p>
            <div className="positioning-flow">
              <span className="flow-step">C#</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step">.NET 10/8</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step">ASP.NET Core Web API</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step">Clean Architecture</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step">Azure &amp; GenAI</span>
            </div>
          </div>
        </div>

        {/* About Grid */}
        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-text">
            <h3 style={{ fontSize: '1.4rem', color: '#f8fafc', marginBottom: '16px' }}>
              Professional Background
            </h3>
            <p>
              {personal.aboutLong}
            </p>
            <p>
              From architecting high-throughput microservices at <strong>KnackForge Soft Solutions</strong> using .NET 8, Clean Architecture, and Azure Functions, to developing low-level security and monitoring solutions with Windows Kernel Mini-Filter drivers in C at <strong>Intechhub Solutions</strong>, I bring rare dual depth in both high-level distributed web architectures and low-level OS internals.
            </p>
            <p>
              I am an <strong>Immediate Joiner</strong> actively looking for opportunities where I can drive robust architecture, mentor development teams, and engineer resilient systems from the ground up.
            </p>

            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Enterprise Solution Architecture, SOLID Principles &amp; Clean Architecture</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Windows Minifilter Drivers, Filter Manager, IOCTL &amp; WinDbg BSOD Dump Analysis</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Azure Cloud Microservices, Serverless Functions &amp; Automated CI/CD Pipelines</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Generative AI Transitions: Ollama Local LLMs, Semantic Kernel &amp; RAG</span>
              </div>
            </div>

            <div style={{ marginTop: '32px' }}>
              <a
                href={personal.resumeUrl}
                download={personal.resumeDownloadName || "Soorya_Sankar_Resume.pdf"}
                className="btn btn-primary"
              >
                <Download size={18} />
                <span>Download Verified Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Core Values / Architectural Pillars */}
          <div className="values-grid">
            {values.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Sparkles;
              return (
                <div key={idx} className="glass-card value-card">
                  <div className="value-icon-box">
                    <IconComp size={24} />
                  </div>
                  <h3 className="value-title">{item.title}</h3>
                  <p className="value-desc">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Software Engineering Capabilities Section */}
        {capabilities && capabilities.length > 0 && (
          <div style={{ marginTop: '70px' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span className="section-tag">
                <Cpu size={14} />
                Core Competencies
              </span>
              <h3 style={{ fontSize: '1.8rem', color: '#f8fafc', marginTop: '10px' }}>
                Software Engineering <span className="gradient-text">Capabilities</span>
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: '640px', margin: '8px auto 0' }}>
                Documented engineering proficiencies spanning backend APIs, systems programming, database modeling, and AI-enabled software delivery.
              </p>
            </div>

            <div className="capabilities-grid">
              {capabilities.map((cap) => {
                const IconComp = iconMap[cap.icon] || Server;
                return (
                  <div key={cap.id} className="glass-card capability-card">
                    <div className="capability-top">
                      <div className="capability-icon-box">
                        <IconComp size={22} />
                      </div>
                      <span className="capability-category">{cap.category}</span>
                    </div>
                    <h4 className="capability-title">{cap.title}</h4>
                    <p className="capability-desc">{cap.description}</p>
                    <div className="capability-techs">
                      {cap.technologies.map((tech) => (
                        <span key={tech} className="tech-pill-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
