import { Link } from 'react-router-dom'
import { articles, categories } from '../data/articles'
import ArticleCard from '../components/ArticleCard'
import WeeklyNote from '../components/WeeklyNote'

const featured = articles.filter(a => a.featured)
const recent = articles.slice(0, 5)

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #2D2219 0%, #4A3025 100%)',
          padding: '5rem 1.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* decorative large text */}
        <span
          aria-hidden
          style={{
            position: 'absolute',
            right: '-2rem',
            top: '-2rem',
            fontFamily: "'Playfair Display', serif",
            fontSize: '20rem',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.03)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          בְּרֵאשִׁית
        </span>
        <div className="max-w-6xl mx-auto">
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B5552A', marginBottom: '1.2rem', fontWeight: 700 }}>
            Meditazioni bibliche
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
              fontWeight: 700,
              color: '#FAF6EF',
              lineHeight: 1.15,
              maxWidth: '680px',
              marginBottom: '1.5rem',
            }}
          >
            Quanto sono dolci al mio palato le tue parole
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#C8B8A8', lineHeight: 1.8, maxWidth: '560px', marginBottom: '2.5rem' }}>
            Meditazioni che nutrono lo sguardo e il cuore — un cammino tra le pagine della Scrittura, dove ogni parola chiede di diventare vita vissuta.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/archivio"
              style={{
                display: 'inline-block',
                background: '#B5552A',
                color: '#FAF6EF',
                padding: '0.75rem 1.8rem',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#8C3D1A')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#B5552A')}
            >
              Esplora gli articoli
            </Link>
            <Link
              to="/chi-sono"
              style={{
                display: 'inline-block',
                border: '1px solid #7A6A5A',
                color: '#C8B8A8',
                padding: '0.75rem 1.8rem',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Chi sono
            </Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: articles */}
        <div className="lg:col-span-2">
          {/* Featured */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem', borderBottom: '2px solid #2D2219', paddingBottom: '0.5rem' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: '#2D2219' }}>In evidenza</h2>
            </div>
            <div style={{ display: 'grid', gap: '1px', background: '#DDD5C5' }}>
              {featured.map(a => (
                <ArticleCard key={a.id} article={a} variant="featured" />
              ))}
            </div>
          </div>

          {/* All recent */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '2px solid #2D2219', paddingBottom: '0.5rem' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: '#2D2219' }}>Ultimi articoli</h2>
              <Link to="/archivio" style={{ fontSize: '0.75rem', letterSpacing: '0.08em', color: '#B5552A', textDecoration: 'none', textTransform: 'uppercase' }}>Vedi tutti →</Link>
            </div>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {recent.map(a => (
                <ArticleCard key={a.id} article={a} variant="default" />
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          <WeeklyNote />

          {/* Browse by category */}
          <div style={{ background: '#FAF6EF', padding: '1.5rem', border: '1px solid #DDD5C5' }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7A6A5A', marginBottom: '1rem', fontWeight: 700 }}>
              Sfoglia per sezione
            </p>
            {categories.map(cat => (
              <div key={cat.id} style={{ marginBottom: '1rem' }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.85rem', fontWeight: 700, color: '#2D2219', marginBottom: '0.4rem' }}>
                  {cat.label}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {cat.subcategories.map(sub => (
                    <Link
                      key={sub.id}
                      to={`/categoria/${sub.id}`}
                      style={{
                        fontSize: '0.72rem',
                        padding: '0.2rem 0.6rem',
                        background: '#F0E8DC',
                        color: '#5A4A3A',
                        textDecoration: 'none',
                        borderRadius: '2px',
                        border: '1px solid #DDD5C5',
                        transition: 'background 0.15s, color 0.15s',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#B5552A'; (e.currentTarget as HTMLElement).style.color = '#FAF6EF' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#F0E8DC'; (e.currentTarget as HTMLElement).style.color = '#5A4A3A' }}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
