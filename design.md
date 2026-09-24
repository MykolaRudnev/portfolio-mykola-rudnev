# Design — Mykola Rudnev portfolio

Locked visual system. Pages share it. Copy, routes, and section order stay as they are.

## Genre

editorial

## Macrostructure family

- Marketing pages: Portfolio Grid — existing section order, paper cards, hairline rules
- Content pages: same type, colour, and buttons

## Theme

Warm cream paper, warm ink, one rust accent. No gradients, no glass, no pure black or pure white.

- `--color-paper` oklch(94.5% 0.028 88)
- `--color-paper-2` oklch(91.5% 0.032 86)
- `--color-ink` oklch(26% 0.028 55)
- `--color-ink-2` oklch(42% 0.022 58)
- `--color-rule` oklch(83% 0.026 80)
- `--color-accent` oklch(40% 0.095 42)
- `--color-focus` oklch(46% 0.11 42)

## Typography

- Display: Fraunces, weight 560, roman. Headings only.
- Body: Inter, weight 400.
- Display tracking: -0.02em

## Spacing

Existing Tailwind spacing. Named tokens live in `tokens.css`.

## Motion

- Easing: `--ease-out` cubic-bezier(0.16, 1, 0.3, 1)
- Reveal: the existing short fade on the home hero only
- Reduced motion: opacity only, already in `app/globals.css`

## Microinteractions stance

- Quiet hover: background or border shift, no scale, no glow
- Focus ring is instant, `--color-focus`

## CTA voice

- Primary: ink fill, cream label, pill
- Secondary: hairline border, ink label

## What pages MUST share

- Cream paper, warm ink, rust accent
- Fraunces headings, Inter body
- The same primary and secondary buttons
