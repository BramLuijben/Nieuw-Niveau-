'use client'

import { FadeIn, Stagger, StaggerItem } from '@/components/Animate'
import styles from './Diensten.module.css'

const diensten = [
  {
    num: '01',
    titel: 'Begeleiding via PGB',
    omschrijving: 'Met een persoonsgebonden budget kies je je eigen begeleider. Jij bepaalt wie er komt en wanneer. Nog geen PGB, maar denk je dat je ervoor in aanmerking komt? We helpen je op weg met de aanvraag.',
    aanbevolen: false,
  },
  {
    num: '02',
    titel: 'Particuliere begeleiding',
    omschrijving: 'Begeleiding kan ook op eigen kosten, zonder indicatie of verwijzing. Neem contact op voor de mogelijkheden.',
    aanbevolen: false,
  },
  {
    num: '03',
    titel: 'Onderaannemerschap',
    omschrijving: 'We werken ook samen met zorgorganisaties als onderaannemer. Die samenwerking bespreken we nu. Zodra er meer bekend is, lees je het hier.',
    inOntwikkeling: true,
    aanbevolen: false,
  },
  {
    num: '04',
    titel: 'Contractuele basis',
    omschrijving: 'We zijn met verschillende regio\'s in gesprek om cliënten via de WMO te begeleiden op contractbasis.',
    inOntwikkeling: true,
    aanbevolen: false,
  },
]

const kenmerken: string[] = []

export default function DienstenContent() {
  return (
    <main className={`page ${styles.page}`}>
      <div className={styles.mobileBlobs} aria-hidden="true" />
      <div className="page-inner">
        <FadeIn delay={0.05}>
          <div className="eyebrow"><span className="eyebrow-num">04</span> Diensten</div>
        </FadeIn>

        <FadeIn delay={0.12} from="left">
          <h1>Flexibel in <em>locatie en frequentie</em></h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className={styles.dienstenIntro}>
            Onze begeleiding past zich aan jou aan. We kijken naar je situatie, je wensen en je doelen, en stemmen daarop af. We zijn actief in Amersfoort, Utrecht Zuidoost, Hilversum en omstreken.
          </p>
        </FadeIn>

        {/* Drie dienst-kaarten */}
        <Stagger className={styles.dienstenGrid} stagger={0.12} delay={0.1}>
          {diensten.map((d) => (
            <StaggerItem key={d.num} style={{ height: '100%' }}>
              <div className={`${styles.dienstCard} ${styles.secondary}`}>

                <div className={styles.dienstNumRow} style={{ marginTop: 0 }}>
                  <span className={styles.dienstNum}>{d.num}</span>
                  <h3 className={styles.dienstTitleDark}>{d.titel}</h3>
                </div>

                <p className={styles.dienstDescDark}>{d.omschrijving}</p>

                {('kenmerken' in d) && (d as {kenmerken: string[]}).kenmerken.length > 0 && (
                  <div className={styles.dienstFeatures}>
                    {(d as {kenmerken: string[]}).kenmerken.map((k) => (
                      <span key={k} className={styles.dienstFeature}>{k}</span>
                    ))}
                  </div>
                )}

              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Kenmerken pills */}
        <FadeIn delay={0.1}>
          <div className={styles.kenmerkenRow}>
            {kenmerken.map((k) => (
              <span key={k} className={styles.kenmerk}>{k}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
