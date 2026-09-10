import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, MessageSquare, Phone, Loader2, MessageCircle, AlertCircle } from 'lucide-react';
import { Linkedin, Github, WhatsApp } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [activeMethod, setActiveMethod] = useState('email'); // 'email' | 'whatsapp'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 1. DIRECT EMAIL SUBMISSION (AJAX - Zero Redirect)
  const handleDirectEmailSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Portfolio Message from ${formData.name}`,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success !== 'false') {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 7000);
      } else {
        throw new Error(data.message || 'Failed to send message directly');
      }
    } catch (err) {
      // Direct AJAX fallback
      setErrorMessage(
        'Direct delivery encountered a network issue. You can send directly via WhatsApp or retry!'
      );
    } finally {
      setSending(false);
    }
  };

  // 2. WHATSAPP CHAT INITIATION
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const phoneClean = (personal.whatsappNumber || '917200090257').replace(/[^0-9]/g, '');
    const greeting = formData.name ? `Hi Soorya, my name is ${formData.name}.` : 'Hi Soorya,';
    const subjectLine = formData.subject ? ` Regarding: ${formData.subject}.` : '';
    const bodyText = formData.message ? `\n\n${formData.message}` : '\n\nI came across your portfolio and would like to connect!';
    const fullText = `${greeting}${subjectLine}${bodyText}`;

    const waUrl = `https://wa.me/${phoneClean}?text=${encodeURIComponent(fullText)}`;
    window.open(waUrl, '_blank');
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
            Let's Connect & <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="section-subtitle">
            Need to discuss an engineering opportunity or project? Reach me in two direct ways: send an email straight to my inbox (zero redirection), or start an instant WhatsApp conversation.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-cards">
            {/* WhatsApp Card */}
            <div className="glass-card contact-card">
              <div className="contact-icon-box whatsapp">
                <WhatsApp size={24} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div className="contact-card-label">WhatsApp Quick Chat</div>
                <div className="contact-card-value">{personal.whatsappNumber || '+91 72000 90257'}</div>
              </div>
              <a
                href={personal.whatsappUrl || 'https://wa.me/917200090257'}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-sm"
                title="Chat on WhatsApp"
              >
                <span>Chat</span>
              </a>
            </div>

            {/* Direct Email Card */}
            <div className="glass-card contact-card">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div className="contact-card-label">Direct Email Address</div>
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

            {/* Direct Phone Card */}
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

          {/* Right Column: Dual Method Contact Interface */}
          <div className="glass-card contact-form-container">
            {/* Two Different Ways Selector */}
            <div className="contact-method-tabs">
              <button
                type="button"
                className={`contact-method-tab email-tab ${activeMethod === 'email' ? 'active' : ''}`}
                onClick={() => setActiveMethod('email')}
              >
                <Mail size={18} />
                <span>Way 1: Direct Email (No Redirect)</span>
              </button>
              <button
                type="button"
                className={`contact-method-tab whatsapp-tab ${activeMethod === 'whatsapp' ? 'active' : ''}`}
                onClick={() => setActiveMethod('whatsapp')}
              >
                <WhatsApp size={18} />
                <span>Way 2: WhatsApp Chat</span>
              </button>
            </div>

            {/* METHOD 1: DIRECT EMAIL FORM (Zero Redirection) */}
            {activeMethod === 'email' && (
              <>
                {submitted && (
                  <div className="form-alert success">
                    <Check size={18} />
                    <span>Success! Your message was sent directly to {personal.email}. I will respond shortly!</span>
                  </div>
                )}

                {errorMessage && (
                  <div className="form-alert" style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#f87171' }}>
                    <AlertCircle size={18} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleDirectEmailSubmit}>
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
                      placeholder="Software Engineering Opportunity / Project"
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
                      placeholder="Write your message here. It will be delivered directly to Soorya's inbox without redirecting you..."
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                    disabled={sending}
                  >
                    {sending ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending Directly to Inbox...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Direct Email (Zero Redirect)</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}

            {/* METHOD 2: WHATSAPP CHAT INITIATION */}
            {activeMethod === 'whatsapp' && (
              <form onSubmit={handleWhatsAppSubmit}>
                <div style={{ padding: '16px', background: 'rgba(37, 211, 102, 0.08)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(37, 211, 102, 0.2)', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#34d399', fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>
                    <MessageCircle size={18} />
                    <span>Direct WhatsApp Messaging (+91 72000 90257)</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>
                    Type your message below and click "Start WhatsApp Chat". It will open WhatsApp with your pre-drafted message ready to send with 1 click.
                  </p>
                </div>

                <div className="form-group">
                  <label htmlFor="wa-name" className="form-label">
                    Your Name
                  </label>
                  <input
                    id="wa-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="wa-subject" className="form-label">
                    Topic / Role
                  </label>
                  <input
                    id="wa-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Senior Software Engineer Position"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="wa-message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="wa-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Soorya, I would love to connect regarding an engineering role at..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-whatsapp"
                  style={{ width: '100%' }}
                >
                  <WhatsApp size={20} />
                  <span>Start WhatsApp Chat (+91 72000 90257)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
