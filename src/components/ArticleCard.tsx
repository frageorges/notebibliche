import { Link } from 'react-router-dom'
import type { Article } from '../data/articles'

interface Props {
  article: Article
  variant?: 'default' | 'featured' | 'compact'
}

const subcategoryLabels: Record<string, string> = {
  pentateuco: 'Pentateuco',
  storici: 'Libri storici',
  poetici: 'Libri poetici e sapienziali',
  'profeti-maggiori': 'Profeti maggiori',
  'profeti-minori': 'Profeti minori',
  vangeli: 'Vangeli',
  atti: 'Atti degli Apostoli',
  'lettere-paoline': 'Lettere paoline',
  'lettere-generali': 'Lettere generali',
  apocalisse: 'Apocalisse',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function ArticleCard({ article, variant = 'default' }: Props) {
  if (variant === 'compact') {
    return (
      <Link
        to={`/articolo/${article.id}`}
        style={{ textDecoration: 'none', display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 0', borderBottom: '1px solid #DDD5C5' }}
      >
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#DDD5C5', lineHeight: 1, minWidth: '2.5rem', textAlign: 'center' }}>
          {article.book.charAt(0)}
        </span>
        <div>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B5552A', marginBottom: '0.25rem' }}>
            {article.book}
          </p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: 600, color: '#2D2219', lineHeight: 1.35 }}>
            {article.title}
          </p>
          <p style={{ fontSize: '0.75rem', color: '#7A6A5A', marginTop: '0.3rem' }}>{formatDate(article.date)}</p>
        </div>
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <Link
        to={`/articolo/${article.id}`}
        style={{ textDecoration: 'none', display: 'block', background: '#FAF6EF', padding: '2rem', borderLeft: '4px solid #B5552A' }}
      >
        <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B5552A', marginBottom: '0.7rem', fontWeight: 700 }}>
          {article.book} · {subcategoryLabels[article.subcategory]}
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.55rem', fontWeight: 700, color: '#2D2219', lineHeight: 1.3, marginBottom: '0.8rem' }}>
          {article.title}
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#5A4A3A', lineHeight: 1.75, marginBottom: '1.2rem' }}>{article.excerpt}</p>
        <p style={{ fontSize: '0.75rem', color: '#7A6A5A' }}>
          {formatDate(article.date)} · {article.readTime} min di lettura
        </p>
      </Link>
    )
  }

  return (
    <Link
      to={`/articolo/${article.id}`}
      style={{ textDecoration: 'none', display: 'block', background: '#FAF6EF', padding: '1.5rem', borderBottom: '2px solid #DDD5C5', transition: 'border-color 0.2s' }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = '#B5552A')}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = '#DDD5C5')}
    >
      <p style={{ fontSize: '0.67rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5B8A8A', marginBottom: '0.5rem', fontWeight: 700 }}>
        {article.book}
      </p>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#2D2219', lineHeight: 1.35, marginBottom: '0.6rem' }}>
        {article.title}
      </h3>
      <p style={{ fontSize: '0.83rem', color: '#5A4A3A', lineHeight: 1.7, marginBottom: '1rem' }}>
        {article.excerpt.substring(0, 140)}…
      </p>
      <p style={{ fontSize: '0.72rem', color: '#7A6A5A' }}>
        {formatDate(article.date)} · {article.readTime} min
      </p>
    </Link>
  )
}
