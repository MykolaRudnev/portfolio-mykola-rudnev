import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AudienceRouter } from "../pages/AudienceRouter"

describe("AudienceRouter", () => {
  it("renders personal intro and audience path cards without tech logos", () => {
    render(
      <MemoryRouter>
        <AudienceRouter />
      </MemoryRouter>
    )

    expect(screen.getByRole("heading", { name: /Mykola/i })).toBeInTheDocument()
    expect(screen.getByText(/Profile:/i)).toBeInTheDocument()
    expect(screen.getByText(/What I do now:/i)).toBeInTheDocument()
    expect(screen.getByText(/What I did before:/i)).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /How can I help you\?/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /Front-end Developer page/i })).toHaveAttribute(
      "href",
      "/frontend-developer"
    )
    expect(screen.getByRole("link", { name: /Magento \/ Hyvä support/i })).toHaveAttribute(
      "href",
      "/magento-hyva-support"
    )
  })
})
