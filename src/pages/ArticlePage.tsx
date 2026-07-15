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
  '9': [
    "“Custodire” è una parola chiave della visione biblica delle relazioni dell’essere umano. Dio pone Adamo in Eden con il compito di “custodire” il giardino. Ma al tempo stesso, il Sal 121 celebra Dio come il custode di Israele, il custode di chi prega il salmo in realtà. Infine, il tema della custodia ritorna nel racconto di Caino e Abele, quando Dio chiede a Caino dove sia Abele, suo fratello, e Caino risponde: “Non lo so. Sono forse io il custode di mio fratello?” (Gen 4,9).",
    "Ma è davvero possibile una società in cui vigono legami di reciproca custodia?",
    "Il racconto di Caino e Abele è sconcertante. È davvero uno shock che così presto la Scrittura parli di violenza, di morte, omicidio, e fratricidio. Siamo a malapena alla seconda generazione dell’umanità, e già gli esseri umani hanno imparato a farsi del male, ad eliminarsi a vicenda, ad odiarsi. Questo racconto è davvero uno schiaffo in faccia.",
    "Ma da dove nasce questa violenza? La logica del libro della Genesi è ovvia, dal peccato, specificamente dal peccato di Adamo ed Eva. Questo non si capisce soltanto dal fatto che il racconto di Caino ed Abele segue immediatamente il racconto di quel peccato, ma anche dal fatto che nasce dallo stesso atteggiamento verso Dio e ha conseguenze simili.",
    "Dopoché Caino e Abele hanno compiuto la loro offerta, la Scrittura ci dice che “Il Signore gradì Abele e la sua offerta, ma non gradì Caino e la sua offerta” (Gen 4,4–5). È un’affermazione pesante. Non è semplicemente l’offerta di Caino a non essere gradita, ma anche lui stesso. La Scrittura non ci dice perché o qual è l’elemento preciso che rende Caino sgradito. Anzi, le parole di Dio sembrano suggerire che Caino non abbia un valido motivo per essere irritato:",
    "“Perché ti sei irritato e perché è abbattuto il tuo volto?” (Gen 4,6).",
    "Forse, potremmo ipotizzare che Caino non fosse davvero sgradito a Dio ma piuttosto che non si sentisse apprezzato per ciò che aveva offerto. Forse, era il confronto con l’esperienza di Abele a farlo dubitare. Ad ogni modo, la conseguenza dei fatti o di come Caino li leggeva è che Caino perde la fiducia in Dio, dubita che Dio sia davvero buono nei suoi confronti.",
    "…tristezza, frustrazione, chiusura, irritazione…",
    "Il veleno della sfiducia che il serpente aveva iniettato nel cuore di Eva con le parole, finisce per toccare anche Caino tramite i fatti della sua vita (oggettivi o percepiti). Lui non si sente più amato da Dio. Lui inizia a credere che Dio non sia amore. E il non essere amato causa tristezza, frustrazione, chiusura, irritazione. In fondo, se la vita non è un dono d’amore di Dio, ma uno strumento di sofferenza, allora la vita è una maledizione.",
    "La Scrittura ci fa cogliere la logica del peccato: il dubbio sull’amore di Dio è l’origine di tutto; il dubbio causa una delusione e un rifiuto per la vita; e questa infelicità si esprime nella violenza.",
    "Se l’origine del peccato di Caino è simile a quella di Adamo ed Eva, anche gli effetti gli somigliano. Anzitutto la menzogna. A Dio che gli chiede dove sia Abele, Caino risponde: “Non lo so” (Gen 4,9). Questa menzogna corrisponde al nascondimento di Adamo ed Eva. Dopo il peccato, la trasgressione va nascosta con l’assenza fisica o con le parole false.",
    "Ma questi vari tipi di nascondimento dicono la paura di entrare in relazione con Dio. In una spirale negativa, è la sfiducia in Dio che causa il peccato, ma il peccato a sua volta rende più difficile la relazione con Dio. L’esito finale di questa dinamica è la lontananza da Dio, che è in realtà una lontananza non reale, ma così percepita dal peccatore.",
    "Caino lo dice chiaramente: “Ecco, tu mi scacci oggi da questo suolo e dovrò nascondermi lontano da te” (Gen 4,14).",
    "L’iniziale sospetto di Caino sulla bontà di Dio si è trasformato in una profonda convinzione che Dio non voglia aver nulla a che fare con lui, che non ci sia possibilità di costruire una relazione positiva con Dio.",
    "L’idea di una spirale di peccato e di violenza è ben fondata nel racconto biblico. Già lo stesso Caino lo presagisce: “Chiunque mi incontrerà mi ucciderà” (Gen 4,14). Ma più in generale, la Genesi vede le origini dell’umanità come una progressiva caduta in una sempre più profonda violenza e morte fino alle parole forse più tragiche della Sacra Scrittura:",
    "“Il Signore si pentì di aver fatto l’uomo sulla terra e se ne addolorò in cuor suo” (Gen 6,6), a cui segue il racconto del diluvio.",
    "Il racconto della Genesi è sicuramente una riflessione molto franca e disillusa sulla realtà della vita comunitaria sperimentata dall’autore. Di fronte ai mali sociali del suo tempo (soprattutto la guerra, la povertà, e le divisioni tra popoli), l’autore biblico offre una interpretazione teologica. La violenza nasce dal peccato e, in ultima analisi, dal sospetto nei confronti di Dio, dalla sensazione che la vita non sia una benedizione, ma il suo contrario.",
    "E questi mali sociali non sono poi tanto diversi da quelli che sperimentiamo oggi, che sono sicuramente più sofisticati, ma riflettono le stesse dinamiche profonde. Basta leggere i primi numeri dell’Enciclica Fratelli tutti, per averne un campionario.",
    "Il racconto della Genesi, però, è molto di più che un’analisi disincantata della condizione umana. C’è in esso un Vangelo, una buona notizia, il tentativo iniziale di dare una risposta.",
    "L’affermazione prima e fondamentale può sembrare banale, ma a fatica viene incarnata dalle società umane. Dio dice a Caino: “Dov’è Abele, tuo fratello?” (Gen 4,9). Dio deve, prima di tutto, ricordare a Caino che Abele è suo fratello. Nella sua ansia per la propria accettazione di fronte a Dio, per il gradimento della sua offerta, per l’irritazione e la tristezza del suo cuore, Caino ha dimenticato questo dato di base. Si è dimenticato che Abele era suo fratello.",
    "La Genesi ci ricorda che qualunque violenza è sempre violenza contro un fratello; qualunque maldicenza è sempre maldicenza contro un fratello; qualunque invidia è sempre invidia contro un fratello. L’altro che incontro e con cui interagisco, e con il quale magari entro in conflitto, non è mai un estraneo, non è mai qualcuno di cui posso fare a meno, mai qualcuno che posso far finta che non ci sia.",
    "Una delle pagine bibliche che più toccanti è proprio la seconda parte della Parabola del figlio prodigo/padre buono. Il fratello maggiore della parabola si è dimenticato di avere un fratello. Si è dimenticato persino di avere un padre. Mentre il figlio minore al vedere il padre subito gli dice: “Padre” (Lc 15,21), il figlio maggiore non pronuncia mai questa parola; non sa riconoscersi figli di questo padre. E quando parla di suo fratello non riconosce nessun legame con lui:",
    "“Ora che è tornato questo tuo figlio, per lui hai ammazzato il vitello grasso” (Lc 15,30).",
    "Per il figlio maggiore tutti sono diventati estranei.",
    "Dunque, il primo passo è quello di coscientizzare e riconoscere che l’altro mi appartiene è parte della mia famiglia, è mio fratello, mia sorella.",
    "Quella di Dio, però, è una domanda: “Dov’è Abele, tuo fratello?” (Gen 4,9). Come tale, necessita di una risposta. Cioè, Dio ritiene Caino responsabile per la sorte di suo fratello. La domanda di Dio è forte, non si limita a ritenere Caino responsabile per la morte di Abele, ma veramente per sapere cosa ne è di lui. Alla base, c’è l’idea di una comunità umana strettamente unita da legami di reciproca responsabilità.",
    "La responsabilità non piace, perché schiaccia e accusa. Si fa fatica assumere la responsabilità degli altri. E infatti, nemmeno a Caino piace, tanto che lui monta una sorta di protesta contro Dio: “Sono forse io il custode di mio fratello?” (Gen 4,9).",
    "In questa risposta forte e aggressiva-passiva di Caino c’è una duplice dimensione. Da un lato, è rifiuto della responsabilità: Non voglio essere io a dover rispondere per ciò che ne è di lui. Dall’altro, è un tentativo di mascherare il proprio peccato. Questo suggerisce che la fatica del prendersi le responsabilità può essere legata anche ai sensi di colpa, alla consapevolezza che si è messo se stesso e le proprie esigenze al primo posto.",
    "La risposta un po’ scostante di Caino permette di fare un ultimo passo e di avvicinarci alla sua interiorità. Il fastidio che Caino prova all’idea di prendersi la responsabilità di suo fratello è un indice di quanto egli sia autocentrato. Come al momento della sua offerta si era sentito irritato e abbattuto perché la realtà non si era conformata ai suoi desideri, così ora non vuole farsi carico di suo fratello.",
    "Per Caino, il mondo deve ruotare attorno a lui, e se questo non avviene, Caino si irrita. In altre parole, c’è tutto un mondo interiore fatto di insoddisfazione, egoismo, e frustrazione che cresce nel cuore di Caino fino a dominare la sua vita. A volte, si ritiene impossibile una vera e autentica fraternità perché si avverte interiormente questo mondo di bisogni ed esigenze e ci si crede incapaci di dominarlo, se ne diviene in qualche modo schiavi e spesso si scende a compromessi.",
    "Ci si accontenta…",
    "Ci si accontenta di realizzare i nostri ideali a metà perché non crediamo di poterli realizzare davvero. Ci si accontenta di essere fratelli e sorelle “fino a un certo punto”, perché ci si convince di non poter vincere sé stessi. L’Utopia è un’Utopia Dimezzata.",
    "Dio mette in guardia Caino dal potere di tutto questo mondo interiore: “Perché sei irritato e perché è abbattuto il tuo volto? Se agisci bene, non dovresti forse tenerlo alto? Ma se non agisci bene, il peccato è accovacciato alla tua porta; verso di te è il suo istinto, e tu lo dominerai” (Gen 4,6–7).",
    "Si parla di istinto. Si parla di una dimensione che sta in agguato alla porta dell’essere umano per sopraffarlo. In un certo senso, il racconto della Genesi ammette che c’è tutta questa realtà complessa e contraddittoria che l’essere umano si porta dentro e che a volte lo fa agire come non vorrebbe, gli fa trattare il fratello e la sorella come se fossero estranei, come se la loro vita (o la loro morte) non lo riguardasse.",
    "In questa situazione di pericolo, la buona notizia sta nella parola finale di Dio: Timshel, o, come è tradotto, “Tu lo dominerai”.",
    "Non so se è un comando, se è una promessa, se è una preghiera, o una sfida. Forse è soltanto una speranza. Ma in questa parola di Dio c’è iscritta la possibilità di non essere vinti dal peccato che abita in noi, la possibilità di vivere davvero da fratelli.",
    "Alla fin fine, un’analisi franca come quella del libro della Genesi potrebbe portare a concludere che la violenza è inevitabile, che la vera fraternità è al di là delle nostre capacità. Ma questa parola, timshel, dice che c’è una volontà di Dio che va in direzione opposta, e se Dio lo vuole tutto è possibile. Caino aveva davvero la possibilità di vincere quella fame interiore di autoaffermazione e così riscoprire Abele non come suo rivale, ma come suo fratello. Certo, Caino non ce l’ha fatta, e sappiamo come è andata la storia. Ma quella promessa di Dio rimane, timshel, “Tu lo dominerai”, rimane come base su cui fondare la speranza, il desiderio di vincere l’istinto del male che a volte l’essere umano scopre abitare in lui.",
    "È necessario tenere presente che il racconto di Caino e Abele viene scritto in un tempo in cui Israele sperimentava a pieno le dimensioni sociale, politica, ed economica della violenza, soprattutto nella forma dell’oppressione imperiale assira e babilonese, con la devastazione economica e le guerre che comportava. Di fronte a queste realtà, la Genesi ci mette di fronte alla realtà nuda e cruda da cui nasce la violenza, ma ci prospetta anche una fraternità tra gli individui e tra i popoli come linea di azione politica. Purtroppo, questo è un messaggio sempre attuale.",
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
