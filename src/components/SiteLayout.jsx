import { NavLink, Outlet } from 'react-router-dom'
import { SunIcon } from './SunIcon'

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/download', label: 'Download' },
]

export function SiteLayout() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="brand-wrap">
          <p className="brand">
            <SunIcon size={26} color="#f3cc6b" className="brand-sun-icon" />
            House Aurelius
          </p>
          <p className="brand-subtitle">Securely connecting your business platforms</p>
        </div>
        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <p className="footer-brand">
          <SunIcon size={20} color="#3a1060" className="footer-sun-icon" />
          House Aurelius
        </p>
        <p>Built to connect your platforms securely across Africa.</p>
        <div className="footer-contact">
          <a href="mailto:theaureliushouse@gmail.com" className="footer-contact-link">
            theaureliushouse@gmail.com
          </a>
          <span className="footer-sep">·</span>
          <a href="tel:+254702059499" className="footer-contact-link">0702 059 499</a>
          <span className="footer-sep">·</span>
          <span>Kenya</span>
        </div>

        <nav className="footer-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `footer-nav-link${isActive ? ' active' : ''}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <p className="footer-copy">© {new Date().getFullYear()} House Aurelius Technologies. All rights reserved.</p>
      </footer>
    </div>
  )
}
