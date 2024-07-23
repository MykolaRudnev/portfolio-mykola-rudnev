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
        name: "Discover Glo",
        description: "Creating with team new redesign of a Magento 2 store with a custom theme and advanced features.",
        link: "https://www.discoverglo.com/de/de/",
        image: "/images/projects/discoverglo-project.png",
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
        link: "https://project8.example.com",
        image: "/images/projects/edycja-project.png",
        technologies: ["Magento 2", "JavaScript", "XML", "jQuery", "Docker"]
    },
    {
        name: "Doppler manufaktur",
        description: "A high-traffic Magento 2 store with optimized performance.",
        link: "https://project8.example.com",
        image: "/images/projects/catering24-project.png",
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
        link: "https://project8.example.com",
        image: "/images/projects/hrk-project.png",
        technologies: ["WordPress", "TypeScript", "Gatsby.js", "JavaScript", "StyledComponents" ]
    },
    {
        name: "Carneoo",
        description: "Helping to finish the development of next.js website for a car company. Worked on all pages and custom elements and fixing bugs.",
        link: "https://project8.example.com",
        image: "/images/projects/carneoo-project.png",
        technologies: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwindcss" ]
    },
];