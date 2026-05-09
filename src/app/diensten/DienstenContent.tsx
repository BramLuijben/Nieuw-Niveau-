'use client'

import { FadeIn, Stagger, StaggerItem } from '@/components/Animate'
import styles from './Diensten.module.css'

const diensten = [
  {
    num: '01',
    titel: 'Begeleiding via PGB',
    omschrijving: 'Met een persoonsgebonden budget kies jij je eigen begeleider. Jij bepaalt wie bij jou komt en wanneer. Heb je nog geen PGB maar denk je dat je in aanmerking komt? Ik denk graag met je mee over de mogelijkheden en het aanvraagproces.',
    aanbevolen: false,
  },
  {
    num: '02',
    titel: 'Particuliere begeleiding',
    omschrijving: 'Begeleiding is ook mogelijk op eigen kosten, zonder indicatie of verwijzing. Neem gerust contact op voor de mogelijkheden.',
    aanbevolen: false,
  },
  {
    num: '03',
    titel: 'Onderaannemerschap',
    omschrijving: 'Wij werken ook samen met zorgorganisaties als onderaannemer. Deze samenwerking wordt momenteel nog besproken. Wanneer hierover duidelijkheid is volgt de informatie.',
    inOntwikkeling: true,
    aanbevolen: false,
  },
  {
    num: '04',
    titel: 'Contractuele basis',
    omschrijving: 'Momenteel zijn wij met verschillende regio\'s in gesprek om op contractuele basis, middels de WMO, cliënten te begeleiden.',
    inOntwikkeling: true,
    aanbevolen: false,
  },
]

const kenmerken: string[] = []

export default function DienstenContent() {
  return (
    <main className={`page ${styles.page}`}>
      <div className="page-inner">
        <FadeIn delay={0.05}>
          <div className="eyebrow"><span className="eyebrow-num">04</span> Diensten</div>
        </FadeIn>

        <FadeIn delay={0.12} from="left">
          <h1>Flexibel in <em>locatie en frequentie</em></h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className={styles.dienstenIntro}>
            Aansluitend op onze visie passen wij onze begeleiding aan op jou. We kijken naar jouw situatie, wensen en doelen en stemmen onze ondersteuning daarop af. Wij zijn onder andere actief in Amersfoort, Utrecht Zuidoost, Hilversum en omstreken.
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
