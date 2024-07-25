import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Hero from '@/app/components/Hero'
import LoadingSpinner from '@/app/components/LoadingSpinner'

const About = dynamic(() => import('@/app/components/About'), {
    loading: () => <LoadingSpinner message="Loading About..." />
});
const CV = dynamic(() => import('@/app/components/CV'), {
    loading: () => <LoadingSpinner message="Loading CV..." />
});
const Skills = dynamic(() => import('@/app/components/Skills'), {
    loading: () => <LoadingSpinner message="Loading Skills..." />
});
const ProjectsAndContact = dynamic(() => import("@/app/components/ProjectsAndContact"), {
    loading: () => <LoadingSpinner message="Loading Projects and Contact..." />
});

export default function Home() {
    return (
        <div>
            <Hero />
            <Suspense fallback={<LoadingSpinner message="Loading..." />}>
                <About />
            </Suspense>
            <Suspense fallback={<LoadingSpinner message="Loading..." />}>
                <CV />
            </Suspense>
            <Suspense fallback={<LoadingSpinner message="Loading..." />}>
                <Skills />
            </Suspense>
            <Suspense fallback={<LoadingSpinner message="Loading..." />}>
                <ProjectsAndContact />
            </Suspense>
        </div>
    )
}