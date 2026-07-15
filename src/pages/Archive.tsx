import { useState } from 'react'
import { articles, categories } from '../data/articles'
import ArticleCard from '../components/ArticleCard'
import CategorySidebar from '../components/CategorySidebar'

export default function Archive() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState<string>('tutti')

  const allSubs = categories.flatMap(c => c.subcategories)

  const filtered = articles.filter(a => {
    const matchesSearch =
      !search ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.book.toLowerCase().includes(search.toLowerCase())
    const matchesCat = activeFilter === 'tutti' || a.subcategory === activeFilter
    return matchesSearch && matchesCat
  })

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div style={{ borderBottom: '2px solid #2D2219', paddingBottom: '0.75rem', marginBottom: '2.5rem' }}>
        <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B5552A', marginBottom: '0.4rem', fontWeight: 700 }}>Archivio</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 700, color: '#2D2219' }}>Tutti gli articoli</h1>
      </div>

      {/* Search */}
      <div style={{ marginBottom: '2rem' }}>
        <input
          type="search"
          placeholder="Cerca per titolo o libro biblico…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '480px',
            padding: '0.65rem 1rem',
            fontSize: '0.88rem',
            border: '1px solid #DDD5C5',
            background: '#FAF6EF',
            color: '#2D2219',
            outline: 'none',
            borderRadius: '2px',
          }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <CategorySidebar />

          <div style={{ marginTop: '1.5rem' }}>
            <button
              onClick={() => setActiveFilter('tutti')}
              style={{
                display: 'block',
                padding: '0.3rem 0',
                fontSize: '0.8rem',
                color: activeFilter === 'tutti' ? '#B5552A' : '#5A4A3A',
                fontWeight: activeFilter === 'tutti' ? 700 : 400,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                marginBottom: '0.5rem',
              }}
            >
              Tutti i testi
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {allSubs.map(sub => (
                <button
                  key={sub.id}
                  onClick={() => setActiveFilter(sub.id)}
                  style={{
                    textAlign: 'left',
                    padding: '0.3rem 0.5rem',
                    fontSize: '0.78rem',
                    color: activeFilter === sub.id ? '#B5552A' : '#5A4A3A',
                    fontWeight: activeFilter === sub.id ? 700 : 400,
                    background: activeFilter === sub.id ? '#F0E8DC' : 'none',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '2px',
                  }}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Articles */}
        <div className="lg:col-span-3">
          {filtered.length === 0 ? (
            <p style={{ color: '#7A6A5A', fontStyle: 'italic' }}>Nessun articolo trovato.</p>
          ) : (
            <div style={{ display: 'grid', gap: '1rem' }}>
              {filtered.map(a => (
                <ArticleCard key={a.id} article={a} variant="default" />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
