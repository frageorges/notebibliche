import { useParams, Link } from 'react-router-dom'
import { articles, categories } from '../data/articles'
import ArticleCard from '../components/ArticleCard'
import CategorySidebar from '../components/CategorySidebar'

export default function CategoryPage() {
  const { subcategory } = useParams<{ subcategory: string }>()

  const allSubs = categories.flatMap(c => c.subcategories)
  const sub = allSubs.find(s => s.id === subcategory)
  const parentCat = categories.find(c => c.subcategories.some(s => s.id === subcategory))
  const filtered = articles.filter(a => a.subcategory === subcategory)

  if (!sub) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-12">
        <p style={{ color: '#7A6A5A' }}>Categoria non trovata. <Link to="/archivio" style={{ color: '#B5552A' }}>Torna all'archivio</Link></p>
      </main>
    )
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <p style={{ fontSize: '0.75rem', color: '#7A6A5A', marginBottom: '1.2rem' }}>
        <Link to="/" style={{ color: '#5B8A8A', textDecoration: 'none' }}>Home</Link>
        {' / '}
        <Link to="/archivio" style={{ color: '#5B8A8A', textDecoration: 'none' }}>Archivio</Link>
        {' / '}
        <span style={{ color: '#2D2219' }}>{sub.label}</span>
      </p>

      <div style={{ borderBottom: '2px solid #2D2219', paddingBottom: '0.75rem', marginBottom: '2.5rem' }}>
        <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B5552A', marginBottom: '0.4rem', fontWeight: 700 }}>
          {parentCat?.label}
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#2D2219', marginBottom: '0.8rem' }}>
          {sub.label}
        </h1>
        {/* Books list */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {sub.books.map(book => (
            <span key={book} style={{ fontSize: '0.72rem', padding: '0.2rem 0.7rem', background: '#F0E8DC', color: '#5A4A3A', borderRadius: '2px', border: '1px solid #DDD5C5' }}>
              {book}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <aside className="lg:col-span-1">
          <CategorySidebar />
        </aside>
        <div className="lg:col-span-3">
          {filtered.length === 0 ? (
            <div style={{ background: '#FAF6EF', padding: '2rem', border: '1px solid #DDD5C5' }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#2D2219', marginBottom: '0.6rem' }}>
                Nessun articolo ancora disponibile per questa sezione.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#7A6A5A', lineHeight: 1.7 }}>
                La sezione dedicata ai {sub.label} è in preparazione. Torna presto o esplora le altre categorie.
              </p>
            </div>
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
