import React from 'react';
import { technicalSkills, softSkills, languages, courses } from '../constants';
import GlassCard from './ui/GlassCard';
import { FaCertificate } from 'react-icons/fa';

const Skills: React.FC = () => {
  return (
    <section id="Skills" className="py-20 relative bg-paper-2">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Technical Proficiency</h2>

        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
                {/* Tech Stack */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 pl-2 border-l-4 border-accent">Technical Stack</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                        {technicalSkills.map((skill) => (
                            <GlassCard key={skill.name} className="flex flex-col items-center justify-center p-4 hover:border-accent/50 transition-colors" hoverEffect>
                                <div className="text-4xl mb-3" style={{ color: skill.color }}>
                                    <skill.icon />
                                </div>
                                <span className="text-xs text-center text-ink-2 font-medium">{skill.name}</span>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Courses */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 pl-2 border-l-4 border-accent">Courses & Certifications</h3>
                     <div className="grid md:grid-cols-2 gap-4">
                        {courses.map((course, idx) => (
                            <GlassCard key={idx} className="p-4 flex items-start gap-3" hoverEffect>
                                <div className="mt-1 text-accent">
                                    <FaCertificate />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-ink">{course.name}</h4>
                                    <p className="text-xs text-ink-2 mt-1">{course.provider} • {course.date}</p>
                                </div>
                            </GlassCard>
                        ))}
                     </div>
                </div>
            </div>

            <div className="space-y-12">
                 {/* Soft Skills */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 pl-2 border-l-4 border-accent">Soft Skills</h3>
                    <div className="space-y-4">
                        {softSkills.map((skill) => (
                            <GlassCard key={skill.name} className="flex items-center gap-4 p-4" hoverEffect>
                                <div className="p-2 rounded-lg bg-paper-2" style={{ color: skill.color }}>
                                    <skill.icon size={24} />
                                </div>
                                <span className="text-sm font-medium">{skill.name}</span>
                            </GlassCard>
                        ))}
                    </div>
                </div>
                
                {/* Languages */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 pl-2 border-l-4 border-pink-500">Languages</h3>
                    <div className="space-y-4">
                        {languages.map((lang) => (
                            <GlassCard key={lang.language} className="flex items-center justify-between p-4" hoverEffect>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl" role="img" aria-label={lang.language}>{lang.flag}</span>
                                    <span className="text-sm font-bold">{lang.language}</span>
                                </div>
                                <span className="text-xs text-ink-2 font-medium bg-paper-3 px-2 py-1 rounded-full">{lang.proficiency}</span>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;