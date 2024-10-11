import React from 'react';
import AnimatedSection from "@/app/components/AnimatedSection";

export default function About() {
    return (
        <section id="about" className="py-10 md:py-20 bg-gradient-to-r from-primary to-secondary  text-white relative overflow-hidden ">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            <div className="container mx-auto px-6 relative z-10 ">
                    <h2 className="text-4xl font-bold mb-8 text-center font-heading">About Me</h2>
                <div className="max-w-3xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out transform hover:-translate-y-1 card-hover-effect">
                    <p className="mb-6 text-lg leading-relaxed">
                        With nearly five years of front-end experience, I specialize in TypeScript, React.js, and Magento 2, focusing on building responsive websites that elevate user experience. I’m committed to learning, growing, and ready to tackle new challenges on my journey to becoming a senior developer. Outside of coding, I’m passionate about cryptocurrency, music, and anime.
                    </p>
                </div>
            </div>

        </section>
    );
}