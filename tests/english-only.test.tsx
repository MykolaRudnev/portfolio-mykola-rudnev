import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { PricingPage } from "../pages/PricingPage"
import { MagentoHyvaSupportPage } from "../pages/MagentoHyvaSupportPage"
import { projects } from "../constants"

const POLISH_UI_PATTERNS = [
  /Wyślij/i,
  /Formularz/i,
  /Audyt/i,
  /W czym/i,
  /Imię/i,
  /Porównanie/i,
  /Stałe wsparcie/i,
]

describe("English-only UI", () => {
  it("renders Pricing page without Polish UI strings", () => {
    const { container } = render(
      <MemoryRouter>
        <PricingPage />
      </MemoryRouter>
    )
    const text = container.textContent ?? ""
    for (const pattern of POLISH_UI_PATTERNS) {
      expect(text).not.toMatch(pattern)
    }
    expect(screen.getByRole("heading", { name: /Engagement models/i })).toBeInTheDocument()
  })

  it("renders Magento support page without Polish UI strings", () => {
    const { container } = render(
      <MemoryRouter>
        <MagentoHyvaSupportPage />
      </MemoryRouter>
    )
    const text = container.textContent ?? ""
    for (const pattern of POLISH_UI_PATTERNS) {
      expect(text).not.toMatch(pattern)
    }
  })

  it("lists 21 portfolio projects in constants", () => {
    expect(projects).toHaveLength(21)
  })
})
