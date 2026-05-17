---
name: Portfolio Overhaul
overview: Przebuduj portfolio mrudnev.com z jednorodnego SPA na wielostronicową maszynę do rozdzielania dwóch grup odbiorców (rekruterzy EN + klienci Magento/Hyvä PL), zgodnie z rekomendacjami raportu deep-research. Zostajemy na Vite + dodajemy react-router, Tailwind via npm, formularze z reCAPTCHA v3, Resend przez serverless.
todos:
  - id: live-sync
    content: "Zsynchronizuj live deployment z aktualnym repo (absolutny pierwszy krok): sprawdź rozbieżności hero, bio, doświadczenie, stopka, meta tagi i napraw wdrożenie"
    status: pending
  - id: deps
    content: "Zainstaluj nowe zależności: react-router-dom, react-hook-form, zod, react-google-recaptcha-v3, tailwindcss, @tailwindcss/vite"
    status: pending
  - id: tailwind-migration
    content: "Migracja Tailwind: stwórz tailwind.config.ts, index.css, dodaj plugin do vite.config.ts, usuń CDN z index.html"
    status: pending
  - id: routing-setup
    content: "Skonfiguruj react-router-dom w App.tsx: BrowserRouter + Routes dla wszystkich 8 tras"
    status: pending
  - id: navbar-update
    content: "Przepisz Navbar.tsx: wielostronicowe linki (Link) zamiast scroll-spy, mobilne menu bez zmian"
    status: pending
  - id: root-page
    content: "Stwórz pages/AudienceRouter.tsx: hero (1 zdanie), dwa duże bloki wyboru odbiorcy, trust strip (stack badges), 3 dowody, blok 'Current availability', mini-experience"
    status: pending
  - id: frontend-dev-page
    content: "Stwórz pages/FrontendDeveloperPage.tsx (EN): stack, fit cases, experience, case studies grid, rekomendacje, CTA: Book a screening call / Download CV"
    status: pending
  - id: magento-page
    content: "Stwórz pages/MagentoHyvaSupportPage.tsx (PL): usługi, 3 scenariusze bólu, jak pracuję, modele współpracy, proof blocks (support/performance/migration/checkout/CMS), formularz kwalifikujący"
    status: pending
  - id: pricing-page
    content: "Stwórz pages/PricingPage.tsx (PL): 3 modele (Audyt / Sprint / Stałe wsparcie), tabela porównawcza, CTA formularz"
    status: pending
  - id: emergency-page
    content: "Stwórz pages/EmergencySupportPage.tsx (PL): typowe przypadki, lista co wysłać w pierwszej wiadomości, jak wygląda pierwszy krok, formularz awaryjny"
    status: pending
  - id: contact-page
    content: "Stwórz pages/ContactPage.tsx: dual-tab (Recruiter EN / Client PL) z react-hook-form + zod, osobne pola wg formularzy z raportu"
    status: pending
  - id: case-studies
    content: "Stwórz pages/CaseStudiesPage.tsx + pages/CaseStudyDetailPage.tsx z dynamicznym routingiem /case-studies/:slug; template z sekcjami: Punkt wyjścia → Co zrobiłem → Efekt → BEFORE/AFTER screenshoty → Metryki (LCP/CLS/INP/konwersja/delivery)"
    status: pending
  - id: case-studies-content
    content: "Napisz 2 pierwsze case studies wg szablonu z raportu: problem biznesowy, zakres, działania, wynik w języku biznesowym + metryki; dane BEFORE/AFTER tylko te, które można obronić"
    status: pending
  - id: recaptcha
    content: "Integracja reCAPTCHA v3: GoogleReCaptchaProvider w root, useGoogleReCaptcha hook w formularzach, token w POST body"
    status: pending
  - id: serverless-api
    content: "Stwórz api/contact.ts (Vercel Serverless): reCAPTCHA weryfikacja + Resend email sending + vercel.json"
    status: pending
  - id: seo-per-page
    content: "Per-page SEO: dynamiczne document.title + meta description per strona zgodnie z tabelą meta tagów z raportu; zaktualizuj JSON-LD w index.html (Person + ProfessionalService)"
    status: pending
  - id: structured-data
    content: "Rozszerz structured data per route: Person na stronach osobistych, ProfessionalService na /magento-hyva-support, BreadcrumbList na /case-studies/:slug, ItemList na /case-studies"
    status: pending
  - id: hreflang
    content: "Dodaj hreflang i lang attribute per strona: EN dla /, /frontend-developer, /contact; PL dla /magento-hyva-support, /pricing, /emergency-support; brak mieszania języków w obrębie jednej trasy"
    status: pending
  - id: sitemap-update
    content: Rozszerz sitemap.xml o wszystkie nowe trasy z aktualnym lastmod; wygeneruj dynamicznie lub ręcznie zsynchronizuj z listą tras
    status: pending
  - id: event-tracking
    content: "Dodaj event tracking w Umami (lub custom events): kliknięcia w każde CTA, wysyłki formularzy (recruiter/client/emergency), źródła ruchu per strona"
    status: pending
  - id: lead-workflow
    content: "Przygotuj pipeline leadów w Notion lub CSV wg schematu z raportu: lead_id, source, audience, pain_point, service_fit, next_action, next_followup_at, status; ustal rytm follow-upów (dzień 0/3/7/14/30)"
    status: pending
