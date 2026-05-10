import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>KvK 42035269</span>
      <span aria-hidden>·</span>
      <span>AGB-code 98108653</span>
      <span aria-hidden>·</span>
      <span><span className="fn">Nieuw Niveau</span> © {new Date().getFullYear()}</span>
      <span aria-hidden>·</span>
      <Link href="/privacyverklaring">Privacyverklaring</Link>
      <span aria-hidden>·</span>
      <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
      <span aria-hidden>·</span>
      <Link href="/klachtenformulier">Klachtenregeling</Link>
    </footer>
  )
}
