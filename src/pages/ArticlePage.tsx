import { useParams, Link } from 'react-router-dom'
import { articles, categories } from '../data/articles'
import ArticleCard from '../components/ArticleCard'

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

// Extended content for demo purposes
const contentMap: Record<string, string[]> = {
  '1': [
    "La prima parola del testo ebraico — בְּרֵאשִׁית, Bereshit — è già un enigma. La grammatica suggerisce una costruzione in stato costrutto: «In principio di», come se la frase attendesse un complemento che non arriva mai esplicitamente. I rabbini medievali hanno discusso a lungo su questo: il Creatore ha cominciato a creare quando ancora niente esisteva, o c'era qualcosa prima?",
    "La tradizione cristiana ha scelto un'interpretazione precisa: la creazione dal nulla, la creatio ex nihilo. Ma questa formulazione non è immediata nel testo biblico. Ciò che Genesis 1 descrive è piuttosto un atto di separazione e denominazione: la luce dalla tenebra, le acque superiori da quelle inferiori, la terra asciutta dal mare. Dio crea dando forma al caos, non dal vuoto assoluto.",
    "Questa distinzione non è accademica. Cambia il modo in cui leggiamo l'intera Scrittura. Se il mondo nasce da un atto di separazione e parola, allora il linguaggio è costitutivo della realtà. Dio parla e le cose sono. Il logos — la Parola — ha un ruolo cosmologico già nella Genesi, prima ancora che Giovanni lo elabori nella sua formulazione cristologica.",
    "Bereshit è dunque una soglia. Non solo temporale («quando è cominciato tutto») ma ontologica: il testo ci introduce in un modo di vedere il reale dove la parola precede la cosa, dove il nome non descrive ma costituisce, dove il silenzio diventa l'unico sfondo su cui il tutto può emergere.",
  ],
  '2': [
    "Il Salmo 22 si apre con un grido che Gesù riprende sulla croce nel racconto di Marco: «Elì, Elì, lemà sabactanì?» — «Dio mio, Dio mio, perché mi hai abbandonato?». Per molti lettori, questa citazione è paradossale: come può il Figlio di Dio sentirsi abbandonato dal Padre?",
    "La risposta richiede di leggere il Salmo nella sua interezza. Il Salmo 22 non è solo un lamento: è una struttura che va dalla disperazione alla fiducia, dall'abbandono alla lode pubblica. Chi prega questo salmo non si ferma al grido — lo attraversa.",
    "Gesù che cita l'inizio del Salmo 22 sta dunque portando alla croce l'intero arco narrativo del testo. È come citare il primo verso di un brano musicale ben noto: l'orecchio formato completa la melodia. Per un ascoltatore ebraico del primo secolo, sentire quell'incipit era evocare tutto il Salmo — compresa la sua conclusione fiduciosa.",
    "Questo meccanismo di citazione biblica si chiama pesher: non si cita il testo per ripetere le parole, ma per attivare l'intero orizzonte semantico del brano. Marco, con quella scena sulla croce, sta dicendo: la vicenda di Gesù è la vicenda del Servo sofferente che attraversa l'abbandono e giunge alla resurrezione. La morte è reale, ma il Salmo 22 conosce già la fine.",
  ],
  '4': [
    "«Ἐν ἀρχῇ ἦν ὁ Λόγος» — in principio era il Logos. La scelta delle parole nel prologo giovanneo è deliberata fino all'ossessione. «En archē» riprende esattamente le prime parole della Septuaginta, la versione greca della Genesi. Giovanni non scrive un'introduzione al suo Vangelo: scrive una nuova Genesi.",
    "Logos in greco ha una densità semantica enorme: significa «parola», «ragione», «discorso», «principio ordinatore». Per la filosofia stoica era il principio razionale che pervade il cosmo. Giovanni prende questo termine carico di significato e lo identifica con una persona: Gesù di Nazareth.",
    "La mossa teologica è audace. Il Logos non è solo divino — «il Logos era presso Dio, e il Logos era Dio» — ma diventa carne: «ὁ Λόγος σὰρξ ἐγένετο», il Logos si fece carne. L'universale si fa particolare. Il principio ordinatore del cosmo abita una casa, conosce la fatica e la fame, muore.",
    "Questo paradosso — trascendenza e incarnazione — è il cuore del quarto Vangelo. Giovanni non propone una dottrina astratta ma una storia: il Logos che entra nella storia porta luce nel buio, e il buio non la può vincere. È una promessa che il prologo affida al resto del racconto, che sarà il compito del lettore seguire fino alla fine.",
  ],
}

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>()
  const article = articles.find(a => a.id === id)
  const related = articles.filter(a => a.id !== id && a.subcategory === article?.subcategory).slice(0, 2)
  const catLabel = article ? subcategoryLabels[article.subcategory] : ''
  const paragraphs = id && contentMap[id] ? contentMap[id] : [article?.excerpt ?? '']

  if (!article) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-12">
        <p style={{ color: '#7A6A5A' }}>Articolo non trovato. <Link to="/archivio" style={{ color: '#B5552A' }}>Torna all'archivio</Link></p>
      </main>
    )
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <p style={{ fontSize: '0.75rem', color: '#7A6A5A', marginBottom: '2rem' }}>
        <Link to="/" style={{ color: '#5B8A8A', textDecoration: 'none' }}>Home</Link>
        {' / '}
        <Link to={`/categoria/${article.subcategory}`} style={{ color: '#5B8A8A', textDecoration: 'none' }}>{catLabel}</Link>
        {' / '}
        <span style={{ color: '#2D2219' }}>{article.book}</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Article */}
        <article className="lg:col-span-2">
          <header style={{ marginBottom: '2.5rem', borderBottom: '1px solid #DDD5C5', paddingBottom: '2rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B5552A', marginBottom: '0.7rem', fontWeight: 700 }}>
              {article.book} · {catLabel}
            </p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#2D2219', lineHeight: 1.2, marginBottom: '1.2rem' }}>
              {article.title}
            </h1>
            <p style={{ fontSize: '0.85rem', color: '#7A6A5A' }}>
              {formatDate(article.date)} · {article.readTime} minuti di lettura
            </p>
          </header>

          {/* Abstract */}
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.1rem', color: '#5A4A3A', lineHeight: 1.75, marginBottom: '2rem', borderLeft: '3px solid #5B8A8A', paddingLeft: '1.2rem' }}>
            {article.excerpt}
          </p>

          {/* Body */}
          {paragraphs.map((p, i) => (
            <p key={i} style={{ fontSize: '1rem', lineHeight: 1.85, color: '#2D2219', marginBottom: '1.5rem' }}>
              {p}
            </p>
          ))}

          {/* Tags */}
          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #DDD5C5', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[article.book, catLabel].map(tag => (
              <span key={tag} style={{ fontSize: '0.72rem', padding: '0.25rem 0.75rem', background: '#F0E8DC', color: '#5A4A3A', border: '1px solid #DDD5C5', borderRadius: '2px' }}>
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          {related.length > 0 && (
            <div style={{ background: '#FAF6EF', padding: '1.5rem', border: '1px solid #DDD5C5', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7A6A5A', marginBottom: '1rem', fontWeight: 700 }}>
                Nella stessa categoria
              </p>
              {related.map(a => (
                <ArticleCard key={a.id} article={a} variant="compact" />
              ))}
            </div>
          )}
          <div style={{ background: '#2D2219', padding: '1.5rem' }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B5552A', marginBottom: '0.7rem', fontWeight: 700 }}>
              Esplora le categorie
            </p>
            <Link to="/archivio" style={{ fontSize: '0.85rem', color: '#C8B8A8', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>
              → Tutti gli articoli
            </Link>
            <Link to="/categoria/vangeli" style={{ fontSize: '0.85rem', color: '#C8B8A8', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>
              → Vangeli
            </Link>
            <Link to="/categoria/pentateuco" style={{ fontSize: '0.85rem', color: '#C8B8A8', textDecoration: 'none', display: 'block' }}>
              → Pentateuco
            </Link>
          </div>
        </aside>
      </div>
    </main>
  )
}
