// components/ParticleAnimation.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

interface ParticleAnimationProps {
    width: number;
    height: number;
}

const ParticleAnimation: React.FC<ParticleAnimationProps> = ({ width, height }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = width;
        canvas.height = height;

        const particleCount = 80;
        const maxDistance = 100;

        const newParticles: Particle[] = Array.from({ length: particleCount }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            radius: Math.random() * 2 + 1
        }));

        setParticles(newParticles);

        const animationFrame = requestAnimationFrame(function animate() {
            ctx.clearRect(0, 0, width, height);

            newParticles.forEach((particle, i) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > height) particle.vy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.fill();

                for (let j = i + 1; j < newParticles.length; j++) {
                    const dx = newParticles[j].x - particle.x;
                    const dy = newParticles[j].y - particle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(newParticles[j].x, newParticles[j].y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        });

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [width, height]);

    return <canvas ref={canvasRef} className="absolute inset-0" />;
};

export default ParticleAnimation;