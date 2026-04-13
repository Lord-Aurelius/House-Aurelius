import { apkInfo } from '../data/content'

export function DownloadPage() {
  return (
    <section className="section download">
      <h1>Download House Aurelius APK</h1>
      <p className="muted">
        Host your APK in a secure location and replace the placeholder URL when ready.
      </p>

      <div className="download-card">
        <p>
          <strong>Version:</strong> {apkInfo.version}
        </p>
        <p>
          <strong>Size:</strong> {apkInfo.size}
        </p>
        <p>
          <strong>Release Date:</strong> {apkInfo.releaseDate}
        </p>
        <p>
          <strong>Checksum:</strong> {apkInfo.checksum}
        </p>
      </div>

      <a className="button primary top-space" href={apkInfo.url} target="_blank" rel="noreferrer">
        Download Android APK
      </a>
    </section>
  )
}
