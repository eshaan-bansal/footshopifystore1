# StrideWell — claim compliance

**Read this before writing any copy in this theme, in Shopify admin, or in an ad.**

StrideWell sells foot and leg products that sit in the **health products** category.
That puts two US regimes squarely on us:

- **FTC Health Products Compliance Guidance** — health-related claims need
  competent and reliable scientific evidence *before* they are made.
- **FTC Rule on Consumer Reviews and Testimonials** (16 CFR Part 465, in force
  since October 2024) — fake or unsubstantiated reviews, testimonials and
  follower/customer counts carry civil penalties **up to about $53,000 per
  violation**.

This store launched with **no reviews, no testimonials, no sales history and no
clinical evidence.** Until that changes, the rules below are not stylistic
preferences — they are the launch constraints.

---

## Banned until genuinely substantiated

### 1. Health-outcome claims

Never state or imply that a product treats, relieves, reduces, corrects or
improves a condition or symptom.

Do not use:

- "relieves pain", "eases pain", "pain relief", "cures pain", "cures", "heals"
- "reduces swelling", "reduces inflammation"
- "improves circulation", "increases blood flow"
- "corrects bunions", "fixes bunions", "realigns toes"
- "treats plantar fasciitis" (or any named condition)
- "therapeutic", "medical grade", "orthotic therapy"
- "clinically proven", "clinically tested", "scientifically proven"
- "doctor recommended", "podiatrist recommended", "physician approved"
- "FDA approved", "FDA cleared" (unless the specific product genuinely is)
- before/after health outcomes of any kind — images, framing, or narrative that
  shows or implies a condition improving through use

Also avoid the softer implied versions — "say goodbye to sore feet",
"walk pain-free", "no more aching arches", "feel the relief". Framing a symptom
as the problem the product solves *is* a health claim, even without the word
"cure".

**Naming a condition for navigation is fine.** A "Plantar fasciitis" card that
routes a shopper to a collection describes *what they are looking for*. The line
is crossed when the product is described as acting on the condition. So:

- OK — a card titled "Plantar fasciitis" → "Cushioned heel and arch support"
- NOT OK — "Plantar fasciitis relief" or "Heals plantar fasciitis"

### 2. Fabricated or unsubstantiated social proof

Nothing invented, and nothing we cannot evidence on request:

- customer counts — "30,000+ happy feet", "join thousands", "10,000 sold"
- star ratings or review counts that are not from real verified buyers
- testimonials or quotes, including "sample" or "placeholder" ones
- "#1 rated", "best seller", "most popular", "trending" — unless true by our own
  sales data
- "as seen in", press logos, endorsements
- countdown timers or stock counters that do not reflect reality

Placeholder review content is **not** a safe middle ground. If it renders on the
storefront, it is a representation to a customer. Every review element in this
theme is built to render only when real data is present, and to render nothing
otherwise.

### 3. Guarantees and policies we do not actually operate

No "60-day guarantee", "risk-free", "money-back guarantee" or "free returns"
unless that exact policy is live in **Settings → Policies** and we will honour
it. A guarantee is a contractual promise, not a reassurance device.

Until a policy is actually published in Settings → Policies, nothing on the
storefront states a return window or links to the policy page. Shopify can
generate a starting template — edit it, then set the theme's **Returns summary
line** so the product-page wording matches what you published. Where a shopper would look for it, the
FAQ instead offers pre-order help ("email us and we'll tell you which option
fits"). Once a real policy exists, publish it in Settings → Policies and *then*
the returns copy and the fourth trust tile can be turned on.

### 4. Delivery timeframes we cannot control

Stock is dropshipped, so transit time varies per item and per supplier. Do **not**
state "arrives in 5–8 business days", "dispatched within 24 hours" or any other
window, sitewide or per product, unless it is guaranteed for that specific item.

What we can say: **"Tracking on every order"** and **"Delivery times vary by
item"**. An unmet delivery promise is both an FTC problem (the Mail, Internet, or
Telephone Order Merchandise Rule) and the single biggest driver of chargebacks
for a dropshipped store. If you later negotiate a guaranteed window with a
supplier for a specific SKU, put it in that product's `custom.faqs` metafield —
not in sitewide copy.

**Also not defensible while dropshipping:** "ships from our US warehouse",
"same-day dispatch", "in stock and ready to ship" — unless the stock genuinely is
domestic and on hand.

---

## Allowed — backable claim types

### Physical features and specifications

Anything measurable and true of the product:

- "graduated 15–25 mmHg compression"
- "memory-foam cushioning"
- "adjustable 180° hinge"
- "breathable bamboo-blend knit"
- "wide toe box"
- "machine washable"
- materials, sizes, dimensions, weight, care instructions

