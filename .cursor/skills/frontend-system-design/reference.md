# CCDAO reference (Juntao Qiu — Frontend System Design Essentials)

Apply these ideas in this Next.js App Router repo. Prefer existing helpers over new abstractions.

## Collect

- Map the user journey that feels slow (hover nav, click, first paint, scroll).
- Separate **perceived** latency (blank screen) from **actual** JS parse time.
- A skeleton that matches the page is a Collect outcome: the user already knows where content will land.

## Component

- Compose pages from small sections. Put a **lazy boundary** under the fold, not around the hero.
- Fallback UI is part of the component contract. If the loaded UI is a 3-column card grid, the fallback is a 3-column card skeleton (`ProjectsGridSkeleton`).
- Error boundaries (`error.tsx`) isolate a failed segment so the navbar/footer stay up.

## Data

- Static portfolio copy lives in `constants/`. Code-split components, not that data.
- When data is async: render shell → skeleton → content. Avoid request waterfalls (A then B then C) for independent sections.

## API

- Prefetch is an API-layer concern: warm the Next.js router cache on `mouseenter` / `focus`.
- Skip work already in flight (module-level `Set` in `use-prefetch-route.ts`).
- `Cache-Control` on static files reduces repeat visits. Next hashed files: `public, max-age=31536000, immutable`. Overwritten files in `/public/images` should not use `immutable` if filenames stay the same.

## Optimization

Order of leverage on this site:

1. Instant route feedback (`loading.tsx` + skeletons)
2. Prefetch likely next pages (nav, CTAs, case-study cards)
3. Split heavy below-fold JS
4. HTTP cache + `staleTimes` for back/forward and re-visits
5. Image `priority` only on LCP

## Anti-patterns

- Spinner in a `Suspense` fallback when the layout is known
- `lazy()` on the first screen the user sees
- New `fetch` in a client page for data already imported from `constants/`
- Prefetch loops (same href on every mousemove — the inflight set exists to prevent this)
- Claiming Lighthouse scores that were not measured on that URL
- Publishing geo-bypass query keys for shop.huber-se.com
