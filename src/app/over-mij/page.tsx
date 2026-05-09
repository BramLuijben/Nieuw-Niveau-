import type { Metadata } from 'next'
import OverMijContent from './OverMijContent'

export const metadata: Metadata = {
  title: 'Over mij — Bram Luijben, begeleider & oprichter',
  description:
    'Bram Luijben, oprichter van Nieuw Niveau. 7 jaar GGZ-ervaring, HBO Social Work, specialisatie bemoeizorg. Betrokken en betrouwbaar ambulant begeleider in regio Amersfoort.',
  openGraph: {
    title: 'Over mij — Nieuw Niveau',
    description: 'Bram Luijben, 7 jaar GGZ-ervaring, HBO Social Work. Betrokken ambulant begeleider in regio Amersfoort.',
  },
}

export default function OverMij() {
  return <OverMijContent />
}