### Audience and intended use

Who it is made for and when it is worn — description, not outcome:

- "made for people on their feet all day"
- "designed for wide feet"
- "wear day or night"
- "fits inside most closed shoes"
- "sized for US men's 8–13"

### Comfort and feel, described not promised

- "cushioned underfoot"
- "soft-touch lining"
- "low-profile so it fits in everyday sneakers"

"Comfort" is describing a product property. "Relief" is claiming a health
outcome. Keep to the first.

### Our own operational policies

Only while they are actually configured in Shopify:

- "Free US shipping over $50" — must match **Settings → Shipping and delivery**
- "Tracking on every order" — true of our fulfilment
- "Secure checkout" — Shopify-hosted, TLS
- "Return within 30 days" — **only** once that policy is live

### Real reviews, once collected

Once a verified-buyer app (Judge.me, Loox, Shopify Product Reviews) is installed
and real reviews exist, ratings and testimonials become allowed **and** the
theme starts rendering them automatically. Nothing needs to be un-hidden by
hand — see the note below.

---

## How the theme enforces this

These are code-level guardrails, not just guidance:

| Element | Behaviour |
|---|---|
| Product rating (`sw_rating` block) | Renders **only** if `product.metafields.reviews.rating.value` exists. No manual rating field exists to fill in. |
| Product reviews area | Same gate. Hidden entirely when absent — not shown as "0 reviews". |
| Testimonials section | Ships with **no** blocks. Renders nothing until real quotes are entered. No placeholder presets. |
| Dawn's `show_rating` options | Dawn's own product cards already gate on the reviews metafield. Safe to leave on. |
| Guarantee band | Not on any template by default. Enable only when a real policy exists. |
| Trust bar / announcement bar | Ship with operational facts only. |

If you add a review app, its metafields populate and the rating areas appear on
their own.

---

## Terms that cannot be fixed by disclosure

A recurring misconception worth naming: **putting something in the fine print does
not make it lawful.** Disclosure cures *deception*. It does not cure *illegality*
or *unfairness*. A term that conflicts with a statute is void however clearly it
is posted — and burying a material term in fine print is itself a deceptive
practice, because the FTC requires material terms to be clear and conspicuous.

Specific terms that do **not** become enforceable by writing them down:

| Term | Why it fails |
|---|---|
| "Orders cannot be cancelled for N days" | Collides with the FTC Mail, Internet, or Telephone Order Merchandise Rule (16 CFR 435): if you cannot ship in the stated time — or 30 days if unstated — you must offer cancellation and a refund. Holding funds on an unshipped order is also a classic unfair practice. |
| "No chargebacks" / "by ordering you waive dispute rights" | Chargeback rights come from the Fair Credit Billing Act and Electronic Fund Transfer Act. Contractual waivers are unenforceable, and the customer simply disputes instead. |
| "All sales final, no exceptions" | Cannot disclaim liability for goods that arrive defective, damaged or not as described. |
| "No refunds under any circumstances" | Same, plus several states require a conspicuously posted policy or impose a default return right (California is the notable one). |

The practical point is sharper than the legal one: an over-restrictive policy does
not prevent refunds, it converts them into **chargebacks**. Refunds cost you the
order. Chargebacks cost you the order, a fee, and — past roughly 1% of
transactions — the merchant account itself. What is enforceable and worth having:
**used items non-returnable** (hygiene), **customer pays return shipping**, **no
cancellation after dispatch**, **final-sale items excluded**.

## Beyond claims

Claims are what this file governs, but they are not the whole legal surface.
`legal/pre-launch-checklist.md` covers the rest, in risk order: the four Shopify
policies, state privacy law and cookie/GPC consent, **California Prop 65** (which
catches imported foot-care goods and is enforced by private plaintiffs scanning
storefronts), CAN-SPAM's physical-address requirement, and accessibility.

Two of those are already wired into the theme and self-enabling:

| Notice | Renders when |
|---|---|
| Returns fine print, on the product page and cart | A refund policy exists in Settings → Policies |
| Prop 65 warning, on the product page before purchase | `custom.prop65_required` is true for that product |

Both output nothing otherwise, so the storefront cannot promise a returns term
that isn't published, or omit a warning once you set the metafield.

## Before you publish any new copy

1. Could I hand a regulator evidence for this exact sentence today?
2. Is it a **property of the product**, or a **claim about a body**? Properties
   are fine; outcomes are not.
3. If it is a number — count, rating, percentage, timeframe — where did it come
   from?
4. If it is a promise — guarantee, return window, delivery time — is it live in
   Shopify settings?

If any answer is uncertain, cut the sentence. There is no version of this store
where an unbacked claim is worth $53,000.
