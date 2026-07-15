# Note Bibliche — Meditazioni bibliche

Sito generato con Figma Make (React + Vite + TypeScript + Tailwind CSS +
React Router), pubblicato su GitHub Pages con build automatica tramite
GitHub Actions.

## Come funziona la pubblicazione

Ogni volta che questa cartella viene aggiornata su GitHub (branch `main`),
il workflow in `.github/workflows/deploy.yml` si attiva da solo:

1. Scarica il codice
2. Installa le dipendenze (`npm install`)
3. Compila il sito (`npm run build`)
4. Pubblica il risultato su GitHub Pages

Non serve **mai** compilare nulla a mano su questo computer: basta che il
codice arrivi su GitHub, al resto pensa GitHub stesso. Il sito è visibile su:

    https://frageorges.github.io/notebibliche/

(la build richiede 1-2 minuti dopo ogni aggiornamento — puoi seguirla nella
scheda "Actions" del repository su GitHub).

## Come aggiungere un nuovo articolo

Gli articoli vivono in `src/data/articles.ts`, dentro l'array `articles`.
Ogni articolo è un blocco così:

```ts
{
  id: '9',                          // un numero progressivo, univoco
  title: "Titolo dell'articolo",
  excerpt: "Un breve riassunto (1-2 frasi) che appare nelle anteprime.",
  category: 'antico',               // 'antico' oppure 'nuovo' (Testamento)
  subcategory: 'pentateuco',        // vedi elenco sotto
  book: 'Genesi',                   // il libro biblico di riferimento
  date: '2026-07-20',               // formato AAAA-MM-GG
  readTime: 8,                      // minuti di lettura stimati
  featured: true,                   // opzionale: true per metterlo "in evidenza" in home
},
```

Sottocategorie disponibili: `pentateuco`, `storici`, `poetici`,
`profeti-maggiori`, `profeti-minori` (Antico Testamento); `vangeli`, `atti`,
`lettere-paoline`, `lettere-generali`, `apocalisse` (Nuovo Testamento).

Il testo completo dell'articolo (i paragrafi) va aggiunto nel file
`src/pages/ArticlePage.tsx`, dentro l'oggetto `contentMap`, con la stessa
`id` usata sopra:

```ts
'9': [
  "Primo paragrafo...",
  "Secondo paragrafo...",
],
```

**Il modo più semplice**: scrivi il testo dell'articolo in una chat con
Claude e chiedi di aggiungerlo al sito — Claude farà queste modifiche al
posto tuo. Basterà poi eseguire due comandi nel Terminale (`git add`,
`git commit`, `git push`) per pubblicarlo: GitHub Actions farà il resto.

## Struttura del progetto

- `src/pages/` — le pagine del sito (Home, Archivio, Categoria, Articolo, Chi
  sono, Contatti)
- `src/components/` — pezzi riutilizzabili (Navbar, Footer, ArticleCard,
  CategorySidebar, WeeklyNote)
- `src/data/articles.ts` — tutti gli articoli e le categorie bibliche
- `.github/workflows/deploy.yml` — la build/pubblicazione automatica
- `404.html` — necessario perché i link diretti agli articoli (es.
  `/articolo/3`) funzionino su GitHub Pages senza dare errore
