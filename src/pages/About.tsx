export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main text */}
        <div className="lg:col-span-2">
          <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B5552A', marginBottom: '0.5rem', fontWeight: 700 }}>
            Chi sono
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.4rem', fontWeight: 700, color: '#2D2219', lineHeight: 1.2, marginBottom: '2rem', borderBottom: '2px solid #2D2219', paddingBottom: '0.75rem' }}>
            Un lettore della Scrittura
          </h1>

          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.15rem', color: '#5A4A3A', lineHeight: 1.75, marginBottom: '2rem', borderLeft: '3px solid #5B8A8A', paddingLeft: '1.2rem' }}>
            «Non basta leggere la Bibbia. Bisogna lasciarsi leggere dalla Bibbia.»
          </p>

          {[
            {
              heading: "La formazione",
              text: "Mi sono avvicinato allo studio sistematico della Scrittura durante gli anni di teologia presso la Facoltà Teologica dell'Italia Settentrionale. Ho poi approfondito l'esegesi del Primo Testamento sotto la guida di studiosi che coniugavano rigore filologico e sensibilità spirituale. Il greco neotestamentario e i rudimenti dell'ebraico biblico sono diventati strumenti quotidiani, non ornamenti accademici.",
            },
            {
              heading: "Perché questo progetto",
              text: "Parola Viva nasce da una convinzione semplice: la Bibbia è un testo di straordinaria complessità letteraria, storica e teologica, eppure è accessibile a chiunque abbia la pazienza di avvicinarsi con rispetto. Troppo spesso la distanza tra la ricerca accademica e la comunità dei lettori comuni si allarga invece di restringersi. Questo sito vuole essere un ponte.",
            },
            {
              heading: "Il metodo",
              text: "Ogni articolo parte dal testo — nella sua lingua originale quando è utile — e cerca di illuminarne il contesto storico, le strutture letterarie, i rimandi intertestuali. Non si tratta di devozione né di pura filologia: è un ascolto che vuole essere allo stesso tempo rigoroso e vivo. La «Nota della settimana» è uno spazio più libero, per riflessioni che emergono dalla lettura quotidiana.",
            },
            {
              heading: "Credenziali",
              text: "Laurea magistrale in Teologia (indirizzo biblico). Dottorato di ricerca in Scienze bibliche con una tesi sulle strutture narrative dei Salmi. Docente di Introduzione alla Scrittura. Collaborazioni con riviste di cultura religiosa e con comunità parrocchiali impegnate nella lectio divina.",
            },
          ].map(section => (
            <div key={section.heading} style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: '#2D2219', marginBottom: '0.6rem' }}>
                {section.heading}
              </h2>
              <p style={{ fontSize: '0.96rem', lineHeight: 1.85, color: '#3A2A1E' }}>{section.text}</p>
            </div>
          ))}
        </div>

        {/* Sidebar card */}
        <aside className="lg:col-span-1">
          <div style={{ background: '#2D2219', padding: '2rem', color: '#FAF6EF', marginBottom: '1.5rem' }}>
            <div
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #B5552A, #5B8A8A)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem',
                fontFamily: "'Playfair Display', serif",
                fontSize: '2rem',
                fontWeight: 700,
                color: '#FAF6EF',
              }}
            >
              PV
            </div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>
              Parola Viva
            </p>
            <p style={{ fontSize: '0.78rem', color: '#A89585', marginBottom: '1.2rem' }}>Meditazioni bibliche dal 2020</p>
            <div style={{ fontSize: '0.82rem', color: '#C8B8A8', lineHeight: 1.75 }}>
              <p>✦ Ricercatore di Scienze bibliche</p>
              <p>✦ Esegesi AT e NT</p>
              <p>✦ Lectio divina e pastorale</p>
              <p>✦ Lingue: italiano, greco, ebraico</p>
            </div>
          </div>

          <div style={{ background: '#FAF6EF', padding: '1.5rem', border: '1px solid #DDD5C5' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A6A5A', marginBottom: '0.8rem', fontWeight: 700 }}>
              Un progetto aperto
            </p>
            <p style={{ fontSize: '0.83rem', color: '#5A4A3A', lineHeight: 1.7, marginBottom: '1rem' }}>
              Se hai domande, vuoi proporre un tema o semplicemente condividere una riflessione sulla Scrittura, scrivi senza esitare.
            </p>
            <a
              href="/contatti"
              style={{
                display: 'inline-block',
                background: '#B5552A',
                color: '#FAF6EF',
                padding: '0.6rem 1.4rem',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Scrivimi
            </a>
          </div>
        </aside>
      </div>
    </main>
  )
}
