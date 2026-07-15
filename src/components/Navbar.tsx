import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Archivio', to: '/archivio' },
  { label: 'Chi sono', to: '/chi-sono' },
  { label: 'Contatti', to: '/contatti' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b" style={{ background: '#F5F0E8', borderColor: '#DDD5C5' }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#2D2219', letterSpacing: '-0.01em' }}>
            Note Bibliche
          </span>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: '#7A6A5A', textTransform: 'uppercase' }}>
            Meditazioni bibliche
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: location.pathname === link.to ? '#B5552A' : '#2D2219',
                textDecoration: 'none',
                transition: 'color 0.2s',
                borderBottom: location.pathname === link.to ? '2px solid #B5552A' : '2px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: 'block', width: 22, height: 2, background: '#2D2219', borderRadius: 1 }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t" style={{ background: '#FAF6EF', borderColor: '#DDD5C5' }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '0.9rem 1.5rem',
                fontSize: '0.9rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: location.pathname === link.to ? '#B5552A' : '#2D2219',
                textDecoration: 'none',
                borderBottom: '1px solid #DDD5C5',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
