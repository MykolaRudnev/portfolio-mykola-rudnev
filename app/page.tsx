import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import CV from '@/app/components/CV'
import Skills from '@/app/components/Skills'

import ProjectsAndContact from "@/app/components/ProjectsAndContact";

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <CV />
            <Skills />
            <ProjectsAndContact />
        </div>
    )
}