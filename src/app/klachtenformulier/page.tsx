import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Klachtenregeling — Nieuw Niveau',
  description: 'Klachtenregeling van Nieuw Niveau Begeleiding. Niet tevreden? Laat het ons weten.',
  robots: { index: false },
}

const stappen = [
  {
    num: '01',
    titel: 'Bespreek het direct',
    tekst:
      'Bespreek uw onvrede eerst met uw begeleider. Veel zorgen lossen zich op in een open gesprek.',
    link: null,
  },
  {
    num: '02',
    titel: 'Schriftelijke klacht',
    tekst:
      'Komt u er samen niet uit, dan kunt u uw klacht schriftelijk indienen via het contactformulier op deze website of per e-mail.',
    link: { label: 'Naar het contactformulier', href: '/contact', extern: false },
  },
  {
    num: '03',
    titel: 'Onafhankelijke klachtenfunctionaris',
    tekst:
      'Wilt u een onafhankelijke bemiddelaar inschakelen? Dat kan kosteloos via Klachtenportaal Zorg, waarbij Nieuw Niveau Begeleiding is aangesloten.',
    link: { label: 'www.klachtenportaalzorg.nl', href: 'https://www.klachtenportaalzorg.nl', extern: true },
  },
  {
    num: '04',
    titel: 'Geschilleninstantie',
    tekst:
      'Heeft de klachtafhandeling niet geleid tot een bevredigende oplossing? Dan kunt u het geschil voorleggen aan de erkende geschilleninstantie waarbij Nieuw Niveau Begeleiding is aangesloten.',
    link: { label: 'www.zorggeschil.nl', href: 'https://www.zorggeschil.nl', extern: true },
  },
]

export default function Klachtenregeling() {
  return (
    <main className="page" style={{ background: 'var(--creme)' }}>
      <div className="page-inner" style={{ maxWidth: '760px' }}>

        <div className="eyebrow" style={{ marginBottom: '18px' }}>
          <span className="eyebrow-num">⚑</span> Klachtenregeling
        </div>

        <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '12px' }}>
          Niet tevreden? <em>Laat het ons weten.</em>
        </h1>

        <p style={{
          fontSize: '16px',
          color: 'var(--grijs)',
          maxWidth: '52ch',
          marginBottom: '48px',
          lineHeight: '1.65',
        }}>
          Wij nemen uw klacht serieus en behandelen deze vertrouwelijk.
        </p>

        {/* Stappen */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
          {stappen.map((s) => (
            <div
              key={s.num}
              style={{
                display: 'grid',
                gridTemplateColumns: '56px 1fr',
                gap: '0 24px',
                background: 'var(--wit)',
                border: '1px solid var(--rand)',
                borderRadius: '16px',
                padding: '24px 28px',
                alignItems: 'start',
              }}
            >
              {/* Nummerkolom */}
              <div style={{
                fontFamily: 'var(--font-fraunces)',
                fontSize: '28px',
                fontWeight: 400,
                color: 'var(--zalm)',
                lineHeight: 1,
                paddingTop: '4px',
              }}>
                {s.num}
              </div>

              {/* Inhoud */}
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-fraunces)',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: 'var(--teal)',
                  marginBottom: '8px',
                }}>
                  {s.titel}
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.65',
                  color: 'var(--zwart-zacht)',
                  margin: 0,
                }}>
                  {s.tekst}
                </p>
                {s.link && (
                  s.link.extern ? (
                    <a
                      href={s.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginTop: '12px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--zalm-donker)',
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                      }}
                    >
                      {s.link.label} ↗
                    </a>
                  ) : (
                    <Link
                      href={s.link.href}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginTop: '12px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--zalm-donker)',
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
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
          padding: '16px 20px',
          fontSize: '14px',
          color: 'var(--zwart-zacht)',
          lineHeight: '1.65',
          marginBottom: '36px',
        }}>
          Uw klacht wordt vertrouwelijk behandeld en geanonimiseerd geregistreerd ten behoeve van kwaliteitsverbetering.
        </div>

        {/* Download + terug */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="/Klachtenregeling.docx" download className="btn-primary">
            ↓ Download klachtenregeling
          </a>
          <Link href="/" className="btn-secondary">← Terug naar home</Link>
        </div>

      </div>
    </main>
  )
}
