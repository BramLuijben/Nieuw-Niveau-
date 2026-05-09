import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacyverklaring — Nieuw Niveau',
  description: 'Privacyverklaring van Nieuw Niveau Begeleiding.',
  robots: { index: false },
}

export default function Privacyverklaring() {
  return (
    <main className="page" style={{ background: 'var(--creme)' }}>
      <div className="page-inner" style={{ maxWidth: '720px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>Privacyverklaring</h1>
        <p className="lead">Nieuw Niveau Begeleiding, KvK 42035269</p>

        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <section>
            <h2>Persoonsgegevens</h2>
            <p>Nieuw Niveau Begeleiding verwerkt persoonsgegevens die nodig zijn voor het uitvoeren van de begeleiding. Dit betreft onder andere naam, contactgegevens en zorginhoudelijke informatie.</p>
          </section>

          <section>
            <h2>Grondslag en doel</h2>
            <p>Wij verwerken persoonsgegevens op basis van een overeenkomst (begeleidingstraject) of met toestemming van betrokkene. De gegevens worden uitsluitend gebruikt voor het verlenen van begeleiding en de bijbehorende administratie.</p>
          </section>

          <section>
            <h2>Bewaartermijn</h2>
            <p>Dossiers worden bewaard conform de wettelijke bewaartermijn van 20 jaar (WGBO), tenzij een kortere termijn van toepassing is.</p>
          </section>

          <section>
            <h2>Delen met derden</h2>
            <p>Persoonsgegevens worden niet gedeeld met derden zonder expliciete toestemming, tenzij dit wettelijk verplicht is.</p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>Deze website gebruikt uitsluitend functionele cookies. Er worden geen tracking- of advertentiecookies gebruikt.</p>
          </section>

          <section>
            <h2>Rechten</h2>
            <p>U heeft het recht op inzage, correctie en verwijdering van uw gegevens. Neem hiervoor contact op via <a href="mailto:info@nieuwniveau.nl" style={{ color: 'var(--zalm-donker)' }}>info@nieuwniveau.nl</a>.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Nieuw Niveau Begeleiding<br />
              KvK: 42035269<br />
              E-mail: <a href="mailto:info@nieuwniveau.nl" style={{ color: 'var(--zalm-donker)' }}>info@nieuwniveau.nl</a>
            </p>
          </section>
        </div>

        <div style={{ marginTop: '48px' }}>
          <Link href="/" className="btn-secondary" style={{ display: 'inline-flex' }}>← Terug naar home</Link>
        </div>
      </div>
    </main>
  )
}
