'use client'

import { useEffect, useState } from 'react'
import styles from './BackToTop.module.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      className={styles.btn}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Terug naar boven"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  )
}
