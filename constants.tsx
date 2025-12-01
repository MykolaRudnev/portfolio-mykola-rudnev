import { Project, Skill, WorkExperience, Recommendation, Education, Course, Language } from './types';
import { FaBitbucket, FaCss3Alt, FaFigma, FaGit, FaGitlab, FaHtml5, FaJs, FaReact, FaWordpress, FaLinkedin, FaGithub, FaEnvelope, FaCode, FaDocker, FaJira, FaTrello } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import {
    SiAdobexd,
    SiEslint,
    SiGatsby,
    SiGraphql,
    SiJquery,
    SiJson,
    SiMagento,
    SiNextdotjs,
    SiPrettier,
    SiStyledcomponents,
    SiTailwindcss,
    SiTypescript,
    SiStorybook,
    SiSass,
    SiClickup
} from "react-icons/si";
import { GiTeamUpgrade } from "react-icons/gi";
import { MdOutlineAutorenew } from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";
import { AiOutlineAudit } from "react-icons/ai";
import { IoMdChatbubbles } from "react-icons/io";

export const projects: Project[] = [
    {
        name: "Housetipster",
        description: "Full Magento 2 e-commerce build with CMS, product, and account pages. Worked on homepage, category page, product page, cms static pages, account pages and custom elements.",
        link: "https://housetipster.com/",
        image: '/images/projects/housetipster-project.png',
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker", "LESS/SASS"]
    },
    {
        name: "3MK Protection",
        description: "Creating with team from scratch a Magento 2 store with a custom theme and advanced features. Worked on category page, homepage, cart page, cms static pages and custom elements.",
        link: "https://3mk.pl/",
        image: '/images/projects/3mk-project.png',
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker"]
    },
    {
        name: "Catering24",
        description: "Magento 2 store with custom design and CMS pages. Helping with the development of a Magento 2 store with a custom theme and advanced features.",
        link: "https://www.catering24.co.uk/",
        image: "/images/projects/catering24-project.png",
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker"]
    },
    {
        name: "Paypair",
        description: "Supporting the development and fixing bugs on a Magento 2 store, implementing new features, UX improvements and custom elements.",
        link: "paypair.com",
        image: "/images/projects/paypair-project.png",
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker"]
    },
    {
        name: "Excellent",
        description: "Creating with team from scratch a Magento 2 store with a custom theme and advanced features. Worked on homepage, category page, product page, cms static pages, account pages and custom elements.",
        image: "/images/projects/excellent-project.png",
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker"]
    },
    {
        name: "Solar",
        description: "Custom theme with advanced integrations. Creating with team from scratch a Magento 2 store with a custom theme and advanced features. Worked on all pages and custom elements.",
        link: "https://www.solar.com.pl/",
        image: "/images/projects/solar-project.png",
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker"]
    },
    {
        name: "Edycja",
        description: "Magento 2 store built from scratch with custom theme and advanced elements. Worked on all pages and custom elements.",
        link: "https://edycja.pl/",
        image: "/images/projects/edycja-project.png",
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker"]
    },
    {
        name: "Doppler Manufaktur",
        description: "Supporting the development and fixing bugs on a Magento 2 store, implementing new features and custom elements.",
        link: "https://doppler-manufaktur.com/",
        image: "/images/projects/doppler-manufaktur-project.png",
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker"]
    },
    {
        name: "Pmi Careers",
        description: "Developed a recruitment website in React.js, later migrated to Next.js for performance and scalability. Created custom elements and managed all pages.",
        link: "https://pmicareers.pl/",
        image: "/images/projects/pmicareers-project.png",
        technologies: ["JavaScript","TypeScript","React.js",  "Next.js", "StyledComponents", "REST API", "LESS"]
    },
    {
        name: "Internorm",
        description: "Developed corporate site using Gatsby.js & WordPress, integrating custom elements and SEO-friendly design.",
        link: "https://internorm-dev.vercel.app/",
        image: "/images/projects/internorm-project.png",
        technologies: ["WordPress", "TypeScript", "Gatsby.js", "JavaScript", "StyledComponents", "GraphQL"]
    },
    {
        name: "Hrk",
        description: "Built scalable recruitment platform with Gatsby.js and TypeScript. Implemented SEO strategies that increased organic traffic by 50% in 3 months.",
        link: "https://www.hrk.pl/",
        image: "/images/projects/hrk-project.png",
        technologies: ["WordPress", "TypeScript", "Gatsby.js", "JavaScript", "StyledComponents", "GraphQL" ]
    },
    {
        name: "Carneoo",
        description: "Finalized Next.js car sales platform with bug fixes, new pages, and custom elements to boost engagement.",
        link: "https://carneoo.de/",
        image: "/images/projects/carneoo-project.png",
        technologies: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwindcss", "REST API" ]
    },
    {
        name: "Novum-klinika",
        description: "Assisted in building a healthcare platform, improving responsive UI and ensuring cross-device compatibility.",
        link: "https://www.novum.com.pl/",
        image: "/images/projects/novum-klinika.png",
        technologies: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwindcss", "Storybook", "REST API" ]
    },
    {
        name: "Ponadczasowi",
        description: "Built and optimized Next.js e-commerce website for watch retailer. Implemented checkout system, payment integrations, shipping methods, and performance optimizations including code splitting and lazy loading. Improved UX and mobile responsiveness.",
        link: "https://ponadczasowi.pl/",
        image: "/images/projects/ponadczasowi.jpg",
        technologies: ["JavaScript", "React.js", "Next.js", "Scss"]
    },
    {
        name: "Copernicspace",
        description: "Developed an NFT marketplace from scratch in Next.js. Implemented NFT builder, category listing, profile pages, and landing page optimizations.",
        link: "https://www.copernicspace.com/",
        image: "/images/projects/www.copernicspace.png",
        technologies: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"]
    },
    {
        name: "Billennium",
        description: "Developed IT consultancy website in Next.js, with modular UI components using Storybook for reusability.",
        link: "https://billennium.com/",
        image: "/images/projects/billennium.png",
        technologies: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwindcss","Storybook" ]
    },
    {
        name: "LearningSpace",
        description: "Created a full-featured educational platform with React.js & Next.js, delivering dynamic and interactive UX.",
        link:'https://learningspace.app/en/',
        image: "/images/projects/LearningSpace.png",
        technologies: ["JavaScript", "TypeScript", "React.js", "Next.js", "REST API"]
    },
    {
        name: "hbsgroup.net",
        description: "Magento 2 updates, new pages, and logic fixes for an enterprise store.",
        link: "https://hbsgroup.net/",
        image: "/images/projects/hbsgroup.net.png",
        technologies: ["Magento 2", "PHP", "XML", "JavaScript"]
    },
    {
        name: "dreamroots.pl",
        description: "Performance optimization, translation fixes, and new page development for Magento 2 store.",
        link: "https://dreamroots.pl",
        image: "/images/projects/placeholder.png",
        technologies: ["Magento 2", "XML", "CSS"]
    },
    {
        name: "bragan.net",
        description: "Magento 2 updates and bug fixes for automotive parts store.",
        link: "https://bragan.net",
        image: "/images/projects/bragan.net.png",
        technologies: ["Magento 2", "JavaScript", "XML"]
    },
    {
        name: "fmic.pl",
        description: "Enhancements to logic and functionality for performance auto parts store.",
        link: "https://fmic.pl",
        image: "/images/projects/fmic.pl.png",
        technologies: ["Magento 2", "JavaScript", "Smarty"]
    },
];

