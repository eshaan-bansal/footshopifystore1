# StrideWell — marketing decisions, and the compliance line each one respects

Companion to [COMPLIANCE.md](COMPLIANCE.md). That file says what we may not
claim. This one says how the store is built to convert **within** those limits,
and why each choice was made — so the reasoning survives the next redesign.

The short version: the techniques that reliably lift conversion are almost all
compliant ones. The non-compliant tactics — fake urgency, invented counts,
guarantees you don't operate — are also the ones that get stores shut down by
payment processors. We don't need them.

---

## 1. The largest legal risk is not the copy — it's accessibility

Worth stating plainly, because it is usually the last thing a new store thinks
about. Web accessibility suits are the dominant source of ecommerce legal
exposure: **over 5,100 filed in 2025, roughly a 20% year-on-year rise, and
ecommerce is about 77% of all cases.** Demand letters typically settle at
$5,000–$25,000 plus a remediation commitment.

**WCAG 2.2 Level AA** is the benchmark used in practice. Two of its most-cited
failures are caused by exactly the patterns this theme uses:

| Criterion | The failure | What we did |
|---|---|---|
| **2.4.11 Focus Not Obscured** | A sticky header scrolls over the element that just received keyboard focus | `scroll-margin-top` reserving `--header-height` on every focusable element, plus a bottom allowance for the sticky add-to-cart bar |
| **2.5.8 Target Size** | Pointer targets under 24×24px — the criterion most often failed by sites that already passed WCAG 2.1, because it is new in 2.2 | 24px minimum on every inline link and list row; 44px on primary controls |
| **1.4.3 Contrast** | Light text on light backgrounds, button labels under 4.5:1 | All 15 colour-scheme pairs measured and passing; a separate `--sw-accent-ink` for coral used as an icon |
| **2.4.7 Focus Visible** | No visible focus ring on custom components | Explicit high-contrast rings on cards, accordions and the sticky bar |
| **1.1.1 Non-text Content** | Missing alt text | Alt on every image path; decorative images pass `alt=""` deliberately |

**Accessibility overlay widgets do not protect you.** 1,416 businesses running
one were sued anyway in 2025, and the FTC fined a major overlay vendor $1m for
claiming its tool could make any site compliant. Real markup is the only fix,
which is why this is handled in the theme rather than bought as a plugin.

This overlaps almost perfectly with conversion work: larger tap targets, better
contrast and clearer focus states help every shopper, not just the ones using
assistive technology.

---

## 2. Calls to action

**Name the destination, don't gesture at it.** CTA copy that pairs an action verb
with a specific outcome consistently beats generic wording. Applied here:

| Before | Now | Why |
|---|---|---|
| "Shop this" (×6 concern cards) | "Shop compression", "Shop wide-fit shoes", … | Each card says what it opens |
| "Browse categories" | "See best sellers" | Concrete destination |
| "Shop all" (hero) | "Shop foot support" | Names the category, still 3 words |

Keep CTA copy to roughly **2–5 words**. Longer reads as a sentence and stops
looking like a button.

**One primary action per section.** The hero's secondary button is deliberately
quieter (lower background alpha) so the eye resolves the primary first. Multiple
equal-weight CTAs split attention and measurably reduce clicks on both.

**Size for thumbs.** Mobile is the majority of this store's traffic, and larger
targets lift mobile conversion materially. Primary CTAs are 48px tall and go
**full-width on mobile**, where a half-width button is both harder to hit and
reads as secondary.

**Put the CTA inline, in the flow.** Inline CTAs substantially outperform ones
parked in a sidebar or floated away from the content that motivated them — which
is why every section's action sits directly under its own argument, and why the
sticky add-to-cart appears only once the real button has scrolled away.

**What we deliberately do not do:** countdown timers, "only 3 left" counters, or
"limited-time" framing that isn't real. Urgency does lift conversion — which is
exactly why fabricating it is an FTC deception problem and a chargeback
generator. If a genuine, dated promotion exists, urgency is fine. Invented
scarcity is not.

---

## 3. Trust, when you have no reviews yet

Reviews are the strongest trust signal and we have none. That is a real
disadvantage, and the answer is not to invent them — it is to lean on the trust
signals that don't require history.

**Trust accumulates along the whole path.** Signals need to appear at each stage
of the purchase, not once on the homepage. Current coverage:

| Stage | What carries trust |
|---|---|
| Homepage | Trust bar (shipping, tracking, secure checkout, ships nationwide), the hero reassurance row |
| Category / collection | The same trust bar, plus a factual FAQ |
| Product | One-line cue above the fold, trust row under add-to-cart, "Who these are made for", per-product FAQs |
| **Cart** | Secure checkout + tracking, directly above the checkout button |

The cart was the gap and is now covered — it is the single largest drop-off
point in the funnel.

**Design itself is a trust signal.** A coherent, professional-looking store reads
as legitimate; an inconsistent one reads as a scam regardless of what it says.
That is the real argument for the shared product template, one type scale, one
colour system and consistent card styling across all SKUs — it makes 10–30
dropshipped products read as one brand.

