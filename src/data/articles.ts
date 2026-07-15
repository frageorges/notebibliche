export interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  subcategory: string
  book: string
  date: string
  readTime: number
  featured?: boolean
}

export interface Category {
  id: string
  label: string
  testament: 'antico' | 'nuovo'
  subcategories: Subcategory[]
}

export interface Subcategory {
  id: string
  label: string
  books: string[]
}

export const categories: Category[] = [
  {
    id: 'antico',
    label: 'Antico Testamento',
    testament: 'antico',
    subcategories: [
      {
        id: 'pentateuco',
        label: 'Pentateuco',
        books: ['Genesi', 'Esodo', 'Levitico', 'Numeri', 'Deuteronomio'],
      },
      {
        id: 'storici',
        label: 'Libri storici',
        books: ['Giosuè', 'Giudici', 'Rut', '1 Samuele', '2 Samuele', '1 Re', '2 Re', '1 Cronache', '2 Cronache', 'Esdra', 'Neemia', 'Tobia', 'Giuditta', 'Ester', '1 Maccabei', '2 Maccabei'],
      },
      {
        id: 'poetici',
        label: 'Libri poetici e sapienziali',
        books: ['Giobbe', 'Salmi', 'Proverbi', 'Qoèlet', 'Cantico dei Cantici', 'Sapienza', 'Siracide'],
      },
      {
        id: 'profeti-maggiori',
        label: 'Profeti maggiori',
        books: ['Isaia', 'Geremia', 'Lamentazioni', 'Baruc', 'Ezechiele', 'Daniele'],
      },
      {
        id: 'profeti-minori',
        label: 'Profeti minori',
        books: ['Osea', 'Gioele', 'Amos', 'Abdia', 'Giona', 'Michea', 'Naum', 'Abacuc', 'Sofonia', 'Aggeo', 'Zaccaria', 'Malachia'],
      },
    ],
  },
  {
    id: 'nuovo',
    label: 'Nuovo Testamento',
    testament: 'nuovo',
    subcategories: [
      {
        id: 'vangeli',
        label: 'Vangeli',
        books: ['Matteo', 'Marco', 'Luca', 'Giovanni'],
      },
      {
        id: 'atti',
        label: 'Atti degli Apostoli',
        books: ['Atti degli Apostoli'],
      },
      {
        id: 'lettere-paoline',
        label: 'Lettere paoline',
        books: ['Romani', '1 Corinzi', '2 Corinzi', 'Galati', 'Efesini', 'Filippesi', 'Colossesi', '1 Tessalonicesi', '2 Tessalonicesi', '1 Timoteo', '2 Timoteo', 'Tito', 'Filemone'],
      },
      {
        id: 'lettere-generali',
        label: 'Lettere generali',
        books: ['Ebrei', 'Giacomo', '1 Pietro', '2 Pietro', '1 Giovanni', '2 Giovanni', '3 Giovanni', 'Giuda'],
      },
      {
        id: 'apocalisse',
        label: 'Apocalisse',
        books: ['Apocalisse'],
      },
    ],
  },
]

