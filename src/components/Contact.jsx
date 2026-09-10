import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, MessageSquare, Phone } from 'lucide-react';
import { Linkedin, Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger mailto fallback for direct client sending
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <MessageSquare size={14} />
            Get In Touch
          </span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, want to discuss an engineering opportunity, or just want to connect? My inbox is always open.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-cards">
            {/* Email Card */}
            <div className="glass-card contact-card">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div className="contact-card-label">Email Me At</div>
                <a
                  href={`mailto:${personal.email}`}
                  className="contact-card-value"
                  style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}
                >
                  {personal.email}
                </a>
              </div>
              <button
                className="btn btn-secondary btn-sm"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone Card */}
            {personal.phone && (
              <div className="glass-card contact-card">
                <div className="contact-icon-box">
                  <Phone size={22} />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div className="contact-card-label">Direct Phone</div>
                  <a href={`tel:${personal.phone}`} className="contact-card-value">
                    {personal.phone}
                  </a>
                </div>
              </div>
            )}

            {/* Location Card */}
            <div className="glass-card contact-card">
              <div className="contact-icon-box">
                <MapPin size={22} />
              </div>
              <div>
                <div className="contact-card-label">Current Location</div>
                <div className="contact-card-value">{personal.location}</div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-card contact-card"
            >
              <div className="contact-icon-box">
                <Linkedin size={22} />
              </div>
              <div>
                <div className="contact-card-label">Professional Profile</div>
                <div className="contact-card-value">Connect on LinkedIn</div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="glass-card contact-card"
            >
              <div className="contact-icon-box">
                <Github size={22} />
              </div>
              <div>
                <div className="contact-card-label">Source Code & Repos</div>
                <div className="contact-card-value">View GitHub Repositories</div>
              </div>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card contact-form-container">
            {submitted && (
              <div className="form-alert success">
                <Check size={18} />
                <span>Thank you! Your email client has been opened to send your message.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration / Opportunity"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or question..."
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
