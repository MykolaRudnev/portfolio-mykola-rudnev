import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppShell } from "./components/layout/AppShell"
import { RecaptchaWrapper } from "./components/ui/RecaptchaWrapper"
import { AudienceRouter } from "./pages/AudienceRouter"
import { FrontendDeveloperPage } from "./pages/FrontendDeveloperPage"
import { MagentoHyvaSupportPage } from "./pages/MagentoHyvaSupportPage"
import { PricingPage } from "./pages/PricingPage"
import { EmergencySupportPage } from "./pages/EmergencySupportPage"
import { ContactPage } from "./pages/ContactPage"
import { CaseStudiesPage } from "./pages/CaseStudiesPage"
import { CaseStudyDetailPage } from "./pages/CaseStudyDetailPage"
import { ROUTES } from "./constants/routes"

function App() {
  return (
    <RecaptchaWrapper>
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route path={ROUTES.home} element={<AudienceRouter />} />
            <Route path={ROUTES.frontendDeveloper} element={<FrontendDeveloperPage />} />
            <Route path={ROUTES.magentoSupport} element={<MagentoHyvaSupportPage />} />
            <Route path={ROUTES.pricing} element={<PricingPage />} />
            <Route path={ROUTES.emergencySupport} element={<EmergencySupportPage />} />
            <Route path={ROUTES.contact} element={<ContactPage />} />
            <Route path={ROUTES.caseStudies} element={<CaseStudiesPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecaptchaWrapper>
  )
}

export default App
