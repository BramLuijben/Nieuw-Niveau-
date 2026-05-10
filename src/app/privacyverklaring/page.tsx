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
            <Kop titel="Verwerkingsverantwoordelijke" />
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
            <Kop titel="Welke gegevens en waarvoor" />
            <p>
              Wij verwerken persoonsgegevens die noodzakelijk zijn voor de uitvoering van ambulante begeleiding. Het gaat om gewone persoonsgegevens (naam, contactgegevens, geboortedatum) en bijzondere categorieën (gezondheidsgegevens, informatie over welzijn en zelfredzaamheid).
            </p>
            <p style={{ marginTop: '8px' }}>Doeleinden: het verlenen van begeleiding, het bijhouden van een cliëntdossier, communicatie over de begeleiding en wettelijk verplichte administratie.</p>
          </section>

          <section>
            <Kop titel="Rechtsgrondslag" />
            <p>
              Gewone persoonsgegevens worden verwerkt op grond van de uitvoering van de begeleidingsovereenkomst en een wettelijke verplichting.
            </p>
            <p style={{ marginTop: '8px' }}>
              Bijzondere persoonsgegevens, waaronder gezondheidsgegevens en informatie over welzijn en zelfredzaamheid, worden uitsluitend verwerkt voor zover dat noodzakelijk is voor het verlenen van ambulante begeleiding en ondersteuning.
            </p>
          </section>

          <section>
            <Kop titel="Ontvangers" />
            <p>
              Gegevens worden uitsluitend gedeeld met derden voor zover dat noodzakelijk is voor de uitvoering van de begeleiding, indien daarvoor uw toestemming nodig is, of wanneer een wettelijke verplichting daartoe bestaat. Dit kan bijvoorbeeld gaan om verwijzers, gemeenten in het kader van de Wmo, of andere betrokken professionals of organisaties.
            </p>
          </section>

          <section>
            <Kop titel="Verwerkers" />
            <p>
              Voor de technische ondersteuning van onze dienstverlening maken wij gebruik van externe dienstverleners, zoals aanbieders van e-mail, hosting, digitale cliëntdossiers en administratiesystemen. Voor zover deze partijen in onze opdracht persoonsgegevens verwerken, sluiten wij met hen een verwerkersovereenkomst.
            </p>
          </section>

          <section>
            <Kop titel="Doorgifte buiten de EER" />
            <p>Uw gegevens worden niet doorgegeven aan landen buiten de Europese Economische Ruimte.</p>
          </section>

          <section>
            <Kop titel="Beveiliging" />
            <p>
              Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies, onbevoegde toegang, misbruik of onrechtmatige verwerking.
            </p>
          </section>

          <section>
            <Kop titel="Bewaartermijnen" />
            <p>
              Het cliëntdossier wordt bewaard gedurende de wettelijke bewaartermijn die geldt voor de verleende begeleiding. Andere persoonsgegevens worden niet langer bewaard dan noodzakelijk voor het doel waarvoor zij zijn verzameld.
            </p>
          </section>

          <section>
            <Kop titel="Uw rechten" />
            <p>U heeft de volgende rechten met betrekking tot uw persoonsgegevens:</p>
            <ul style={{ marginTop: '10px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                ['Inzage', 'opvragen welke gegevens wij van u verwerken'],
                ['Rectificatie', 'correctie van onjuiste gegevens'],
                ['Verwijdering', 'verzoek tot wissen van uw gegevens'],
                ['Beperking', 'beperking van de verwerking in bepaalde gevallen'],
                ['Overdraagbaarheid', 'uw gegevens in een gestructureerd formaat ontvangen'],
                ['Bezwaar', 'bezwaar maken tegen de verwerking'],
              ].map(([recht, toelichting]) => (
                <li key={recht} style={{ fontSize: '15px', color: 'var(--zwart-zacht)', lineHeight: '1.5' }}>
                  <strong style={{ color: 'var(--zwart)' }}>{recht}</strong>
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
            <Kop titel="Toestemming intrekken" />
            <p>
              Indien de verwerking berust op uw toestemming, kunt u deze te allen tijde intrekken zonder opgave van redenen. Het intrekken van toestemming heeft geen gevolgen voor de rechtmatigheid van de verwerking vóór de intrekking.
            </p>
          </section>

          <section>
            <Kop titel="Klacht indienen bij de Autoriteit Persoonsgegevens" />
            <p>
              U heeft het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens als u van mening bent dat uw persoonsgegevens worden verwerkt in strijd met de privacywetgeving. Meer informatie via{' '}
              <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--zalm-donker)' }}>
                autoriteitpersoonsgegevens.nl ↗
              </a>.
            </p>
          </section>

          <section>
            <Kop titel="Verstrekking van gegevens" />
            <p>
              Het verstrekken van persoonsgegevens is noodzakelijk voor de uitvoering van de begeleidingsovereenkomst en voor het voldoen aan wettelijke verplichtingen. Zonder de benodigde gegevens kan geen begeleiding worden verleend.
            </p>
          </section>

          <section>
            <Kop titel="Geautomatiseerde besluitvorming" />
            <p>Er vindt geen geautomatiseerde besluitvorming of profilering plaats.</p>
          </section>

          <section>
            <Kop titel="Elektronische gegevensuitwisseling" />
            <p>
              Indien elektronische uitwisseling van uw gegevens met andere betrokken professionals of organisaties aan de orde is, vragen wij daarvoor uw toestemming voor zover dat wettelijk vereist is. U kunt deze toestemming weigeren of later intrekken.
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

function Kop({ titel }: { titel: string }) {
  return <h2 style={{ marginBottom: '8px' }}>{titel}</h2>
}
