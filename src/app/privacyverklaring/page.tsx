import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacyverklaring — Nieuw Niveau',
  description: 'Privacyverklaring van Nieuw Niveau Begeleiding.',
  robots: { index: false },
}

export default function Privacyverklaring() {
  return (
    <main className="page" style={{ background: 'var(--creme)' }}>
      <div className="page-inner" style={{ maxWidth: '720px' }}>

        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>Privacyverklaring</h1>
        <p className="lead" style={{ marginBottom: '48px' }}>
          Nieuw Niveau Begeleiding — KvK 42035269
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

          <section>
            <Kop titel="Verwerkingsverantwoordelijke" wet="AVG art. 13 lid 1 sub a" />
            <p>
              Nieuw Niveau Begeleiding, eenmanszaak, KvK 42035269, AGB-code 98108653,
              gevestigd te Amersfoort. Contactpersoon: Bram Luijben,{' '}
              <a href="mailto:info@nieuwniveau.nl" style={{ color: 'var(--zalm-donker)' }}>
                info@nieuwniveau.nl
              </a>,{' '}
              <a href="tel:+31629242833" style={{ color: 'var(--zalm-donker)' }}>
                +31 6 29 24 28 33
              </a>.
            </p>
            <p style={{ marginTop: '8px' }}>Er is geen functionaris voor gegevensbescherming aangesteld.</p>
          </section>

          <section>
            <Kop titel="Welke gegevens en waarvoor" wet="AVG art. 13 lid 1 sub c" />
            <p>
              Wij verwerken persoonsgegevens die noodzakelijk zijn voor de uitvoering van ambulante begeleiding. Het gaat om gewone persoonsgegevens (naam, contactgegevens, geboortedatum) en bijzondere categorieën als bedoeld in art. 9 AVG (gezondheidsgegevens, informatie over welzijn en zelfredzaamheid).
            </p>
            <p style={{ marginTop: '8px' }}>Doeleinden: het verlenen van begeleiding, het bijhouden van een cliëntdossier, communicatie over de begeleiding en wettelijk verplichte administratie.</p>
          </section>

          <section>
            <Kop titel="Rechtsgrondslag" wet="AVG art. 13 lid 1 sub c + art. 9 lid 2 sub h" />
            <p>
              Gewone persoonsgegevens worden verwerkt op grond van de uitvoering van de begeleidingsovereenkomst (art. 6 lid 1 sub b AVG) en een wettelijke verplichting (art. 6 lid 1 sub c AVG).
            </p>
            <p style={{ marginTop: '8px' }}>
              Gezondheidsgegevens worden verwerkt op grond van art. 9 lid 2 sub h AVG: verwerking is noodzakelijk voor het verlenen van gezondheidszorg of sociale diensten.
            </p>
          </section>

          <section>
            <Kop titel="Ontvangers" wet="AVG art. 13 lid 1 sub e" />
            <p>
              Gegevens worden uitsluitend gedeeld met derden voor zover noodzakelijk en met uw toestemming, of indien een wettelijke verplichting daartoe bestaat. Denk aan verwijzers, gemeenten (in het kader van de Wmo) of andere zorgverleners betrokken bij uw begeleiding.
            </p>
          </section>

          <section>
            <Kop titel="Doorgifte buiten de EER" wet="AVG art. 13 lid 1 sub f" />
            <p>Uw gegevens worden niet doorgegeven aan landen buiten de Europese Economische Ruimte.</p>
          </section>

          <section>
            <Kop titel="Bewaartermijnen" wet="AVG art. 13 lid 2 sub a + WGBO art. 7:454 BW" />
            <p>
              Het cliëntdossier wordt bewaard gedurende twintig jaar na het laatste contact, conform de wettelijke bewaartermijn uit de WGBO. Andere persoonsgegevens worden niet langer bewaard dan noodzakelijk voor het doel waarvoor ze zijn verzameld.
            </p>
          </section>

          <section>
            <Kop titel="Uw rechten" wet="AVG art. 13 lid 2 sub b" />
            <p>U heeft de volgende rechten met betrekking tot uw persoonsgegevens:</p>
            <ul style={{ marginTop: '10px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                ['Inzage', 'art. 15 AVG', 'opvragen welke gegevens wij van u verwerken'],
                ['Rectificatie', 'art. 16 AVG', 'correctie van onjuiste gegevens'],
                ['Verwijdering', 'art. 17 AVG', 'verzoek tot wissen van uw gegevens'],
                ['Beperking', 'art. 18 AVG', 'beperking van de verwerking in bepaalde gevallen'],
                ['Overdraagbaarheid', 'art. 20 AVG', 'uw gegevens in een gestructureerd formaat ontvangen'],
                ['Bezwaar', 'art. 21 AVG', 'bezwaar maken tegen de verwerking'],
              ].map(([recht, grondslag, toelichting]) => (
                <li key={recht} style={{ fontSize: '15px', color: 'var(--zwart-zacht)', lineHeight: '1.5' }}>
                  <strong style={{ color: 'var(--zwart)' }}>{recht}</strong>
                  {' '}
                  <span style={{ fontSize: '11px', color: 'var(--zalm-donker)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{grondslag}</span>
                  {' — '}{toelichting}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '12px' }}>
              Verzoeken kunt u indienen via{' '}
              <a href="mailto:info@nieuwniveau.nl" style={{ color: 'var(--zalm-donker)' }}>info@nieuwniveau.nl</a>.
              Wij reageren binnen één maand.
            </p>
          </section>

          <section>
            <Kop titel="Toestemming intrekken" wet="AVG art. 13 lid 2 sub c" />
            <p>
              Indien de verwerking berust op uw toestemming, kunt u deze te allen tijde intrekken zonder opgave van redenen. Het intrekken van toestemming heeft geen gevolgen voor de rechtmatigheid van de verwerking vóór de intrekking.
            </p>
          </section>

          <section>
            <Kop titel="Klacht indienen bij de Autoriteit Persoonsgegevens" wet="AVG art. 13 lid 2 sub d" />
            <p>
              U heeft het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens als u van mening bent dat uw persoonsgegevens worden verwerkt in strijd met de AVG. Meer informatie via{' '}
              <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--zalm-donker)' }}>
                autoriteitpersoonsgegevens.nl ↗
              </a>.
            </p>
          </section>

          <section>
            <Kop titel="Verstrekking van gegevens" wet="AVG art. 13 lid 2 sub e" />
            <p>
              Het verstrekken van persoonsgegevens is noodzakelijk voor de uitvoering van de begeleidingsovereenkomst en voor het voldoen aan wettelijke verplichtingen. Zonder de benodigde gegevens kan geen begeleiding worden verleend.
            </p>
          </section>

          <section>
            <Kop titel="Geautomatiseerde besluitvorming" wet="AVG art. 13 lid 2 sub f" />
            <p>Er vindt geen geautomatiseerde besluitvorming of profilering plaats.</p>
          </section>

          <section>
            <Kop titel="Elektronische gegevensuitwisseling" wet="Wabvpz" />
            <p>
              U heeft het recht om toestemming te geven of te weigeren voor elektronische uitwisseling van uw gegevens met andere zorgverleners. U kunt hierover contact opnemen via{' '}
              <a href="mailto:info@nieuwniveau.nl" style={{ color: 'var(--zalm-donker)' }}>info@nieuwniveau.nl</a>.
            </p>
          </section>

        </div>

        <div style={{ marginTop: '52px' }}>
          <Link href="/" className="btn-secondary" style={{ display: 'inline-flex' }}>← Terug naar home</Link>
        </div>
      </div>
    </main>
  )
}

function Kop({ titel, wet }: { titel: string; wet?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
      <h2 style={{ margin: 0 }}>{titel}</h2>
      {wet && (
        <span style={{
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--zalm-donker)',
          opacity: 0.85,
        }}>
          {wet}
        </span>
      )}
    </div>
  )
}
