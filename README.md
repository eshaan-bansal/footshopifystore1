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

The theme references this data but cannot create it — templates only, no
products or collections in code.

### 1. Create six automated collections

Use **Products → Collections → Create collection → Automated**, matching on
product tag. The handles must be exactly these, because the homepage and the
Shop-by-problem cards link to them:

| Collection | Handle | Suggested condition |
|---|---|---|
| Insoles & Arch Support | `insoles-arch-support` | Product tag is equal to `insoles` |
| Bunion & Toe Correction | `bunion-toe-correction` | Product tag is equal to `bunion` |
| Compression & Circulation | `compression-circulation` | Product tag is equal to `compression` |
| Braces & Supports | `braces-supports` | Product tag is equal to `braces` |
| Recovery & Massage | `recovery-massage` | Product tag is equal to `recovery` |
| Orthopedic Footwear | `orthopedic-footwear` | Product tag is equal to `footwear` |

Check the handle at the bottom of the collection page under **Search engine
listing** — Shopify derives it from the title, so "Insoles & Arch Support"
becomes `insoles-arch-support` automatically.

### 2. Create the `best-sellers` collection

Handle **`best-sellers`**. Manual, or automated on a `best-seller` tag. The
homepage "Best sellers" section and the hero's secondary button both point at
it.

### 3. Create the navigation menus

See [the next section](#the-navigation-menus-you-must-create).

### 4. Create the content pages

Create these under **Online Store → Pages**, because the theme links to them:

| Page | Handle | Template to assign |
|---|---|---|
| About StrideWell | `about` | `page.about` |
| Sizing Guide | `sizing-guide` | `page` |
| Contact | `contact` | `page.contact` |

### 5. Fill in the policy pages

**Settings → Policies**: Privacy policy, Refund policy, Shipping policy, Terms
of service. The footer renders these automatically once they exist — nothing to
wire up.

### 6. Import products

Import the Tier-1 products (e.g. via CopyMonkey) **as drafts**, optimize the
copy, then publish. Tag each one so it lands in the right automated collection.

### 7. Set up the quantity-break discounts

⚠️ **Important.** The product page's offer block controls the *quantity* added
to the cart and the *labels* the customer reads. It does not create a discount.
For "buy 2, save 15%" to be true, create a matching **automatic discount** in
**Discounts → Create discount → Amount off products**, or use a bundle app. If
you fill in tier prices without a real discount behind them, the price shown
will not match checkout.

### 8. Replace the placeholder testimonials

The Testimonials section and the product page ship with quotes prefixed
`PLACEHOLDER`. Replace all of them with real reviews before launch, and only
enter a star rating or review count you can substantiate.

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

Six brand/decorative images are referenced **by exact filename** from
`assets/`. Every one currently holds an on-brand placeholder labelled with its
intended dimensions — **overwrite the file, keep the filename**, and the theme
picks it up with no further changes.

| Filename | Used in | Notes |
|---|---|---|
| `stridewell-logo.png` | Header logo, footer brand block | Transparent wordmark, roughly 3.5:1 |
| `hero-home.jpg` | Homepage hero background | Wide lifestyle; **keep the left third clear** for the headline |
| `lifestyle-benefits.jpg` | "How it helps" section | Warm lifestyle, square |
| `guarantee-band.jpg` | Guarantee band background | Calm and low-contrast so text stays legible |
| `about-brand.jpg` | About page brand story | Brand-feel image |
| `shop-by-problem.jpg` | Shop-by-problem section background | Optional accent, rendered at low opacity |

How this works, in `snippets/stridewell-image.liquid`:

1. An image picked in the theme editor always wins, and is served responsively
   through the Shopify CDN.
2. With no picked image, the fixed `assets/` filename is used.
3. If that file is missing too, the `<img>` removes itself and the section keeps
   its colour-scheme background — no broken layout, no Liquid error.

Theme assets are served at their natural size (Shopify's `image_url` resizing
only applies to *uploaded* images), so keep these files reasonably compressed.
For a hero you want fully responsive, upload it through the theme editor picker
instead.

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

## What was added on top of Dawn

Dawn's own sections, snippets, JS and asset pipeline are all intact. Nothing was
deleted except Dawn's contributor CI (`.github/`), which would otherwise run
against this repo. Additions:

### New sections

| File | What it is |
|---|---|
| `sections/hero-stridewell.liquid` | Homepage hero: outcome headline, two CTAs, reassurance row, scrimmed background |
| `sections/trust-bar.liquid` | Four icon + label trust items |
| `sections/shop-by-problem.liquid` | Search-language cards routing intent to collections — the SEO bridge |
| `sections/benefits.liquid` | "How it helps", icon list or list-beside-image |
| `sections/testimonials.liquid` | Review cards with star rows |
| `sections/guarantee.liquid` | Guarantee band with reassurance points |
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
| `snippets/product-sw-*.liquid` | The eight product-page blocks |

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
| StrideWell: rating | Proof above the fold. Uses your review app's real metafield when installed, otherwise a rating you type in |
| StrideWell: trust cue | The single reassurance that must be visible without scrolling |
| StrideWell: sizing help | "Not sure of your size?" — sizing doubt is the top reason a ready buyer leaves |
| StrideWell: benefit bullets | Outcome first, feature second, up to five |
| StrideWell: quantity-break offer | Three tiers, a Most Popular anchor and a cheaper decoy |
| StrideWell: trust row | Guarantee / shipping / secure checkout under add-to-cart |
| StrideWell: objections & proof | "Who these work for", rating, guarantee |
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

These are compliance and conversion constraints, not style preferences.

**Never make medical claims.** No "cures", "treats plantar fasciitis",
"clinically proven", "doctor recommended", or named-condition treatment claims
unless a real citation exists. Write "designed to support", "helps relieve
everyday discomfort", "all-day comfort". This keeps the store compliant with
Shopify's policies and Google Merchant Center. Problem-named *navigation*
("Plantar fasciitis" as a shop-by-problem card) is fine — it describes what the
customer is looking for, not what the product does to a condition.

**Never invent proof.** No fabricated review counts, ratings, endorsements or
customer numbers. Every rating field in this theme is empty or zero by default
and every shipped testimonial is marked `PLACEHOLDER` for exactly this reason.

**Sell the outcome, not the product.** Emotional end-state, then benefits, then
features — in that order.

**Product H1 formula:** outcome + time frame or qualifier + mechanism or
differentiator. Clear over clever. e.g. *"All-Day Foot Relief with Targeted Arch
Support."*

**Reading level ≤ 8th grade**, ideally lower. Short sentences. A confused mind
never buys.

**Match the page to the query.** Specific-product searches land on the product
page; problem searches land on a collection; broad searches land on the homepage
that routes them. Never dump everything on the homepage.

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
