import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { categories } from '../data/articles'

export default function CategorySidebar() {
  const { subcategory: activeSubcat } = useParams<{ subcategory?: string }>()
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    antico: true,
    nuovo: true,
  })

  const toggle = (id: string) => setExpanded(e => ({ ...e, [id]: !e[id] }))

  return (
    <nav aria-label="Categorie bibliche">
      <p style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7A6A5A', marginBottom: '1rem', fontWeight: 700 }}>
        Categorie
      </p>
      {categories.map(cat => (
        <div key={cat.id} style={{ marginBottom: '1rem' }}>
          <button
            onClick={() => toggle(cat.id)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.4rem 0',
              textAlign: 'left',
            }}
          >
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.9rem', fontWeight: 700, color: '#2D2219' }}>
              {cat.label}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#7A6A5A', transform: expanded[cat.id] ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>▶</span>
          </button>

          {expanded[cat.id] && (
            <ul style={{ listStyle: 'none', padding: '0.3rem 0 0 0.75rem', margin: 0, borderLeft: '2px solid #DDD5C5' }}>
              {cat.subcategories.map(sub => (
                <li key={sub.id}>
                  <Link
                    to={`/categoria/${sub.id}`}
                    style={{
                      display: 'block',
                      padding: '0.3rem 0.6rem',
                      fontSize: '0.8rem',
                      color: activeSubcat === sub.id ? '#B5552A' : '#5A4A3A',
                      fontWeight: activeSubcat === sub.id ? 700 : 400,
                      textDecoration: 'none',
                      background: activeSubcat === sub.id ? '#F0E8DC' : 'transparent',
                      borderRadius: '2px',
                      transition: 'color 0.15s, background 0.15s',
                    }}
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  )
}
