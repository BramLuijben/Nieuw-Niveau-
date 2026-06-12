import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

interface ContactForm {
  naam?: string
  email?: string
  telefoon?: string
  ik_ben?: string
  bericht?: string
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'E-mail service niet geconfigureerd' }, { status: 503 })
  }
  const resend = new Resend(apiKey)

  try {
    const { naam, email, telefoon, ik_ben, bericht }: ContactForm = await request.json()

    if (!naam?.trim() || !email?.trim() || !bericht?.trim() || !ik_ben) {
      return NextResponse.json({ error: 'Verplichte velden ontbreken' }, { status: 400 })
    }

    const ikBenLabels: Record<string, string> = {
      client:       'Cliënt of naasten',
      verwijzer:    'Verwijzer of sociaal team',
      zorgaanbieder: 'Zorgaanbieder',
      anders:       'Anders',
    }
    const ikBenLabel = ikBenLabels[ik_ben] ?? ik_ben

    // Mail naar Bram
    await resend.emails.send({
      from: 'website@nieuwniveau.nl',
      to: 'info@nieuwniveau.nl',
      replyTo: email,
      subject: `Nieuw contactverzoek van ${naam}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1A1A1A">
          <div style="background:#99463A;padding:24px 28px;border-radius:12px 12px 0 0">
            <h2 style="color:#fff;margin:0;font-size:20px">Nieuw bericht via nieuwniveau.nl</h2>
          </div>
          <div style="background:#FAF5EE;padding:28px;border-radius:0 0 12px 12px;border:1px solid #E5DFD6;border-top:none">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;font-size:12px;color:#6B6B6E;text-transform:uppercase;letter-spacing:0.1em">Naam</td><td style="padding:8px 0;font-weight:500">${naam}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#6B6B6E;text-transform:uppercase;letter-spacing:0.1em">E-mail</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#7E3A30">${email}</a></td></tr>
              ${telefoon ? `<tr><td style="padding:8px 0;font-size:12px;color:#6B6B6E;text-transform:uppercase;letter-spacing:0.1em">Telefoon</td><td style="padding:8px 0">${telefoon}</td></tr>` : ''}
              <tr><td style="padding:8px 0;font-size:12px;color:#6B6B6E;text-transform:uppercase;letter-spacing:0.1em">Ik ben</td><td style="padding:8px 0">${ikBenLabel}</td></tr>
            </table>
            <div style="margin-top:20px;padding-top:20px;border-top:1px solid #E5DFD6">
              <div style="font-size:12px;color:#6B6B6E;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px">Bericht</div>
              <p style="margin:0;line-height:1.65;white-space:pre-wrap">${bericht}</p>
            </div>
            <div style="margin-top:24px;text-align:center">
              <a href="mailto:${email}" style="display:inline-block;padding:12px 24px;background:#1A1A1A;color:#fff;border-radius:999px;text-decoration:none;font-size:14px;font-weight:500">Beantwoord dit bericht</a>
            </div>
          </div>
        </div>
      `,
    })

    // Bevestigingsmail naar verzender
    await resend.emails.send({
      from: 'Nieuw Niveau <info@nieuwniveau.nl>',
      to: email,
      subject: 'Bedankt voor je bericht — Nieuw Niveau',
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1A1A1A">
          <div style="background:#99463A;padding:24px 28px;border-radius:12px 12px 0 0">
            <h2 style="color:#fff;margin:0;font-size:20px">Nieuw Niveau</h2>
          </div>
          <div style="background:#FAF5EE;padding:32px;border-radius:0 0 12px 12px;border:1px solid #E5DFD6;border-top:none">
            <p style="margin:0 0 16px;font-size:16px">Hoi ${naam},</p>
            <p style="margin:0 0 16px;line-height:1.65;color:#2D2D2D">
              Bedankt voor je bericht! Ik heb het ontvangen en neem zo snel mogelijk contact met je op — meestal binnen één werkdag.
            </p>
            <p style="margin:0 0 24px;line-height:1.65;color:#2D2D2D">
              Wil je eerder contact? Stuur me een WhatsApp-bericht op <a href="https://wa.me/31629242833" style="color:#7E3A30">+31 6 29 24 28 33</a>.
            </p>
            <p style="margin:0;color:#6B6B6E;font-size:13px">
              Met vriendelijke groet,<br>
              <strong style="color:#1A1A1A">Bram Luijben</strong><br>
              Nieuw Niveau Begeleiding
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    const msg = err instanceof Error ? err.message : JSON.stringify(err)
    const stack = err instanceof Error ? err.stack : undefined
    console.error('[contact] send failed:', msg)
    if (stack) console.error('[contact] stack:', stack)
    console.error('[contact] raw error:', err)
    return NextResponse.json({ error: 'Er is iets misgegaan bij het versturen. Probeer het later opnieuw of mail info@nieuwniveau.nl.' }, { status: 500 })
  }
}
