'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/',          label: 'Home' },
  { href: '/voor-wie',  label: 'Voor wie' },
  { href: '/werkwijze', label: 'Werkwijze' },
  { href: '/over-mij',  label: 'Over ons' },
  { href: '/diensten',  label: 'Diensten' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" aria-label="Nieuw Niveau Begeleiding — home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900 410"
            height="70"
            style={{ height: '70px', width: 'auto', display: 'block' }}
            aria-hidden="true"
          >
            <circle cx="390" cy="108" r="38" fill="none" stroke="#df6d4b" strokeWidth="13"/>
            <path d="M 302,248 A 88,88 0 0,1 478,248 Z" fill="#df6d4b"/>
            <circle cx="512" cy="133" r="38" fill="none" stroke="#1f1f21" strokeWidth="13"/>
            <path d="M 424,273 A 88,88 0 0,1 600,273 Z" fill="#1f1f21"/>
            <text x="450" y="375" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontWeight="700" fontSize="86" letterSpacing="6" fill="#1f1f21">NIEUW NIVEAU</text>
          </svg>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
        >
          <span /><span /><span />
        </button>

        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`nav-cta${pathname === '/contact' ? ' active' : ''}`}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