isProject: false
---

# Portfolio Overhaul – Plan Implementacji

## Stack zmian
- **Routing:** `react-router-dom` v7 (nowe strony bez migracji do Next.js)
- **Tailwind:** przeniesienie z CDN → npm (`tailwindcss` + `@tailwindcss/vite`)
- **Forms:** `react-hook-form` + `zod` + Google reCAPTCHA v3
- **Email:** Resend via Vercel Serverless Function (`api/contact.ts`)
- **Animacje / ikony:** framer-motion + react-icons (bez zmian)

## Architektura routingu

```
/                        → AudienceRouter (nowy root page)
/frontend-developer      → FrontendDeveloperPage (EN)
/magento-hyva-support    → MagentoHyvaSupportPage (PL)
/pricing                 → PricingPage (PL)
/emergency-support       → EmergencySupportPage (PL)
/case-studies            → CaseStudiesListPage
/case-studies/:slug      → CaseStudyDetailPage
/contact                 → ContactPage
```

## Struktura plików (nowe / zmienione)

- [`App.tsx`](App.tsx) – zamiana na `<RouterProvider>` lub `<BrowserRouter>` z `<Routes>`
- [`components/Navbar.tsx`](components/Navbar.tsx) – nowa nawigacja wielostronicowa (linki zamiast scroll-spy)
- [`components/Hero.tsx`](components/Hero.tsx) – pozostaje dla `/frontend-developer`, root dostaje nowy `AudienceRouter`
- [`pages/`](pages/) – nowy folder z plikami stron
- [`components/forms/`](components/forms/) – `RecruiterForm.tsx`, `ClientForm.tsx`, `EmergencyForm.tsx`
- [`components/ui/RecaptchaWrapper.tsx`](components/ui/RecaptchaWrapper.tsx) – wrapper na `react-google-recaptcha`
- [`api/contact.ts`](api/contact.ts) – Vercel Serverless Function (Resend + reCAPTCHA weryfikacja)
- [`tailwind.config.ts`](tailwind.config.ts) – przeniesienie konfiguracji z `index.html`
- [`constants/`](constants/) – podział `constants.tsx` na `projects.ts`, `experience.ts`, `case-studies.ts`, itd.

## Kluczowe strony i ich zawartość

### `/` – Audience Router
Krótkie hero (1 zdanie), dwa duże bloki wyboru:
- **"I'm hiring a Front-end Developer"** → `/frontend-developer`
- **"Need Magento 2 / Hyvä Support"** → `/magento-hyva-support`

Trust strip (stack badges), 3 dowody, blok "Current availability", mini-experience.

### `/frontend-developer` (EN)
Senior Front-end Developer landing: stack, fit cases, experience summary, case studies grid, 2–3 rekomendacje, CTA: `Book a screening call` / `Download CV`.

### `/magento-hyva-support` (PL)
Usługa Magento 2 / Hyvä: lista usług, typowe sytuacje (3 scenariusze), jak pracuję, modele współpracy, formularz kwalifikujący leady z reCAPTCHA.

### `/pricing` (PL)
3 modele: Audyt, Sprint, Stałe wsparcie. Tabela porównawcza + CTA formularz.

### `/emergency-support` (PL)
Prosta strona wysokiej intencji: co wysłać, jak wygląda pierwszy krok, formularz awaryjny z reCAPTCHA.

### `/case-studies` + `/case-studies/:slug`
Lista projektów (z `constants`) + strona szczegółu z templatem: Punkt wyjścia → Co zrobiłem → Efekt → Metryki.

### `/contact`
Dual-tab formularz: zakładka **EN** (Recruiter Form) / **PL** (Client Form), oba z reCAPTCHA v3.

## reCAPTCHA v3 – implementacja

- Pakiet: `react-google-recaptcha-v3`
- `GoogleReCaptchaProvider` wrapuje root app (klucz z `VITE_RECAPTCHA_SITE_KEY`)
- Hook `useGoogleReCaptcha` → `executeRecaptcha('contact_form')` → token wysyłany do `api/contact.ts`
- Serverless veryfikuje token przez `https://www.google.com/recaptcha/api/siteverify` (secret z `RECAPTCHA_SECRET_KEY`)
- Score threshold: `>= 0.5` → wysyłka przez Resend; poniżej → odrzucenie z błędem

## Resend + Vercel Serverless

Plik `api/contact.ts` (Vercel Edge Function):
1. Odbiera POST z danymi formularza + tokenem reCAPTCHA
2. Weryfikuje token (Google API)
3. Wysyła email przez Resend (`RESEND_API_KEY` w env)
4. Zwraca `200` lub `400/500` z komunikatem

