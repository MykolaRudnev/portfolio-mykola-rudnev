// components/Skills.tsx
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGit, FaWordpress, FaBitbucket, FaGitlab, FaFigma } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiGatsby, SiTailwindcss, SiMagento, SiGraphql, SiEslint, SiPrettier, SiAdobexd, SiStyledcomponents, SiJson,SiJquery } from 'react-icons/si'
import { GiTeamUpgrade,GiKnockout } from 'react-icons/gi'
import { MdOutlineAutorenew } from 'react-icons/md'
import { BsLightbulb } from 'react-icons/bs'
import { AiOutlineAudit } from 'react-icons/ai'
import { IoMdChatbubbles } from 'react-icons/io'

interface Skill {
    name: string;
    icon: React.ElementType;
    color: string;
}

const technicalSkills: Skill[] = [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Magento2', icon: SiMagento, color: '#EE672F' },
    {name:'jQuery', icon: SiJquery,color: '#1572B6'},
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Gatsby.js', icon: SiGatsby, color: '#663399' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Styled Components', icon: SiStyledcomponents, color: '#DB7093' },
    { name: 'JSON', icon: SiJson, color: '#000000' },
    { name: 'Wordpress ACF', icon: FaWordpress, color: '#21759B' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    { name: 'Bitbucket', icon: FaBitbucket, color: '#0052CC' },
    { name: 'Git', icon: FaGit, color: '#F05032' },
    { name: 'GitLab', icon: FaGitlab, color: '#FCA121' },
    { name: 'Eslint', icon: SiEslint, color: '#4B32C3' },
    { name: 'Prettier', icon: SiPrettier, color: '#F7B93E' },
    { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
    { name: 'Adobe XD', icon: SiAdobexd, color: '#FF61F6' },
]

const softSkills: Skill[] = [
    { name: 'Teamwork', icon: GiTeamUpgrade, color: '#4CAF50' },
    { name: 'Adaptability', icon: MdOutlineAutorenew, color: '#2196F3' },
    { name: 'Problem-solving', icon: BsLightbulb, color: '#FFC107' },
    { name: 'Attention to detail', icon: AiOutlineAudit, color: '#9C27B0' },
    { name: 'Communication', icon: IoMdChatbubbles, color: '#E91E63' },
]

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center font-heading text-primary">My Skills</h2>
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-6 text-center font-heading text-secondary">Technical Skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {technicalSkills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-center p-4 bg-gray-100 rounded-lg transition-transform hover:scale-105 hover:shadow-md">
                                <skill.icon className="text-5xl mb-2" style={{ color: skill.color }} />
                                <span className="text-center font-medium text-gray-800">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-center font-heading text-secondary">Soft Skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                        {softSkills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-center p-4 bg-gray-100 rounded-lg transition-transform hover:scale-105 hover:shadow-md">
                                <skill.icon className="text-5xl mb-2" style={{ color: skill.color }} />
                                <span className="text-center font-medium text-gray-800">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}