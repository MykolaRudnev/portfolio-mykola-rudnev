import { Project, Skill, WorkExperience, Recommendation, Education, Course, Language } from "@/types"
import { FaBitbucket, FaCss3Alt, FaFigma, FaGit, FaGitlab, FaHtml5, FaJs, FaReact, FaWordpress, FaGithub, FaCode, FaDocker, FaJira, FaTrello, FaMagento, FaPaintBrush, FaShopify, FaRobot, FaUsers } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import {
    SiAlpinedotjs,
    SiEslint,
    SiGatsby,
    SiGraphql,
    SiJquery,
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
import { MdOutlineAutorenew, MdOutlineAccessibilityNew } from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";
import { AiOutlineAudit } from "react-icons/ai";
import { IoMdChatbubbles } from "react-icons/io";
import { TbApi } from "react-icons/tb";
import { BiGitBranch } from "react-icons/bi";

export const projects: Project[] = [
    {
        name: "HUBER SE",
        description: "Lead frontend on the Magento Open Source + Hyvä rebuild: migration from Adobe Commerce headless, full redesign, Hyvä Theme / Checkout / CMS. Catalog Lighthouse 99–100. Live storefront plus custom modules such as Cart Share.",
        link: "https://shop.huber-se.com/",
        image: "/images/projects/huber-se/storefront.jpg",
        technologies: ["Magento 2", "Hyvä", "Hyvä CMS", "Alpine.js", "Tailwind CSS", "PHP"]
    },
    {
        name: "Claspwell",
        description: "Founder-built Magento 2 / Hyvä AI sales assistant. Production Next.js site with Payload CMS and PostgreSQL, Fastify API, Alpine widget and Magento module — category-first catalog chat, EU-hosted.",
        link: "https://www.claspwell.com/",
        image: "/images/projects/claspwell/homepage.jpg",
        technologies: ["Next.js", "TypeScript", "Payload CMS", "Fastify", "Alpine.js"]
    },
    {
        name: "Glasy",
        description: "Custom Shopify theme from scratch for a live eyewear store — homepage, collections/PLP, header, footer, Liquid sections and Shopify Admin configuration.",
        link: "https://glasy.pl/",
        image: "/images/projects/shopify/glasy.jpg",
        technologies: ["Shopify", "Liquid", "JavaScript", "HTML/CSS"]
    },
    {
        name: "Pixel25",
        description: "Automotive / garage SaaS storefront on a custom Shopify theme. Application-style Liquid sections and AI-assisted garage creation for cars listed for sale. In development.",
        image: "/images/projects/placeholder.png",
        technologies: ["Shopify", "Liquid", "JavaScript", "Custom sections"]
    },
    {
        name: "Ponadczasowi",
        description: "2025 — Built and optimized Next.js e-commerce website for watch retailer. Implemented checkout system, payment integrations, shipping methods, and performance optimizations including code splitting and lazy loading. Improved UX and mobile responsiveness.",
        link: "https://ponadczasowi.pl/",
        image: "/images/projects/ponadczasowi.jpg",
        technologies: ["JavaScript", "React.js", "Next.js", "Scss"]
    },
    {
        name: "bragan.net",
        description: "2025 — Maintained and improved a Magento 2 automotive parts storefront, delivering updates and resolving frontend bugs.",
        link: "https://bragan.net",
        image: "/images/projects/bragan.net.png",
        technologies: ["Magento 2", "JavaScript", "XML"]
    },
    {
        name: "fmic.pl",
        description: "2025 — Enhanced business logic and storefront functionality for a performance automotive parts store, supporting the existing Magento 2 implementation.",
        link: "https://fmic.pl",
        image: "/images/projects/fmic.pl.png",
        technologies: ["Magento 2", "JavaScript", "Smarty"]
    },
    {
        name: "Warmsome",
        description: "Joined an existing Shopify project in development and completed approximately the final 30% of the storefront. Updated the homepage, finished category and product pages, and helped bring the store to its MVP release.",
        link: "https://warmsome.com/",
        image: "/images/projects/shopify/warmsome.jpg",
        technologies: ["Shopify", "Liquid", "JavaScript", "HTML/CSS"]
    },
    {
        name: "Ascent",
        description: "Custom homepage from provided designs — reusable Liquid sections and Shopify Admin configuration on a development store.",
        link: "https://ascent-development.myshopify.com/",
        image: "/images/projects/shopify/ascent.jpg",
        technologies: ["Shopify", "Liquid", "JavaScript", "JSON templates"]
    },
    {
        name: "Berg's",
        description: "Product page improvements, custom product logic and frontend fixes on an existing live Shopify store.",
        link: "https://bergs.co/",
        image: "/images/projects/shopify/bergs.jpg",
        technologies: ["Shopify", "Liquid", "JavaScript"]
    },
    {
        name: "Diamandia",
        description: "Homepage sections, social integrations and theme improvements. Development stopped before this version was released.",
        link: "https://diamandia.com/",
        image: "/images/projects/shopify/diamandia.jpg",
        technologies: ["Shopify", "Liquid", "JavaScript"]
    },
    {
        name: "Housetipster",
        description: "Built the entire Magento 2 storefront from scratch on Magento Blank, implementing custom designs and styles across home, category, product, CMS and customer account pages. Developed extensive custom B2B functionality, including a management panel for B2B customers. Delivered on time; the project has since closed.",
        image: '/images/projects/housetipster-project.png',
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker", "LESS/SASS"]
    },
    {
        name: "3MK Protection",
        description: "Helped build a custom Magento 2 storefront, including frontend logic for the homepage Smart Finder, banner implementation and optimization across the site, category and product page styling, and checkout work. Collaborated with SEO specialists on templates and supported the client with Magento CMS training.",
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
        description: "Provided Magento 2 support and direct client assistance, improving storefront performance and extending custom logic. The site is no longer operating.",
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
        description: "Contributed from the start of a complete Magento 2 storefront redesign. Built custom category pages, prepared CMS pages and supported the client during implementation. Trained the client to manage Magento CMS content independently after handover.",
        link: "https://www.solar.com.pl/",
        image: "/images/projects/solar-project.png",
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker"]
    },
    {
        name: "Doppler Manufaktur",
        description: "Supported an existing Magento 2 storefront, contributing primarily to the homepage, product cards and CMS sections, alongside frontend fixes and improvements.",
        link: "https://doppler-manufaktur.com/",
        image: "/images/projects/doppler-manufaktur-project.png",
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker"]
    },
    {
        name: "PMI Careers",
        description: "2023–2024 — Built the recruitment website in React, covering all pages and custom UI components. After a year of use, migrated it to Next.js. Both versions worked in production; PMI Careers later took the site offline.",
        image: "/images/projects/pmicareers-project.png",
        technologies: ["JavaScript","TypeScript","React.js",  "Next.js", "StyledComponents", "REST API", "LESS"]
    },
    {
        name: "Internorm",
        description: "2024 — Implemented the complete headless website with WordPress and WordPress SEO, backed by a Gatsby/React frontend and static site generation (SSG). Built all standard and custom pages and reusable templates using Atomic Design architecture.",
        link: "https://internorm-dev.vercel.app/",
        image: "/images/projects/internorm-project.png",
        technologies: ["WordPress", "WordPress SEO", "Gatsby.js", "React", "TypeScript", "GraphQL", "SSG", "Atomic Design"]
    },
    {
        name: "Hrk",
        description: "Built a recruitment platform with Gatsby.js and TypeScript, organizing reusable UI with Atomic Design architecture. Implemented SEO strategies that increased organic traffic by 50% in 3 months.",
        link: "https://www.hrk.pl/",
        image: "/images/projects/hrk-project.png",
        technologies: ["WordPress", "TypeScript", "Gatsby.js", "JavaScript", "StyledComponents", "GraphQL", "Atomic Design"]
    },
    {
        name: "Carneoo",
        description: "Joined midway through development of a Next.js car sales platform. Helped build the vehicle configurator, added features and custom components, fixed bugs and optimized images and frontend performance.",
        link: "https://carneoo.de/",
        image: "/images/projects/carneoo-project.png",
        technologies: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwindcss", "REST API" ]
    },
    {
        name: "Novum-klinika",
        description: "Contributed to a custom fertility clinic application with an extensive questionnaire and custom assessment flow for people planning a pregnancy. Developed the frontend using React, Next.js, TypeScript, Tailwind CSS and Storybook, with Atomic Design architecture. The project did not reach a completed launch.",
        image: "/images/projects/novum-klinika.png",
        technologies: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwindcss", "Storybook", "REST API", "Atomic Design"]
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
        description: "Joined near the end of development and helped complete an online learning platform built with Next.js, React and Storybook. The platform lets teachers create courses with image and text blocks, video and audio lessons, and assignments.",
        link:'https://learningspace.app/en/',
        image: "/images/projects/LearningSpace.png",
        technologies: ["JavaScript", "TypeScript", "React.js", "Next.js", "Storybook", "REST API"]
    },
    {
        name: "hbsgroup.net",
        description: "Helped create Magento CMS pages and reusable content structures for the client, enabling them to create and maintain further pages independently.",
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
        name: "Edycja",
        description: "2023 — One of my earliest Magento 2 storefront builds, developed from scratch on Magento Blank. Implemented custom styling and frontend pages throughout the store, from the homepage to category, product and CMS pages. The store remains in operation.",
        link: "https://edycja.pl/",
        image: "/images/projects/edycja-project.png",
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker"]
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
    { name: 'Hyvä', icon: FaCode, color: '#F4A261' },
    { name: 'Hyvä CMS', icon: FaCode, color: '#E76F51' },
    { name: 'Shopify', icon: FaShopify, color: '#96BF48' },
    { name: 'Liquid', icon: FaCode, color: '#7AB55C' },
    { name: 'Alpine.js', icon: SiAlpinedotjs, color: '#8BC0D0' },
    { name: 'WordPress', icon: FaWordpress, color: '#21759B' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Styled Components', icon: SiStyledcomponents, color: '#DB7093' },
    { name: 'SASS/LESS', icon: SiSass, color: '#CC6699' },
    { name: 'jQuery', icon: SiJquery, color: '#1572B6' },
    { name: 'REST API', icon: TbApi, color: '#4CAF50' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    { name: 'Storybook', icon: SiStorybook, color: '#FF4785' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'CI/CD', icon: BiGitBranch, color: '#2088FF' },
    { name: 'Git', icon: FaGit, color: '#F05032' },
    { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
    { name: 'GitLab', icon: FaGitlab, color: '#FC6D26' },
    { name: 'Bitbucket', icon: FaBitbucket, color: '#0052CC' },
    { name: 'ESLint', icon: SiEslint, color: '#4B32C3' },
    { name: 'Prettier', icon: SiPrettier, color: '#F7B93E' },
    { name: 'JIRA', icon: FaJira, color: '#0052CC' },
    { name: 'Azure DevOps', icon: VscAzureDevops, color: '#0078D7' },
    { name: 'ClickUp', icon: SiClickup, color: '#7B68EE' },
    { name: 'Trello', icon: FaTrello, color: '#0079BF' },
    { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
    { name: 'Adobe XD', icon: FaPaintBrush, color: '#FF61F6' },
    { name: 'Cursor / Claude', icon: FaRobot, color: '#22D3EE' },
    { name: 'WCAG / a11y', icon: MdOutlineAccessibilityNew, color: '#84CC16' },
]

export const softSkills: Skill[] = [
    { name: 'Teamwork', icon: GiTeamUpgrade, color: '#4CAF50' },
    { name: 'Adaptability', icon: MdOutlineAutorenew, color: '#2196F3' },
    { name: 'Problem-solving', icon: BsLightbulb, color: '#FFC107' },
    { name: 'Attention to detail', icon: AiOutlineAudit, color: '#9C27B0' },
    { name: 'Communication', icon: IoMdChatbubbles, color: '#E91E63' },
    { name: 'Leadership', icon: FaUsers, color: '#06B6D4' },
    { name: 'AI-assisted development', icon: FaRobot, color: '#A78BFA' },
]

export const workExperiences: WorkExperience[] = [
    {
        company: 'HUBER SE',
        position: 'Lead Front-End Developer — Magento 2 / Hyvä',
        period: 'June 2026 - Present',
        logo: '/images/huber-logo.svg',
        responsibilities: [
            'Direct client Magento 2 / Hyvä e-commerce platform (self-employed / remote, Germany):',
            'Leading frontend delivery for the customer-facing storefront as the main frontend contact.',
            'Same storefront started at Lufed IT — continued under a direct freelance contract with HUBER SE.',
            'Translating business, SEO and marketing requirements into frontend tasks and Magento module work.',
            'Building Hyvä CMS structures, reusable components, translations and multi-store frontend improvements.',
            'Implementing features across CMS pages, PLP, PDP, cart, Hyvä Checkout and customer account.',
            'Shipping custom Magento modules with backend (example: Cart Share — snapshot from cart, review URL, live recipient prices, admin grid).',
            'Improving UX, Core Web Vitals, accessibility, technical SEO and maintainability on Magento Open Source + Hyvä Theme / Checkout / CMS.',
        ]
    },
    {
        company: 'Lufed IT',
        position: 'Senior Front-End Developer',
        period: 'January 2026 - June 2026',
        logo: '/images/lufed-it.png',
        responsibilities: [
            'E-Commerce / Magento 2 (Hyvä Theme) — HUBER SE storefront:',
            'Started the HUBER rebuild as sole Front-End Developer: Magento Open Source + Hyvä after Adobe Commerce headless.',
            'Full ownership of Home, Category (PLP), Product (PDP), Cart, Hyvä Checkout and Customer Account.',
            'Drove redesign and migration from Adobe Commerce / Enterprise headless to Hyvä Theme, Hyvä Checkout and Hyvä CMS.',
            'Building reusable components with Hyvä CMS and a scalable component system.',
            'Task management for frontend and backend work; collaborated on Magento modules.',
            'Direct client communication and close work with SEO on Core Web Vitals and technical SEO.',
            'Frontend went to production in this window (January–July 2026 including the direct-client continuation).'
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
            'LearningSpace (learningspace.app) — joined near the end of development and helped complete a Next.js / React platform for multimedia courses and assignments, using Storybook.',
            'Internorm — delivered a headless WordPress / Gatsby / React website with SSG, WordPress SEO and Atomic Design; implemented all pages and templates.',
            'Billennium — built a modular Next.js website with reusable components and Storybook.',
            'Novum Klinika — contributed to a fertility questionnaire application with Next.js, TypeScript, Tailwind CSS, Storybook and Atomic Design; the project did not reach a completed launch.',
            'Shopify (Liquid):',
            'Developed and customized 6 Shopify stores from Figma — custom Liquid themes, not preset restyles.',
            'Glasy (glasy.pl) — live eyewear store: homepage, PLP, header, footer, Admin sections from scratch.',
            'Pixel25 — automotive garage SaaS storefront with application-style Liquid sections (in development).',
            "Warmsome (warmsome.com), Berg's (bergs.co), Ascent (development store), Diamandia (theme work; version not released).",
            'Delivered Home, Collection/PLP, Product/PDP, footer, custom elements and Shopify Admin configuration.'
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
        period: 'March 2024 - May 2024',
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
    { language: "English", proficiency: "Fluent", flag: "🇬🇧" },
];

export const courses: Course[] = [
    { name: "Frontend System Design Essentials", provider: "Juntao Qiu", date: "Aug 2026" },
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
        text: "I worked with Mykola for a year and he proved to be a responsible engineer who values continuous improvement and follows strong engineering practices. Beyond solid technical skills, he is pleasant to collaborate with, open to feedback, adapts quickly to requirements, and always keeps a positive attitude.",
        linkedin: "https://www.linkedin.com/in/dmytro-deinershtein-a60657183/"
    },
    {
        name: "Sebastian Palewski",
        role: "Magento 2 & Laravel Software Developer",
        text: "I worked with Mykola on several projects as a backend–frontend pair. A great collaborator — topics delivered quickly and efficiently, with clear communication. Technically strong, he explores options and always finds practical implementation paths. He would add a lot to any development team.",
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