`vercel.json` – konfiguracja buildCommand Vite + funkcje w `api/`.

## Tailwind – migracja z CDN

- Zainstalować `tailwindcss`, `@tailwindcss/vite`
- Dodać plugin do `vite.config.ts`
- Przenieść konfigurację (kolory glass, fonty, gradients) z `index.html` do `tailwind.config.ts`
- Stworzyć `index.css` z `@tailwind base/components/utilities`
- Usunąć `<script src="https://cdn.tailwindcss.com">` z `index.html`

## Nowe zależności do zainstalowania

```bash
yarn add react-router-dom react-hook-form zod react-google-recaptcha-v3 resend
yarn add -D tailwindcss @tailwindcss/vite
```

## SEO – aktualizacje w granicach Vite SPA

- Zaktualizować `<title>` i `<meta description>` w `index.html` na nowe copy z raportu
- Dodać dynamiczne `document.title` + `meta[name=description]` per strona (w każdej page component, wg tabeli meta tagów z raportu)
- Rozszerzyć `sitemap.xml` o wszystkie nowe trasy z aktualnym `lastmod`
- Zaktualizować JSON-LD w `index.html` (Person + ProfessionalService dla Magento)
- Per-route structured data: `BreadcrumbList` dla `/case-studies/:slug`, `ItemList` dla `/case-studies`, `ProfessionalService` na `/magento-hyva-support`

## Hreflang + strategia językowa

| Trasa | Lang | hreflang |
|---|---|---|
| `/` | EN | `en` |
| `/frontend-developer` | EN | `en` |
| `/magento-hyva-support` | PL | `pl` |
| `/pricing` | PL | `pl` |
| `/emergency-support` | PL | `pl` |
| `/contact` | EN/PL | brak mieszania w obrębie jednej trasy |
| `/case-studies/:slug` | wg case'u | `en` lub `pl` |

Implementacja: `<html lang="...">` ustawiany per strona via `useEffect` + `<link rel="alternate" hreflang="...">` w `<head>`.

## Event tracking

Umami custom events (lub `window.umami.track`):

| Event | Trigger |
|---|---|
| `cta_frontend_hire` | klik "Go to Front-end Developer Page" |
| `cta_magento_support` | klik "Go to Magento / Hyvä Support Page" |
| `cta_book_call` | klik "Book a screening call" |
| `cta_download_cv` | klik "Download CV" |
| `cta_send_brief` | klik "Wyślij brief" |
| `cta_emergency` | klik "Wyślij pilne zgłoszenie" |
| `form_submit_recruiter` | wysłanie formularza rekrutera |
| `form_submit_client` | wysłanie formularza klienta Magento |
| `form_submit_emergency` | wysłanie formularza awaryjnego |

## Case studies – wymagana struktura

Każdy case study (MDX lub dane w `constants/case-studies.ts`) musi zawierać:

1. **Szybki opis**: klient/branża, typ projektu, stack, model współpracy, rok
2. **Punkt wyjścia**: problem biznesowy i techniczny (3–5 zdań)
3. **Co zrobiłem**: 3–6 konkretnych bloków (analiza, implementacja, performance, UX, współpraca)
4. **Efekt**: wynik w języku biznesowym i technicznym
5. **BEFORE/AFTER**: screenshoty (PDP/PLP/mobile/desktop/Lighthouse) — tylko te, które można obronić
6. **Metryki**: LCP, CLS, INP, konwersja, czas realizacji, liczba komponentów, czas supportu
7. **Moja rola**: jednoznaczna informacja za co odpowiadałeś samodzielnie

## Synchronizacja live → repo (krok zerowy)

Przed każdym innym działaniem:
- [ ] Sprawdzić rozbieżności: hero text, bio (lata doświadczenia), pozycja, doświadczenie Lufed IT / Cloudflight / Hyvä
- [ ] Sprawdzić meta tagi live vs repo (title, description, og:title)
- [ ] Sprawdzić stopkę (rok copyright)
- [ ] Wdrożyć aktualną wersję repo na produkcję

## Lead management pipeline

Notion lub CSV z kolumnami (wg raportu):
`lead_id`, `date_added`, `source`, `audience`, `company`, `contact_name`, `contact_role`, `website_url`, `platform`, `country`, `language`, `pain_point`, `service_fit`, `opportunity_score`, `last_contact_at`, `next_action`, `next_followup_at`, `status`, `notes`, `case_study_used`, `outcome_reason`

**Rytm follow-upów:**
| Dzień | Kanał | Cel |
|---|---|---|
| 0 | email / formularz / LinkedIn | pierwszy kontakt |
| 3 | krótki follow-up | przypomnienie z value-add |
| 7 | drugi follow-up | konkret: audyt, call, diagnoza |
| 14 | ostatni follow-up klasyczny | zamknięcie pętli |
| 30 | re-activation | nowy case, dostępność, nowa potrzeba |
