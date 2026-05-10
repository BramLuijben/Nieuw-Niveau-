'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MotionLink } from '@/components/Animate'
import styles from './Home.module.css'

const fadeUp = (delay: number) => ({
  initial:    { opacity: 0, y: 10 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: 'easeOut' as const },
})

export default function HomeContent() {
  return (
    <main className={styles.home}>
      {/* ── Linkerkant: tekst ── */}
      <div className={styles.homeText}>
        <div className={styles.mobileBlobs} aria-hidden="true" />

        <motion.h1
          className={`hero-title ${styles.heroTitle}`}
          {...fadeUp(0.1)}
        >
          <span style={{ fontWeight: 300 }}>Van vastlopen naar een </span>
          <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#E8927C', whiteSpace: 'nowrap' }}>
            nieuw niveau
          </span>
        </motion.h1>

        <motion.p className={styles.heroSubtitle} {...fadeUp(0.3)}>
          ambulante begeleiding regio Amersfoort, Hilversum, Zuid-Oost Utrecht en omstreken
        </motion.p>

        <motion.div className={styles.heroActions} {...fadeUp(0.5)}>
          <MotionLink href="/voor-wie" className="btn-primary">
            Meer lezen <span className="arrow">→</span>
          </MotionLink>
          <MotionLink href="/contact" className="btn-secondary">
            Neem contact op
          </MotionLink>
        </motion.div>
      </div>

      {/* ── Foto kolom ── */}
      <div className={styles.homePhoto}>
        <Image
          src="/images/hero.png"
          alt="Nieuw Niveau ambulante begeleiding"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
        />
        <div className={styles.photoFadeLeft} />
        <div className={styles.photoFadeRight} />
        <div className={styles.photoFadeBottom} />
      </div>
    </main>
  )
}
