---
name: frontend-system-design
description: >-
  Applies Frontend System Design Essentials (Juntao Qiu / CCDAO: Collect,
  Component, Data, API, Optimization) to this Next.js App Router portfolio.
  Covers layout-matching skeletons, hover prefetch with inflight dedupe,
  below-fold code splitting, HTTP cache headers, client router staleTimes,
  and error boundaries. Use when improving performance, navigation speed,
  lazy loading, prefetching, loading.tsx, Suspense fallbacks, Cache-Control,
  or frontend architecture on this site.
---

# Frontend system design (this portfolio)

Follow **CCDAO**. Do not add spinners, extra libraries, or client fetch waterfalls for content that is already in the bundle.

Project patterns live in the files named below. Reuse them; do not invent a second loading or prefetch system.

## Collect

Before changing UI, name the slow path:

- First paint of a route (App Router RSC + JS)
- Below-fold home sections
- Heavy grids (`ProjectsGrid`, Experience, Skills)
- Hover → click on navbar / CTAs / case-study cards

Budget: navigation should show a **layout-shaped skeleton immediately**, then content. Prefetch on hover so the click often has the RSC payload ready.

## Component

- Functional components, named exports, Tailwind. Match existing glass cards.
- Split **below the fold** with `lazy()` + `Suspense`. Keep above-fold HTML in the parent so LCP is not blocked.
- Suspense fallback **must match the layout** (cards, grid, section height) — never a centered spinner.
- Reuse `PageSkeleton`, `CardSkeleton`, `ProjectsGridSkeleton`, `SectionSkeleton` from `components/ui/PageSkeleton.tsx`.
- Route-level: `app/loading.tsx` plus nested `loading.tsx` on `/frontend-developer`, `/case-studies`, `/case-studies/[slug]`, `/magento-hyva-support`.
- Unexpected errors: `app/error.tsx` (segment) and `app/global-error.tsx` (root). Log, offer retry, do not dump stacks.

Home: `views/AudienceRouter.tsx` renders intro + path cards eagerly; `HomeBelowFold` is lazy.

## Data

This site is mostly static constants (`constants/data.ts`, case studies). Do not add client `fetch` for that. Lazy-load **UI chunks**, not the JSON.

If a future page does fetch:

1. Guard empty / error first
2. Show skeleton until data exists
3. Do not block the hero on below-fold requests

## API / network

- Internal navigation: `PrefetchLink` (`components/ui/PrefetchLink.tsx`) — hover and keyboard focus call `usePrefetchRoute`.
- Dedupe: `hooks/use-prefetch-route.ts` keeps an inflight `Set` so the same href is not prefetched twice.
- Navbar related routes: `extraHrefs` on Case studies / Front-end / Magento (see `components/Navbar.tsx`).
- CTAs with `to=` go through `PrefetchLink` (`components/ui/CtaButton.tsx`).
- HTTP: long-lived `Cache-Control` for `/images/:path*` and `/_next/static/:path*` in `next.config.ts`. Hashed Next assets may be `immutable`; unhashed public images should not be treated as immutable if the file is overwritten in place.
- Client Router Cache: `experimental.staleTimes` in `next.config.ts` (dynamic 30s, static 180s) so revisiting a page does not refetch immediately.
- Static HTML: content routes set `export const dynamic = "force-static"` (case studies also `dynamicParams = false`). Do not read `searchParams` / `cookies` / `headers` on those pages — that switches them to per-request SSR. Query tabs (contact `?intent=`) belong in a client form with `useSearchParams`.

## Optimization checklist

When a page feels slow:

1. Is above-fold still in the first chunk? If not, undo the lazy split.
2. Does navigation show `loading.tsx` / a matching skeleton?
3. Are in-app links `PrefetchLink` (or a CTA with `to=`)?
4. Is a heavy grid behind `lazy` + `ProjectsGridSkeleton`?
5. Are images `next/image` with `priority` only on LCP (avatar/hero)?
6. Did you add a spinner? Replace it with a skeleton.

Do **not** prefetch the current pathname. Do **not** prefetch external URLs. Do **not** wrap the whole homepage in one Suspense.

## Examples

**Lazy below-fold**

```tsx
const HomeBelowFold = lazy(() =>
  import("@/views/HomeBelowFold").then((mod) => ({ default: mod.HomeBelowFold }))
)

<Suspense fallback={<SectionSkeleton />}>
  <HomeBelowFold />
</Suspense>
```

**Named export lazy**

```tsx
const ProjectsGrid = lazy(() =>
  import("@/components/projects/ProjectsGrid").then((mod) => ({ default: mod.ProjectsGrid }))
)
```

**Warm related routes**

```tsx
<PrefetchLink href={ROUTES.caseStudies} extraHrefs={firstStudyPaths}>
  Case studies
</PrefetchLink>
```

## Additional resources

- CCDAO detail and anti-patterns: [reference.md](reference.md)
