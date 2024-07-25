'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaGlobe, FaMagento, FaJs, FaCode, FaJsSquare, FaDocker, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { projects, Project } from '../data/projectsData';
import {SiStyledcomponents, SiTailwindcss, SiTypescript} from "react-icons/si";

const Slider = dynamic(() => import('react-slick').then((mod) => mod.default), {
    ssr: false,
});

const ProjectCard: React.FC<Project> = ({ name, description, link, image, technologies = [] }) => (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-64 relative">
            <div className="absolute inset-0 overflow-y-auto">
                <div className="relative h-full min-h-[100vh]">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'none', objectPosition: 'top' }}
                    />
                </div>
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-primary">{name}</h3>
            <p className="text-gray-600 mb-4 flex-grow line-clamp-3 h-[72px]">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies && technologies.map((tech, index) => {
                    let Icon;
                    switch (tech) {
                        case 'Magento 2': Icon = FaMagento; break;
                        case 'JavaScript': Icon = FaJs; break;
                        case 'XML': Icon = FaCode; break;
                        case 'jQuery': Icon = FaJsSquare; break;
                        case 'Docker': Icon = FaDocker; break;
                        case 'StyledComponents': Icon = SiStyledcomponents; break;
                        case 'TypeScript': Icon = SiTypescript; break;
                        case 'Tailwindcss': Icon = SiTailwindcss; break;
                        default: Icon = FaCode;
                    }
                    return (
                        <div key={index} className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                            <Icon className="text-primary mr-1 text-sm" />
                            <span className="text-xs">{tech}</span>
                        </div>
                    );
                })}
            </div>
            {link ? <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors text-sm"
            >
                <FaGlobe className="mr-2"/> View Project
            </a> : <div className="min-h-[36px]"> </div>}

        </div>
    </div>
);

export default function Projects() {
    const [isClient, setIsClient] = useState(false);
    const [containerDimensions, setContainerDimensions] = useState({width: 0, height: 0});
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsClient(true);
        const updateDimensions = () => {
            if (containerRef.current) {
                setContainerDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2,
                }
            }
        ]
    };

    return (
        <section id="projects"
                 className="py-20 relative overflow-hidden  min-h-screen flex items-center"
                 ref={containerRef}>

            <div className="container mx-auto px-6 relative z-10 w-full">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>
                {isClient ? (
                    <Slider {...settings}>
                        {projects.map((project, index) => (
                            <div key={index} className="px-2 pb-4">
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projects.slice(0, 2).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}