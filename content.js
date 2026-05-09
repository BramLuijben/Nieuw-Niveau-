/**
 * NIEUW NIVEAU — Inhoudsbestand
 * ══════════════════════════════════════════════════════════
 * Pas hier alle teksten, contactgegevens en inhoud aan.
 * Sla op → de wijzigingen zijn direct zichtbaar in dev.
 * Na publiceren: git commit + git push → Netlify deployt automatisch.
 * ══════════════════════════════════════════════════════════
 */

module.exports = {

  // ── Contactgegevens ─────────────────────────────────────
  contact: {
    naam:        'Bram Luijben',
    bedrijf:     'Nieuw Niveau Begeleiding',
    email:       'info@nieuwniveau.nl',
    telefoon:    '+31 6 29 24 28 33',
    kvk:         '42035269',
    agbCode:     '98108653',
    werkgebied:  'Amersfoort, Utrecht Zuidoost, Hilversum en omstreken',
    website:     'https://www.nieuwniveau.nl',
  },

  // ── Navigatie ────────────────────────────────────────────
  nav: [
    { href: '/',          label: 'Home' },
    { href: '/voor-wie',  label: 'Voor wie' },
    { href: '/werkwijze', label: 'Werkwijze' },
    { href: '/over-mij',  label: 'Over mij' },
    { href: '/diensten',  label: 'Diensten' },
    { href: '/contact',   label: 'Contact' },
  ],

  // ── Homepagina ───────────────────────────────────────────
  home: {
    eyebrow:   'Ambulante WMO Begeleiding',
    title:     'Van vastlopen naar een nieuw niveau',
    subtitle:  '',
    ctaLabel:  'Meer lezen',
    ctaHref:   '/voor-wie',
    quote:     'Ik vind het bijzonder om te zien hoe juist het \'anders-zijn\' een kracht kan zijn.',
  },

  // ── Voor wie ─────────────────────────────────────────────
  voorWie: {
    titel:    'Vastlopen kan op veel manieren',
    intro: [
      'Soms stapelt alles zich op — schulden, een rommelig huis, moeite met mensen, of een hoofd dat niet tot rust komt. Je weet dat er iets moet veranderen, maar je weet niet waar te beginnen.',
      'Of je hebt het al zo vaak geprobeerd dat vertrouwen in hulp ver weg voelt. Toch kan het helpend zijn om er niet alleen voor te staan. Een begeleider die bij jou past helpt je daarbij — en daarvoor kun je bij ons terecht.',
    ],
    expertise: [
      {
        titel: 'Sociaal contact',
        omschrijving: 'Ondersteuning bij het aangaan en onderhouden van sociale relaties, omgaan met sociale situaties en het opbouwen van een betekenisvol netwerk.',
      },
      {
        titel: 'Autisme begrijpen',
        omschrijving: 'Inzicht krijgen in autisme als onderdeel van de eigen identiteit, met aandacht voor acceptatie en het versterken van persoonlijke kwaliteiten.',
      },
      {
        titel: 'Wonen & administratie',
        omschrijving: 'Begeleiding bij het creëren van een overzichtelijke en leefbare (woon)omgeving, met praktische ondersteuning bij opruimen en structureren zoals je administratie en financiën.',
      },
      {
        titel: 'Gezondheid & welzijn',
        omschrijving: 'Werken aan lichamelijke en mentale gezondheid, structuur vinden of beter in je vel zitten.',
      },
      {
        titel: 'Bemoeizorg',
        omschrijving: 'Wij hebben expertise op gebied van bemoeizorg — voor mensen die zelf geen hulp vragen, maar het wel nodig hebben.',
      },
      {
        titel: 'Complexe problematiek',
        omschrijving: 'Begeleiding bij meervoudige en samenhangende uitdagingen, zoals schulden, psychische problematiek en herstel na verslaving.',
      },
    ],
    missie: 'Nieuw Niveau staat naast mensen met complexe problematiek in hun eigen omgeving — niet om het over te nemen, maar door naast iemand te staan. We maken zichtbaar hoe gedragspatronen ontstaan, hoe een aandoening iemands leven kleurt, en wat er wél mogelijk is binnen die werkelijkheid. Elke beperking draagt kracht in zich. Het zichtbaar maken en benutten — dát is het nieuwe niveau van onze cliënten.',
    visie:  'De zorg staat voor een fundamentele omslag. Jarenlang werd hulp individualistisch georganiseerd — gericht op de persoon, los van de wereld eromheen. Bij Nieuw Niveau staat niet alleen de cliënt centraal, maar ook zijn of haar omgeving: het netwerk, de wijk, de mensen die er dagelijks toe doen. Tegelijkertijd groeit de druk op het zorgsysteem. Budgetten krimpen, wachtlijsten lopen op en de vraag naar begeleiding neemt toe. Nieuw Niveau sluit hierop aan door actiegericht te werken, in te zetten op innovatie en ontwikkeling, en kracht te vinden in wat eerder een beperking heette — niet werken binnen het systeem zoals het was, maar bouwen aan zorg zoals het moet zijn.',
  },

  // ── Werkwijze ────────────────────────────────────────────
  werkwijze: {
    stappen: [
      {
        num: '01',
        titel: 'Aanmelding & eerste contact',
        omschrijving: 'Nadat je je hebt aangemeld, maken we binnen een week — bij overeenkomende beschikbaarheid — de eerste afspraak. Je begeleider komt naar jou toe, zodat de drempel zo laag mogelijk blijft.',
      },
      {
        num: '02',
        titel: 'Kennismaken',
        omschrijving: 'In het begin staat kennismaken centraal. We nemen de tijd om elkaar te leren kennen en te voelen of er vertrouwen kan ontstaan — want dat is de basis voor het verdere proces.',
      },
      {
        num: '03',
        titel: 'In kaart brengen',
        omschrijving: 'Samen brengen we in kaart wat er speelt. Waar loop je tegenaan, wat heb je nodig en wat zou je anders willen? We krijgen zicht op patronen, krachten, belangrijke mensen om je heen — en wat je helpt of juist tegenhoudt.',
      },
      {
        num: '04',
        titel: 'Begeleiding op maat',
        omschrijving: 'Van daaruit ontstaat stap voor stap richting. We werken concreet en doelgericht, met aandacht voor jouw tempo en jouw regie. Het doel is altijd dat je meer op eigen kracht kunt doen.',
      },
    ],
    methodieken: 'Wij werken met methodieken die aansluiten bij de persoon en situatie. Geen standaardaanpak, maar maatwerk op basis van wat werkt.\n\nEen belangrijke werkwijze zijn Positieve Gezondheid en herstelondersteunend werken. We kijken niet alleen naar problemen, maar ook naar mogelijkheden, veerkracht en eigen regie. Samen werken we aan herstel en een betekenisvol dagelijks leven. Daarnaast gebruiken wij een ecogram om relaties, steunbronnen en het sociale netwerk inzichtelijk te maken. In gesprekken gebruiken wij motiverende gespreksvoering om motivatie en beweging richting verandering te versterken.',
  },

  // ── Over mij ─────────────────────────────────────────────
  overMij: {
    naam:       'Bram Luijben',
    rol:        'Oprichter & Ambulant begeleider',
    subtitel:   'Betrokken. Betrouwbaar. Gedreven.',
    alineas: [
      'Bram biedt gestructureerde ondersteuning met oprechte aandacht en rust. Hij weet overzicht te creëren, stabiliteit te bieden en samen stapsgewijs te werken aan een helder doel — gewaardeerd om zijn authenticiteit en open communicatie vanuit vertrouwen en gelijkwaardigheid.',
      'In zeven jaar binnen de GGZ werkte hij in uiteenlopende functies — van begeleide woonvormen tot ambulante trajecten — en bouwde hij een brede kennis en ervaring op. Naast zijn werk heeft Bram een persoonlijke interesse in gezondheid, voeding en sport.',
    ],
    quote: 'Ik vind het bijzonder om te zien hoe juist het \'anders-zijn\' een kracht kan zijn. Dat het niet veranderd, maar gewaardeerd mag worden. Met oog voor wat iemand zelf belangrijk vindt.',
    feiten: [
      '7 jaar GGZ-ervaring',
      'HBO Social Work',
      'Specialisatie bemoeizorg',
    ],
    ervaringen: [
      'Door samen met Bram te werken aan mijn administratie en financiën, kreeg ik meer ruimte in mijn hoofd — en kon ik weer genieten van de kleine dingen.',
      'Ons huis was jaren een bron van stress. Samen hebben we stap voor stap opgeruimd. Nu heb ik weer ruimte om thuis te zijn — en zelfs mijn hobby op te pakken.',
      'Nieuwe mensen ontmoeten vond ik spannend en overweldigend. Bram hielp me dit aan te pakken op mijn tempo.',
    ],
  },

  // ── Diensten ─────────────────────────────────────────────
  diensten: {
    intro: 'Aansluitend op onze visie passen wij onze begeleiding aan op jou. We kijken naar jouw situatie, wensen en doelen en stemmen onze ondersteuning daarop af. Wij zijn onder andere actief in Amersfoort, Utrecht Zuidoost, Hilversum en omstreken.',
    items: [
      {
        num: '01',
        titel: 'Begeleiding via PGB',
        omschrijving: 'Met een persoonsgebonden budget kies jij je eigen begeleider. Jij bepaalt wie bij jou komt en wanneer. Heb je nog geen PGB maar denk je dat je in aanmerking komt? Ik denk graag met je mee over de mogelijkheden en het aanvraagproces.',
        aanbevolen: true,
      },
      {
        num: '02',
        titel: 'Particuliere begeleiding',
        omschrijving: 'Begeleiding is ook mogelijk op eigen kosten, zonder indicatie of verwijzing. Neem gerust contact op voor de mogelijkheden.',
        aanbevolen: false,
      },
      {
        num: '03',
        titel: 'Onderaannemerschap',
        omschrijving: 'Ik werk ook samen met zorgorganisaties als onderaannemer. Deze samenwerking wordt momenteel nog besproken. Wanneer hierover duidelijkheid is volgt de informatie.',
        inOntwikkeling: true,
        aanbevolen: false,
      },
      {
        num: '04',
        titel: 'Contractuele basis',
        omschrijving: 'Momenteel zijn wij met verschillende regio\'s in gesprek om op contractuele basis, middels de WMO, cliënten te begeleiden.',
        inOntwikkeling: true,
        aanbevolen: false,
      },
    ],
    kenmerken: [
      'Via erkende zorgaanbieders',
      'WMO indicatie mogelijk',
      'Zelfde persoonlijke aanpak',
      'Flexibele inzet',
    ],
  },

  // ── Contact ──────────────────────────────────────────────
  contactPagina: {
    intro: 'De eerste stap is vaak de moeilijkste. Stuur vrijblijvend een bericht. We kijken samen wat mogelijk is.',
  },

  // ── Footer ───────────────────────────────────────────────
  footer: {
    links: [
      { href: '/privacyverklaring',    label: 'Privacyverklaring' },
      { href: '/algemene-voorwaarden', label: 'Algemene voorwaarden' },
    ],
  },
}
