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

### 1b. The product name is itself a claim

This is the trap in this catalogue. Supplier listings are written for marketplaces
that do not police claims, so the names arrive pre-loaded with the exact language
this file bans. A name is the most prominent copy on the page — it is in the
title tag, the collection card, the cart, the order confirmation and the ad. If
the name asserts an outcome, no amount of careful body copy cures it.

Two failure patterns to catch when you import:

**Corrective verbs in the name.** "Corrector", "straightener", "realigner". The
evidence does not support them: conservative splinting can help early-stage
symptoms and may slow progression, but permanent correction of the hallux valgus
axis is not achievable without surgery. Selling a "bunion corrector" is a claim
we cannot substantiate on request.

**Condition names in the name.** "Neuropathy socks", "plantar fasciitis splint".
Naming the condition *in the product itself* — as opposed to on a navigation card
— represents the product as intended to treat that condition. For a disease like
diabetic neuropathy that is the specific fact pattern FDA and FTC act on: the
product is treated as an unapproved new drug or an unapproved device, and the
claim needs well-controlled human clinical evidence we do not have. Neuropathy
and diabetes claims are an active enforcement priority, not a theoretical one.

Rename on import. Describe the **form and mechanism**, not the target condition:
a night splint that holds the ankle in dorsiflexion is a "dorsiflexion night
splint", which is accurate, searchable and makes no promise.

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

## The launch catalogue, product by product

Fourteen SKUs across five collections. The middle column is the name to publish;
where it differs from the supplier name, publishing the supplier name is itself
the violation. Prices are the launch list.

### Compression & Circulation (5)

Graduated compression is the one place this catalogue has real evidence behind
it — but the evidence is for *the garment construction*, not for an outcome we
may promise. State the **mmHg range and the fact that it is graduated** (tightest
at the ankle, easing upward); that is a measurable property of the knit and it is
verifiable from the supplier spec. Never convert it into "improves circulation",
"increases blood flow" or "reduces swelling" — those are the health-outcome
claims banned in §1, and they are what turns a sock into a medical device claim.
Do not state an mmHg figure you have not confirmed with the supplier.

| Supplier name | Publish as | Notes |
|---|---|---|
| Bamboo compression socks — $29.99 | unchanged | Say the fibre blend and the mmHg. Not "circulation booster". |
| Plantar compression foot sleeves — $34.99 | unchanged | "Plantar" is anatomical and fine. Sleeve, open toe and heel. |
| Calf compression sleeves — $22.99 | unchanged | Sized by calf circumference, not shoe size. |
| Five-toe / recovery socks — $17.99 | **Five-toe socks** | Drop "recovery" — it names an outcome. Describe the split-toe knit. |
| Neuropathy sleep socks — $29.99 | **Cushioned sleep socks** | **Highest risk in the catalogue.** See §1b. Say seamless toe, non-binding cuff, cushioned sole. Never mention neuropathy, diabetes or nerve anything, in the title, description, tags, metafields, alt text or ads. |

### Bunion & Toe Care (3)

The collection is titled **Care**, not Correction, for the reason in §1b. Toe
separator evidence is genuinely mixed — reviews report reduced pain and some
angle change with consistent use, but the studies vary widely in material, method
and quality. That is not the "competent and reliable scientific evidence" standard.
Sell them as spacing and cushioning.

| Supplier name | Publish as | Notes |
|---|---|---|
| Bunion corrector splint — $39.99 | **Adjustable bunion splint** | Hinged or strapped, worn at night. Describe the strap and the hinge. Never "corrects", "realigns" or "fixes". |
| Hammer-toe straighteners — $19.99 | **Adjustable toe splints** | "Hammer toe" describes a toe shape and is acceptable as a *fit* descriptor; "straighteners" is a claim. |
| Toe separators / spacers — $16.99 | unchanged | Soft silicone, worn in or out of shoes. Say the material and the toe count. |

### Braces & Supports (3)

| Supplier name | Publish as | Notes |
|---|---|---|
| Bamboo knee brace/sleeve — $29.99 | **Bamboo knee sleeve** | Sized by circumference. Open patella panel if it has one. |
| Ankle brace support — $22.99 | **Ankle brace** | Describe closure type and profile under a sock. |
| Plantar fasciitis night splint — $27.99 | **Dorsiflexion night splint** | Names the mechanism, not the condition. Evidence is short-term at best and a Cochrane review found little support beyond six months — so describe the angle it holds, and stop there. |

### Recovery & Massage (2)

| Supplier name | Publish as | Notes |
|---|---|---|
| Foot & leg stretching strap — $29.99 | unchanged | Webbing with loops. Say the length and loop count. |
| Electric foot massager — $49.99 | unchanged | **Check the mechanism before listing.** A vibration or shiatsu massager is an ordinary consumer good. If it uses EMS or TENS it is an FDA Class II device under 21 CFR 890.5850 and needs its own 510(k) clearance — selling one without it is a regulatory problem, not a copy problem. Get the supplier's answer in writing. |

### Insoles & Arch Support (1)

| Supplier name | Publish as | Notes |
|---|---|---|
| Arch-support insoles — $29.99 | unchanged | "Arch support" is a structural description and is fine. Trim-to-fit, foam type, heel cup depth. |

### Two catalogue-wide notes

**Prop 65.** Silicone, gel, foam and PVC foot goods imported from Asia are the
exact category private Prop 65 plaintiffs scan storefronts for. Set
`custom.prop65_required` to true on any item you cannot get a compliant
certificate for — the warning then renders before purchase on its own.

**The electric massager needs a safety carve-out.** The sitewide care FAQ now
says never to immerse an electrical item; do not override that with a generic
"hand wash" line in its description.

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
