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
                        Hi, I'm Mykola. Nice to meet you.
                    </p>
                    <p className="mb-6 text-lg leading-relaxed">
                        Since starting my journey as a front-end developer nearly five years ago, I've specialized in TypeScript, React.js, and Magento 2. I've built responsive websites and e-commerce platforms, always prioritizing user experience and leveraging modern web technologies like Gatsby.js and Next.js.
                    </p>
                    <p className="mb-6 text-lg leading-relaxed">
                        I'm passionate about innovative web development projects and constantly strive to grow and excel, aiming to become a senior front-end developer.
                    </p>
                    <p className="mb-6 text-lg leading-relaxed">
                        When I'm not coding, you'll find me diving into the world of cryptocurrency, enjoying a swim, or vibing to music genres like Dubstep, lo-fi hip hop, rock, and jazz. I'm also a huge fan of anime, especially fantasy, cyberpunk, and thriller genres.
                    </p>
                </div>
            </div>

        </section>
    );
}