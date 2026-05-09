import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact — Neem contact op met Nieuw Niveau',
  description:
    'Stuur een bericht via het contactformulier, WhatsApp of e-mail. Nieuw Niveau, ambulante begeleiding regio Amersfoort, Utrecht en Hilversum. Telefoonnummer: +31 6 29 24 28 33.',
  openGraph: {
    title: 'Contact — Nieuw Niveau',
    description: 'De eerste stap is vaak de moeilijkste. Stuur een bericht — zonder drempel, zonder wachttijd.',
  },
}

export default function Contact() {
  return <ContactContent />
}