**Depth of product information substitutes for social proof.** Specific
materials, dimensions, fit notes and honest limitations ("a tight fit in dress
shoes with a shallow footbed") do the reassurance work a review would otherwise
do — and they're all backable. This is what the `custom.benefit_bullets` and
`custom.faqs` metafields exist for. **Fill them in properly; it is the highest-
leverage thing you can do per product.**

**Responsiveness is a trust signal.** Where returns copy would normally sit, the
FAQ offers pre-order help instead ("email us and we'll tell you which option
fits"). That converts a returns anxiety into a conversation, and it is honest
while no refund policy is published.

**When reviews do arrive:** use a verified-buyer app (Judge.me, Loox). The theme
already reads `product.metafields.reviews.*`, so ratings appear on their own with
no code change. Never write your own.

---

## 4. Pricing and offers

**The quantity-break block controls quantity and labels only.** It does not
create a discount. If a tier says "save 15%", a matching automatic discount must
exist in **Discounts → Automatic**, or the price shown will not match checkout —
which is a deceptive pricing problem under FTC Act Section 5 and state consumer
protection law, quite apart from being an obvious cart-abandonment cause. Tier
price fields ship empty for this reason.

**Show the real total as early as possible.** The FTC's Rule on Unfair or
Deceptive Fees (effective May 2025) formally covers live-event tickets and
short-term lodging, not general ecommerce — but general ecommerce is still fully
exposed to Section 5 and to a widening patchwork of state junk-fee laws. Don't
introduce mandatory fees that only appear at checkout.

**"Most Popular" is a claim.** The anchor/decoy structure in the offer block is
sound pricing psychology, but the *label* must be true. Until sales data supports
it, use a descriptive label ("2 pairs — one for each pair of shoes") rather than
"Most Popular". The badge metafield carries the same caveat.

**Subscriptions:** the store sells none today. If you ever add one, the FTC's
negative-option enforcement is active and intensifying — the click-to-cancel rule
was vacated on procedural grounds in 2025 but the FTC never stopped enforcing the
same principles under Section 5 and ROSCA, revived rulemaking in early 2026, and
is actively bringing cases. Cancellation must be as easy as signup.

---

## 5. Search and page-intent matching

Traffic arrives at different levels of awareness, and the page has to match:

| Query type | Lands on | Job of that page |
|---|---|---|
| Specific product | Product page | Convert — earn the scroll, then remove resistance |
| Problem or concern | Collection | Narrow the choice, then hand off to a product |
| Broad or branded | Homepage | Route quickly — category grid and concern cards |

The concern cards are the bridge: they use the shopper's own search language
("Plantar fasciitis") while their descriptions stay strictly feature-based. That
is the compliant way to capture condition-driven search — name the concern for
navigation, never claim to treat it.

**Empty categories are hidden automatically**, so the store never presents a
dead end to a shopper or a thin page to a crawler.

---

## 6. Page speed

Fast pages convert better and lower Google Ads cost-per-click through Quality
Score. Choices made for this:

- one small stylesheet and two small deferred scripts, not a page builder
- inline SVG icons — no icon font, no sprite request
- images compressed to ~780 KB total for all seven brand assets (down from 7.6 MB)
- explicit `width`/`height` on every image so cumulative layout shift stays at 0
- no Node build step or framework — the theme stays native Liquid

Resist installing apps that inject scripts on every page. Each one costs speed on
every visit, and most add less than they take.

---

## Before you launch — the honest list

1. **Publish a refund policy.** Shopify Payments surfaces one at checkout
   regardless, and its absence is a common trigger for payment-processor review
   of new stores. Once published, three things can be switched on: the returns
   FAQ, the fourth trust tile, and the policy band.
2. **Confirm the free-shipping threshold** matches Settings → Shipping and
   delivery. It is stated in five places.
3. **Fill the metafields on every product.** Without them the product pages fall
   back to generic copy, which is the difference between a store that looks
   specific and one that looks drop-shipped.
4. **Run a keyboard pass.** Tab through the homepage, a product page and
   checkout. Anything you cannot reach or cannot see focused is both an
   accessibility failure and a lost sale.
5. **Install a verified-buyer review app** and start collecting from order one.
   It is the trust signal you are currently missing, and the only compliant way
   to get it is to earn it.

---

## Sources

- [ADA website compliance lawsuit trends, 2026](https://accessible.org/2026-ada-website-compliance-lawsuits-ai/)
- [ADA/WCAG 2.2 ecommerce storefront checklist](https://www.fyin.com/blog/ada-and-wcag-22-for-e-commerce-a-storefront-checklist-that-prevents-lawsuits/)
- [WCAG 2.2 AA checklist and remediation](https://www.webability.io/blog/wcag-2-2-aa-checklist)
- [Call-to-action statistics and CTA best practice](https://www.sender.net/blog/call-to-action-statistics/)
- [Ecommerce conversion optimisation strategies](https://gokickflip.com/blog/ecommerce-conversion-optimization)
- [Trust signals in ecommerce conversion](https://www.figpii.com/blog/trust-signals-in-e-commerce-conversion/)
- [Building trust in ecommerce](https://www.optimonk.com/build-trust-in-ecommerce)
- [FTC Rule on Unfair or Deceptive Fees](https://www.morganlewis.com/pubs/2025/01/ftc-issues-final-junk-fees-rule-to-crackdown-on-aggressive-pricing-practices)
- [State enforcement against junk fees, 2026](https://www.troutman.com/insights/state-attorneys-general-and-continued-enforcement-against-junk-fees-in-2026/)
- [FTC revives click-to-cancel rulemaking](https://www.jonesday.com/en/insights/2026/05/ftc-revives-clicktocancel-rule-new-risks-for-subscription-businesses)
- [FTC negative option enforcement continues](https://www.goodwinlaw.com/en/insights/publications/2026/02/alerts-practices-ba-ftcs-click-to-cancel-rule-gets-new-life)
