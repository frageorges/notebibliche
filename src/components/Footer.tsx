import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#2D2219', color: '#DDD5C5' }} className="mt-24">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#FAF6EF', marginBottom: '0.6rem' }}>
            Note Bibliche
          </p>
          <p style={{ fontSize: '0.83rem', lineHeight: 1.7, color: '#A89585' }}>
            Meditazioni, esegesi e riflessioni bibliche per chi desidera leggere la Scrittura con occhi sempre nuovi.
          </p>
        </div>
        <div>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A6A5A', marginBottom: '0.8rem' }}>Sezioni</p>
          {[
            { label: 'Home', to: '/' },
            { label: 'Archivio articoli', to: '/archivio' },
            { label: 'Chi sono', to: '/chi-sono' },
            { label: 'Contatti', to: '/contatti' },
          ].map(l => (
            <Link key={l.to} to={l.to} style={{ display: 'block', fontSize: '0.85rem', color: '#C8B8A8', textDecoration: 'none', marginBottom: '0.4rem' }}>
              {l.label}
            </Link>
          ))}
        </div>
        <div>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A6A5A', marginBottom: '0.8rem' }}>Rubrica fissa</p>
          <p style={{ fontSize: '0.85rem', color: '#C8B8A8', lineHeight: 1.6 }}>
            Ogni settimana una «Nota della settimana» con spunti di lettura e un versetto guida.
          </p>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #3D3028', textAlign: 'center', padding: '1rem 0', fontSize: '0.75rem', color: '#7A6A5A' }}>
        © {new Date().getFullYear()} Note Bibliche — Tutti i diritti riservati
      </div>
    </footer>
  )
}
