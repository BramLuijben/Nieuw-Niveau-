'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/',                  label: 'Home' },
  { href: '/voor-wie',          label: 'Voor wie' },
  { href: '/werkwijze',         label: 'Werkwijze' },
  { href: '/over-mij',          label: 'Over ons' },
  { href: '/diensten',          label: 'Diensten' },
  { href: '/voor-verwijzers',   label: 'Verwijzers' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" aria-label="Nieuw Niveau Begeleiding — home">
          <Image
            src="/images/logo-roodkleur.png"
            alt="Nieuw Niveau Begeleiding"
            width={90}
            height={118}
            priority
            style={{ height: '62px', width: 'auto', display: 'block' }}
          />
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
