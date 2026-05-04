import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { platformApps, publicStats } from '../data/content'
import { getPublicMetrics } from '../services/publicMetrics'

/* Scroll reveal hook */
function useReveal(options = {}) {
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
      { threshold: 0.1, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return [ref, isVisible]
}

/* Platform Card Component */
function PlatformCard({ app, index }) {
  const [ref, isVisible] = useReveal()
  
  return (
    <article 
      ref={ref} 
      className={`platform-card ${isVisible ? 'is-visible' : ''}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <img 
        className="platform-card-image" 
        src={app.image} 
        alt={`${app.name} preview`}
        loading="lazy"
      />
      <div className="platform-card-content">
        <p className="platform-card-tag">{app.name}</p>
        <h3 className="platform-card-title">{app.fullName}</h3>
        <p className="platform-card-desc">{app.description}</p>
        <div className="platform-card-actions">
          <Link className="button button-ghost" to={`/apps/${app.id ?? app.name.toLowerCase().replace(/\s+/g, '-')}`}>
            View Details
          </Link>
          <a className="button button-primary" href={app.url} target="_blank" rel="noreferrer">
            Open App →
          </a>
        </div>
      </div>
    </article>
  )
}

/* Stat Component */
function StatItem({ item, index }) {
  const [ref, isVisible] = useReveal()
  
  return (
    <article 
      ref={ref}
      className={`stat-item ${isVisible ? 'is-visible' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <p className="stat-label">{item.label}</p>
      <p className="stat-value">{item.value}</p>
    </article>
  )
}

/* Main Home Page */
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
    return () => { active = false }
  }, [])

  const [heroRef, heroVisible] = useReveal({ threshold: 0.1 })
  const [platformsRef, platformsVisible] = useReveal({ threshold: 0.1 })
  const [statsRef, statsVisible] = useReveal({ threshold: 0.1 })

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className={`hero ${heroVisible ? 'is-visible' : ''}`}>
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="hero-eyebrow">Unified Business Platform</p>
          <h1 className="hero-title">
            House Aurelius
            <span className="hero-title-accent">Technologies</span>
          </h1>
          <p className="hero-intro">
            One gateway to HAES, HAPOS, HARE, Church-lib, Hifathi, and Mkulima —
            purpose-built platforms for schools, salons, property, ministry, personal finance,
            and agriculture across Africa.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#platforms">
              Explore Platforms
            </a>
            <Link className="button button-ghost" to="/about">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="section">
        <div className="section-header">
          <h2 className="section-title">Connected Platforms</h2>
          <p className="section-intro">
            Each platform is purpose-built for its industry. Click any card to explore features,
            capabilities, and how it can be deployed for your operation.
          </p>
        </div>
        <div className="platforms-grid">
          {platformApps.map((app, i) => (
            <PlatformCard key={app.name} app={app} index={i} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Public Dashboard Snapshot</h2>
          <p className="section-intro">
            These metrics are intentionally aggregated so internal records stay private.
          </p>
          {metricsSource !== 'api' ? null : (
            <p className="section-intro" style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              Source: connected public app APIs
            </p>
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