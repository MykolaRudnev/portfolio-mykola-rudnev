// data/projectsData.ts

export interface Project {
    name: string;
    description: string;
    link?: string;
    image: string;
    technologies: string[];
}

export const projects: Project[] = [
    {
        name: "Housetipster",
        description: "Creating with team from scratch a Magento 2 store with a custom theme and advanced features. Worked on homepage,category page,product page, cms static pages, account pages and custom elements.",
        link: "https://housetipster.com/",
        image: '/images/projects/housetipster-project.png',
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker"]
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
        description: "Hepling with the development of a Magento 2 store with a custom theme and advanced features. Worked on homepage, category page, cms static pages, account pages and custom elements.",
        link: "https://www.catering24.co.uk/",
        image: "/images/projects/catering24-project.png",
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker"]
    },
    {
        name: "Paypair",
        description: "Supporting the development and fixing bugs on a Magento 2 store, implementing new features and custom elements.",
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
        description: "Creating with team from scratch a Magento 2 store with a custom theme and advanced features. Worked on all pages and custom elements.",
        link: "https://www.solar.com.pl/",
        image: "/images/projects/solar-project.png",
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker"]
    },
    {
        name: "Edycja",
        description: "Creating with team from scratch a Magento 2 store with a custom theme and advanced features. Worked on all pages and custom elements.",
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
        description: "My first project on react.js. Creating with team from scratch a recruitment website using native React.js and after 2 years migrated to Next.js. Working on all pages and custom elements and helping migrate to Next.js.",
        link: "https://pmicareers.pl/",
        image: "/images/projects/pmicareers-project.png",
        technologies: ["JavaScript","TypeScript","React.js",  "Next.js", "StyledComponents"]
    },
    {
        name: "Internorm",
        description: "Creating with team from scratch website for a PVC company using WordPress, TypeScript, and Gatsby.js. Worked on all pages and custom elements.",
        link: "https://internorm-dev.vercel.app/",
        image: "/images/projects/internorm-project.png",
        technologies: ["WordPress", "TypeScript", "Gatsby.js", "JavaScript" ]
    },
    {
        name: "Hrk",
        description: "Creating  with team from scratch a large recruitment website using TypeScript and Gatsby.js WordPress ACF. Worked on all pages and custom elements.",
        link: "https://www.hrk.pl/",
        image: "/images/projects/hrk-project.png",
        technologies: ["WordPress", "TypeScript", "Gatsby.js", "JavaScript", "StyledComponents" ]
    },
    {
        name: "Carneoo",
        description: "Helping to finish the development of next.js website for a car company. Worked on all pages and custom elements and fixing bugs.",
        link: "https://carneoo.de/",
        image: "/images/projects/carneoo-project.png",
        technologies: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwindcss" ]
    },
    {
        name: "Novum-klinika",
        description: "Helping to finish the development of medical form help in treating infertility.",
        link: "https://www.novum.com.pl/",
        image: "/images/projects/novum-klinika.png",
        technologies: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwindcss", "storybook" ]
    },
    {
        name: "Ponadczasowi",
        description: "Built and optimized Next.js e-commerce website for watch retailer. Implemented checkout system, payment integrations, shipping methods, and performance optimizations including code splitting and lazy loading. Added mobile responsiveness, blog functionality, and various third-party integrations while fixing bugs and enhancing user experience.",
        link: "https://ponadczasowi.pl/",
        image: "/images/projects/ponadczasowi.jpg",
        technologies: ["JavaScript", "React.js", "Next.js", "Scss"]
    },
    {
        name: "Copernicspace",
        description: "Built from scraatch   next.js project with sales NFT , pages kategory list , profile page , NFT builder page . Also modification of landing page ",
        link: "https://www.copernicspace.com/",
        image: "/images/projects/www.copernicspace.png",
        technologies: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwindcss"]
    },
    {
        name: "Billennium",
        description: "Built from scraatch  next.js project for IT company  ",
        link: "https://billennium.com/",
        image: "/images/projects/billennium.png",
        technologies: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwindcss","storybook" ]
    },
];