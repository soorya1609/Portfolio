import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-text">
          <p>
            © {new Date().getFullYear()} {personal.name}. Built with{' '}
            <span style={{ color: '#ef4444' }}>♥</span> using React & Modern CSS.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="footer-socials">
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            title="Scroll back to top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
