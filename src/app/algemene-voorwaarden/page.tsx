import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Algemene voorwaarden — Nieuw Niveau',
  description: 'Algemene voorwaarden van Nieuw Niveau Begeleiding.',
  robots: { index: false },
}

const sections = [
  {
    titel: 'Partijen',
    tekst: [
      'Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen Nieuw Niveau Begeleiding (eenmanszaak, KvK 42035269, AGB-code 98108653, gevestigd te Amersfoort, e-mail info@nieuwniveau.nl) en de cliënt.',
    ],
  },
  {
    titel: 'Informatie over de begeleiding',
    wet: 'WGBO art. 7:448 BW',
    tekst: [
      "Vóór aanvang van de begeleiding informeert de begeleider de cliënt over de aard en het doel van de begeleiding, de te verwachten gevolgen en risico's, en eventuele alternatieven. De cliënt krijgt de gelegenheid vragen te stellen.",
    ],
  },
  {
    titel: 'Toestemming',
    wet: 'WGBO art. 7:450 BW',
    tekst: [
      'Begeleiding wordt uitsluitend verleend met toestemming van de cliënt. De cliënt kan zijn toestemming te allen tijde intrekken.',
    ],
  },
  {
    titel: 'Geheimhouding',
    wet: 'WGBO art. 7:457 BW',
    tekst: [
      'De begeleider is verplicht tot geheimhouding van alles wat hem in het kader van de begeleiding ter kennis is gekomen, tenzij de cliënt uitdrukkelijk toestemming heeft gegeven voor verstrekking aan derden of een wettelijke plicht tot verstrekking bestaat.',
    ],
  },
  {
    titel: 'Dossier en bewaartermijn',
    wet: 'WGBO art. 7:454–7:455 BW',
    tekst: [
      'De begeleider legt een dossier aan met gegevens over de verleende begeleiding. Het dossier wordt bewaard gedurende twintig jaar na het laatste contact, of zoveel langer als redelijkerwijs noodzakelijk.',
    ],
  },
  {
    titel: 'Inzagerecht',
    wet: 'WGBO art. 7:456 BW',
    tekst: [
      'De cliënt heeft recht op inzage in en een kopie van zijn dossier. Een verzoek daartoe kan worden gedaan via info@nieuwniveau.nl.',
    ],
  },
  {
    titel: 'Klachten',
    wet: 'Wkkgz art. 13 lid 3',
    tekst: [
      'Voor klachten over de begeleiding verwijzen wij naar de klachtenregeling, te raadplegen via nieuwniveau.nl/klachtenformulier.',
    ],
  },
  {
    titel: 'Toepasselijk recht',
    tekst: [
      'Op alle overeenkomsten is Nederlands recht van toepassing.',
    ],
  },
]

export default function AlgemeneVoorwaarden() {
  return (
    <main className="page" style={{ background: 'var(--creme)' }}>
      <div className="page-inner" style={{ maxWidth: '720px' }}>

        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>Algemene voorwaarden</h1>
        <p className="lead" style={{ marginBottom: '48px' }}>
          Nieuw Niveau Begeleiding — KvK 42035269
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {sections.map((s) => (
            <section key={s.titel}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <h2 style={{ margin: 0 }}>{s.titel}</h2>
                {s.wet && (
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--zalm-donker)',
                    opacity: 0.85,
                  }}>
                    {s.wet}
                  </span>
                )}
              </div>
              {s.tekst.map((t, i) => <p key={i}>{t}</p>)}
            </section>
          ))}
        </div>

        <div style={{ marginTop: '52px' }}>
          <Link href="/" className="btn-secondary" style={{ display: 'inline-flex' }}>← Terug naar home</Link>
        </div>
      </div>
    </main>
  )
}
