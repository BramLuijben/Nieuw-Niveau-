import type { Metadata } from 'next'
import VoorWieContent from './VoorWieContent'

export const metadata: Metadata = {
  title: 'Voor wie — Begeleiding bij vastlopen',
  description:
    'Nieuw Niveau begeleidt volwassenen die vastlopen: sociaal contact, autisme, wonen & administratie, gezondheid, bemoeizorg en complexe problematiek. Regio Amersfoort, Utrecht Zuidoost en Hilversum.',
  openGraph: {
    title: 'Voor wie — Nieuw Niveau',
    description:
      'Vastlopen kan op veel manieren. Nieuw Niveau staat naast mensen met complexe problematiek om samen te ontdekken wat iemand wél kan.',
  },
}

export default function VoorWie() {
  return <VoorWieContent />
}
