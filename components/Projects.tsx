"use client"

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../constants';
import GlassCard from './ui/GlassCard';
import { FaExternalLinkAlt } from 'react-icons/fa';

const categories = ["All", "Magento 2", "React/Next", "Shopify", "WordPress"];
const INITIAL_PROJECTS_COUNT = 999;

const Projects: React.FC = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [showAll, setShowAll] = useState(false);

    const filteredProjects = useMemo(() => {
        if (activeTab === "All") return projects;
        return projects.filter(p => {
            if (activeTab === "Magento 2") return p.technologies.some(t => t.toLowerCase().includes("magento"));
            if (activeTab === "React/Next") return p.technologies.some(t => t.toLowerCase().includes("react") || t.toLowerCase().includes("next") || t.toLowerCase().includes("gatsby"));
            if (activeTab === "Shopify") return p.technologies.some(t => t.toLowerCase().includes("shopify") || t.toLowerCase().includes("liquid"));
            if (activeTab === "WordPress") return p.technologies.some(t => t.toLowerCase().includes("wordpress"));
            return false;
        });
    }, [activeTab]);

    const displayedProjects = useMemo(() => {
        return showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_PROJECTS_COUNT);
    }, [filteredProjects, showAll]);

    const hasMoreProjects = filteredProjects.length > INITIAL_PROJECTS_COUNT;

    useEffect(() => {
        setShowAll(false);
    }, [activeTab]);

    return (
        <section id="Projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold mb-8">Selected Works</h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${
                                    activeTab === cat
                                        ? 'bg-ink text-paper border-white shadow-lg shadow-white/20'
                                        : 'bg-glass-100 text-ink-2 border-glass-border hover:bg-paper-3 hover:text-ink'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {displayedProjects.map((project, idx) => (
                            <motion.div
                                key={project.name + idx}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <GlassCard className="h-full flex flex-col group" hoverEffect>
                                    <div className="relative h-48 overflow-hidden rounded-t-2xl bg-paper-3">
                                        <img
                                            src={project.image}
                                            alt={`${project.name} - ${project.description.substring(0, 100)}`}
                                            width={800}
                                            height={600}
                                            loading="lazy"
                                            decoding="async"
                                            // Fallback for missing local images
                                            onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/${project.name.replace(/\s/g, '')}/800/600` }}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-paper text-ink rounded-full hover:scale-105 transition-transform flex items-center gap-2 font-medium">
                                                    Visit Site <FaExternalLinkAlt size={12} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                                        <p className="text-ink-2 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.technologies.map(tech => (
                                                <span key={tech} className="px-3 py-1 text-xs font-medium bg-paper-2 border border-rule rounded-full text-accent">
                                            {tech}
                                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {hasMoreProjects && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-3 rounded-full text-sm font-medium transition-all border bg-ink text-paper border-ink shadow-lg hover:scale-105"
                        >
                            {showAll ? 'See Less' : 'See More'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;