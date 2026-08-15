import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { platformApps, publicStats } from '../data/content'
import { getPublicMetrics } from '../services/publicMetrics'

function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}

function PlatformCard({ app, index }) {
  const [ref, isVisible] = useReveal()

  return (
    <article
      ref={ref}
      className={`platform-card ${isVisible ? 'is-visible' : ''}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="platform-card-media">
        <img
          className="platform-card-image"
          src={app.image}
          alt={`${app.name} preview`}
          loading="lazy"
        />
        <span className="platform-card-tag">{app.name}</span>
      </div>
      <div className="platform-card-content">
        <h3 className="platform-card-title">{app.fullName}</h3>
        <p className="platform-card-desc">{app.description}</p>
        <div className="platform-card-actions">
          <Link
            className="button button-secondary"
            to={`/apps/${app.id ?? app.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            View Details
          </Link>
          <a className="button button-primary" href={app.url} target="_blank" rel="noreferrer">
            Open App
          </a>
        </div>
      </div>
    </article>
  )
}

function StatItem({ item, index }) {
  const [ref, isVisible] = useReveal()

  return (
    <article
      ref={ref}
      className={`stat-item ${isVisible ? 'is-visible' : ''}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <p className="stat-label">{item.label}</p>
      <p className="stat-value">{item.value}</p>
    </article>
  )
}

export function HomePage() {
  const [metrics, setMetrics] = useState(publicStats)
  const [metricsSource, setMetricsSource] = useState('fallback')

  useEffect(() => {
    let active = true
    async function loadPublicMetrics() {
      const result = await getPublicMetrics()
      if (!active) return
      setMetrics(result.metrics)
      setMetricsSource(result.source)
    }
    loadPublicMetrics()
    return () => {
      active = false
    }
  }, [])

  const [heroRef, heroVisible] = useReveal(0.1)

  return (
    <>
      <section ref={heroRef} className={`hero ${heroVisible ? 'is-visible' : ''}`}>
        <div className="hero-copy">
          <p className="hero-eyebrow">Powered by AEGIS</p>
          <h1 className="hero-title">
            House Aurelius
            <span className="hero-title-accent">Technologies</span>
          </h1>
          <p className="hero-intro">
            Twelve purpose-built platforms, one intelligence layer.
            AEGIS understands, protects, and executes across schools, salons, property,
            ministry, agriculture, and enterprises throughout Africa.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#platforms">
              Explore Platforms
            </a>
            <Link className="button button-secondary" to="/about">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      <section id="promo" className="section promo-section">
        <div className="promo-copy">
          <p className="hero-eyebrow">20 Second Product Promo</p>
          <h2 className="section-title">See the platform story in motion</h2>
          <p className="section-intro">
            A quick overview of the connected ecosystem built for African businesses.
          </p>
          <div className="promo-actions">
            <a className="button button-primary" href="/videos/house-aurelius-promo.mp4" download>
              Download Promo
            </a>
            <a
              className="button button-secondary"
              href="/videos/house-aurelius-promo.mp4"
              target="_blank"
              rel="noreferrer"
            >
              Open Video
            </a>
          </div>
        </div>
        <div className="promo-video-frame">
          <video
            className="promo-video"
            controls
            playsInline
            preload="metadata"
            poster="/videos/house-aurelius-promo-poster.png"
          >
            <source src="/videos/house-aurelius-promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section id="platforms" className="section">
        <div className="section-header">
          <div className="section-divider" />
          <h2 className="section-title">Connected Platforms</h2>
          <p className="section-intro">
            Each platform is purpose-built for its industry. Click to explore.
          </p>
        </div>
        <div className="platforms-grid">
          {platformApps.map((app, i) => (
            <PlatformCard key={app.name} app={app} index={i} />
          ))}
        </div>
      </section>

      <section className="section stats-section">
        <div className="section-header">
          <div className="section-divider" />
          <h2 className="section-title">Public Dashboard</h2>
          <p className="section-intro">
            Aggregated metrics — internal records stay private.
          </p>
          {metricsSource !== 'api' ? null : (
            <p className="section-intro meta">Source: connected public app APIs</p>
          )}
        </div>
        <div className="stats-grid">
          {metrics.map((item, i) => (
            <StatItem key={item.label} item={item} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
