'use client'

import { FadeIn, Stagger, StaggerItem, MotionLink } from '@/components/Animate'
import styles from './Werkwijze.module.css'

const steps = [
  {
    num: '01',
    icon: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>,
    title: 'Aanmelding & eerste contact',
    desc: 'Na je aanmelding plannen we binnen een week de eerste afspraak, als het qua agenda\'s lukt. Je begeleider komt naar jou toe. Zo blijft de drempel laag.',
    bg: 'linear-gradient(135deg, #F0E5E0, #c4857d)',
    light: false,
  },
  {
    num: '02',
    icon: <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 11a4 4 0 100-8 4 4 0 000 8z"/>,
    title: 'Kennismaken',
    desc: 'Eerst leren we elkaar kennen. We nemen er de tijd voor. Vertrouwen is de basis voor alles wat daarna komt.',
    bg: 'linear-gradient(135deg, #c4857d, #99463A)',
    light: false,
  },
  {
    num: '03',
    icon: <path d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"/>,
    title: 'Zicht krijgen',
    desc: 'Samen kijken we wat er speelt. Waar loop je tegenaan, wat heb je nodig, wat wil je anders? We zien patronen, krachten en de mensen om je heen. En wat je helpt of juist tegenhoudt.',
    bg: 'linear-gradient(135deg, #99463A, #7E3A30)',
    light: false,
  },
  {
    num: '04',
    icon: <path d="M5 12h14M12 5l7 7-7 7"/>,
    title: 'Aan de slag',
    desc: 'Vanaf daar ontstaat richting, stap voor stap. We werken concreet, in jouw tempo en met jouw regie. Het doel: dat je steeds meer op eigen kracht kunt.',
    bg: 'linear-gradient(135deg, #C96E55, #1A1A1A)',
    light: true,
  },
]


export default function WerkwijzeContent() {
  return (
    <main className={`page ${styles.page}`}>
      <div className={styles.mobileBlobs} aria-hidden="true" />
      <div className="page-inner">
        <FadeIn delay={0.05}>
          <div className="eyebrow"><span className="eyebrow-num">02</span> Werkwijze</div>
        </FadeIn>

        <FadeIn delay={0.12} from="left">
          <h1>Hoe we <em>werken</em></h1>
        </FadeIn>

        {/* 4-stappen timeline */}
        <Stagger className={styles.timeline} stagger={0.12} delay={0.1}>
          {steps.map((step) => (
            <StaggerItem key={step.num}>
              <div className={styles.step}>
                <div className={styles.stepTop} style={{ background: step.bg }}>
                  <span className={styles.stepNumPill}>{step.num}</span>
                  <div className={styles.stepIcon}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--zalm-donker)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {step.icon}
                    </svg>
                  </div>
                </div>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Methodieken sectie */}
        <FadeIn delay={0.1}>
          <div className={styles.methodiekenSection}>
            <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>Onze <em>methodieken</em></h2>
            <p className={styles.methodiekIntroText}>
              We werken met methodes die zich in de praktijk en in onderzoek bewezen hebben. Tegelijk blijven we kritisch: niet elke aanpak werkt voor iedereen hetzelfde.
            </p>
            <p className={styles.methodiekIntroText}>
              De zorg verandert continu. Hulpvragen worden complexer en inzichten nieuwer. Daarom evalueren we regelmatig wat de begeleiding oplevert en sturen we bij waar dat nodig is. Zo blijft wat we doen aansluiten op wat echt helpt in je dagelijks leven.
            </p>
          </div>
        </FadeIn>

        {/* CTA strip */}
        <FadeIn delay={0.1}>
          <div className={`${styles.werkwijzeCta} noise-overlay`}>
            <div>
              <h3 className={styles.ctaTitle}>Klaar om de eerste stap te zetten?</h3>
              <p className={styles.ctaDesc}>Eén bericht is genoeg. We plannen vrijblijvend een kennismaking in.</p>
            </div>
            <MotionLink href="/contact" className="btn-light">
              Contact opnemen →
            </MotionLink>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
