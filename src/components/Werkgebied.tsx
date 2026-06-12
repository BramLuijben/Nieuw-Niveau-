import styles from './Werkgebied.module.css'

const regio = [
  {
    naam: 'Amersfoort',
    gemeenten: ['Amersfoort', 'Soest', 'Baarn', 'Bunschoten'],
  },
  {
    naam: 'Zuidoost Utrecht (ZOU)',
    gemeenten: ['Utrechtse Heuvelrug', 'Wijk bij Duurstede', 'Zeist', 'De Bilt', 'Bunnik', 'Rhenen', 'Veenendaal'],
  },
  {
    naam: 'Hilversum & Gooi',
    gemeenten: ['Hilversum', 'Laren', 'Blaricum', 'Gooise Meren'],
  },
]

export default function Werkgebied() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className="eyebrow">Werkgebied</p>
        <h2>Actief in jouw regio</h2>
        <p className={styles.intro}>
          Nieuw Niveau biedt ambulante begeleiding aan huis in drie regio&apos;s in het midden van Nederland.
          Twijfel je of jouw gemeente binnen het werkgebied valt? Neem gerust contact op.
        </p>
        <div className={styles.grid}>
          {regio.map((r) => (
            <div key={r.naam} className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </div>
              <h3 className={styles.regio}>{r.naam}</h3>
              <ul className={styles.list}>
                {r.gemeenten.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
