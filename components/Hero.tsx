import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import GlassCard from './ui/GlassCard';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="Home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[100px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Profile Info */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8 relative"
            >
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-glass-100 backdrop-blur-md group">
                     <img 
                        src="/images/mrudnev-avatar.png" 
                        onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/mrudnev/300/300' }}
                        alt="Mykola Rudnev" 
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" 
                    />
                 </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Mykola <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Rudnev</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-6">
                Front-End Developer
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                 Specializing in Magento 2, React.js, Gatsby.js, and Next.js
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                 <a href="/CV-Front-end__Developer_Mykola_Rudnev.pdf" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-lg hover:shadow-cyan-500/20">
                    <FaFileAlt /> Resume
                 </a>
                 <a href="https://github.com/MykolaRudnev" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-glass-200 border border-glass-border text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
                    <FaGithub /> GitHub
                 </a>
                 <a href="https://www.linkedin.com/in/mykola-rudnev-1525a5145/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-glass-200 border border-glass-border text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
                    <FaLinkedin /> LinkedIn
                 </a>
              </div>
            </motion.div>
        </div>

        {/* Right Column: About Me */}
        <div id="About" className="scroll-mt-32">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <GlassCard className="p-8 md:p-10" hoverEffect>
                    <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-3">
                        <span className="w-8 h-1 bg-cyan-400 rounded-full inline-block"></span>
                        About Me
                    </h3>
                    <div className="flex flex-col gap-6 text-gray-200 leading-relaxed text-lg">
                        <p>
                            Front-End Developer with <strong className="text-white">5+ years of experience</strong> building high-performance web applications and e-commerce platforms across Europe. Specialized in <strong className="text-white">React.js, Next.js, and TypeScript</strong>, with strong expertise in Magento 2.
                        </p>
                        <p>
                            Skilled at improving performance, SEO, and user experience, delivering measurable business results such as <strong className="text-white">50% traffic growth</strong> and faster conversion flows. I'm committed to driving technical excellence and tackling new challenges in modern web development.
                        </p>
                    </div>
                </GlassCard>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;