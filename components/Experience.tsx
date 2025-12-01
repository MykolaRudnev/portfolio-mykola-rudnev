import React from 'react';
import { workExperiences, education } from '../constants';
import GlassCard from './ui/GlassCard';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Experience: React.FC = () => {
    return (
        <section id="Experience" className="py-20 relative">
            {/* Background gradient for depth */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-center">Career Path</h2>
                <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-12"></div>

                <div className="space-y-8">
                    {/* Work Experience */}
                    {workExperiences.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlassCard className="p-0 overflow-hidden">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 bg-white/5 p-6 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-glass-border">
                                        <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-glass-border bg-white flex items-center justify-center">
                                            <img
                                                src={job.logo}
                                                alt={job.company}
                                                className="w-full h-full object-cover"
                                                onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/company/100/100' }}
                                            />
                                        </div>
                                        <h3 className="font-bold text-lg">{job.company}</h3>
                                        <p className="text-cyan-400 text-sm font-medium mt-1">{job.position}</p>
                                        <span className="inline-block mt-3 px-3 py-1 bg-white/10 rounded-full text-xs text-gray-400">
                                    {job.period}
                                </span>
                                    </div>
                                    <div className="md:w-2/3 p-6">
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Key Responsibilities</h4>
                                        <ul className="space-y-3">
                                            {job.responsibilities.map((resp, i) => {
                                                const isHeader = resp.trim().endsWith(':');
                                                return (
                                                    <li
                                                        key={i}
                                                        className={`flex gap-3 text-sm leading-relaxed ${isHeader ? 'font-bold text-white mt-4 mb-2' : 'text-gray-300'}`}
                                                    >
                                                        {!isHeader && <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />}
                                                        {resp}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}

                    {/* Education Divider */}
                    <div className="flex items-center gap-4 py-8 opacity-50">
                        <div className="h-px bg-glass-border flex-grow"></div>
                        <span className="text-xl text-cyan-500"><FaGraduationCap /></span>
                        <div className="h-px bg-glass-border flex-grow"></div>
                    </div>

                    {/* Education */}
                    {education.map((edu, index) => (
                        <motion.div
                            key={`edu-${index}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <GlassCard className="p-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 hidden sm:flex items-center justify-center rounded-xl bg-white/5 text-cyan-500 text-3xl">
                                        <FaGraduationCap />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{edu.institution}</h3>
                                        <p className="text-cyan-400 font-medium">{edu.degree}</p>
                                        <p className="text-sm text-gray-400 mt-1">{edu.period}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;