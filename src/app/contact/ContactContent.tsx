'use client'

import { useState } from 'react'
import { FadeIn, MotionButton } from '@/components/Animate'
import styles from './Contact.module.css'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactContent() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    naam: '',
    email: '',
    telefoon: '',
    ik_ben: '',
    bericht: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className={`page ${styles.page}`}>
      <div className="page-inner">
        <FadeIn delay={0.05}>
          <div className="eyebrow"><span className="eyebrow-num">05</span> Contact</div>
        </FadeIn>

        <FadeIn delay={0.12} from="left">
          <h1>Klaar om te <em>beginnen?</em></h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className={styles.contactIntro}>
            De eerste stap is vaak de moeilijkste. Stuur vrijblijvend een bericht — we kijken samen wat mogelijk is.
          </p>
        </FadeIn>

        {/* Formulier — centraal */}
        <FadeIn delay={0.28}>
          <div className={styles.formWrap}>
            {status === 'success' ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✓</div>
                <h3>Bericht ontvangen!</h3>
                <p>Bedankt voor je bericht. Je ontvangt een bevestiging per e-mail. Ik neem zo snel mogelijk contact met je op.</p>
              </div>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>Stuur een bericht</h3>

                <div className={styles.formGroup}>
                  <label htmlFor="naam">Naam *</label>
                  <input
                    id="naam"
                    name="naam"
                    type="text"
                    required
                    placeholder="Je volledige naam"
                    value={form.naam}
                    onChange={e => setForm({ ...form, naam: e.target.value })}
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">E-mailadres *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="je@email.nl"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="telefoon">Telefoonnummer <span className={styles.optional}>(optioneel)</span></label>
                    <input
                      id="telefoon"
                      name="telefoon"
                      type="tel"
                      placeholder="+31 6 ..."
                      value={form.telefoon}
                      onChange={e => setForm({ ...form, telefoon: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="ik_ben">Ik ben *</label>
                  <select
                    id="ik_ben"
                    name="ik_ben"
                    required
                    value={form.ik_ben}
                    onChange={e => setForm({ ...form, ik_ben: e.target.value })}
                  >
                    <option value="">Kies een optie...</option>
                    <option value="client">Cliënt of naasten</option>
                    <option value="verwijzer">Verwijzer of sociaal team</option>
                    <option value="zorgaanbieder">Zorgaanbieder</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="bericht">Bericht *</label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    required
                    rows={5}
                    placeholder="Vertel kort wat je situatie is of wat je vraag is..."
                    value={form.bericht}
                    onChange={e => setForm({ ...form, bericht: e.target.value })}
                  />
                </div>

                {status === 'error' && (
                  <p className={styles.errorMsg}>Er is iets misgegaan. Probeer het opnieuw of stuur een e-mail naar info@nieuwniveau.nl.</p>
                )}

                <MotionButton
                  type="submit"
                  className="btn-primary"
                  disabled={status === 'loading'}
                  style={{ alignSelf: 'flex-start' }}
                >
                  {status === 'loading' ? 'Verzenden...' : 'Verstuur bericht →'}
                </MotionButton>
              </form>
            )}
          </div>
        </FadeIn>

        {/* Directe contactopties */}
        <FadeIn delay={0.4}>
          <div className={styles.directContact}>
            <h3 className={styles.directTitle}>Of neem direct contact op</h3>
            <div className={styles.channels}>
              <a href="https://wa.me/31629242833" className={styles.channel} target="_blank" rel="noopener noreferrer">
                <div className={`${styles.channelIcon} ${styles.channelWa}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                  </svg>
                </div>
                <div className={styles.channelInfo}>
                  <div className={styles.channelLabel}>WhatsApp</div>
                  <div className={styles.channelValue}>+31 6 29 24 28 33</div>
                </div>
                <span className={styles.channelArrow}>↗</span>
              </a>

              <a href="mailto:info@nieuwniveau.nl" className={styles.channel}>
                <div className={`${styles.channelIcon} ${styles.channelMail}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                </div>
                <div className={styles.channelInfo}>
                  <div className={styles.channelLabel}>E-mail</div>
                  <div className={styles.channelValue}>info@nieuwniveau.nl</div>
                </div>
                <span className={styles.channelArrow}>↗</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
