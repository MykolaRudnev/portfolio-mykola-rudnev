import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-glass-border bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
           <div className="text-xl font-bold tracking-wider text-white mb-2">
            MR<span className="text-cyan-400">.</span>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Mykola Rudnev. All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
            <a href="mailto:rudnevmykola@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <FaEnvelope /> rudnevmykola@gmail.com
            </a>
            <a href="tel:+48790240418" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <FaPhoneAlt /> +48 790 240 418
            </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
            <a href="https://github.com/MykolaRudnev" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors text-gray-400">
                <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mykola-rudnev-1525a5145/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-blue-600/20 hover:text-blue-500 transition-colors text-gray-400">
                <FaLinkedin size={20} />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;