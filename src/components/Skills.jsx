import React, { useState } from 'react';
import { Wrench, Code2, Server, Database, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIcons = {
  All: Code2,
  Frontend: Code2,
  'Backend & APIs': Server,
  'Databases & Cloud': Database,
  'Tools & DevOps': Terminal,
};

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', ...skillCategories.map((c) => c.name)];

  const displayedSkills =
    activeTab === 'All'
      ? skillCategories.flatMap((c) => c.skills)
      : skillCategories.find((c) => c.name === activeTab)?.skills || [];

  return (
    <section id="skills" className="section" style={{ background: 'rgba(11, 17, 32, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Wrench size={14} />
            Technical Arsenal
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of the modern languages, libraries, databases, and development workflows I utilize to craft scalable applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {tabs.map((tab) => {
            const Icon = categoryIcons[tab] || Code2;
            return (
              <button
                key={tab}
                className={`skill-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <Icon size={16} />
                  {tab}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {displayedSkills.map((skill, idx) => (
            <div key={`${skill.name}-${idx}`} className="glass-card skill-card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
