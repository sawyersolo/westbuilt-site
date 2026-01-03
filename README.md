# West Built — Web Design Service Site

Production-ready marketing site for **West Built** (Next.js + Tailwind + Netlify-ready).

## Quick start
```bash
npm install
npm run dev
```

## Edit content
All editable copy + work cards + packages live in:
- `src/lib/content.ts`

## Work previews
Replace placeholder screenshots in:
- `public/work/`

Update links + labels in `src/lib/content.ts`.

## Intake form (Netlify Forms)
This site includes a Netlify-compatible form.
On Netlify:
- Deploy the site
- Submissions appear in **Forms** in the Netlify dashboard

If you deploy elsewhere, swap to Formspree / Google Forms / your own endpoint.

## Deploy (Netlify)
- New site from Git
- Build command: `npm run build`
- Publish directory: `.next`

Netlify will auto-detect Next.js.

## Intake follow-up automation (Netlify)

### Instant notifications
In Netlify dashboard:
- Forms → westbuilt-intake → Settings → Notifications
- Add email notification to: team@westbuilt.com

### Auto-reply to leads (recommended)
Use Netlify Forms + Zapier or Netlify Forms + Resend.

**Suggested auto-reply email:**
Subject: Thanks for reaching out — West Built

Hi {{name}},

Thanks for filling out the West Built project intake.
I've received your details and will review them shortly.

If anything else comes to mind in the meantime, feel free to reply to this email.

– West Built

This reassures leads immediately and increases reply rate.
