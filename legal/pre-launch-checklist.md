# Pre-launch legal checklist

Everything the storefront still needs before it takes real orders. Not legal
advice — have an attorney review before launch. Ordered by actual risk, not by
how often people talk about it.

Status key: **[THEME]** already handled in code · **[ADMIN]** you must do it in
Shopify · **[BUSINESS]** outside the store entirely.

---

## 1. The four policies — [ADMIN] · blocking

**Settings → Policies.** Shopify generates templates for all of these; edit them,
don't ship the boilerplate unread.

All four are now drafted in this folder. Paste each one, fill the brackets, done.

| Policy | Draft | What it does for you |
|---|---|---|
| **Refund policy** | `legal/refund-policy.md` | Used items non-returnable on hygiene grounds, customer pays return shipping, no cancellation after dispatch. Publishing it also switches on the returns copy across the product page and cart. |
| **Privacy policy** | `legal/privacy-policy.md` | Written to the CCPA/CPRA baseline, which covers the twenty state laws in force through 2026. Includes the GPC and opt-out language. |
| **Terms of service** | `legal/terms-of-service.md` | Order = your offer, accepted on dispatch (lets you decline bad orders); the no-medical-claims clause; review-removal rights; liability capped at the amount paid. |
| **Shipping policy** | `legal/shipping-policy.md` | States no delivery window on purpose, and discloses that items ship from several locations including outside the US. |

Each draft opens with a short note on why it is shaped the way it is — read those
before editing, because several clauses look removable and are not.

Once published, all four appear in the footer automatically (`show_policy` is
already on), and the refund policy switches on the returns copy across the
product page and cart.

---

## 2. Privacy and consent — [ADMIN] · high risk, commonly skipped

**Twenty states have comprehensive privacy laws as of 2026**, with Indiana,
Kentucky and Rhode Island effective 1 January 2026 and amendments expanding
obligations in Texas, Oregon, Delaware and Connecticut.

No US state requires an EU-style opt-in cookie wall. They use an **opt-out**
model. What you actually need:

- **Enable Shopify's cookie banner and consent tracking.**
  Settings → Customer privacy → Cookie banner, and set your data-sale/sharing
  region rules. This is built in — you do not need a paid app to start.
- **Honour Global Privacy Control.** At least eleven states — California,
  Colorado, Connecticut, Delaware, Maryland, Minnesota, Montana, New Jersey,
  New Hampshire, Oregon, Texas — require a browser GPC signal to be treated as a
  valid opt-out. Shopify's consent management handles this when enabled; it does
  nothing if you never turn it on.
- **Add a "Do Not Sell or Share My Personal Information" link** if you run
  targeted-advertising pixels (Meta, TikTok, Google Ads). Installing an ad pixel
  is what makes you a "seller/sharer" of data under most of these laws — this is
  the step most small stores miss.
- **Get consent right for email.** CAN-SPAM requires a working unsubscribe and a
  **valid physical postal address in every marketing email**. See §4.

If you launch ads before this, you are running the exact data flows these laws
regulate, without the opt-out they require.

---

## 3. California Proposition 65 — [THEME] built, [BUSINESS] decide per product

**This one catches imported goods and is enforced by private plaintiffs who scan
storefronts.** Prop 65 follows the product, not the company: if your goods reach a
California consumer, it reaches you, wherever you are. Penalties run to **$2,500
per day per violation**.

Since the 2016 e-commerce rules, the warning must appear **on the product display
page** and be seen **before purchase completes** — a warning that only appears in
the cart or on the packaging is not compliant.

Relevant here because imported foot-care goods are squarely in scope: flexible PVC
and gel components commonly contain **DEHP** and other listed phthalates, and some
plastics and metal fittings carry lead.

**The theme handles the display.** `snippets/product-prop65.liquid` renders a
compliant warning on the product page, driven per product by metafields:

| Metafield | Type | Value |
|---|---|---|
| `custom.prop65_required` | Boolean | true to show the warning |
| `custom.prop65_chemical` | Single line text | e.g. `DEHP` |
| `custom.prop65_type` | Single line text | `cancer`, `reproductive harm`, or `cancer and reproductive harm` |

