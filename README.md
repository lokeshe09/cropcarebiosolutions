# Crop Care Bio Solutions

Marketing site for a manufacturer and exporter of pheromone lures and insect traps.

React 19 · TypeScript (strict) · Vite 6 · Tailwind v4 · Motion

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # typecheck, then build to dist/
npm run preview
```

## Where the content lives

All copy and product data sit in `src/data/` — no text is hard-coded in a
component that an editor would reasonably want to change.

| File | Holds |
| --- | --- |
| `src/data/products.ts` | The 12 pheromone lures plus the RPW Magnet companion |
| `src/data/traps.ts` | Trap hardware and the sticky-trap range |
| `src/data/site.ts` | Company details, navigation, homepage and About copy, crop families |

Product copy is transcribed from the company product sheet. Where the sheet
gives no value for a field, the field is **left out** rather than filled in, and
the UI renders only what is present. Please keep that rule — it is what stops
the site claiming something the company has not confirmed.

## Before launch

- [ ] `CONTACT` in `src/data/site.ts` is placeholder data. Replace the phone
      numbers, WhatsApp number, email and address. Everything on the site reads
      from that one object.
- [ ] Supply the **Active Ingredients** content. The nav category exists and is
      marked "Coming soon" in `NAV_ITEMS`.
- [ ] Supply the **Pheromone Longevity & Safe Application Guide**. Its slot is
      reserved at the end of the About page.
- [ ] Confirm field and shelf life for *Spodoptera litura* (Tobacco Cutworm).
      The sheet states the replacement interval but not the life directly; the
      current values follow the replacement interval.

## Notes

- **Images** are WebP. New photographs should be converted and kept under about
  250 KB — much of this audience is on mobile data. The homepage band reads from
  `FIELD_GALLERY` in `src/data/site.ts`.
- **The homepage band** of field photography sits above the masthead copy and
  loads every frame eagerly. It is the first thing on the page, and native lazy
  loading would not help anyway: a tile parked off the right-hand edge never
  satisfies it, so it would scroll into view empty. Each photograph ships at two
  sizes — a strip file the band renders, and a `-full` file fetched only if
  someone opens it in the lightbox.
- **Fonts** are self-hosted in `public/fonts/` (Fraunces, Schibsted Grotesk,
  DM Mono) so the first render needs no third-party request.
- **`tnum`**: the `.tnum` utility must only be applied to runs of digits. In
  Schibsted Grotesk the `tnum` feature also widens the comma and full stop,
  which puts a visible gap in front of them in running text.
- **Routing** is hash based, handled in `src/App.tsx`. The old `#trap-guide`
  and `#pest-finder` links still resolve.
- **The enquiry form** has no backend. It composes the enquiry and hands it to
  WhatsApp or the visitor's mail client. Nothing is stored in the browser.
