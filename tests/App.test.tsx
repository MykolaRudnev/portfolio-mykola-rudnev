import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { AudienceRouter } from "@/views/AudienceRouter"

describe("Home audience router", () => {
  it("renders senior positioning and path cards", () => {
    render(<AudienceRouter />)

    expect(screen.getByRole("heading", { name: /Mykola/i })).toBeInTheDocument()
    expect(screen.getByText(/What I did before:/i)).toBeInTheDocument()
    expect(screen.getByText(/I'm hiring a Front-end Developer/i)).toBeInTheDocument()
    expect(screen.getByText(/I need Magento 2 \/ Hyvä Support/i)).toBeInTheDocument()
  })
})
