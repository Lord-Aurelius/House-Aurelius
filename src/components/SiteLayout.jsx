import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
  { to: '/download', label: 'Download' },
]

export function SiteLayout() {
  return (
    <>
      <header className="site-header">
        <div className="brand-wrap">
          <p className="brand">
            <img src="/brand-sun.png" alt="☀" className="brand-logo" />
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

      <main style={{ paddingTop: '100px' }}>
        <Outlet />
      </main>

      <footer className="footer">
        <p className="footer-brand">
          <img src="/brand-sun.png" alt="☀" className="footer-logo" />
          House Aurelius
        </p>
        <p className="footer-contact">
          <a href="mailto:theaureliushouse@gmail.com">theaureliushouse@gmail.com</a>
          {' · '}
          <a href="tel:+254702059499">+254 702 059 499</a>
          {' · '}
          Kenya
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} House Aurelius Technologies. All rights reserved.</p>
      </footer>
    </>
  )
}