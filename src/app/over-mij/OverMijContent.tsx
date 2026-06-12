'use client'

import Image from 'next/image'
import { FadeIn, Stagger, StaggerItem } from '@/components/Animate'
import styles from './OverMij.module.css'
import vwStyles from '../voor-wie/VoorWie.module.css'

const reviews = [
  'Door samen met Bram aan mijn administratie en financiën te werken, kreeg ik meer ruimte in mijn hoofd. Ik kan weer genieten van de kleine dingen.',
  'Ons huis was jaren een bron van stress. Stap voor stap hebben we opgeruimd. Nu heb ik weer ruimte om thuis te zijn, en heb ik zelfs mijn hobby opgepakt.',
  'Nieuwe mensen ontmoeten vond ik spannend en overweldigend. Bram hielp me dit op mijn eigen tempo aan te pakken.',
]

export default function OverMijContent() {
  return (
    <main className={`page ${styles.page}`}>
      <div className={styles.mobileBlobs} aria-hidden="true" />
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
                Bram werkt gestructureerd, met aandacht en rust. Hij brengt overzicht, biedt houvast en werkt met je toe naar een helder doel. Cliënten waarderen zijn open en gelijkwaardige manier van werken.
              </p>
              <p>
                In zeven jaar GGZ vervulde hij uiteenlopende functies, van begeleide woonvormen tot ambulante trajecten, en bouwde hij brede ervaring op. Naast zijn werk heeft Bram interesse in gezondheid, voeding en sport. Binnen de grenzen van zijn vak zet hij die kennis in waar het cliënten helpt.
              </p>
              <div className={styles.quoteBlock}>
                <p>
                  &ldquo;Ik vind het bijzonder om te zien hoe juist het &lsquo;anders-zijn&rsquo; een kracht kan zijn. Dat het niet verandert, maar gewaardeerd mag worden. Met oog voor wat iemand zelf belangrijk vindt.&rdquo;
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
                Nieuw Niveau staat naast mensen met complexe problematiek, in hun eigen omgeving. Niet om het over te nemen, maar om naast iemand te staan. We maken zichtbaar hoe gedragspatronen ontstaan, hoe een aandoening iemands leven kleurt, en wat er wél mogelijk is. Elke beperking draagt kracht in zich. Die kracht zichtbaar maken en benutten: dat is het nieuwe niveau van onze cliënten.
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
                De zorg staat voor een omslag. Jarenlang werd hulp rond het individu georganiseerd, los van de wereld eromheen. Bij Nieuw Niveau staat niet alleen de cliënt centraal, maar ook de omgeving: het netwerk, de wijk, de mensen die er elke dag toe doen.
              </p>
              <p className={vwStyles.mvDescDark} style={{ marginTop: '10px' }}>
                Tegelijk groeit de druk op de zorg. Budgetten krimpen, wachtlijsten lopen op, de vraag neemt toe. Wij sluiten daarop aan: actiegericht werken, inzetten op ontwikkeling, en kracht vinden in wat eerder een beperking heette. Niet werken binnen het systeem zoals het was, maar bouwen aan zorg zoals het moet zijn.
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
