'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Klachtenformulier.module.css'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Klachtenformulier() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    naam: '',
    email: '',
    telefoon: '',
    datum: '',
    omschrijving: '',
    oplossing: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const bericht = [
      `Datum incident: ${form.datum || 'Niet opgegeven'}`,
      '',
      `Omschrijving:`,
      form.omschrijving,
      '',
      `Gewenste oplossing:`,
      form.oplossing || 'Niet opgegeven',
    ].join('\n')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          naam: form.naam,
          email: form.email,
          telefoon: form.telefoon,
          ik_ben: 'klacht',
          bericht,
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className={`page ${styles.page}`}>
      <div className="page-inner" style={{ maxWidth: '720px' }}>
        <div className="eyebrow">
          <span className="eyebrow-num">⚑</span> Klachtenformulier
        </div>

        <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '12px' }}>
          Een klacht <em>indienen</em>
        </h1>
        <p className={styles.intro}>
          Nieuw Niveau Begeleiding hecht waarde aan goede zorg. Heeft u een klacht? Vul het formulier hieronder in. Wij nemen uw klacht serieus en streven ernaar binnen 5 werkdagen te reageren.
        </p>

        <div className={styles.infoBlock}>
          <strong>Klachtenregeling conform Wkkgz</strong>
          <p>U kunt ook direct contact opnemen via <a href="mailto:info@nieuwniveau.nl">info@nieuwniveau.nl</a> of <a href="tel:+31629242833">+31 6 29 24 28 33</a>.</p>
          <a href="/Klachtenregeling.docx" download className={styles.downloadBtn}>
            ↓ Download klachtenregeling (.docx)
          </a>
        </div>

        {status === 'success' ? (
          <div className={styles.successCard}>
            <div className={styles.successIcon}>✓</div>
            <h3>Klacht ontvangen</h3>
            <p>Bedankt voor uw melding. U ontvangt een bevestiging per e-mail. Wij reageren zo spoedig mogelijk, uiterlijk binnen 5 werkdagen.</p>
            <Link href="/" className="btn-secondary" style={{ marginTop: '8px' }}>← Terug naar home</Link>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.row}>
              <div className={styles.group}>
                <label htmlFor="naam">Naam *</label>
                <input
                  id="naam" type="text" required
                  placeholder="Uw volledige naam"
                  value={form.naam}
                  onChange={e => setForm({ ...form, naam: e.target.value })}
                />
              </div>
              <div className={styles.group}>
                <label htmlFor="datum">Datum incident <span className={styles.optional}>(optioneel)</span></label>
                <input
                  id="datum" type="date"
                  value={form.datum}
                  onChange={e => setForm({ ...form, datum: e.target.value })}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.group}>
                <label htmlFor="email">E-mailadres *</label>
                <input
                  id="email" type="email" required
                  placeholder="uw@email.nl"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className={styles.group}>
                <label htmlFor="telefoon">Telefoonnummer <span className={styles.optional}>(optioneel)</span></label>
                <input
                  id="telefoon" type="tel"
                  placeholder="+31 6 ..."
                  value={form.telefoon}
                  onChange={e => setForm({ ...form, telefoon: e.target.value })}
                />
              </div>
            </div>

            <div className={styles.group}>
              <label htmlFor="omschrijving">Omschrijving van de klacht *</label>
              <textarea
                id="omschrijving" required rows={5}
                placeholder="Beschrijf zo concreet mogelijk wat er is gebeurd..."
                value={form.omschrijving}
                onChange={e => setForm({ ...form, omschrijving: e.target.value })}
              />
            </div>

            <div className={styles.group}>
              <label htmlFor="oplossing">Gewenste oplossing <span className={styles.optional}>(optioneel)</span></label>
              <textarea
                id="oplossing" rows={3}
                placeholder="Wat zou voor u een passende oplossing zijn?"
                value={form.oplossing}
                onChange={e => setForm({ ...form, oplossing: e.target.value })}
              />
            </div>

            {status === 'error' && (
              <p className={styles.errorMsg}>
                Er is iets misgegaan. Probeer het opnieuw of stuur een e-mail naar <a href="mailto:info@nieuwniveau.nl">info@nieuwniveau.nl</a>.
              </p>
            )}

            <div className={styles.actions}>
              <button type="submit" className="btn-primary" disabled={status === 'loading'}>
                {status === 'loading' ? 'Verzenden...' : 'Klacht indienen →'}
              </button>
              <Link href="/" className="btn-secondary">Annuleren</Link>
            </div>
          </form>
        )}
      </div>
    </main>
  )
}
