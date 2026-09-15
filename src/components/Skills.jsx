import React, { useState, useMemo } from 'react';
import {
  Wrench,
  Code2,
  Server,
  Layers,
  Shield,
  Database,
  Cloud,
  Lock,
  Layout,
  Sparkles,
  Search,
  CheckCircle
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIcons = {
  All: Code2,
  '.NET & Backend': Server,
  'Architecture & Design': Layers,
  'Windows & Systems Security': Shield,
  'Databases & Storage': Database,
  'Cloud & DevOps': Cloud,
  'Security & Authentication': Lock,
  'Frontend & Cross-Platform': Layout,
  'Generative AI & Tools': Sparkles,
};

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['All', ...skillCategories.map((c) => c.name)];

  const allSkills = useMemo(() => {
    return skillCategories.flatMap((c) =>
      c.skills.map((s) => ({ ...s, category: c.name }))
    );
  }, [skillCategories]);

  const displayedSkills = useMemo(() => {
    let list =
      activeTab === 'All'
        ? allSkills
        : skillCategories.find((c) => c.name === activeTab)?.skills || [];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((s) => s.name.toLowerCase().includes(q));
    }
    return list;
  }, [activeTab, searchQuery, allSkills, skillCategories]);

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
            Skills &amp; <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive breakdown of the enterprise .NET ecosystems, low-level Windows architectures, cloud microservices, and AI integrations I build with.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div style={{ maxWidth: '500px', margin: '0 auto 28px', position: 'relative' }}>
          <Search
            size={18}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#64748b'
            }}
          />
          <input
            type="text"
            placeholder="Search skills (e.g., .NET 10, Minifilter, EF Core, Ollama, Docker)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px 12px 46px',
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '9999px',
              color: '#f8fafc',
              fontSize: '0.92rem',
              outline: 'none',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(99, 102, 241, 0.6)';
              e.target.style.boxShadow = '0 0 15px rgba(99, 102, 241, 0.25)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.boxShadow = 'none';
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {tabs.map((tab) => {
            const Icon = categoryIcons[tab] || Code2;
            const count =
              tab === 'All'
                ? allSkills.length
                : skillCategories.find((c) => c.name === tab)?.skills.length || 0;

            return (
              <button
                key={tab}
                className={`skill-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab);
                  setSearchQuery('');
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <Icon size={16} />
                  <span>{tab}</span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      opacity: 0.75,
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: '1px 6px',
                      borderRadius: '9999px'
                    }}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {displayedSkills.length > 0 ? (
            displayedSkills.map((skill, idx) => (
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
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 20px', color: '#94a3b8' }}>
              <p>No skills found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveTab('All');
                }}
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '14px' }}
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
