'use client'

import Image from 'next/image'
import { FadeIn, Stagger, StaggerItem } from '@/components/Animate'
import styles from './OverMij.module.css'
import vwStyles from '../voor-wie/VoorWie.module.css'

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
          <div style={{ margin: '56px 0 20px', paddingTop: '40px', borderTop: '1px solid var(--rand)' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '6px' }}>Missie <em>&amp; visie</em></h2>
          </div>
        </FadeIn>

        <div className={vwStyles.mvWrapper}>
          <FadeIn from="left" delay={0.1} style={{ height: '100%' }}>
            <div className={`${vwStyles.mvCard} ${vwStyles.mvMissie} noise-overlay`} style={{ height: '100%' }}>
              <div className={vwStyles.mvCardHeader}>
                <div className={`${vwStyles.mvCardIcon} ${vwStyles.mvMissieIcon}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="white" stroke="none"/>
                  </svg>
                </div>
                <h3 className={vwStyles.mvTitleLight}>Missie</h3>
              </div>
              <p className={vwStyles.mvDescLight}>
                Nieuw Niveau staat naast mensen met complexe problematiek in hun eigen omgeving — niet om het over te nemen, maar door naast iemand te staan. We maken zichtbaar hoe gedragspatronen ontstaan, hoe een aandoening iemands leven kleurt, en wat er wél mogelijk is binnen die werkelijkheid. Elke beperking draagt kracht in zich. Het zichtbaar maken en benutten — dát is het nieuwe niveau van onze cliënten.
              </p>
            </div>
          </FadeIn>

          <FadeIn from="right" delay={0.2} style={{ height: '100%' }}>
            <div className={`${vwStyles.mvCard} ${vwStyles.mvVisie}`} style={{ height: '100%' }}>
              <div className={vwStyles.mvCardHeader}>
                <div className={`${vwStyles.mvCardIcon} ${vwStyles.mvVisieIcon}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--zalm-donker)" strokeWidth={2} strokeLinecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className={vwStyles.mvTitleDark}>Visie</h3>
              </div>
              <p className={vwStyles.mvDescDark}>
                De zorg staat voor een fundamentele omslag. Jarenlang werd hulp individualistisch georganiseerd — gericht op de persoon, los van de wereld eromheen. Bij Nieuw Niveau staat niet alleen de cliënt centraal, maar ook zijn of haar omgeving: het netwerk, de wijk, de mensen die er dagelijks toe doen.
              </p>
              <p className={vwStyles.mvDescDark} style={{ marginTop: '10px' }}>
                Tegelijkertijd groeit de druk op het zorgsysteem. Budgetten krimpen, wachtlijsten lopen op en de vraag naar begeleiding neemt toe. <strong>Nieuw Niveau sluit hierop aan door actiegericht te werken, in te zetten op innovatie en ontwikkeling, en kracht te vinden in wat eerder een beperking heette</strong> — niet werken binnen het systeem zoals het was, maar bouwen aan zorg zoals het moet zijn.
              </p>
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
