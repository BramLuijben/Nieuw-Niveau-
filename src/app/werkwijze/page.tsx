import type { Metadata } from 'next'
import WerkwijzeContent from './WerkwijzeContent'

export const metadata: Metadata = {
  title: 'Werkwijze — Hoe we werken',
  description:
    'Van aanmelding tot begeleiding op maat in 4 stappen. Nieuw Niveau werkt met Positieve Gezondheid, herstelondersteunend werken en motiverende gespreksvoering. Ambulante begeleiding Amersfoort.',
  openGraph: {
    title: 'Werkwijze — Nieuw Niveau',
    description: 'Geen standaardaanpak, maar maatwerk. Kennismaken, in kaart brengen en samen stap voor stap richting vinden.',
  },
}

export default function Werkwijze() {
  return <WerkwijzeContent />
}
