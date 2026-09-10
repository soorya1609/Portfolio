import React from 'react';
import { Zap, Layers, Sparkles, Compass, CheckCircle2, User, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Zap: Zap,
  Layers: Layers,
  Sparkles: Sparkles,
  Compass: Compass,
};

export default function About() {
  const { personal, values } = portfolioData;

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <User size={14} />
            About Me
          </span>
          <h2 className="section-title">
            Architecting Scalable Systems with <span className="gradient-text">Clean Code & Deep Internals</span>
          </h2>
          <p className="section-subtitle">
            A look into my hands-on background in enterprise application architecture, Windows kernel security, and cloud microservices.
          </p>
        </div>

        {/* About Grid */}
        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-text">
            <p>
              {personal.aboutLong}
            </p>
            <p>
              From architecting high-throughput microservices at <strong>KnackForge Soft Solutions</strong> using .NET 8, Clean Architecture, and Azure Functions, to developing low-level security and monitoring solutions with Windows Kernel Mini-Filter drivers in C at <strong>Intechhub Solutions</strong>, I bring rare dual expertise in both high-level distributed systems and low-level OS internals.
            </p>
            <p>
              I am an <strong>Immediate Joiner</strong> actively looking for opportunities where I can drive robust architecture, mentor development teams, and engineer resilient systems from the ground up.
            </p>

            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Enterprise Solution Architecture, SOLID Principles & Clean Architecture</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Windows Kernel Drivers (Mini-Filter), IOCTL & Memory Dump Analysis (WinDbg)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Azure Cloud Microservices, Function Apps & Automated CI/CD Pipelines</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Generative AI / LLM Integrations (OpenAI & Semantic Kernel)</span>
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

          {/* Core Values / Philosophy */}
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
      </div>
    </section>
  );
}
