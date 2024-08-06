'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import ParticleAnimation from './ParticleAnimation';
import LoadingSpinner from "@/app/components/LoadingSpinner";

const Projects = dynamic(() => import('./Projects'), {
    loading: () => <LoadingSpinner message="Loading projects..." />
});

const Contact = dynamic(() => import('./Contact'), {
    loading: () => <LoadingSpinner message="Loading contact..." />
});

export default function ProjectsAndContact() {
    const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const updateDimensions = useCallback(() => {
        if (containerRef.current) {
            setContainerDimensions({
                width: containerRef.current.offsetWidth,
                height: containerRef.current.offsetHeight
            });
        }
    }, []);

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [updateDimensions]);

    return (
        <div className="relative bg-gradient-to-r from-primary to-secondary" ref={containerRef}>
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