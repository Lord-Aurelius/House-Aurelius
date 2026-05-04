import React, { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { platformApps } from '../data/content'

function toSlug(value) {
  return value.toLowerCase().replace(/\s+/g, '-')
}

export function AppDetailPage() {
  const { appId } = useParams()
  const app = platformApps.find(
    (item) => item.id === appId || toSlug(item.name) === appId || toSlug(item.fullName) === appId,
  )

  // Find next/prev platform for navigation
  const currentIndex = platformApps.findIndex(p => p.id === app?.id)
  const prevApp = currentIndex > 0 ? platformApps[currentIndex - 1] : null
  const nextApp = currentIndex < platformApps.length - 1 ? platformApps[currentIndex + 1] : null

  useEffect(() => {
    const targets = document.querySelectorAll('.reveal')
    if (!targets.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    targets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [appId])

  if (!app) {
    return <Navigate to="/" replace />
  }

  return (
    <section className="section">
      <nav className="platform-nav">
        <Link className="button ghost" to="/">
          ← Dashboard
        </Link>
        {prevApp && (
          <Link className="button ghost" to={`/apps/${prevApp.id}`}>
            ← {prevApp.name}
          </Link>
        )}
        <span className="platform-nav-current">{app.name}</span>
        {nextApp && (
          <Link className="button ghost" to={`/apps/${nextApp.id}`}>
            {nextApp.name} →
          </Link>
        )}
      </nav>

      <article className="app-detail top-space">
        <img className="app-detail-image" src={app.image} alt={`${app.name} overview`} />
        <p className="tag">{app.name}</p>
        <h1>{app.fullName}</h1>
        <p className="muted">{app.overview}</p>

        {app.landing && (
          <div className="haes-landing top-space">
            <section className="detail-block">
              <h2>{app.landing.headline}</h2>
              <p className="muted">{app.landing.subtext}</p>
              <div className="actions">
                <a className="button primary" href={app.url} target="_blank" rel="noreferrer">
                  {app.landing.primaryCta}
                </a>
                <a className="button ghost" href={app.url} target="_blank" rel="noreferrer">
                  {app.landing.secondaryCta}
                </a>
              </div>
            </section>

            <section className="detail-block top-space">
              <h2>Value Block</h2>
              <p className="muted">{app.landing.valueBlock}</p>
            </section>

            <section className="detail-block top-space reveal">
              <h2>Core Capabilities</h2>
              <div className="capability-grid">
                {app.landing.capabilities.map((item) => (
                  <article key={item.title} className="capability-card">
                    <span className="capability-badge">{item.badge}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="detail-block top-space">
              <h2>Authority Statement</h2>
              <p className="muted">{app.landing.authority}</p>
            </section>

            {app.landing.highlights && (
              <section className="detail-block top-space">
                <h2>Why Choose {app.name}</h2>
                <ul className="highlight-list">
                  {app.landing.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </section>
            )}

            {app.landing.impactMetrics && (
              <section className="metric-strip top-space">
                {app.landing.impactMetrics.map((metric) => (
                  <article key={metric.label} className="metric-pill">
                    <p className="metric-label">{metric.label}</p>
                    <p className="metric-text">{metric.value}</p>
                  </article>
                ))}
              </section>
            )}

            {app.landing.gallery?.length > 0 && (
              <section className="image-row top-space reveal">
                {app.landing.gallery.map((image) => (
                  <img
                    key={image}
                    className="haes-gallery-image"
                    src={image}
                    alt={`${app.name} platform context`}
                  />
                ))}
              </section>
            )}

            {app.landing.storyBlocks && (
              <section className="story-stack top-space reveal">
                {app.landing.storyBlocks.map((item, index) => (
                  <article
                    key={item.title}
                    className={`story-block ${index % 2 === 1 ? 'reverse' : ''}`}
                  >
                    <img className="story-image" src={item.image} alt={item.title} />
                    <div className="story-copy">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </section>
            )}

            {app.landing.testimonial && (
              <section className="testimonial-card top-space reveal">
                <p className="testimonial-quote">"{app.landing.testimonial.quote}"</p>
                <p className="testimonial-author">{app.landing.testimonial.author}</p>
              </section>
            )}

            <section className="detail-block top-space conversion-block">
              <p>{app.landing.conversion}</p>
              <a className="button primary top-space" href={app.url} target="_blank" rel="noreferrer">
                {app.landing.conversionCta}
              </a>
            </section>
          </div>
        )}

        <div className="detail-block top-space">
          <h2>What this app handles</h2>
          <ul className="detail-list">
            {app.modules.map((module) => (
              <li key={module}>{module}</li>
            ))}
          </ul>
        </div>

        <div className="detail-block top-space">
          <h2>Primary users</h2>
          <div className="pill-list">
            {app.audience.map((role) => (
              <span key={role} className="pill">
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="actions top-space">
          <a className="button primary" href={app.url} target="_blank" rel="noreferrer">
            Open {app.name}
          </a>
        </div>
      </article>
    </section>
  )
}
