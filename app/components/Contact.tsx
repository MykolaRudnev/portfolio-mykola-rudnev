// components/Contact.tsx
'use client'

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
    return (
        <section id="contact" className="py-20   text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center font-heading">Get in Touch</h2>
                <div className="max-w-3xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm shadow-xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <FaEnvelope className="text-secondary mr-4 text-3xl" />
                                <div>
                                    <h3 className="font-semibold text-xl mb-1 font-heading">Email</h3>
                                    <a href="mailto:rudnevmykola@gmail.com" className="text-lg hover:text-secondary transition-colors">rudnevmykola@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="text-secondary mr-4 text-3xl" />
                                <div>
                                    <h3 className="font-semibold text-xl mb-1 font-heading">Phone</h3>
                                    <a href="tel:+48790240418" className="text-lg hover:text-secondary transition-colors">790240418</a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-secondary mr-4 text-3xl" />
                                <div>
                                    <h3 className="font-semibold text-xl mb-1 font-heading">Location</h3>
                                    <p className="text-lg">Lublin, Poland</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <FaLinkedin className="text-secondary mr-4 text-3xl" />
                                <div>
                                    <h3 className="font-semibold text-xl mb-1 font-heading">LinkedIn</h3>
                                    <a href="https://www.linkedin.com/in/mykola-rudnev-1525a5145/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-secondary transition-colors">Connect with me</a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaGithub className="text-secondary mr-4 text-3xl" />
                                <div>
                                    <h3 className="font-semibold text-xl mb-1 font-heading">GitHub</h3>
                                    <a href="https://github.com/MykolaRudnev" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-secondary transition-colors">View my projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-lg">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}