**What you must do:** ask each supplier for the Prop 65 status and any test
reports per SKU, then set the metafield. Short-form warnings must name at least
one chemical under the amendments effective January 2025 (three-year transition
to January 2028), which is why the chemical field exists.

Do not guess in either direction. Warning on everything invites the question of
why, and warning on nothing is the violation.

---

## 4. Business identity and contact — [ADMIN] + [BUSINESS]

- **Physical business address** — required in marketing emails under CAN-SPAM,
  and a strong trust signal. Add it to the footer and to your email templates.
- **Working support email** on the Contact page. The storefront currently tells
  customers to email about fit and about order changes, so that inbox has to be
  real and monitored.
- **Business entity and bank account** in the business's name, matching your
  Shopify Payments details. Mismatches trigger payout holds.
- **Sales tax registration** wherever you have nexus. Shopify calculates tax; it
  does not register you.
- **Country-of-origin marking** — imported goods must be marked. Your supplier
  usually handles this, but you are the importer of record on many dropship
  arrangements.

---

## 5. Accessibility — [THEME] largely handled

The largest real legal exposure for an online store: **5,100+ suits in 2025, ~77%
against ecommerce**, settling at $5,000–$25,000 plus remediation. Handled in the
theme — see MARKETING.md §1 for the criteria and what was fixed.

Still worth doing:

- **Run a keyboard pass** before launch: tab through the homepage, a product page
  and checkout. Anything unreachable or invisible when focused is both a failure
  and a lost sale.
- **Publish an accessibility statement** with a contact route for problems. Not
  legally required, but it demonstrably reduces demand-letter risk because it
  gives a complainant a cheaper path than a lawyer.
- **Do not buy an overlay widget.** 1,416 businesses running one were sued anyway
  in 2025, and the FTC fined a major overlay vendor $1m for claiming its tool made
  sites compliant.

---

## 6. Claims — [THEME] enforced, [BUSINESS] ongoing

Covered in depth in COMPLIANCE.md and enforced in code. The standing rules:

- no health-outcome claims — features and audience only;
- no ratings, reviews, testimonials or customer counts until real;
- no guarantee or return window that is not a published policy;
- no delivery window while stock is dropshipped;
- offer tier labels must match a real automatic discount in Discounts.

---

## Minimum viable launch set

If you are launching this week, these are the ones that are genuinely blocking:

1. **Refund policy** published — paste `legal/refund-policy.md`.
2. **Privacy policy** published.
3. **Terms of service** published.
4. **Shipping policy** published — no timeframe promises.
5. **Cookie banner + consent tracking** enabled in Settings → Customer privacy,
   *before* any ad pixel goes on the site.
6. **Prop 65 status confirmed** with your supplier for every SKU, metafields set.
7. **Real support email**, monitored.
8. **Keyboard pass** through the buying flow.

Items 1–5 are all Shopify admin settings and take under an hour together. Item 6
is a supplier email. None of it is hard; it is just invisible until something goes
wrong, which is why it gets skipped.

---

## Sources

- [FTC Mail, Internet, or Telephone Order Merchandise Rule](https://www.ftc.gov/legal-library/browse/rules/mail-internet-or-telephone-order-merchandise-rule)
- [US state privacy law tracker, 2026](https://www.consenteo.com/knowledge-hub/legal/us_state_privacy_law_tracker_2026)
- [Cookie consent requirements under US state privacy laws](https://privacylawmap.com/blog/cookie-consent-requirements-us-state-privacy-laws)
- [US state privacy laws 2026 for marketing teams](https://secureprivacy.ai/blog/us-state-privacy-laws-2026-marketing)
- [Prop 65 for e-commerce sellers](https://www.listingmirror.com/the-importance-of-prop-65-for-ecommerce-sellers/)
- [Prop 65 short-form and internet warning changes](https://www.kelleydrye.com/viewpoints/blogs/kelley-green-law/prop-65-update-big-changes-to-the-short-form-and-internet-warnings)
- [Prop 65 compliance guide for importers](https://www.compliancegate.com/california-proposition-65/)
- [ADA website compliance lawsuit trends, 2026](https://accessible.org/2026-ada-website-compliance-lawsuits-ai/)
