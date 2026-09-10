import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin, WhatsApp } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container" style={{ justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div className="footer-socials">
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.socialLinks.whatsapp || 'https://wa.me/917200090257'}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="WhatsApp"
              title="WhatsApp Chat"
            >
              <WhatsApp size={18} />
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
