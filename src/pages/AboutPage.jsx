import React, { useEffect, useRef } from 'react'
import { teamMembers } from '../data/content'

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

function RevealItem({ tag = 'div', className = '', style = {}, children }) {
  const ref = useReveal()
  return React.createElement(tag, { ref, className: `reveal ${className}`, style }, children)
}

export function AboutPage() {
  return (
    <section className="section">
      <RevealItem tag="div">
        <h1>About House Aurelius</h1>
        <p className="muted">
          We build practical systems for schools, salons, real estate, and churches across Africa.
          Purposeful software that brings structure and control to operations.
        </p>
      </RevealItem>

      <div className="team-vertical top-space">
        {teamMembers.map((member, i) => (
          <RevealItem
            tag="article"
            key={member.name}
            className="member-card-vertical"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="member-card-left">
              <img className="member-image-large" src={member.image} alt={member.name} />
              <p className="member-role">{member.role}</p>
            </div>
            <div className="member-card-right">
              <h3>{member.name}</h3>
              <p>{member.bio}</p>
            </div>
          </RevealItem>
        ))}
      </div>

      <RevealItem tag="div" className="about-mission top-space" style={{ transitionDelay: '0.3s' }}>
        <h2>Our Mission</h2>
        <p className="muted">
          Every African institution deserves enterprise-grade tools built for their context.
          We make reliable, purposeful software that meets operators where they are and scales
          with their ambition.
        </p>
      </RevealItem>
    </section>
  )
}
