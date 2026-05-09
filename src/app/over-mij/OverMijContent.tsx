'use client'

import Image from 'next/image'
import { FadeIn, Stagger, StaggerItem } from '@/components/Animate'
import styles from './OverMij.module.css'

const reviews = [
  'Door samen met Bram te werken aan mijn administratie en financiën, kreeg ik meer ruimte in mijn hoofd — en kon ik weer genieten van de kleine dingen.',
  'Ons huis was jaren een bron van stress. Samen hebben we stap voor stap opgeruimd. Nu heb ik weer ruimte om thuis te zijn — en zelfs mijn hobby op te pakken.',
  'Nieuwe mensen ontmoeten vond ik spannend en overweldigend. Bram hielp me dit aan te pakken op mijn tempo.',
]

const missieVisie = [
  {
    label: 'Missie',
    icon: '◎',
    titel: 'Vastlopen omzetten in beweging',
    tekst:
      'Wij ondersteunen mensen die vastlopen bij het hervinden van hun richting — op een manier die aansluit bij wie zij zijn en wat zij willen bereiken. Niet door het over te nemen, maar door naast iemand te staan en samen stap voor stap verder te gaan.',
  },
  {
    label: 'Visie',
    icon: '◈',
    titel: 'Anders zijn is een kracht',
    tekst:
      'Wij geloven dat ieder mens het vermogen heeft om te groeien. Dat "anders zijn" geen belemmering is, maar een eigenschap die gewaardeerd mag worden. Goede begeleiding begint bij oprechte aandacht en het vertrouwen dat de ander zelf weet wat hij nodig heeft.',
  },
]

export default function OverMijContent() {
  return (
    <main className={`page ${styles.page}`}>

      {/* Decoratieve bollen rechtsboven */}
      <div className={styles.cornerBlobs} aria-hidden="true">
        <div className={styles.cornerBlob1} />
        <div className={styles.cornerBlob2} />
        <div className={styles.cornerBlob3} />
        <div className={styles.cornerBlob4} />
      </div>

      <div className="page-inner">
        <FadeIn delay={0.05}>
          <div className="eyebrow"><span className="eyebrow-num">03</span> Over ons</div>
        </FadeIn>

        <FadeIn delay={0.1} from="left">
          <h1>Over <em>ons</em></h1>
        </FadeIn>

        {/* Bram — foto + bio naast elkaar */}
        <div className={styles.overGrid}>
          <FadeIn delay={0.15} from="left">
            <div className={styles.portraitStage}>
              <div className={styles.portraitWrap}>
                <Image
                  src="/images/bram.jpeg"
                  alt="Bram Luijben — oprichter en ambulant begeleider Nieuw Niveau"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 900px) 100vw, 40vw"
                  priority
                />
              </div>
              <div className={styles.portraitBadge}>
                <div className={styles.badgeName}>Bram Luijben</div>
                <div className={styles.badgeRole}>Oprichter &amp; Ambulant begeleider</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} from="right">
            <div className={styles.overText}>
              <p className={styles.heroSubtitel}>
                Betrokken. Betrouwbaar.{' '}
                <span style={{ color: 'var(--zalm-donker)' }}>Gedreven.</span>
              </p>
              <p>
                Bram biedt gestructureerde ondersteuning met oprechte aandacht en rust. Hij weet overzicht te creëren, stabiliteit te bieden en samen stapsgewijs te werken aan een helder doel — gewaardeerd om zijn authenticiteit en open communicatie vanuit vertrouwen en gelijkwaardigheid.
              </p>
              <p>
                In zeven jaar binnen de GGZ werkte hij in uiteenlopende functies — van begeleide woonvormen tot ambulante trajecten — en bouwde hij een brede kennis en ervaring op. Naast zijn werk heeft Bram een persoonlijke interesse in gezondheid, voeding en sport, waar hij binnen het kader van zijn beroep cliënten passend en effectief weet te helpen.
              </p>
              <div className={styles.quoteBlock}>
                <p>
                  &ldquo;Ik vind het bijzonder om te zien hoe juist het &lsquo;anders-zijn&rsquo; een kracht kan zijn. Dat het niet veranderd, maar gewaardeerd mag worden. Met oog voor wat iemand zelf belangrijk vindt.&rdquo;
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Missie & Visie */}
        <FadeIn delay={0.1}>
          <div className={styles.missieVisieSection}>
            <div className={styles.missieVisieHeader}>
              <div className="eyebrow" style={{ marginBottom: 0 }}>
                <span className="eyebrow-num">✦</span> Missie &amp; Visie
              </div>
            </div>
            <Stagger className={styles.missieVisieGrid} stagger={0.12}>
              {missieVisie.map((item) => (
                <StaggerItem key={item.label}>
                  <div className={styles.missieVisieCard}>
                    <div className={styles.missieVisieIcon}>{item.icon}</div>
                    <div className={styles.missieVisieLabel}>{item.label}</div>
                    <h3 className={styles.missieVisieTitel}>{item.titel}</h3>
                    <p className={styles.missieVisieTekst}>{item.tekst}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </FadeIn>

        {/* Reviews */}
        <FadeIn delay={0.1}>
          <div className={styles.reviewsSection}>
            <div className={styles.reviewsHeader}>
              <div className={styles.reviewsHeaderIcon}>
                <svg viewBox="0 0 24 24" fill="white" width={16} height={16}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className={styles.reviewsLabel}>Ervaringen — Wat cliënten zeggen</div>
            </div>

            <Stagger className={styles.reviewsGrid} stagger={0.1}>
              {reviews.map((text, i) => (
                <StaggerItem key={i}>
                  <div className={styles.review}>
                    <span className={styles.reviewQuoteMark}>&ldquo;</span>
                    <p>{text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
