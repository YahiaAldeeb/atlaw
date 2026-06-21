# 09 — Legal & Compliance

Ensure the site meets Michigan attorney advertising rules and basic legal compliance.

## Attorney Advertising Disclaimer

Required on every page (already in Footer — verify it persists):

> This website is attorney advertising and for general information only. It is not legal advice and does not create an attorney-client relationship. Past results do not guarantee future outcomes.

## Privacy Policy (`/privacy`)

Update existing `PrivacyPolicyPage.tsx`:

- Michigan-compliant privacy policy.
- Cover: data collection (forms, analytics), cookies, third-party services (Typeform, Google Analytics if used).
- Contact for privacy inquiries: db@atlawgroup.com.

## Terms of Use (`/terms`)

Update existing `TermsOfUsePage.tsx`:

- Website use terms.
- Attorney advertising notice.
- No attorney-client relationship disclaimer.
- Jurisdiction: Michigan.

## Case Results Disclaimer

If/when case results are published:

> "Case results depend on a variety of factors unique to each case. Case results do not guarantee or predict a similar result in any future case."

Place near any case result display.

## Testimonial Disclaimer

If/when testimonials are published:

> "Testimonials or endorsements do not constitute a guarantee, warranty, or prediction regarding the outcome of your legal matter."

## Fee Language

Approved: "No fee unless we recover for you."
Always include: "Other practices — fees discussed during consultation" is NOT needed on PI-only site.

## ADA Compliance

- Color contrast: WCAG AA minimum (4.5:1 for body text, 3:1 for large text).
- Alt text on all images.
- Keyboard navigation works.
- Focus indicators visible.
- Screen reader landmarks present.

## Check When Done

- Attorney advertising disclaimer on every page footer.
- Privacy policy and Terms pages updated and accessible.
- Case result disclaimers ready (even if results are still [CONFIRM]).
- Focus indicators work on all interactive elements.
- Color contrast passes WCAG AA.
