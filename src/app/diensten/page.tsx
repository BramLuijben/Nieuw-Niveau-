import type { Metadata } from 'next'
import DienstenContent from './DienstenContent'

export const metadata: Metadata = {
  title: 'Diensten — PGB, particulier en onderaannemerschap',
  description:
    'Nieuw Niveau werkt via PGB, particuliere begeleiding of als onderaannemer. Flexibel in locatie en frequentie. Actief in Amersfoort, Utrecht Zuidoost en Hilversum.',
  openGraph: {
    title: 'Diensten — Nieuw Niveau',
    description: 'Begeleiding via PGB, op eigen kosten of via zorgorganisaties. Flexibel, thuis, op maat.',
  },
}

export default function Diensten() {
  return <DienstenContent />
}
