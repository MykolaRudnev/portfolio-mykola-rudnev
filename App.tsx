import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load heavy sections to improve initial load performance
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Recommendations = lazy(() => import('./components/Recommendations'));
const Contact = lazy(() => import('./components/Contact'));

// Custom Loading Fallback Component
const LoadingFallback = () => (
  <div className="flex items-center justify-center w-full py-32">
    <div className="relative">
      <div className="w-16 h-16 rounded-full border-4 border-white/10 border-t-cyan-500 animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-cyan-500 rounded-full blur-[4px] animate-pulse"></div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px]" />
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px]" />
      </div>
      
      <Navbar />
      
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        
        <Suspense fallback={<LoadingFallback />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Recommendations />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>
      
      <Footer />

    </div>
  );
}

export default App;
