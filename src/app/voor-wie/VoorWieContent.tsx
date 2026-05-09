'use client'

import { FadeIn, Stagger, StaggerItem } from '@/components/Animate'
import styles from './VoorWie.module.css'

const expertiseItems = [
  {
    icon: <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a3 3 0 013-3h4a3 3 0 013 3v2zM12 8a3 3 0 100-6 3 3 0 000 6zm6 3a2 2 0 100-4 2 2 0 000 4z"/>,
    title: 'Sociaal contact',
    desc: 'Ondersteuning bij het aangaan en onderhouden van sociale relaties, omgaan met sociale situaties en het opbouwen van een betekenisvol netwerk.',
  },
  {
    icon: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>,
    title: 'Autisme begrijpen',
    desc: 'Inzicht krijgen in autisme als onderdeel van de eigen identiteit, met aandacht voor acceptatie en het versterken van persoonlijke kwaliteiten.',
  },
  {
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    title: 'Wonen & administratie',
    desc: 'Begeleiding bij het creëren van een overzichtelijke en leefbare (woon)omgeving, met praktische ondersteuning bij opruimen, structureren, administratie en financiën.',
  },
  {
    icon: <><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></>,
    title: 'Gezondheid & welzijn',
    desc: 'Werken aan lichamelijke en mentale gezondheid, structuur vinden of beter in je vel zitten.',
  },
  {
    icon: <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9m0 18c2.5-2.5 4-5.5 4-9s-1.5-6.5-4-9m-9 9a9 9 0 019-9"/>,
    title: 'Bemoeizorg',
    desc: 'Wij hebben expertise op gebied van bemoeizorg — voor mensen die zelf geen hulp vragen, maar het wel nodig hebben.',
  },
  {
    icon: <><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></>,
    title: 'Complexe problematiek',
    desc: 'Begeleiding bij meervoudige en samenhangende uitdagingen, zoals schulden, psychische problematiek en herstel na verslaving.',
  },
]

export default function VoorWieContent() {
  return (
    <main className={`page ${styles.page}`}>
      <div className="page-inner">
        <FadeIn delay={0.05}>
          <div className="eyebrow"><span className="eyebrow-num">01</span> Voor wie</div>
        </FadeIn>

        <FadeIn delay={0.12} from="left">
          <h1><em>Vastlopen</em> kan op veel manieren</h1>
        </FadeIn>

        <FadeIn delay={0.2} from="left">
          <div className={styles.introText}>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'var(--zwart-zacht)', maxWidth: '58ch' }}>
              Soms stapelt alles zich op — schulden, een rommelig huis, moeite met mensen, of een hoofd dat niet tot rust komt. Je weet dat er iets moet veranderen, maar je weet niet waar te beginnen.
            </p>
            <p style={{ color: 'var(--zwart-zacht)' }}>
              Of je hebt het al zo vaak geprobeerd dat vertrouwen in hulp ver weg voelt. Toch kan het helpend zijn om er niet alleen voor te staan. Een begeleider die bij jou past helpt je daarbij — en daarvoor kun je bij ons terecht.
            </p>
          </div>
        </FadeIn>

        {/* Expertise grid */}
        <FadeIn delay={0.1}>
          <div style={{ margin: '64px 0 20px' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '6px' }}>Waar wij <em>goed in zijn</em></h2>
            <p style={{ fontSize: '14px', color: 'var(--zwart-zacht)' }}>
              Herken je jouw situatie? Neem gerust contact op — we kijken samen wat mogelijk is.
            </p>
          </div>
        </FadeIn>

        <Stagger className={styles.expertiseGrid} stagger={0.1}>
          {expertiseItems.map((item, i) => (
            <StaggerItem key={i}>
              <div className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <h4 className={styles.expertiseTitle}>{item.title}</h4>
                <p className={styles.expertiseDesc}>{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Missie & Visie */}
        <FadeIn delay={0.1}>
          <div style={{ margin: '64px 0 20px' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '6px' }}>Missie <em>&amp; visie</em></h2>
          </div>
        </FadeIn>

        <div className={styles.mvWrapper}>
          <FadeIn from="left" delay={0.1} style={{ height: '100%' }}>
            <div className={`${styles.mvCard} ${styles.mvMissie} noise-overlay`} style={{ height: '100%' }}>
              <div className={styles.mvCardHeader}>
                <div className={`${styles.mvCardIcon} ${styles.mvMissieIcon}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="white" stroke="none"/>
                  </svg>
                </div>
                <h3 className={styles.mvTitleLight}>Missie</h3>
              </div>
              <p className={styles.mvDescLight}>
                Nieuw Niveau staat naast mensen met complexe problematiek in hun eigen omgeving — niet om het over te nemen, maar door naast iemand te staan. We maken zichtbaar hoe gedragspatronen ontstaan, hoe een aandoening iemands leven kleurt, en wat er wél mogelijk is binnen die werkelijkheid. Elke beperking draagt kracht in zich. Het zichtbaar maken en benutten — dát is het nieuwe niveau van onze cliënten.
              </p>
            </div>
          </FadeIn>

          <FadeIn from="right" delay={0.2} style={{ height: '100%' }}>
            <div className={`${styles.mvCard} ${styles.mvVisie}`} style={{ height: '100%' }}>
              <div className={styles.mvCardHeader}>
                <div className={`${styles.mvCardIcon} ${styles.mvVisieIcon}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--zalm-donker)" strokeWidth={2} strokeLinecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className={styles.mvTitleDark}>Visie</h3>
              </div>
              <p className={styles.mvDescDark}>
                De zorg staat voor een fundamentele omslag. Jarenlang werd hulp individualistisch georganiseerd — gericht op de persoon, los van de wereld eromheen. Bij Nieuw Niveau staat niet alleen de cliënt centraal, maar ook zijn of haar omgeving: het netwerk, de wijk, de mensen die er dagelijks toe doen.
              </p>
              <p className={styles.mvDescDark} style={{ marginTop: '10px' }}>
                Tegelijkertijd groeit de druk op het zorgsysteem. Budgetten krimpen, wachtlijsten lopen op en de vraag naar begeleiding neemt toe. <strong>Nieuw Niveau sluit hierop aan door actiegericht te werken, in te zetten op innovatie en ontwikkeling, en kracht te vinden in wat eerder een beperking heette</strong> — niet werken binnen het systeem zoals het was, maar bouwen aan zorg zoals het moet zijn.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  )
}
