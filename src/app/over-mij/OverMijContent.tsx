'use client'

import Image from 'next/image'
import { FadeIn, Stagger, StaggerItem } from '@/components/Animate'
import styles from './OverMij.module.css'

const reviews = [
  'Door samen met Bram te werken aan mijn administratie en financiën, kreeg ik meer ruimte in mijn hoofd — en kon ik weer genieten van de kleine dingen.',
  'Ons huis was jaren een bron van stress. Samen hebben we stap voor stap opgeruimd. Nu heb ik weer ruimte om thuis te zijn — en zelfs mijn hobby op te pakken.',
  'Nieuwe mensen ontmoeten vond ik spannend en overweldigend. Bram hielp me dit aan te pakken op mijn tempo.',
]


export default function OverMijContent() {
  return (
    <main className={`page ${styles.page}`}>
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
              {/* Portretframe */}
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

              {/* Badge buiten overflow:hidden container */}
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
