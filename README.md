# Nieuw Niveau — Website

Next.js website voor Nieuw Niveau Begeleiding.

---

## Lokaal starten

**Vereisten:** Node.js 20+ ([nodejs.org](https://nodejs.org))

```bash
# 1. Ga naar de projectmap
cd "C:\Users\Bram Luijben\nieuw-niveau"

# 2. Installeer afhankelijkheden (eenmalig)
npm install

# 3. Kopieer de omgevingsvariabelen
copy .env.local.example .env.local

# 4. Vul je Resend API-key in .env.local
# (open in Kladblok of VS Code en pas RESEND_API_KEY aan)

# 5. Start de ontwikkelserver
npm run dev
```

De site draait nu op **http://localhost:3000**

---

## Teksten aanpassen

Open `content.js` in de projectmap. Alle teksten, contactgegevens en inhoud staan hier gebundeld. Sla op — de wijziging is direct zichtbaar in de browser.

---

## Afbeeldingen vervangen

Vervang de bestanden in `public/images/`:
- `hero.jpeg` — de achtergrondfoto op de homepage
- `bram.jpeg` — de portretfoto op de Over mij-pagina

Gebruik dezelfde bestandsnamen, dan hoef je niets in de code te wijzigen.

---

## Wijzigingen live zetten (Netlify)

```bash
# 1. Voeg gewijzigde bestanden toe
git add .

# 2. Maak een commit
git commit -m "Beschrijving van de wijziging"

# 3. Push naar GitHub
git push
```

Netlify pikt de push automatisch op en deployt de site opnieuw (~1-2 minuten).

---

## Resend e-mail instellen

1. Maak een account aan op [resend.com](https://resend.com)
2. Voeg je domein toe (`nieuwniveau.nl`) en verifieer het via DNS
3. Maak een API-key aan (onder "API Keys")
4. Plak de key in `.env.local` als `RESEND_API_KEY=re_xxxxx`
5. Voeg in Netlify ook een omgevingsvariabele `RESEND_API_KEY` toe
   (via Netlify → Site settings → Environment variables)

---

## Plausible Analytics instellen

1. Maak een account aan op [plausible.io](https://plausible.io)
2. Voeg je domein toe (`nieuwniveau.nl`)
3. Kopieer het tracking-script dat Plausible geeft
4. Voeg het toe aan `src/app/layout.tsx` in de `<head>`:

```tsx
<Script
  defer
  data-domain="nieuwniveau.nl"
  src="https://plausible.io/js/script.js"
/>
```

En importeer `Script` van Next.js bovenaan:
```tsx
import Script from 'next/script'
```

---

## Projectstructuur

```
nieuw-niveau/
├── content.js              ← Alle teksten aanpassen
├── public/
│   └── images/             ← Afbeeldingen vervangen
├── src/
│   ├── app/
│   │   ├── layout.tsx      ← Navigatie, footer, SEO, fonts
│   │   ├── page.tsx        ← Homepage
│   │   ├── voor-wie/       ← Voor wie-pagina
│   │   ├── werkwijze/      ← Werkwijze-pagina
│   │   ├── over-mij/       ← Over mij-pagina
│   │   ├── diensten/       ← Diensten-pagina
│   │   ├── contact/        ← Contactpagina + formulier
│   │   └── api/contact/    ← E-mail API (Resend)
│   └── components/
│       ├── Nav.tsx         ← Navigatiebalk
│       ├── Footer.tsx      ← Footer
│       ├── PageTransition  ← Pagina-overgangen
│       ├── CookieBanner    ← Cookiemelding
│       └── Animate.tsx     ← Animatie-componenten
└── README.md
```
