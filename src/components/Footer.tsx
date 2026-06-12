import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>KvK 42035269</span>
      <span aria-hidden>·</span>
      <span>AGB-code 98108653</span>
      <span aria-hidden>·</span>
      <span>Nieuw Niveau © {new Date().getFullYear()}</span>
      <span aria-hidden>·</span>
      <Link href="/privacyverklaring">Privacyverklaring</Link>
      <span aria-hidden>·</span>
      <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
      <span aria-hidden>·</span>
      <Link href="/klachtenformulier">Klachtenregeling</Link>
      <Image
        src="/images/keurmerk-kiwa.png"
        alt="KIWA gecertificeerd — kwalificatieniveau 6"
        width={48}
        height={56}
        className="footer-keurmerk"
        style={{ height: '44px', width: 'auto' }}
      />
    </footer>
  )
}
