'use client'

import { motion } from 'framer-motion'
import { MotionLink } from '@/components/Animate'
import styles from './Home.module.css'

const regularWords = ['Van', 'vastlopen', 'naar', 'een']
const salmonWords  = ['nieuw', 'niveau']

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}

const wordVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
}

const fadeUp = (delay: number) => ({
  initial:    { opacity: 0, y: 16 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
})

export default function HomeContent() {
  return (
    <main className={styles.home}>
      {/* ── Linkerkant: tekst ── */}
      <div className={styles.homeText}>

        <h1 className={`hero-title ${styles.heroTitle}`}>
          <motion.span
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'block' }}
          >
            {/* "Van vastlopen naar een" — font-weight 300 */}
            {regularWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                style={{ display: 'inline-block', marginRight: '0.28em', fontWeight: 300 }}
              >
                {word}
              </motion.span>
            ))}
            {/* "nieuw niveau" — italic, salmon #E8927C, max font-weight 400 */}
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {salmonWords.map((word, i) => (
                <motion.span
                  key={i + 4}
                  variants={wordVariants}
                  style={{
                    display: 'inline-block',
                    marginRight: i === 0 ? '0.18em' : 0,
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: '#E8927C',
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.span>
        </h1>

        <motion.div className={styles.heroActions} {...fadeUp(0.7)}>
          <MotionLink href="/voor-wie" className="btn-primary">
            Meer lezen <span className="arrow">→</span>
          </MotionLink>
          <MotionLink href="/contact" className="btn-secondary">
            Neem contact op
          </MotionLink>
        </motion.div>
      </div>

      {/* ── Rechterkant: bollen in drie lagen ── */}
      <div className={styles.heroBlobScene}>
        {/* Laag 1 — atmosfeer */}
        <div className={styles.blobAtmos1} />
        <div className={styles.blobAtmos2} />
        {/* Laag 2 — zichtbare cirkels */}
        <div className={styles.blobMid1} />
        <div className={styles.blobMid2} />
        <div className={styles.blobMid3} />
        {/* Laag 3 — scherpe accenten */}
        <div className={styles.blobAccent1} />
        <div className={styles.blobAccent2} />
        <div className={styles.blobAccent3} />
      </div>
    </main>
  )
}
