import type { Metadata } from 'next'
import HomeContent from './HomeContent'
import Werkgebied from '@/components/Werkgebied'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Nieuw Niveau — Ambulante WMO Begeleiding Amersfoort',
  description:
    'Vastlopen is een beginpunt. Nieuw Niveau biedt ambulante WMO-begeleiding voor volwassenen in regio Amersfoort, Utrecht Zuidoost en Hilversum. Thuis, op maat.',
  openGraph: {
    title: 'Nieuw Niveau — Ambulante WMO Begeleiding Amersfoort',
    description:
      'Ambulante begeleiding voor volwassenen die klaar zijn voor de volgende stap. Regio Amersfoort, Utrecht Zuidoost en Hilversum.',
  },
}

export default function Home() {
  return (
    <>
      <HomeContent />
      <Werkgebied />
      <FAQ />
    </>
  )
}
