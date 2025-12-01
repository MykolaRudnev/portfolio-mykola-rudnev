import React from 'react';
import { recommendations } from '../constants';
import GlassCard from './ui/GlassCard';
import { FaQuoteLeft, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Recommendations: React.FC = () => {
  return (
    <section id="Recommendations" className="py-20 relative bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center">Recommendations</h2>
            <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations.map((rec, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="h-full"
                    >
                        <GlassCard className="p-8 h-full flex flex-col" hoverEffect>
                            <FaQuoteLeft className="text-3xl text-cyan-500/30 mb-6" />
                            
                            <p className="text-gray-300 leading-relaxed mb-8 flex-grow italic text-sm md:text-base">
                                "{rec.text}"
                            </p>
                            
                            <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                                <div>
                                    <h4 className="font-bold text-white">{rec.name}</h4>
                                    <p className="text-cyan-400 text-xs mt-1">{rec.role}</p>
                                </div>
                                <a 
                                    href={rec.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 text-gray-400 hover:text-white transition-colors"
                                    aria-label={`LinkedIn profile of ${rec.name}`}
                                >
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Recommendations;