export const technicalSkills: Skill[] = [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'Gatsby.js', icon: SiGatsby, color: '#663399' },
    { name: 'Magento 2', icon: SiMagento, color: '#EE672F' },
    { name: 'Hyvä', icon: FaCode, color: '#F4A261' }, // Generic code icon as placeholder for Hyvä
    { name: 'WordPress', icon: FaWordpress, color: '#21759B' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Styled Components', icon: SiStyledcomponents, color: '#DB7093' },
    { name: 'SASS/LESS', icon: SiSass, color: '#CC6699' },
    { name: 'jQuery', icon: SiJquery,color: '#1572B6'},
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    { name: 'Storybook', icon: SiStorybook, color: '#FF4785' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'Git', icon: FaGit, color: '#F05032' },
    { name: 'JIRA', icon: FaJira, color: '#0052CC' },
    { name: 'Azure DevOps', icon: VscAzureDevops, color: '#0078D7' },
    { name: 'ClickUp', icon: SiClickup, color: '#7B68EE' },
    { name: 'Trello', icon: FaTrello, color: '#0079BF' },
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

export const workExperiences: WorkExperience[] = [
    {
        company: 'For Better Future Software House',
        position: 'Front-End Developer',
        period: 'August 2020 - Present',
        logo: '/images/for-better-future-logo.jpeg',
        responsibilities: [
            'E-Commerce Development (Magento 2):',
            'Contributed to the development and ongoing maintenance of 16 high-traffic e-commerce sites, ensuring optimal performance and user experience.',
            'Innovated new features and streamlined operations for online stores, enhancing user engagement and sales conversions.',
            'Assisted in architecting and launching multiple e-commerce platforms from the ground up, tailoring solutions to client needs.',
            'Websites Development (React.js, Gatsby.js, Next.js):',
            'Developed and migrated a comprehensive recruitment website using React.js and Next.js, improving both functionality and aesthetics.',
            'Engineered an IT company website using TypeScript and React.js, focusing on scalability and responsive design.',
            'Built a dynamic PVC company website using WordPress, TypeScript, and Gatsby.js, ensuring cross-platform compatibility.',
            'Created a user-friendly job application website using TypeScript and Gatsby.js, optimizing it for performance and usability.'
        ]
    },
    {
        company: '3mk Protection',
        position: 'Front-end Developer',
        period: 'March 2024 - June 2024',
        logo: '/images/3mk-logo.jpeg',
        responsibilities: [
            'Implemented advanced front-end features using Magento 2, JavaScript, XML, CSS, and HTML5, enhancing site functionality and user interaction.',
            'Leveraged JIRA for efficient project management and Docker for seamless containerization, improving development workflow and deployment processes.'
        ]
    },
    {
        company: 'ORBA',
        position: 'Junior Front-end Developer',
        period: 'January 2020 - April 2020',
        logo: '/images/orba-logo.jpg',
        responsibilities: [
            'Specialized in developing an e-commerce website for the cosmetics industry using Magento 2, focusing on robust, scalable solutions.',
            'Enhanced site performance and user experience by utilizing the advanced capabilities of Magento 2, resulting in increased user retention and sales.'
        ]
    }
]

export const education: Education[] = [
    {
        institution: "University of Economics and Innovation in Lublin",
        degree: "Engineer of Computer Science",
        period: "October 2014 - March 2018",
        logo: "/images/wsei-logo.png" // Fallback will handle if missing
    }
];

export const languages: Language[] = [
    { language: "Polish", proficiency: "Fluent", flag: "🇵🇱" },
    { language: "Ukrainian", proficiency: "Native Speaker", flag: "🇺🇦" },
    { language: "Russian", proficiency: "Native Speaker", flag: "🇷🇺" },
    { language: "English", proficiency: "Very Good", flag: "🇬🇧" },
];

export const courses: Course[] = [
    { name: "Cursor & Claude Code Professional AI Setup", provider: "Cursor", date: "Sep 2025" },
    { name: "Modern JavaScript Full Course", provider: "fireship.io", date: "2025" },
    { name: "Next.js - The Full Course", provider: "fireship.io", date: "2025" },
    { name: "Next.js From Scratch 2024", provider: "Udemy", date: "May 2024" },
    { name: "React Hooks - Building Real Project From Scratch", provider: "Udemy", date: "Apr 2020" },
    { name: "Understanding TypeScript", provider: "Udemy", date: "Sep 2019" },
    { name: "ReactJS from Scratch to Pro", provider: "webformyself", date: "2019" },
];

export const recommendations: Recommendation[] = [
    {
        name: "Ivan Kozhemiakin",
        role: "Magento Developer",
        text: "I had the pleasure of working with Mykola, and I can confidently say that he is an outstanding team player. He is polite, kind, and easy to collaborate with. Mykola is always ready to help and consistently supports his colleagues whenever needed. His dedication, reliability, and positive attitude make him a true asset to any team. It’s been a great experience working with such a professional and dependable person.",
        linkedin: "https://www.linkedin.com/in/ivan-kozhemiakin-551931ba/"
    },
    {
        name: "Dmytro Deinershtein",
        role: "Senior Front-end Developer",
        text: "Pracowałem z Mykołą przez rok i w tym czasie pokazał się jako odpowiedzialny inżynier, który ceni ciągły rozwój oraz stosuje najlepsze praktyki programistyczne. Oprócz solidnych umiejętności technicznych, jest również bardzo przyjemny we współpracy і otwarty na opinie, szybko dostosowuje się do wymagań i zawsze zachowuje pozytywne nastawienie.",
        linkedin: "https://www.linkedin.com/in/dmytro-deinershtein-a60657183/"
    },
    {
        name: "Sebastian Palewski",
        role: "Magento 2 & Laravel Software Developer",
        text: "Pracowałem z Mykolą w kilku projektach na zasadzie współpracy backend-dev z frontend-dev. Świetny współpracownik. Tematy dowożone szybko i sprawnie. Bardzo fajna komunikacja. Technicznie bardzo sprawny, szuka rozwiązań i zawsze znajduje kilka sposobów implementacji. Wniesie dużo do każdego zespołu developerskiego.",
        linkedin: "https://www.linkedin.com/in/sebastianpalewski/"
    },
    {
        name: "Gleb Gundilovich",
        role: "Magento Fronted Developer",
        text: "I had the pleasure of working with Mykola, and I can confidently say he is an excellent team player. He is polite and kind, making it easy to work with him. Mykola is always ready to help and supports his colleagues whenever needed. It's been great to work with someone so dedicated and reliable.",
        linkedin: "https://www.linkedin.com/in/gleb-gundilovich/"
    },
    {
        name: "Mateusz Zbylut",
        role: "Magento Tech Lead Developer & Solution Architect",
        text: "Mykola is an exceptionally talented and ambitious front-end developer with a strong aptitude for embracing new ideas and challenges. He brings a collaborative and open-minded approach to every project, consistently demonstrating extensive knowledge and generously sharing insights with the team. Mykola is a true team player, and his enthusiasm and expertise make him an invaluable colleague. It was a pleasure working alongside him—he is a great specialist and an outstanding teammate.",
        linkedin: "https://www.linkedin.com/in/mateusz-zbylut/"
    }
]