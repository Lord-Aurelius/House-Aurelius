import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroImage, platformApps, publicStats } from '../data/content'
import { getPublicMetrics } from '../services/publicMetrics'

export function HomePage() {
  const [metrics, setMetrics] = useState(publicStats)
  const [metricsSource, setMetricsSource] = useState('fallback')

  useEffect(() => {
    let active = true

    async function loadPublicMetrics() {
      const result = await getPublicMetrics()
      if (!active) {
        return
      }
      setMetrics(result.metrics)
      setMetricsSource(result.source)
    }

    loadPublicMetrics()

    return () => {
      active = false
    }
  }, [])

  return (
    <>
      <section className="hero">
        <img className="hero-image" src={heroImage} alt="House Aurelius digital operations" />
        <p className="eyebrow">Unified Business Platform</p>
        <h1>House Aurelius</h1>
        <p className="intro">
          One gateway to HAES, HAPOS, HARE, and Church-lib. This dashboard is
          public-safe and only displays non-sensitive, high-level information.
        </p>
        <div className="actions center">
          <a className="button primary" href="#platforms">
            Explore Platforms
          </a>
          <Link className="button ghost" to="/about">
            Meet the Team
          </Link>
        </div>
      </section>

      <section id="platforms" className="section">
        <h2>Connected Platforms</h2>
        <div className="grid">
          {platformApps.map((app) => (
            <article key={app.name} className="card">
              <img className="card-image" src={app.image} alt={`${app.name} preview`} />
              <p className="tag">{app.name}</p>
              <h3>{app.fullName}</h3>
              <p>{app.description}</p>
              <div className="actions">
                <Link
                  className="button ghost"
                  to={`/apps/${app.id ?? app.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  View Details
                </Link>
                <a className="button" href={app.url} target="_blank" rel="noreferrer">
                  Open App
                </a>
                <a
                  className="button ghost"
                  href={app.marketplaceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Marketplace
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Public Dashboard Snapshot</h2>
        <p className="muted">
          These metrics are intentionally aggregated so internal records stay private.
        </p>
        <p className="meta">
          Source:{' '}
          {metricsSource === 'api'
            ? '4 app public APIs (HAES, HAPOS, HARE, Church-lib)'
            : 'Local fallback data'}
        </p>
        <div className="stats">
          {metrics.map((item) => (
            <article key={item.label} className="stat">
              <p className="stat-label">{item.label}</p>
              <p className="stat-value">{item.value}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
