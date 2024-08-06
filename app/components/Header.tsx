'use client'
import { useScrollTo } from '../hooks/useScrollTo'
import React from "react";

export default function Header() {
    const scrollTo = useScrollTo()

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <button onClick={() => scrollTo('hero')} className="text-xl font-bold text-primary">
                    <svg width="45" height="35" viewBox="0 0 45 35" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#0d47a1" stopOpacity="1"/>
                                <stop offset="100%" stopColor="#1de2ff" stopOpacity="1"/>
                            </linearGradient>
                        </defs>
                        <text x="0" y="30" fontFamily="var(--font-expletus-sans)" fontSize="26" fill="url(#grad1)">MR</text>
                    </svg>
                </button>

                <div className="flex items-center space-x-4">
                    <button onClick={() => scrollTo('about')} className="text-gray-800 hover:text-primary ">
                        About
                    </button>
                    <button onClick={() => scrollTo('skills')} className="text-gray-800 hover:text-primary ">
                        Skills
                    </button>
                    <button onClick={() => scrollTo('projects')} className="text-gray-800 hover:text-primary ">
                        Projects
                    </button>
                    <button onClick={() => scrollTo('contact')} className="text-gray-800 hover:text-primary ">
                        Contact
                    </button>
                </div>
            </nav>
        </header>
    )
}