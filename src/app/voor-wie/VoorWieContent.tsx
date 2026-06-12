'use client'

import { FadeIn, Stagger, StaggerItem } from '@/components/Animate'
import styles from './VoorWie.module.css'

const expertiseItems = [
  {
    icon: <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a3 3 0 013-3h4a3 3 0 013 3v2zM12 8a3 3 0 100-6 3 3 0 000 6zm6 3a2 2 0 100-4 2 2 0 000 4z"/>,
    title: 'Sociaal contact',
    desc: 'Contact leggen en onderhouden, omgaan met lastige situaties en een netwerk opbouwen dat iets voor je betekent.',
  },
  {
    icon: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>,
    title: 'Autisme begrijpen',
    desc: 'Autisme leren zien als deel van wie je bent, met ruimte voor acceptatie en voor wat je goed kunt.',
  },
  {
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    title: 'Wonen & administratie',
    desc: 'Een huis dat overzichtelijk en leefbaar is. Praktische hulp bij opruimen, structuur, post en geldzaken.',
  },
  {
    icon: <><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></>,
    title: 'Gezondheid & welzijn',
    desc: 'Werken aan lichaam en hoofd. Structuur vinden en beter in je vel zitten.',
  },
  {
    icon: <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9m0 18c2.5-2.5 4-5.5 4-9s-1.5-6.5-4-9m-9 9a9 9 0 019-9"/>,
    title: 'Bemoeizorg',
    desc: 'Voor mensen die zelf geen hulp vragen, maar het wel nodig hebben. Daar hebben we ervaring mee.',
  },
  {
    icon: <><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></>,
    title: 'Complexe problematiek',
    desc: 'Als problemen door elkaar lopen: schulden, psychische klachten, herstel na verslaving.',
  },
]

export default function VoorWieContent() {
  return (
    <main className={`page ${styles.page}`}>
      <div className={styles.mobileBlobs} aria-hidden="true" />
      <div className="page-inner">
        <FadeIn delay={0.05}>
          <div className="eyebrow"><span className="eyebrow-num">01</span> Voor wie</div>
        </FadeIn>

        <FadeIn delay={0.12} from="left">
          <h1><em>Vastlopen</em> kan op veel manieren</h1>
        </FadeIn>

        <FadeIn delay={0.2} from="left">
          <div className={styles.introText}>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--zwart-zacht)', maxWidth: '58ch' }}>
              Soms stapelt alles zich op: schulden, een rommelig huis, moeite met mensen, of een hoofd dat niet tot rust komt. Je weet dat er iets moet veranderen, maar je weet niet waar te beginnen.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--zwart-zacht)' }}>
              Of je hebt het al zo vaak geprobeerd dat vertrouwen in hulp ver weg voelt. Toch kan het helpend zijn om er niet alleen voor te staan. Een begeleider die bij jou past helpt je daarbij. En daarvoor kun je bij ons terecht.
            </p>
          </div>
        </FadeIn>

        {/* Expertise grid */}
        <FadeIn delay={0.1}>
          <div style={{ margin: '64px 0 20px' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '6px' }}>Waar wij <em>goed in zijn</em></h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--zwart-zacht)' }}>
              Herken je je situatie? Neem contact op, dan kijken we samen wat kan.
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

      </div>
    </main>
  )
}
