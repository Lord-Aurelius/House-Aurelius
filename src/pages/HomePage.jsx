import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { platformApps, publicStats } from '../data/content'
import { getPublicMetrics } from '../services/publicMetrics'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function RevealItem({ tag: Tag = 'div', className = '', style = {}, children }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
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
    return () => { active = false }
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80"
            alt="African professionals working with technology"
          />
          <div className="hero-image-overlay" />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Unified Business Platform</p>
          <h1 className="hero-title">
            <span className="hero-title-line">House Aurelius</span>
            <span className="hero-title-accent">Technologies</span>
          </h1>
          <p className="intro">
            One gateway to HAES, HAPOS, HARE, and Church-lib — purpose-built platforms
            for schools, salons, property, and ministry across Africa.
          </p>
          <div className="actions center">
            <a className="button primary" href="#platforms">
              Explore Platforms
            </a>
            <Link className="button ghost" to="/about">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      <section id="platforms" className="section">
        <RevealItem tag="div">
          <h2>Connected Platforms</h2>
          <p className="muted section-intro">
            Each platform is purpose-built for its industry. Click any card to explore features,
            capabilities, and how it can be deployed for your operation.
          </p>
        </RevealItem>
        <div className="grid top-space">
          {platformApps.map((app, i) => (
            <RevealItem
              tag="article"
              key={app.name}
              className="card"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <img className="card-image" src={app.image} alt={`${app.name} preview`} />
              <p className="tag">{app.name}</p>
              <h3>{app.fullName}</h3>
              <p>{app.description}</p>
              <div className="actions">
                <Link
                  className="button primary"
                  to={`/apps/${app.id ?? app.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  View Details
                </Link>
                <a className="button ghost" href={app.url} target="_blank" rel="noreferrer">
                  Open App
                </a>
              </div>
            </RevealItem>
          ))}
        </div>
      </section>

      <section className="section">
        <RevealItem tag="div">
          <h2>Public Dashboard Snapshot</h2>
          <p className="muted">
            These metrics are intentionally aggregated so internal records stay private.
          </p>
          {metricsSource !== 'api' ? null : (
            <p className="meta">Source: 4 app public APIs (HAES, HAPOS, HARE, Church-lib)</p>
          )}
        </RevealItem>
        <div className="stats top-space">
          {metrics.map((item, i) => (
            <RevealItem
              tag="article"
              key={item.label}
              className="stat"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="stat-label">{item.label}</p>
              <p className="stat-value">{item.value}</p>
            </RevealItem>
          ))}
        </div>
      </section>
    </>
  )
}
