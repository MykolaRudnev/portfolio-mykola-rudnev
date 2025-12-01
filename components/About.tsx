import React from 'react';
import GlassCard from './ui/GlassCard';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="About" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-12"></div>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <GlassCard className="p-8 md:p-12" hoverEffect>
                <div className="flex flex-col gap-6 text-center md:text-left">
                    <p className="text-lg text-gray-300 leading-relaxed">
                        With nearly five years of front-end experience, I specialize in <strong className="text-white">TypeScript, React.js, and Magento 2</strong>, focusing on building responsive websites that elevate user experience.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I’m committed to learning, growing, and ready to tackle new challenges on my journey to becoming a senior developer. Outside of coding, I’m passionate about cryptocurrency, music, and anime.
                    </p>
                </div>
            </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
export default About;