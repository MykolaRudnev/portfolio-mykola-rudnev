import React, { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import Footer from "../Footer"

export function LoadingFallback() {
  return (
    <div className="flex items-center justify-center w-full py-32">
      <div className="relative">
        <motionFallbackRing />
        <motionFallbackDot />
      </div>
    </div>
  )
}

function motionFallbackRing() {
  return (
    <div className="w-16 h-16 rounded-full border-4 border-white/10 border-t-cyan-500 animate-spin" />
  )
}

function motionFallbackDot() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-2 h-2 bg-cyan-500 rounded-full blur-[4px] animate-pulse" />
    </div>
  )
}

export function AppShell() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px]" />
      </div>
      <Navbar />
      <main className="relative z-10 flex flex-col">
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
