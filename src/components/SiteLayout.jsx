import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/about', label: 'About Us' },
  { to: '/download', label: 'Download' },
]

export function SiteLayout() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="brand-wrap">
          <p className="brand">House Aurelius</p>
          <p className="brand-subtitle">Securely connecting your business platforms</p>
        </div>
        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
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
        <p>House Aurelius. Built to connect your platforms securely.</p>
      </footer>
    </div>
  )
}
