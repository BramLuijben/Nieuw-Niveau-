'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'

const items = [
  {
    q: 'Voor wie is ambulante begeleiding van Nieuw Niveau bedoeld?',
    a: 'Ambulante begeleiding is bedoeld voor volwassenen met een WMO-indicatie die zelfstandig wonen maar daarbij ondersteuning nodig hebben. Dit kan gaan om mensen met psychische klachten, licht verstandelijke beperking of complexe persoonlijke omstandigheden. [Vul hier aan welke doelgroepen specifiek worden begeleid]',
  },
  {
    q: 'Hoe kan ik mij aanmelden of iemand aanmelden?',
    a: 'Aanmelden kan via het contactformulier op deze website, per e-mail of telefonisch. Na aanmelding neem ik binnen [X werkdagen] contact op voor een eerste kennismaking. Een verwijzing van huisarts of gemeente is [wel/niet] nodig.',
  },
  {
    q: 'Wat kost ambulante begeleiding?',
    a: 'Begeleiding vanuit een WMO-indicatie wordt gefinancierd door de gemeente. Voor jou als cliënt zijn er [geen / mogelijk] eigen bijdragen. De precieze kosten hangen af van jouw situatie en gemeente. Ik bespreek dit graag tijdens het kennismakingsgesprek. [Vul aan met actuele tariefinformatie]',
  },
  {
    q: 'In welke regio biedt Nieuw Niveau begeleiding aan?',
    a: 'Nieuw Niveau biedt begeleiding aan in de regio Amersfoort, regio Zuidoost Utrecht (ZOU) en Hilversum en omstreken. Twijfel je of jouw gemeente binnen het werkgebied valt? Neem gerust contact op.',
  },
  {
    q: 'Hoe vaak vinden begeleidingsgesprekken plaats?',
    a: 'De frequentie is afhankelijk van jouw indicatie en wat je nodig hebt. Gemiddeld is dit [X keer per maand]. We stemmen dit samen af en evalueren regelmatig of de intensiteit nog passend is. [Vul aan met actuele frequentie-informatie]',
  },
  {
    q: 'Hoe gaan jullie om met mijn privacy?',
    a: 'Nieuw Niveau gaat zorgvuldig om met jouw gegevens conform de AVG-wetgeving. Gegevens worden alleen gedeeld met derden als dat noodzakelijk is voor de begeleiding of wettelijk verplicht is. Je kunt onze volledige privacyverklaring raadplegen via de link onderaan deze pagina.',
  },
  {
    q: 'Wat als ik een klacht heb?',
    a: 'Ik vind het belangrijk dat je je gehoord voelt. Je kunt een klacht altijd eerst rechtstreeks met mij bespreken. Als je er samen niet uitkomt, kun je terecht bij de onafhankelijke klachtenregeling. Meer informatie vind je via de klachtenregelingspagina.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className="eyebrow">Veelgestelde vragen</p>
        <h2>Alles wat je wil weten</h2>
        <dl className={styles.list}>
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <dt>
                  <button
                    className={styles.trigger}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                  >
                    <span>{item.q}</span>
                    <svg
                      className={styles.chevron}
                      width="20" height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>
                </dt>
                <dd id={`faq-${i}`} className={styles.answer} hidden={!isOpen}>
                  <p>{item.a}</p>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
