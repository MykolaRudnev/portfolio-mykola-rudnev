
import Image from 'next/image'
import {workExperiences} from "@/app/data/workExperiences";

export default function CV() {
    return (
        <section id="cv" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 max-w-3xl bg-opacity-10">
                <h2 className="text-4xl font-bold mb-8 text-center font-heading text-primary">Work Experience</h2>
                <div className="space-y-12">
                    {workExperiences.map((exp, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-1  card-hover-effect">
                            <div className="flex items-center mb-4">
                                <Image src={exp.logo} alt={`${exp.company} logo`} width={50} height={50} className="mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                                    <p className="text-gray-600">{exp.company}</p>
                                    <p className="text-gray-500">{exp.period}</p>
                                </div>
                            </div>
                            <ul className="list-disc pl-6 space-y-2">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="text-gray-700">{resp}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <h2 className="text-4xl font-bold my-8 text-center font-heading text-primary">Education</h2>
                <div className="bg-white rounded-lg p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-1  card-hover-effect">
                    <h3 className="text-xl font-semibold">Engineer of Computer Science</h3>
                    <p className="text-gray-600">University of Economics and Innovation in Lublin</p>
                    <p className="text-gray-500">October 2014 - March 2018</p>
                </div>
            </div>
        </section>
    )
}