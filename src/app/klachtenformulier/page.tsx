import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Klachtenregeling — Nieuw Niveau',
  description: 'Klachtenregeling van Nieuw Niveau Begeleiding.',
  robots: { index: false },
}

const stappen = [
  {
    num: '01',
    titel: 'Bespreek het direct',
    tekst: 'Bespreek uw onvrede eerst met uw begeleider. Veel zorgen lossen zich op in een open gesprek.',
    link: null,
  },
  {
    num: '02',
    titel: 'Schriftelijke klacht',
    tekst: 'Indien uw klacht niet in een gesprek kan worden opgelost, kunt u uw klacht schriftelijk indienen via het contactformulier op deze website of per e-mail naar info@nieuwniveau.nl. Wij bevestigen de ontvangst van uw klacht en reageren schriftelijk en gemotiveerd binnen 6 weken. Indien het onderzoek meer tijd vereist, kan deze termijn eenmaal met maximaal 4 weken worden verlengd. U wordt hierover vóór het verstrijken van de oorspronkelijke termijn schriftelijk geïnformeerd.',
    link: { label: 'Naar het contactformulier', href: '/contact', extern: false },
  },
]

export default function Klachtenregeling() {
  return (
    <main className="page" style={{ background: 'var(--creme)' }}>
      <div className="page-inner" style={{ maxWidth: '760px' }}>

        <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '12px' }}>
          Niet tevreden? <em>Laat het ons weten.</em>
        </h1>
        <p className="lead" style={{ marginBottom: '48px' }}>
          Wij nemen uw klacht serieus en behandelen deze vertrouwelijk.
        </p>

        {/* Stappen */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
          {stappen.map((s) => (
            <div
              key={s.num}
              style={{
                display: 'grid',
                gridTemplateColumns: '52px 1fr',
                gap: '0 22px',
                background: 'var(--wit)',
                border: '1px solid var(--rand)',
                borderRadius: '16px',
                padding: '24px 26px',
                alignItems: 'start',
              }}
            >
              {/* Nummer */}
              <div style={{
                fontFamily: 'var(--font-fraunces)',
                fontSize: '26px',
                fontWeight: 400,
                color: 'var(--zalm)',
                lineHeight: 1,
                paddingTop: '4px',
              }}>
                {s.num}
              </div>

              {/* Inhoud */}
              <div>
                <div style={{ marginBottom: '6px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-fraunces)',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: 'var(--teal)',
                    margin: 0,
                  }}>
                    {s.titel}
                  </h3>
                </div>
                <p style={{ fontSize: '15px', lineHeight: '1.65', color: 'var(--zwart-zacht)', margin: 0 }}>
                  {s.tekst}
                </p>
                {s.link && (
                  s.link.extern ? (
                    <a
                      href={s.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                        marginTop: '12px', fontSize: '14px', fontWeight: 500,
                        color: 'var(--zalm-donker)', textDecoration: 'underline', textUnderlineOffset: '3px',
                      }}
                    >
                      {s.link.label} ↗
                    </a>
                  ) : (
                    <Link
                      href={s.link.href}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                        marginTop: '12px', fontSize: '14px', fontWeight: 500,
                        color: 'var(--zalm-donker)', textDecoration: 'underline', textUnderlineOffset: '3px',
                      }}
                    >
                      {s.link.label} →
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Vertrouwelijkheid */}
        <div style={{
          background: 'var(--zalm-heel-licht)',
          borderLeft: '3px solid var(--zalm)',
          borderRadius: '0 10px 10px 0',
          padding: '15px 20px',
          fontSize: '14px',
          color: 'var(--zwart-zacht)',
          lineHeight: '1.65',
          marginBottom: '36px',
        }}>
          Uw klacht wordt vertrouwelijk behandeld. Klachten kunnen geanonimiseerd worden geregistreerd ten behoeve van kwaliteitsverbetering.
        </div>

        {/* Download + terug */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="/" className="btn-secondary">← Terug naar home</Link>
        </div>

      </div>
    </main>
  )
}
