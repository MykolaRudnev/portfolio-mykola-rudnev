import {softSkills, technicalSkills} from "@/app/data/skillData";
import AnimatedSection from "@/app/components/AnimatedSection";

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                <h2 className="text-4xl font-bold mb-12 text-center font-heading text-primary">My Skills</h2>
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-6 text-center font-heading text-secondary">Technical Skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {technicalSkills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 card-hover-effect ">
                                <skill.icon className="text-5xl mb-2" style={{ color: skill.color }} />
                                <span className="text-center font-medium text-gray-800">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                </AnimatedSection>
                <AnimatedSection>
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-center font-heading text-secondary">Soft Skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                        {softSkills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 card-hover-effect">
                                <skill.icon className="text-5xl mb-2" style={{ color: skill.color }} />
                                <span className="text-center font-medium text-gray-800">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                </AnimatedSection>
            </div>
        </section>
    )
}