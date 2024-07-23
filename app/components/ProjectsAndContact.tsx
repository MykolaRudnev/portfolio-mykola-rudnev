// components/ProjectsAndContact.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Projects from './Projects';
import Contact from './Contact';
import ParticleAnimation from './ParticleAnimation';

export default function ProjectsAndContact() {
    const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                setContainerDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height
                });
            }
        });

        resizeObserver.observe(containerRef.current);

        return () => {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div className="py-20 relative bg-gradient-to-r from-primary to-secondary" ref={containerRef}>
            <ParticleAnimation
                width={containerDimensions.width}
                height={containerDimensions.height}
            />
            <div className="relative z-10">
                <Projects />
                <Contact />
            </div>
        </div>
    );
}