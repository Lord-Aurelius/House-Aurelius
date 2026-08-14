import React, { useState } from 'react'
import { platformApps } from '../data/content'

export function DownloadPage() {
  const downloadableApps = platformApps.filter((app) => app.download?.android?.url)
  const [activeId, setActiveId] = useState(() => downloadableApps[0]?.id ?? null)
  const activeApp = downloadableApps.find((app) => app.id === activeId) ?? downloadableApps[0]

  if (!activeApp) {
    return (
      <section className="section download">
        <h1>Download House Aurelius Apps</h1>
        <p className="muted">No public downloads are available right now.</p>
      </section>
    )
  }

  return (
    <section className="section download">
      <h1>Download House Aurelius Apps</h1>
      <p className="muted download-intro">
        Choose a platform below to download the latest Android build from our secure hosted
        release links.
      </p>

      <div className="download-tabs" role="tablist" aria-label="House Aurelius app downloads">
        {downloadableApps.map((app) => {
          const isActive = app.id === activeApp.id

          return (
            <button
              key={app.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`download-tab${isActive ? ' active' : ''}`}
              onClick={() => setActiveId(app.id)}
            >
              {app.name}
            </button>
          )
        })}
      </div>

      <div className="download-card">
        <img 
          className="download-card-image" 
          src={activeApp.image} 
          alt={`${activeApp.name} preview`}
        />
        <div className="download-card-content">
          <p className="tag">{activeApp.name}</p>
          <h2>{activeApp.fullName}</h2>
          <p className="muted">{activeApp.description}</p>

          <div className="download-meta">
            <p>
              <strong>Available build:</strong> {activeApp.download.android.label}
            </p>
            <p>
              <strong>Platform:</strong> Android
            </p>
            <p>
              <strong>Website:</strong>{' '}
              <a href={activeApp.url} target="_blank" rel="noreferrer">
                {activeApp.url}
              </a>
            </p>
            <p>
              <strong>Access:</strong> More installers can be added here as each platform expands.
            </p>
          </div>
        </div>
      </div>

      <div className="actions center top-space">
        <a
          className="button primary"
          href={activeApp.download.android.url}
          target="_blank"
          rel="noreferrer"
        >
          Download Android APK
        </a>
        <a className="button ghost" href={activeApp.url} target="_blank" rel="noreferrer">
          Open {activeApp.name}
        </a>
      </div>
    </section>
  )
}
