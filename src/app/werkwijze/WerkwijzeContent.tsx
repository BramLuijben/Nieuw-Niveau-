'use client'

import { FadeIn, Stagger, StaggerItem, MotionLink } from '@/components/Animate'
import styles from './Werkwijze.module.css'

const steps = [
  {
    num: '01',
    icon: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>,
    title: 'Aanmelding & eerste contact',
    desc: 'Nadat je je hebt aangemeld, maken we binnen een week — bij overeenkomende beschikbaarheid — de eerste afspraak. Je begeleider komt naar jou toe, zodat de drempel zo laag mogelijk blijft.',
    bg: 'linear-gradient(135deg, #FBEEE8, #F5C8B8)',
    light: false,
  },
  {
    num: '02',
    icon: <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 11a4 4 0 100-8 4 4 0 000 8z"/>,
    title: 'Kennismaken',
    desc: 'In het begin staat kennismaken centraal. We nemen de tijd om elkaar te leren kennen en te voelen of er vertrouwen kan ontstaan — want dat is de basis voor het verdere proces.',
    bg: 'linear-gradient(135deg, #F5C8B8, #E8927C)',
    light: false,
  },
  {
    num: '03',
    icon: <path d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"/>,
    title: 'In kaart brengen',
    desc: 'Samen brengen we in kaart wat er speelt. Waar loop je tegenaan, wat heb je nodig en wat zou je anders willen? We krijgen zicht op patronen, krachten, belangrijke mensen om je heen — en wat je helpt of juist tegenhoudt.',
    bg: 'linear-gradient(135deg, #E8927C, #C96E55)',
    light: false,
  },
  {
    num: '04',
    icon: <path d="M5 12h14M12 5l7 7-7 7"/>,
    title: 'Begeleiding op maat',
    desc: 'Van daaruit ontstaat stap voor stap richting. We werken concreet en doelgericht, met aandacht voor jouw tempo en jouw regie. Het doel is altijd dat je meer op eigen kracht kunt doen.',
    bg: 'linear-gradient(135deg, #C96E55, #1A1A1A)',
    light: true,
  },
]


export default function WerkwijzeContent() {
  return (
    <main className={`page ${styles.page}`}>
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
              We maken gebruik van methodieken die onderbouwd zijn in de praktijk en in onderzoek. Tegelijk kijken we steeds kritisch naar hoe deze in de praktijk uitpakken. Niet iedere aanpak werkt voor iedereen op dezelfde manier.
            </p>
            <p className={styles.methodiekIntroText}>
              Ons werkveld is continu in ontwikkeling. Maatschappelijke veranderingen, complexere hulpvragen en nieuwe inzichten vragen om een manier van werken die meebeweegt. Daarom volgen we actief ontwikkelingen binnen de zorg en begeleiding, en vertalen we deze naar ons dagelijks handelen.
            </p>
            <p className={styles.methodiekIntroText}>
              Innovatie zit voor ons ook in hoe we werken. We evalueren regelmatig wat het effect is van de begeleiding en stellen doelen, aanpak en werkwijze bij als dat nodig is. Op deze manier zorgen we dat onze begeleiding actueel blijft, aansluit bij de praktijk en gericht is op wat daadwerkelijk helpt in het dagelijks leven van de cliënt.
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
