import { NavLink, Outlet } from 'react-router-dom'
import { SunIcon } from './SunIcon'

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
  { to: '/download', label: 'Download' },
]

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="brand-wrap">
          <p className="brand">
            <span className="brand-mark">
              <SunIcon size={18} color="currentColor" />
            </span>
            House Aurelius
          </p>
          <p className="brand-subtitle">Securely connecting your business platforms</p>
        </div>
        <nav className="nav" aria-label="Primary navigation">
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

      <main className="site-main page-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p className="footer-brand">
          <SunIcon size={18} color="currentColor" />
          House Aurelius
        </p>
        <p className="footer-contact">
          <a href="mailto:theaureliushouse@gmail.com">theaureliushouse@gmail.com</a>
          <span>&middot;</span>
          <a href="tel:+254702059499">+254 702 059 499</a>
          <span>&middot;</span>
          Kenya
        </p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} House Aurelius Technologies. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
