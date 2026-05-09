'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('cookie-dismissed')
    if (!dismissed) setVisible(true)
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 200,
      width: 'min(560px, calc(100vw - 32px))',
      background: 'var(--creme)',
      border: '1px solid var(--rand)',
      borderRadius: '16px',
      padding: '18px 22px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
      flexWrap: 'wrap',
    }}>
      <div style={{ flex: 1, minWidth: '200px' }}>
        <p style={{
          fontSize: '13px',
          color: 'var(--zwart-zacht)',
          lineHeight: 1.55,
          margin: 0,
        }}>
          Deze site gebruikt alleen functionele cookies. Er worden geen persoonsgegevens gedeeld met derden.{' '}
          <Link
            href="/privacyverklaring"
            style={{ color: 'var(--zalm-donker)', textDecoration: 'underline' }}
          >
            Privacyverklaring
          </Link>
        </p>
      </div>
      <button
        onClick={() => {
          localStorage.setItem('cookie-dismissed', '1')
          setVisible(false)
        }}
        style={{
          padding: '9px 18px',
          background: 'var(--zwart)',
          color: 'var(--wit)',
          borderRadius: '999px',
          fontSize: '13px',
          fontWeight: 500,
          border: 'none',
          cursor: 'pointer',
          flexShrink: 0,
          fontFamily: 'inherit',
        }}
      >
        Begrepen
      </button>
    </div>
  )
}
