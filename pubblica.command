#!/bin/bash
# Doppio clic su questo file per pubblicare le ultime modifiche del sito.
# Fa automaticamente: git add, git commit, git push.
# GitHub Actions compila e pubblica da solo, in 1-2 minuti.

cd "$(dirname "$0")"

echo "Pubblicazione in corso..."
echo ""

git add -A

if git diff --cached --quiet; then
  echo "Nessuna modifica da pubblicare: tutto è già aggiornato."
else
  git commit -m "Aggiornamento contenuti — $(date '+%d/%m/%Y %H:%M')"
  git push
  echo ""
  echo "Fatto! Segui l'avanzamento nella scheda 'Actions' su GitHub."
  echo "Il sito sarà aggiornato tra 1-2 minuti su:"
  echo "https://frageorges.github.io/notebibliche/"
fi

echo ""
echo "Puoi chiudere questa finestra."
read -p "Premi invio per uscire..."
