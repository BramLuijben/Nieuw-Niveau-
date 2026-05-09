import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Algemene voorwaarden — Nieuw Niveau',
  description: 'Algemene voorwaarden van Nieuw Niveau Begeleiding.',
  robots: { index: false },
}

export default function AlgemeneVoorwaarden() {
  return (
    <main className="page" style={{ background: 'var(--creme)' }}>
      <div className="page-inner" style={{ maxWidth: '720px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>Algemene voorwaarden</h1>
        <p className="lead">Nieuw Niveau Begeleiding, KvK 42035269</p>

        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <section>
            <h2>Toepasselijkheid</h2>
            <p>Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen Nieuw Niveau Begeleiding en cliënten of opdrachtgevers.</p>
          </section>

          <section>
            <h2>Dienstverlening</h2>
            <p>Nieuw Niveau Begeleiding levert ambulante WMO-begeleiding op basis van een individueel begeleidingsplan. De dienstverlening is gericht op het versterken van zelfredzaamheid en participatie.</p>
          </section>

          <section>
            <h2>Verplichtingen opdrachtgever</h2>
            <p>De cliënt of opdrachtgever verstrekt tijdig alle informatie die nodig is voor een goede uitvoering van de begeleiding. Afspraken worden minimaal 24 uur van tevoren afgezegd.</p>
          </section>

          <section>
            <h2>Aansprakelijkheid</h2>
            <p>Nieuw Niveau Begeleiding is niet aansprakelijk voor indirecte schade of gevolgschade. De aansprakelijkheid is beperkt tot het bedrag dat door de beroepsaansprakelijkheidsverzekering wordt gedekt.</p>
          </section>

          <section>
            <h2>Klachten</h2>
            <p>Klachten kunnen worden ingediend via <a href="mailto:info@nieuwniveau.nl" style={{ color: 'var(--zalm-donker)' }}>info@nieuwniveau.nl</a>. Nieuw Niveau Begeleiding is aangesloten bij een erkende klachtenregeling conform de Wkkgz.</p>
          </section>

          <section>
            <h2>Toepasselijk recht</h2>
            <p>Op alle overeenkomsten is Nederlands recht van toepassing.</p>
          </section>
        </div>

        <div style={{ marginTop: '48px' }}>
          <Link href="/" className="btn-secondary" style={{ display: 'inline-flex' }}>← Terug naar home</Link>
        </div>
      </div>
    </main>
  )
}
