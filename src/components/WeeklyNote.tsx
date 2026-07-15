import { weeklyNote } from '../data/articles'

export default function WeeklyNote() {
  return (
    <aside
      style={{
        background: '#2D2219',
        color: '#FAF6EF',
        borderRadius: '2px',
        padding: '2rem 2rem 1.8rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* decorative cross */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: '-18px',
          right: '-18px',
          fontSize: '9rem',
          color: '#3D3028',
          fontFamily: "'Playfair Display', serif",
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        ✦
      </span>

      <p style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B5552A', marginBottom: '1.2rem', fontWeight: 700 }}>
        Nota della settimana
      </p>
      <blockquote
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.05rem',
          fontStyle: 'italic',
          lineHeight: 1.65,
          color: '#FAF6EF',
          margin: '0 0 0.4rem',
          borderLeft: '3px solid #B5552A',
          paddingLeft: '1rem',
        }}
      >
        {weeklyNote.verse}
      </blockquote>
      <p style={{ fontSize: '0.75rem', color: '#A89585', marginBottom: '1.2rem', paddingLeft: '1rem' }}>— {weeklyNote.reference}</p>

      <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: '#C8B8A8' }}>{weeklyNote.content}</p>

      <p style={{ marginTop: '1.4rem', fontSize: '0.72rem', color: '#7A6A5A', letterSpacing: '0.04em' }}>{weeklyNote.date}</p>
    </aside>
  )
}
