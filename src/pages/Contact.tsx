import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', messaggio: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.7rem 0.9rem',
    fontSize: '0.9rem',
    border: '1px solid #DDD5C5',
    background: '#FAF6EF',
    color: '#2D2219',
    outline: 'none',
    borderRadius: '2px',
    fontFamily: "'Lato', sans-serif",
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* Left */}
        <div>
          <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B5552A', marginBottom: '0.5rem', fontWeight: 700 }}>
            Contatti
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.4rem', fontWeight: 700, color: '#2D2219', lineHeight: 1.2, marginBottom: '1.5rem', borderBottom: '2px solid #2D2219', paddingBottom: '0.75rem' }}>
            Scrivimi
          </h1>

          <p style={{ fontSize: '0.96rem', lineHeight: 1.85, color: '#3A2A1E', marginBottom: '1.5rem' }}>
            Hai una domanda su un testo biblico? Vuoi approfondire un tema che hai letto qui? O semplicemente vuoi condividere una riflessione? Sono felice di rispondere.
          </p>
          <p style={{ fontSize: '0.96rem', lineHeight: 1.85, color: '#3A2A1E', marginBottom: '2rem' }}>
            Rispondo normalmente entro qualche giorno. Non utilizzo i dati inviati per alcuno scopo commerciale.
          </p>

          <div style={{ background: '#2D2219', padding: '1.5rem', color: '#FAF6EF', marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B5552A', marginBottom: '0.8rem', fontWeight: 700 }}>
              Email diretta
            </p>
            <a
              href="mailto:info@parolaviva.it"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#FAF6EF', textDecoration: 'none' }}
            >
              info@parolaviva.it
            </a>
          </div>

          <div style={{ padding: '1.5rem', background: '#FAF6EF', border: '1px solid #DDD5C5' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A6A5A', marginBottom: '0.6rem', fontWeight: 700 }}>
              Nota della settimana
            </p>
            <p style={{ fontSize: '0.83rem', color: '#5A4A3A', lineHeight: 1.7 }}>
              Ogni settimana pubblico una breve riflessione con un versetto guida. Puoi trovarla nella home del sito e nell'archivio degli articoli.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div>
          {sent ? (
            <div style={{ background: '#F0E8DC', padding: '2.5rem', border: '1px solid #DDD5C5', textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>✦</span>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: '#2D2219', marginBottom: '0.6rem' }}>
                Messaggio inviato
              </p>
              <p style={{ fontSize: '0.88rem', color: '#5A4A3A', lineHeight: 1.7 }}>
                Grazie per avermi scritto. Risponderò quanto prima.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A6A5A', marginBottom: '0.4rem', fontWeight: 700 }}>
                  Nome
                </label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A6A5A', marginBottom: '0.4rem', fontWeight: 700 }}>
                  Indirizzo email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A6A5A', marginBottom: '0.4rem', fontWeight: 700 }}>
                  Messaggio
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.messaggio}
                  onChange={e => setForm(f => ({ ...f, messaggio: e.target.value }))}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>
              <button
                type="submit"
                style={{
                  background: '#B5552A',
                  color: '#FAF6EF',
                  border: 'none',
                  padding: '0.8rem 2rem',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  borderRadius: '2px',
                }}
              >
                Invia messaggio
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
