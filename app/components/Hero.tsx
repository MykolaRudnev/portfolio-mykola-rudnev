import Image from 'next/image'
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import React from "react";

export default function Hero() {
    return (
        <section id="hero" className="bg-gradient-to-r from-primary to-secondary text-white pb-10 pt-20 md:py-20">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4">Mykola Rudnev</h1>
                    <h2 className="text-3xl mb-6">Front-End Developer</h2>
                    <p className="text-xl mb-8">Specializing in Magento 2 and React.js, Gatsby.js, Next.js </p>
                    <div className="flex justify-center md:space-x-4">
                        <Image
                            src="/images/mrudnev-avatar.png"
                            alt="Mykola Rudnev"
                            width={300}
                            height={300}
                            priority
                            className="rounded-full mx-auto border-4 border-white shadow-lg"
                        />
                    </div>
                </div>
                <div className="w-full max-w-4xl flex flex-wrap gap-9 md:gap-0 justify-center md:space-x-4">
                    <a href="/CV-Front-end__Developer_Mykola_Rudnev.pdf"
                       className="bg-white text-blue-500 px-6 py-2 rounded-full flex items-center hover:bg-gray-200 transition-colors">
                        <FaFileAlt className="mr-2"/> Resume
                    </a>
                    <a href="https://github.com/MykolaRudnev" target="_blank" rel="noopener noreferrer"
                       className="bg-white text-blue-500 px-6 py-2 rounded-full flex items-center hover:bg-gray-200 transition-colors">
                        <FaGithub className="mr-2"/> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/mykola-rudnev-1525a5145/" target="_blank"
                       rel="noopener noreferrer"
                       className="bg-white text-blue-500 px-6 py-2 rounded-full flex items-center hover:bg-gray-200 transition-colors">
                        <FaLinkedin className="mr-2"/> LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}