export const articles: Article[] = [
  {
    id: '1',
    title: "Bereshit: il principio che tutto contiene",
    excerpt: "La prima parola della Bibbia non è solo un inizio cronologico. È una soglia teologica: «In principio» apre uno spazio in cui il tempo, la materia e il senso prendono forma insieme.",
    category: 'antico',
    subcategory: 'pentateuco',
    book: 'Genesi',
    date: '2026-07-10',
    readTime: 8,
    featured: true,
  },
  {
    id: '2',
    title: "Il Salmo 22 e il grido di Gesù sulla croce",
    excerpt: "«Dio mio, Dio mio, perché mi hai abbandonato?» — queste parole attraversano entrambi i Testamenti come un filo rosso. Leggere il Salmo 22 alla luce del Vangelo di Marco rivela una citazione che è preghiera, profezia e rivelazione.",
    category: 'antico',
    subcategory: 'poetici',
    book: 'Salmi',
    date: '2026-07-03',
    readTime: 11,
    featured: true,
  },
  {
    id: '3',
    title: "Isaia 40: consolate, consolate il mio popolo",
    excerpt: "Il Deutero-Isaia si apre con una delle frasi più commoventi dell'Antico Testamento. Un Dio che consola come una madre, che livella montagne e raddrizza sentieri: è la logica del ritorno dall'esilio.",
    category: 'antico',
    subcategory: 'profeti-maggiori',
    book: 'Isaia',
    date: '2026-06-26',
    readTime: 9,
  },
  {
    id: '4',
    title: "Il prologo di Giovanni: Logos e silenzio",
    excerpt: "«In principio era il Logos» — il quarto Vangelo sceglie deliberatamente le stesse parole della Genesi. Questo rimando non è casuale: Giovanni propone una nuova creazione, e la parola che la compie è Gesù di Nazareth.",
    category: 'nuovo',
    subcategory: 'vangeli',
    book: 'Giovanni',
    date: '2026-06-19',
    readTime: 10,
    featured: true,
  },
  {
    id: '5',
    title: "La lettera ai Romani: grazia, legge e libertà",
    excerpt: "Il capitolo 7 di Romani è uno dei testi più dibattuti della storia del pensiero cristiano. Paolo parla di sé? Dell'Israele storico? Dell'umanità intera? Tre letture, una sola verità.",
    category: 'nuovo',
    subcategory: 'lettere-paoline',
    book: 'Romani',
    date: '2026-06-12',
    readTime: 13,
  },
  {
    id: '6',
    title: "Giobbe e il silenzio di Dio",
    excerpt: "Non è un libro di risposte. È un libro di domande radicate nella carne. Giobbe sfida Dio non per empietà ma per fedeltà: solo chi ama davvero osa pretendere una spiegazione.",
    category: 'antico',
    subcategory: 'poetici',
    book: 'Giobbe',
    date: '2026-06-05',
    readTime: 12,
  },
  {
    id: '7',
    title: "L'Esodo come schema narrativo eterno",
    excerpt: "Schiavitù, liberazione, deserto, alleanza, terra promessa. Questa sequenza non appartiene solo alla storia di Israele: diventa il codice con cui la Bibbia intera racconta ogni salvezza.",
    category: 'antico',
    subcategory: 'pentateuco',
    book: 'Esodo',
    date: '2026-05-29',
    readTime: 10,
  },
  {
    id: '8',
    title: "Amos: la giustizia scorra come un fiume",
    excerpt: "Amos è un pastore di Tekoa che non vuole essere chiamato profeta. Eppure le sue parole bruciano ancora: Dio non accetta liturgie senza giustizia, inni senza equità.",
    category: 'antico',
    subcategory: 'profeti-minori',
    book: 'Amos',
    date: '2026-05-22',
    readTime: 7,
  },
  {
    id: '9',
    title: "Caino e Abele: il custode del fratello",
    excerpt: "Il racconto di Caino e Abele affronta la domanda più antica sulla responsabilità reciproca: la violenza nasce dalla sfiducia in Dio, ma la parola finale — timshel, «tu lo dominerai» — apre alla possibilità della fraternità.",
    category: 'antico',
    subcategory: 'pentateuco',
    book: 'Genesi',
    date: '2026-07-15',
    readTime: 11,
    featured: true,
  },
]

export const weeklyNote = {
  title: "Nota della settimana",
  verse: "«Sono forse io il custode di mio fratello?»",
  reference: "Genesi 4,9",
  content: "Questa settimana torniamo al racconto di Caino e Abele, una delle pagine più dure e insieme più feconde della Genesi. La domanda di Caino nasce come rifiuto — un modo per scaricarsi della responsabilità verso il fratello — ma la Scrittura la lascia risuonare come interrogativo aperto per ogni lettore. La violenza tra fratelli non nasce dal nulla: affonda nella sfiducia verso un Dio che si crede non benevolo, nella tristezza di sentirsi non amati. Eppure il racconto non si chiude nella disperazione: la parola di Dio a Caino — timshel, «tu lo dominerai» — resta una promessa aperta, la possibilità sempre offerta di riconoscere l'altro come fratello e non come estraneo.",
  date: "15 luglio 2026",
}
