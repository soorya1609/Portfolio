import React from 'react';
import { Zap, Layers, Sparkles, Compass, CheckCircle2, User } from 'lucide-react';
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
            Crafting Digital Products with <span className="gradient-text">Purpose & Precision</span>
          </h2>
          <p className="section-subtitle">
            A look into my background, core engineering philosophy, and what drives my work every day.
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
              Over the course of my career, I've had the privilege of collaborating with high-growth startups, established engineering teams, and creative agencies. I focus heavily on writing clean, self-documenting code, architecting maintainable state logic, and delivering smooth, inclusive user interfaces.
            </p>
            <p>
              When I'm not writing code, you can find me exploring open-source tools, tinkering with interactive 3D graphics, or mentoring aspiring developers.
            </p>

            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Specialized in Modern Component-Driven Frontend Architecture</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Passionate about API Design, Edge Caching & Web Performance</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Dedicated to WCAG Accessibility & Cross-Browser Consistency</span>
              </div>
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
