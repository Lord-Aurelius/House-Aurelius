import { useEffect, useRef, useState } from 'react'
import { SunIcon } from '../components/SunIcon'

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
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function RevealDiv({ className = '', style = {}, children }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  )
}

export function ContactPage() {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${form.name || 'Website Visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:theaureliushouse@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="section contact-section">
      <RevealDiv className="contact-header">
        <SunIcon size={48} color="#f3cc6b" className="contact-sun" />
        <h1>Get in Touch</h1>
        <p className="muted contact-intro">
          We'd love to hear from you. Reach out to learn more about our platforms or to get started
          with House Aurelius.
        </p>
      </RevealDiv>

      <div className="contact-grid top-space">
        <RevealDiv className="contact-card" style={{ transitionDelay: '0.05s' }}>
          <div className="contact-icon-wrap">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <h3>Email Us</h3>
          <p className="muted">Send us a message anytime. We typically respond within 24 hours.</p>
          <a href="mailto:theaureliushouse@gmail.com" className="contact-link">
            theaureliushouse@gmail.com
          </a>
        </RevealDiv>

        <RevealDiv className="contact-card" style={{ transitionDelay: '0.12s' }}>
          <div className="contact-icon-wrap">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <h3>Call Us</h3>
          <p className="muted">Prefer to speak directly? Give us a call during business hours.</p>
          <a href="tel:+254702059499" className="contact-link">
            0702 059 499
          </a>
        </RevealDiv>

        <RevealDiv className="contact-card" style={{ transitionDelay: '0.19s' }}>
          <div className="contact-icon-wrap">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3>Our Location</h3>
          <p className="muted">Based in the heart of East Africa, serving businesses across the continent.</p>
          <span className="contact-link contact-location">Kenya, East Africa</span>
        </RevealDiv>
      </div>

      <RevealDiv className="contact-cta-block top-space" style={{ transitionDelay: '0.25s' }}>
        <SunIcon size={32} color="#f3cc6b" />
        <h2>Ready to Transform Your Operations?</h2>
        <p>
          Whether you run a school, salon, property portfolio, or church — House Aurelius has a
          platform purpose-built for you.
        </p>
        {!showForm && !sent && (
          <button
            className="button primary contact-cta-btn"
            onClick={() => setShowForm(true)}
          >
            Start the Conversation
          </button>
        )}
      </RevealDiv>

      {(showForm || sent) && (
        <div className="contact-form-wrap reveal is-visible">
          {sent ? (
            <div className="contact-sent">
              <SunIcon size={36} color="#f3cc6b" className="contact-sun" />
              <h3>Your email client should have opened!</h3>
              <p className="muted">
                If it didn't open automatically, you can email us directly at{' '}
                <a href="mailto:theaureliushouse@gmail.com" className="contact-link">
                  theaureliushouse@gmail.com
                </a>
              </p>
              <button
                className="button ghost"
                onClick={() => { setSent(false); setShowForm(true); setForm({ name: '', email: '', message: '' }) }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>
              <p className="muted">Fill in the details below and your email client will open ready to send.</p>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cf-name">Your Name</label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    placeholder="e.g. John Kamau"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-email">Your Email</label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your business and what you're looking for…"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="button primary contact-cta-btn">
                  Open Email &amp; Send
                </button>
                <button
                  type="button"
                  className="button ghost"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </section>
  )
}
