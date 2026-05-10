import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Klachtenregeling — Nieuw Niveau',
  description: 'Klachtenregeling van Nieuw Niveau Begeleiding conform de Wkkgz.',
  robots: { index: false },
}

const stappen = [
  {
    num: '01',
    wet: 'Wkkgz art. 13',
    titel: 'Bespreek het direct',
    tekst: 'Bespreek uw onvrede eerst met uw begeleider. Veel zorgen lossen zich op in een open gesprek.',
    link: null,
  },
  {
    num: '02',
    wet: 'Wkkgz art. 13 lid 1',
    titel: 'Schriftelijke klacht',
    tekst: 'Komt u er samen niet uit, dan kunt u uw klacht schriftelijk indienen via het contactformulier op deze website of per e-mail naar info@nieuwniveau.nl. Wij bevestigen ontvangst en reageren schriftelijk en gemotiveerd binnen 6 weken. Indien het onderzoek meer tijd vereist, wordt de termijn eenmalig met maximaal 4 weken verlengd. U wordt hierover vóór het verstrijken van de oorspronkelijke termijn schriftelijk geïnformeerd.',
    link: { label: 'Naar het contactformulier', href: '/contact', extern: false },
  },
  {
    num: '03',
    wet: 'Wkkgz art. 14',
    titel: 'Onafhankelijke klachtenfunctionaris',
    tekst: 'Wilt u een onafhankelijke bemiddelaar inschakelen? Dat kan kosteloos via Klachtenportaal Zorg, waarbij Nieuw Niveau Begeleiding is aangesloten. De klachtenfunctionaris adviseert, verleent bijstand bij het formuleren van de klacht en onderzoekt of een minnelijke schikking mogelijk is.',
    link: { label: 'www.klachtenportaalzorg.nl', href: 'https://www.klachtenportaalzorg.nl', extern: true },
  },
  {
    num: '04',
    wet: 'Wkkgz art. 18–19',
    titel: 'Geschilleninstantie',
    tekst: 'Heeft de klachtafhandeling niet geleid tot een bevredigende oplossing? Dan kunt u het geschil kosteloos voorleggen aan de erkende geschilleninstantie waarbij Nieuw Niveau Begeleiding is aangesloten. De instantie geeft een bindend advies en kan een schadevergoeding toekennen van maximaal € 25.000. Uitspraak volgt binnen 6 maanden na indiening.',
    link: { label: 'www.zorggeschil.nl', href: 'https://www.zorggeschil.nl', extern: true },
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
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-fraunces)',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: 'var(--teal)',
                    margin: 0,
                  }}>
                    {s.titel}
                  </h3>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--zalm-donker)',
                    opacity: 0.8,
                  }}>
                    {s.wet}
                  </span>
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
          <strong style={{ color: 'var(--teal)', display: 'block', marginBottom: '4px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Wkkgz art. 13 lid 1</strong>
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
