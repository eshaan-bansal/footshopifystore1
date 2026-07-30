# StrideWell — Shopify theme

A production Shopify theme for **StrideWell**, a foot-health and recovery brand.
*Relief that keeps you moving.*

It is a customized fork of [Shopify's Dawn](https://github.com/Shopify/dawn)
(baseline: **Dawn 15.5.0**), kept as a valid Online Store 2.0 theme so it can be
connected through Shopify's GitHub theme integration — every push to `main`
updates the theme.

The repository root **is** the theme root: `assets/`, `config/`, `layout/`,
`locales/`, `sections/`, `snippets/`, `templates/` and `templates/customers/`
all sit at the top level. Do not nest them in a subfolder or the integration
will stop recognising the theme.

---

## Contents

- [Local development](#local-development)
- [Connecting the repo to Shopify](#connecting-the-repo-to-shopify)
- [Admin setup checklist](#admin-setup-checklist)
- [The navigation menus you must create](#the-navigation-menus-you-must-create)
- [Adding products — the auto-organization loop](#adding-products--the-auto-organization-loop)
- [Brand image assets](#brand-image-assets)
- [Where the colours and fonts live](#where-the-colours-and-fonts-live)
- [What was added on top of Dawn](#what-was-added-on-top-of-dawn)
- [The product page, block by block](#the-product-page-block-by-block)
- [Copy rules for this store](#copy-rules-for-this-store)
- [Staying up to date with Dawn](#staying-up-to-date-with-dawn)

---

## Local development

Requires the [Shopify CLI](https://shopify.dev/docs/api/shopify-cli):

```bash
npm install -g @shopify/cli@latest
```

Then, from the repository root:

```bash
# live-reloading preview against your store
shopify theme dev --store YOURSTORE.myshopify.com

# lint — this must report 0 errors before you commit
shopify theme check

# push to a specific theme (only needed if you are not using the GitHub link)
shopify theme push
```

`shopify theme dev` prints a preview URL and hot-reloads as you edit. No store
domain is hardcoded anywhere in the theme — it comes from the `--store` flag and
from Liquid globals (`routes`, `shop`, `settings`) at runtime.

---

## Connecting the repo to Shopify

1. Push `main` to GitHub.
2. Shopify admin → **Online Store → Themes → Add theme → Connect from GitHub**.
3. Pick this repository and the `main` branch.
4. Preview it, then **Publish** to make it live.

From then on, every push to `main` updates the connected theme, and edits made
in the theme editor are committed back to the repo. Expect the editor to write
to `config/settings_data.json` and the `templates/*.json` files.

---

## Admin setup checklist

The theme references this data but cannot create it — templates only, no products
or collections in code. Work through this once, then adding products is the only
recurring task.

> **Before writing any copy anywhere, read [COMPLIANCE.md](COMPLIANCE.md).** This
> store sells health products with no reviews and no clinical evidence yet, so
> health-outcome claims and invented social proof are off the table. That file
> lists exactly what is banned and what is backable.

### 1. Create the six automated collections

**Products → Collections → Create collection → Automated**, with the condition
**Product tag is equal to** the tag below. Using the collection's own name as the
tag keeps tagging unambiguous at import time.

| Collection | Handle | Condition — product tag is equal to |
|---|---|---|
| Insoles & Arch Support | `insoles-arch-support` | `Insoles & Arch Support` |
| Bunion & Toe Correction | `bunion-toe-correction` | `Bunion & Toe Correction` |
| Compression & Circulation | `compression-circulation` | `Compression & Circulation` |
| Braces & Supports | `braces-supports` | `Braces & Supports` |
| Recovery & Massage | `recovery-massage` | `Recovery & Massage` |
| Orthopedic Footwear | `orthopedic-footwear` | `Orthopedic Footwear` |

The handles must match exactly — the homepage category grid and the
shop-by-concern cards reference them. Shopify derives the handle from the title,
so "Insoles & Arch Support" becomes `insoles-arch-support` on its own. Confirm it
under **Search engine listing** at the bottom of the collection page.

Give each collection an **image** while you are there: the homepage category card
uses it. (If you skip it, the card falls back to the collection's first product
image.)

### 2. Create the `best-sellers` collection

Handle **`best-sellers`**. Automated on a `best-seller` tag is easiest. The
homepage "Popular right now" row reads it and **hides itself entirely while the
collection is empty**, so you can leave it unpopulated at launch.

### 3. Create the three product metafield definitions

**Settings → Custom data → Products → Add definition.** These let you fill in
per-product content at import time with no theme edits.

| Namespace and key | Type | Drives |
|---|---|---|
| `custom.benefit_bullets` | List of single line text, **or** Multi-line text | The "Features" bullet list on the product page |
| `custom.faqs` | Multi-line text | The per-product FAQ accordion |
| `custom.badge` | Single line text | The small pill above the product title |

**`custom.benefit_bullets`** — one bullet per list entry, or one per line if you
use multi-line text. Describe materials, fit and construction:

```
Firm EVA arch shell with a cushioned heel cup
Closed-cell foam that does not flatten out over a long shift
Trim-to-fit along the printed guide lines
Wide toe box, cut for wider feet
```

**`custom.faqs`** — one FAQ per line as `Question|Answer`:

```
Which size should I order?|Order your usual shoe size. Size up if you wear a wide fit.
Will it fit my shoes?|It sits inside most closed shoes and is trim-to-fit.
```

A line with no `|` is skipped, so a half-finished metafield can never render a
broken row.

**`custom.badge`** — e.g. `New`, `Wide fit`, `Trim to fit`. Leave empty to hide
it. Note that `Most Popular` and `Best Seller` are claims: only use them once
your own sales data supports them.

If a metafield is empty the block falls back to the template's own generic
content (benefits) or renders nothing at all (FAQs, badge). Nothing breaks.

### 4. Build the navigation menus

See [the next section](#the-navigation-menus-you-must-create).

### 5. Create the content pages

**Online Store → Pages** — the theme links to all three:

| Page | Handle | Template to assign |
|---|---|---|
| About StrideWell | `about` | `page.about` |
| Sizing Guide | `sizing-guide` | `page` |
| Contact | `contact` | `page.contact` |

The Sizing Guide matters more than it looks: the product page's "Not sure of your
size?" link and several FAQs point at it, and sizing doubt is the most common
reason a ready buyer leaves.

### 6. Fill in the policy pages

**Settings → Policies**: Privacy, Refund, Shipping, Terms. The footer renders
them automatically. **No refund policy is published yet, so nothing on the storefront references
one.** Where shoppers would look for returns, the FAQ offers pre-order help
instead ("email us and we'll tell you which option fits"). When you do publish a
policy, three things can then be switched on: the returns FAQ row, the fourth
trust tile (swap "Ships to All 50 States" for "30-Day Returns" — the icon picker
has a return arrow), and the Policy band section.

Note that Shopify Payments will surface a refund policy at checkout regardless,
so publishing one is worth doing early even if the terms are conservative.

### 7. Set the Google product category per product

For Merchant Center: on each product, **Product organization → Google product
category** → the matching foot-care or footwear taxonomy node (e.g. *Health &
Beauty > Health Care > Supports & Braces*, or *Apparel & Accessories > Shoes*).

### 8. Set up the quantity-break discounts

⚠️ The product page's offer block controls the **quantity** added to the cart and
the **labels** the customer reads. It does not create a discount. For "buy 2,
save 15%" to be true, create a matching automatic discount in
**Discounts → Create discount → Amount off products**, or use a bundle app. Tier
price fields ship empty for exactly this reason — if you fill them in without a
real discount behind them, the price shown will not match checkout.

### 9. Reviews — later, not now

The rating and review areas are built but render **only** from
`product.metafields.reviews.*`. Install a verified-buyer app (Judge.me, Loox)
when you are ready; ratings then appear on their own with no theme change. Do not
enter a rating by hand — there is deliberately no field for it.

---

## Adding products — the auto-organization loop

This is the whole point of the structure. Per product:

1. **Import as a draft** (Kopy, CJ, CSV, manual).
2. **Tag it** with its collection name exactly — e.g. `Insoles & Arch Support`.
   Add `best-seller` and/or `new` if they apply.
3. **Fill the three metafields** (`benefit_bullets`, `faqs`, `badge`).
4. Set images, title, price, Google product category.
5. **Set it Active.**

What happens with no theme work at all:

- the tag puts it in its automated collection;
- that collection now has products, so its **homepage category card appears**,
  with an up-to-date product count;
- the matching **shop-by-concern card appears** too;
- a `best-seller` tag makes the **"Popular right now" row appear**;
- the product renders through the **single shared product template** — gallery,
  title, price, variants, sizing link, offer tiers, add-to-cart, trust row,
  features, reassurance, FAQs, cross-sells, sticky mobile add-to-cart.

The reverse is also true: **empty collections hide themselves.** Category cards,
concern cards and the best-sellers row all check `all_products_count` and skip
anything with zero products, and each section removes itself completely when
nothing is left. The storefront never shows an empty category, so you can launch
with two collections filled and reveal the rest simply by importing into them.

The only per-product theme decision you might ever make is the product title
formula — see [The product page](#the-product-page-block-by-block).

---

## The navigation menus you must create

Menu data lives in admin, not in Liquid. Create these under
**Online Store → Navigation**.

### `main-menu` — Main menu (header)

| Item | Links to |
|---|---|
| Home | Home page |
| Shop All | `/collections/all` |
| **Shop** (dropdown) | `/collections/all` |
| └ Insoles & Arch Support | `/collections/insoles-arch-support` |
| └ Bunion & Toe Correction | `/collections/bunion-toe-correction` |
| └ Compression & Circulation | `/collections/compression-circulation` |
| └ Braces & Supports | `/collections/braces-supports` |
| └ Recovery & Massage | `/collections/recovery-massage` |
| └ Orthopedic Footwear | `/collections/orthopedic-footwear` |
| Contact | `/pages/contact` |

Nest the six collections **under** the "Shop" item to get the dropdown.

### `footer` — Footer menu

The footer's "Shop" column reads this menu. Add the six collections, plus
Shop All.

---

## Brand image assets

Brand/decorative images are referenced **by exact filename** from `assets/`. To
change one, **overwrite the file and keep the filename** — the theme picks it up
with no further changes.

| Filename | Used in | Shipped size | Notes |
|---|---|---|---|
| `stridewell-logo.png` | Header logo | 776×284 | Teal wordmark, transparent. For light backgrounds |
| `stridewell-logo-light.png` | Footer brand block | 776×284 | Off-white wordmark, transparent. For dark backgrounds |
| `hero-home.jpg` | Homepage hero background | 1376×768 | **Keep the left third visually calm** — the headline sits there |
| `lifestyle-benefits.jpg` | "How it helps" section | 1376×768 | Warm lifestyle |
| `guarantee-band.jpg` | Guarantee band background | 1376×768 | Low contrast — white text goes on top |
| `about-brand.jpg` | About page brand story | 1200×896 | Brand-feel / product flat-lay |
| `shop-by-problem.jpg` | Shop-by-problem background | 1376×768 | Accent, rendered at 14% opacity |

How this works, in `snippets/stridewell-image.liquid`:

1. An image picked in the theme editor always wins, and is served responsively
   through the Shopify CDN.
2. With no picked image, the fixed `assets/` filename is used.
3. If that file is missing too, the `<img>` removes itself and the section keeps
   its colour-scheme background — no broken layout, no Liquid error.

**Two logo variants exist on purpose.** The wordmark's ink is deep teal
(`#0E3A46`), which is nearly invisible against the deep-teal footer.
`snippets/stridewell-logo.liquid` takes a `light: true` flag to swap in the
off-white version, and the footer passes it. If you replace the logo, replace
**both** files.

**If you swap an image for one with a different aspect ratio**, update the
`fallback_width` / `fallback_height` values in the section that renders it —
`hero-stridewell.liquid`, `guarantee.liquid`, `shop-by-problem.liquid` or
`benefits.liquid`. Those become the `width`/`height` attributes that reserve
layout space; wrong values mean the page shifts as the image loads, which hurts
Core Web Vitals and your Ads Quality Score.

**Keep them compressed.** Theme assets are served at their natural size —
Shopify's `image_url` resizing only applies to images *uploaded* through the
editor's picker. The seven files above total about 780 KB. If you want a fully
responsive hero, upload it through the theme editor picker instead of replacing
the asset file.

---

## Where the colours and fonts live

**Colour schemes** — `config/settings_data.json`, under
`presets → StrideWell → color_schemes`. Editable in admin at
**Theme settings → Colors**.

| Scheme | Background | Use |
|---|---|---|
| `scheme-1` | `#FBF8F3` warm off-white | Default page background |
| `scheme-2` | `#FFFFFF` white | Cards, alternating sections, header |
| `scheme-3` | `#0E3A46` deep teal | Announcement bar, guarantee band, footer |
| `scheme-4` | `#E8734A` warm coral | Sale badges, accents |
| `scheme-5` | `#2F7D5B` trust green | Reserved for success/trust states |

Buttons are coral (`#E8734A`) on white in every scheme; text is `#1C2B2F`.

**Brand constants** that are not colour-scheme driven live at the top of
`assets/stridewell.css` as CSS custom properties — including the muted text
colour `--sw-muted: #5C6B70` and `--sw-tap-min: 4.4rem`, the minimum tap-target
height used throughout for this audience.

**Fonts** — `config/settings_data.json`: `type_header_font` and
`type_body_font`, both set to Assistant (`assistant_n6` headings,
`assistant_n4` body) at a **110% type scale**, because the audience skews older.
Change them in admin at **Theme settings → Typography**; switching headings to
Poppins there is a one-click change if you want more character.

---

## Homepage category display — the decision, and why

For a small focused catalogue (6 categories, ~14 products, mostly mobile),
**visible categories beat a buried dropdown.** So the theme does both:

1. a **visible "Shop by category" grid** on the homepage — 6 image cards, one per
   collection, each with a live product count;
2. a **sticky header** (`sticky_header_type: always`) so the category nav stays
   reachable through the whole scroll, collapsing to a hamburger on mobile.

There is deliberately **no mega-menu**. With six categories a simple "Shop ▾"
dropdown is enough, and a mega-menu would add weight and complexity for nothing.

## What was added on top of Dawn

Dawn's own sections, snippets, JS and asset pipeline are all intact. Nothing was
deleted except Dawn's contributor CI (`.github/`), which would otherwise run
against this repo. Additions:

### New sections

| File | What it is |
|---|---|
| `sections/hero-stridewell.liquid` | Homepage hero: outcome headline, two CTAs, reassurance row, scrimmed background |
| `sections/trust-bar.liquid` | Four icon + label trust items |
| `sections/category-grid.liquid` | The visible "Shop by category" grid. Cards hide when their collection is empty |
| `sections/shop-by-problem.liquid` | Search-language cards routing intent to collections — the SEO bridge. Also hides empty collections |
| `sections/benefits.liquid` | "How it helps", icon list or list-beside-image |
| `sections/testimonials.liquid` | Review cards with star rows |
| `sections/guarantee.liquid` | Policy band. On no template by default — add only when a real policy exists |
| `sections/product-sticky-atc.liquid` | Mobile sticky add-to-cart |

All of them carry a full `{% schema %}` with presets, so they are drag-and-drop
in the theme editor, and all render nothing rather than breaking when their
settings or collections are empty.

### New snippets

| File | What it is |
|---|---|
| `snippets/stridewell-logo.liquid` | Logo with asset default and text fallback |
| `snippets/stridewell-image.liquid` | Picked image → asset file → nothing |
| `snippets/stridewell-icon.liquid` | Inline SVG icon set (no extra request) |
| `snippets/stridewell-stars.liquid` | Star row from a merchant-entered rating |
| `snippets/product-sw-*.liquid` | The ten product-page blocks, including the three metafield-driven ones |

### New assets

| File | What it is |
|---|---|
| `assets/stridewell.css` | One stylesheet for every custom section |
| `assets/stridewell-offer.js` | Quantity-break tiers ↔ form quantity |
| `assets/stridewell-sticky-atc.js` | Reveals the sticky bar via IntersectionObserver |

Two small JS files and one stylesheet, both deferred — Dawn's performance
profile is preserved. There is deliberately **no Node build step and no
framework**: this stays a native Liquid theme so the GitHub integration works.

### Modified Dawn files

- `sections/main-product.liquid` — eight new block types added to the `case` and
  the schema; a `compact_fold` setting; nothing removed.
- `sections/header.liquid`, `sections/footer.liquid` — logo falls back to the
  theme asset.
- `layout/theme.liquid` — loads `stridewell.css`.
- `config/settings_data.json`, `sections/header-group.json`,
  `sections/footer-group.json`, `templates/*.json` — brand configuration.

---

## The product page, block by block

Google traffic arrives warm and skeptical, already comparison-shopping. The page
is ordered to earn the scroll first, then remove resistance.

**Above the fold** (`templates/product.json` block order): media gallery, H1,
star rating, price, variant picker, sizing-help link, offer tiers, add-to-cart,
one-line trust cue. The `compact_fold` section setting caps the gallery height
on mobile so this actually fits in one viewport; turn it off in the editor to
let images run full height.

**Then**: trust row → benefit bullets → objections & proof → pairs-well-with →
description → four FAQs → related products.

The new blocks, all editable per product:

| Block | Job |
|---|---|
| StrideWell: badge | `custom.badge` metafield — a small pill above the title. Hidden when empty |
| StrideWell: rating | Real reviews only, from `product.metafields.reviews.*`. No manual field exists. Hidden until a review app populates it |
| StrideWell: trust cue | The single reassurance that must be visible without scrolling |
| StrideWell: sizing help | "Not sure of your size?" — sizing doubt is the top reason a ready buyer leaves |
| StrideWell: benefit bullets | Driven by `custom.benefit_bullets`, falling back to the template's own bullets. Materials, fit and construction |
| StrideWell: quantity-break offer | Three tiers, a Most Popular anchor and a cheaper decoy |
| StrideWell: trust row | Guarantee / shipping / secure checkout under add-to-cart |
| StrideWell: reassurance | "Who these are made for" — fit, materials, which shoes it works with. Facts only |
| StrideWell: FAQs | `custom.faqs` metafield — per-product Q/A accordion. Hidden when empty |
| StrideWell: pairs well with | Hand-picked cross-sells to lift AOV |

FAQs use Dawn's own `collapsible_tab` block and are framed from what almost
stopped a buyer — sizing, "will it work for me", shipping time, returns.

Two implementation notes worth knowing:

- **The offer tiers are radios that write the real form quantity.** No duplicate
  form, no separate quantity selector (it was removed as redundant). Editing the
  quantity by hand clears the selected tier, so the highlighted tier never lies
  about what is in the cart.
- **The sticky add-to-cart submits Dawn's actual product form** via the HTML
  `form` attribute rather than duplicating it, so the selected variant and
  quantity are always correct with no state to synchronise. It appears only once
  the main button scrolls out of view.

---

## Copy rules for this store

**[COMPLIANCE.md](COMPLIANCE.md) is the authority.** Read it before writing copy
anywhere — theme, admin, or ads. The short version:

**No health-outcome claims.** These are health products, so "relieves pain",
"reduces swelling", "improves circulation", "corrects bunions", "clinically
proven" and "doctor recommended" are all off the table without evidence. Describe
the product instead: materials, fit, construction, who it is for. "Cushioned heel
cup" is fine; "relieves heel pain" is not.

Naming a condition for **navigation** is fine — a "Plantar fasciitis" card
describes what the shopper is looking for. The line is crossed when the product is
described as acting on the condition.

**No invented social proof.** Under the FTC's Rule on Consumer Reviews and
Testimonials, fake reviews, ratings and customer counts carry penalties up to
about $53,000 per violation. This store has no reviews yet, so it shows none. The
theme enforces this: the rating block reads only
`product.metafields.reviews.*` and has no manual field, and the testimonials
section ships with no blocks and renders nothing until real quotes are added.

**No guarantees you do not operate.** No refund policy is published yet, so no
storefront copy mentions returns at all — the FAQ offers pre-order help instead.
The policy band section exists but is on no template by default.

**No delivery timeframes.** Stock is dropshipped, so transit time varies per item
and supplier. Nothing states a window; the shipping FAQ says delivery times vary
and that tracking is emailed on dispatch. A missed delivery promise is both an
FTC issue and the main driver of chargebacks for dropshipped stores.

**Sell the outcome, not the product** — within those limits. Lead with what the
product *is for* and how it is built, then the details.

**Product H1 formula:** outcome + qualifier + differentiator, framed as comfort
and construction rather than a cure. e.g. *"All-Day Cushioned Insoles with Firm
Arch Support"* — not *"Plantar Fasciitis Pain Relief Insoles"*.

**Reading level ≤ 8th grade.** Short sentences. A confused mind never buys.

**Match the page to the query.** Specific-product searches land on the product
page; concern searches land on a collection; broad searches land on the homepage
that routes them.

**Every element earns its place.** If it does not move toward the sale or reduce
resistance, cut it.

---

## Staying up to date with Dawn

This is a fork, so upstream changes are a manual merge:

```bash
git remote add upstream https://github.com/Shopify/dawn.git
git fetch upstream
git diff HEAD upstream/main -- sections/main-product.liquid
```

Expect conflicts in the files listed under
[Modified Dawn files](#modified-dawn-files) — most of all
`sections/main-product.liquid`, where the StrideWell blocks are appended to
Dawn's `case` statement and schema. Everything else is additive and should merge
cleanly.

---

## Conventions

- Commits are conventional: `feat:`, `fix:`, `chore:`, `style:`.
- `shopify theme check` must report **0 errors** before committing. The 8
  remaining warnings are all inherited from Dawn (unused snippets and template
  length) and are safe.
- Collection links in JSON templates use plain relative paths
  (`/collections/insoles-arch-support`) rather than `shopify://` URLs, so they
  resolve correctly even before the collections exist in admin.

## License

Dawn is provided under the [MIT License](LICENSE.md).
