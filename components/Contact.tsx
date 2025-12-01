import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import GlassCard from './ui/GlassCard';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="Contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Get in Touch</h2>
        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-12"></div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <GlassCard className="p-8 md:p-12" hoverEffect>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-8">
                        {/* Email */}
                        <div className="flex items-center group">
                            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mr-5 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                                <FaEnvelope className="text-xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-white mb-1">Email</h3>
                                <a href="mailto:rudnevmykola@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">rudnevmykola@gmail.com</a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center group">
                            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mr-5 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                                <FaPhone className="text-xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-white mb-1">Phone</h3>
                                <a href="tel:+48790240418" className="text-gray-300 hover:text-cyan-400 transition-colors">790240418</a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center group">
                            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mr-5 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                                <FaMapMarkerAlt className="text-xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-white mb-1">Location</h3>
                                <p className="text-gray-300">Lublin, Poland</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* LinkedIn */}
                        <div className="flex items-center group">
                            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mr-5 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                                <FaLinkedin className="text-xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-white mb-1">LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/mykola-rudnev-1525a5145/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">Connect with me</a>
                            </div>
                        </div>

                        {/* GitHub */}
                        <div className="flex items-center group">
                            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mr-5 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                                <FaGithub className="text-xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-white mb-1">GitHub</h3>
                                <a href="https://github.com/MykolaRudnev" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">View my projects</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center border-t border-white/10 pt-8">
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                    </p>
                </div>
            </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
