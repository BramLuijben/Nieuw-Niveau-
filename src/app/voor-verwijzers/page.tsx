import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './VoorVerwijzers.module.css'

export const metadata: Metadata = {
  title: 'Voor verwijzers — Nieuw Niveau Begeleiding',
  description: 'Informatie voor sociale teams, SLT\'s en andere verwijzers over het aanbod, de aanmeldprocedure en het werkgebied van Nieuw Niveau Begeleiding.',
}

const methodieken = [
  'Motiverende gespreksvoering',
  'Oplossingsgericht werken',
  'Systeemgericht werken',
  'Bemoeizorg',
  'Krachtgericht werken',
]

const praktisch = [
  {
    label: 'Werkgebied',
    value: 'Amersfoort, Zuidoost Utrecht (ZOU), Hilversum en omstreken',
  },
  {
    label: 'Financiering',
    value: 'WMO-begeleiding individueel — gemeente is opdrachtgever',
  },
  {
    label: 'Doelgroep',
    value: 'Volwassenen met psychiatrische problematiek, LVB of complexe problematiek',
  },
  {
    label: 'Aanmelding',
    value: 'Via contactformulier of e-mail, bij voorkeur met een korte omschrijving van de hulpvraag',
  },
  {
    label: 'Beschikbaarheid',
    value: '[Vul aan met actuele wachttijd of beschikbaarheid]',
  },
  {
    label: 'AGB-code',
    value: '98108653',
  },
]

export default function VoorVerwijzers() {
  return (
    <div className="page">
      <div className="page-inner">
        <div className={styles.mobileBlobs} aria-hidden="true" />

        <p className="eyebrow">Voor verwijzers</p>
        <h1>Samenwerken voor de cliënt</h1>
        <p className={`${styles.intro} lead`}>
          Nieuw Niveau biedt ambulante WMO-begeleiding aan huis voor volwassenen met een complexe hulpvraag.
          Op deze pagina vind je praktische informatie over het aanbod, de aanmeldprocedure en de werkwijze.
        </p>

        <div className={styles.grid}>
          {/* Praktisch blok */}
          <div className={styles.praktischCard}>
            <h2 className={styles.cardTitle}>Praktische informatie</h2>
            <dl className={styles.praktischList}>
              {praktisch.map(({ label, value }) => (
                <div key={label} className={styles.praktischItem}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Methodieken */}
          <div className={styles.methodiekCard}>
            <h2 className={styles.cardTitle}>Methodieken</h2>
            <p className={styles.methodiekIntro}>
              Er wordt gewerkt vanuit een eclectische aanpak, waarbij de methodiek wordt afgestemd op wat de cliënt nodig heeft:
            </p>
            <ul className={styles.methodiekenList}>
              {methodieken.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
        </div>

        {/* Aanmelden CTA */}
        <div className={styles.ctaBlock}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>Cliënt aanmelden</h2>
            <p>
              Gebruik het contactformulier en selecteer <em>&ldquo;Verwijzer of sociaal team&rdquo;</em>.
              Vermeld kort de hulpvraag en de contactgegevens van de cliënt of jezelf.
              Na ontvangst wordt er zo snel mogelijk contact opgenomen.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Aanmeldformulier <span className="arrow">→</span>
          </Link>
        </div>

        {/* Kwaliteit & certificering */}
        <div className={styles.kwaliteitBlock}>
          <h2>Kwaliteit & certificering</h2>
          <p>
            Nieuw Niveau is KIWA-gecertificeerd op kwalificatieniveau 6.
            Er wordt gewerkt conform de WKKGZ (Wet kwaliteit, klachten en geschillen zorg),
            met een onafhankelijke klachtenregeling en een actueel kwaliteitsbeleid.
          </p>
          <p>
            [Vul aan met eventuele aanvullende keurmerken, accreditaties of audits]
          </p>
        </div>
      </div>
    </div>
  )
}
