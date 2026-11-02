import React, { useState, useRef, useEffect, useCallback } from 'react';
import './TechContent.css';

/* ─────────────────────────────────────────────────────────────────────────────
   Real published videos from @AnyBodyCanDev – IDs verified from channel page
   ───────────────────────────────────────────────────────────────────────────── */
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@anybodycandev';
const INSTAGRAM_URL = 'https://www.instagram.com/anybodycandev/';

const videos = [
  {
    id: 'fZ2F8dybtVA',
    title: 'C# Basics in Tamil | Learn C# Programming for Beginners | Build Your First Program',
    duration: '17:10',
  },
  {
    id: 'nn5CcKsp_-k',
    title: 'Microservices Using .NET 8 Web API - Part 3 | Authentication & Authorization | JWT Token Generation',
    duration: '34:48',
  },
  {
    id: '5tTwyJfP5Cw',
    title: 'Microservices Architecture Tamil - Part 2 | Service Communication Full Explanation',
    duration: '6:32',
  },
  {
    id: '4v-EghdvvEY',
    title: 'Microservices in .NET Tamil | API Gateway Implementation | Web API Tutorial | Beginner Friendly',
    duration: '8:12',
  },
];

/* ── YouTube SVG icon ──────────────────────────────────────────────────────── */
function YouTubeIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

/* ── Instagram SVG icon ─────────────────────────────────────────────────────── */
function InstagramIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

/* ── Single video card ─────────────────────────────────────────────────────── */
function VideoCard({ video }) {
  const [active, setActive] = useState(false);
  const cardRef = useRef(null);
  const thumbnailUrl = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

  const activate = useCallback(() => setActive(true), []);

  /* Intersection observer: trigger visibility detection for lazy loading */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="tc-video-card glass-card" ref={cardRef}>
      {/* Thumbnail / embedded player */}
      <div className="tc-video-thumb-wrap">
        {active ? (
          <iframe
            className="tc-video-iframe"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=0&rel=0`}
            title={video.title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            className="tc-video-thumb-btn"
            onClick={activate}
            aria-label={`Play: ${video.title}`}
          >
            <img
              src={thumbnailUrl}
              alt={video.title}
              className="tc-video-thumb-img"
              loading="lazy"
              decoding="async"
            />
            <div className="tc-play-btn" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="white" width="36" height="36">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="tc-video-duration">{video.duration}</span>
          </button>
        )}
      </div>

      {/* Card footer */}
      <div className="tc-video-info">
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="tc-video-title"
          title={video.title}
        >
          {video.title}
        </a>
        <div className="tc-video-meta">
          <span className="tc-yt-badge">
            <YouTubeIcon size={14} />
            YouTube
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Instagram card ─────────────────────────────────────────────────────────── */
function InstagramCard() {
  return (
    <div className="tc-ig-card glass-card">
      <div className="tc-ig-inner">
        <div className="tc-ig-icon-wrap">
          <InstagramIcon size={36} />
        </div>
        <div className="tc-ig-text">
          <p className="tc-ig-handle">@anybodycandev</p>
          <p className="tc-ig-tagline">
            Short-form tips, behind-the-scenes dev moments &amp; programming insights.
          </p>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary tc-ig-btn"
          aria-label="Follow @anybodycandev on Instagram"
        >
          <InstagramIcon size={16} />
          Follow on Instagram
        </a>
      </div>
    </div>
  );
}

/* ── Section root ───────────────────────────────────────────────────────────── */
export default function TechContent() {
  return (
    <section id="tech-content" className="section tc-section">
      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <div className="section-tag">
            <YouTubeIcon size={14} />
            Anybody Can Dev
          </div>
          <h2 className="section-title">
            My Tech <span className="gradient-text">Content</span>
          </h2>
          <p className="section-subtitle">
            Sharing Knowledge. Building Developers.
          </p>
          <p className="tc-section-desc">
            Making programming simple, one concept at a time.
          </p>
        </div>

        {/* YouTube channel CTA row */}
        <div className="tc-channel-cta">
          <div className="tc-channel-brand">
            <div className="tc-yt-logo-wrap">
              <YouTubeIcon size={28} />
            </div>
            <div>
              <p className="tc-channel-name">Anybody Can Dev</p>
              <p className="tc-channel-sub-text">@anybodycandev</p>
            </div>
          </div>
          <div className="tc-channel-actions">
            <a
              href={`${YOUTUBE_CHANNEL_URL}?sub_confirmation=1`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn tc-subscribe-btn"
              aria-label="Subscribe to Anybody Can Dev on YouTube"
            >
              <YouTubeIcon size={16} />
              Subscribe
            </a>
            <a
              href={`${YOUTUBE_CHANNEL_URL}/videos`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="View all videos on YouTube"
            >
              View All Videos →
            </a>
          </div>
        </div>

        {/* Video grid */}
        <div className="tc-videos-grid">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>

        {/* Instagram card */}
        <div className="tc-instagram-row">
          <InstagramCard />
        </div>
      </div>
    </section>
  );
}
