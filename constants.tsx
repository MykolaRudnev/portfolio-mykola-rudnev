import { Project, Skill, WorkExperience, Recommendation, Education, Course, Language } from './types';
import { FaBitbucket, FaCss3Alt, FaFigma, FaGit, FaGitlab, FaHtml5, FaJs, FaReact, FaWordpress, FaLinkedin, FaGithub, FaEnvelope, FaCode, FaDocker, FaJira, FaTrello, FaMagento, FaPaintBrush } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import {
    SiEslint,
    SiGatsby,
    SiGraphql,
    SiJquery,
    SiJson,
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
        image: "/images/projects/dreamroots.pl.png",
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
    { name: 'Magento 2', icon: FaMagento, color: '#EE672F' },
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
    { name: 'Adobe XD', icon: FaPaintBrush, color: '#FF61F6' },
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
        company: 'Lufed IT',
        position: 'Senior Front-End Developer',
        period: 'January 2026 - Present',
        logo: '/images/lufed-it.png',
        responsibilities: [
            'E-Commerce / Magento 2 (Hyvä Theme):',
            'Leading front-end development and architecture for Magento 2 (Hyvä Theme) projects as the sole Front-End Developer responsible for the entire frontend layer.',
            'Full ownership of the frontend across all key areas: Home, Category (PLP), Product (PDP), Cart, Checkout and Customer Account.',
            'Driving a complete redesign and migration from Magento 2 Enterprise to Hyvä, focused on performance and UX.',
            'Building and customizing reusable components using Hyvä CMS and a scalable component system.',
            'Collaboration & SEO:',
            'Direct communication with clients — gathering requirements and delivering business-oriented solutions.',
            'Close collaboration with the SEO team and implementation of technical SEO optimizations (Core Web Vitals, performance).'
        ]
    },
    {
        company: 'For Better Future Software House',
        position: 'Senior Front-End Developer',
        period: 'September 2020 - February 2026',
        logo: '/images/for-better-future-logo.jpeg',
        responsibilities: [
            'E-Commerce & Marketplaces (Magento 2):',
            'Led development and maintenance of 16 e-commerce platforms, ensuring performance and scalability.',
            'Delivered new features and optimized existing functionalities to improve UX and business efficiency.',
            'Built multiple e-commerce solutions from scratch with a focus on clean architecture and reusability.',
            'Tech: Magento 2, XML, JavaScript, jQuery, Docker, LESS, Sass.',
            'Web Applications (React.js, Next.js, Gatsby.js):',
            'Ponadczasowi (ponadczasowi.pl) — built and optimized a Next.js e-commerce platform (checkout, payments, shipping, blog) with lazy loading and code splitting.',
            'Copernicspace (copernicspace.com) — developed an NFT marketplace from scratch (builder, listings, profiles) with focus on performance and scalability.',
            'Carneoo (carneoo.de) — improved the platform with bug fixes, new features and custom components, enhancing UX and stability.',
            'HRK (hrk.pl) — built a recruitment platform with Gatsby + TypeScript and improved SEO (+50% organic traffic).',
            'PMI Careers (pmicareers.pl) — developed the platform and migrated from React to Next.js, improving performance and scalability.',
            'LearningSpace (learningspace.app) — built an educational platform focused on UX and scalability.',
            'Internorm — developed a corporate website with SEO-focused structure (Gatsby + WordPress).',
            'Billennium — built a modular Next.js website with reusable components and Storybook.',
            'Novum Klinika — improved responsive UI and cross-device compatibility.',
            'Shopify (Liquid):',
            'Developed and customized 6 Shopify stores based on Figma designs — custom themes focused on performance, UX and scalability.',
            'Delivered key pages (Home, Collection, Product), collaborated with clients and implemented SEO best practices.'
        ]
    },
    {
        company: 'Cloudflight',
        position: 'Front-End Developer',
        period: 'July 2022 - October 2024',
        logo: '/images/cloudflight-logo.png',
        responsibilities: [
            'Magento 2 / Enterprise Delivery:',
            'Worked on ~9 Magento 2 e-commerce projects across different industries.',
            'Delivered full frontend implementations including Home, Category (PLP), Product (PDP), Cart, Checkout and CMS pages.',
            'Built custom components and extended Magento functionality using best practices.',
            'Contributed to Hyvä Theme implementation in one of the projects.',
            'Key Projects:',
            'British American Tobacco (4 stores) — product pages, checkout, account flows, multi-market delivery.',
            'catering24.co.uk — custom storefront with advanced integrations and full frontend delivery.',
            'solar.com.pl — CMS-driven storefront with custom UI components and features.',
            'Collaboration & Process:',
            'Collaborated in cross-functional teams (developers, QA, PM), typically 5+ members.',
            'Worked closely with testers and backend developers to ensure high-quality, stable releases.',
            'Participated in the full development lifecycle: implementation, optimization, bug fixing and maintenance.',
            'Focused on performance, UX and scalable frontend architecture.'
        ]
    },
    {
        company: '3mk Protection',
        position: 'Front-End Developer',
        period: 'March 2024 - June 2024',
        logo: '/images/3mk-logo.jpeg',
        responsibilities: [
            'Magento 2 Project (from scratch):',
            'Built a Magento 2 e-commerce platform from scratch, delivering key pages including Home, Category and custom CMS-driven components.',
            'Developed custom frontend elements and landing pages focused on UX and conversion.',
            'Worked in a team with backend and frontend developers to deliver scalable solutions.',
            'Provided client training on CMS usage and content management.',
            'Tech: Magento 2, JavaScript, XML, CSS, HTML5, Docker, JIRA.'
        ]
    },
    {
        company: 'ORBA',
        position: 'Front-End Developer',
        period: 'January 2020 - April 2020',
        logo: '/images/orba-logo.jpg',
        responsibilities: [
            'Worked as a front-end developer on an e-commerce website for the cosmetics industry, specializing in Magento 2.',
            'Utilized key Magento 2 capabilities and technologies to improve site performance and user experience.',
            'Contributed to robust, scalable storefront solutions under the guidance of senior developers.'
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