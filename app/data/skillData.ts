import {FaBitbucket, FaCss3Alt, FaFigma, FaGit, FaGitlab, FaHtml5, FaJs, FaReact, FaWordpress} from "react-icons/fa";
import {
    SiAdobexd,
    SiEslint,
    SiGatsby, SiGraphql,
    SiJquery, SiJson,
    SiMagento,
    SiNextdotjs, SiPrettier,
    SiStyledcomponents,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";
import {GiTeamUpgrade} from "react-icons/gi";
import {MdOutlineAutorenew} from "react-icons/md";
import {BsLightbulb} from "react-icons/bs";
import {AiOutlineAudit} from "react-icons/ai";
import {IoMdChatbubbles} from "react-icons/io";

interface Skill {
    name: string;
    icon: React.ElementType;
    color: string;
}

export const technicalSkills: Skill[] = [
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

export const softSkills: Skill[] = [
    { name: 'Teamwork', icon: GiTeamUpgrade, color: '#4CAF50' },
    { name: 'Adaptability', icon: MdOutlineAutorenew, color: '#2196F3' },
    { name: 'Problem-solving', icon: BsLightbulb, color: '#FFC107' },
    { name: 'Attention to detail', icon: AiOutlineAudit, color: '#9C27B0' },
    { name: 'Communication', icon: IoMdChatbubbles, color: '#E91E63' },
]