import { IconType } from 'react-icons';

export interface Project {
    name: string;
    description: string;
    link?: string;
    image: string;
    technologies: string[];
}

export interface Skill {
    name: string;
    icon: IconType;
    color: string;
}

export interface WorkExperience {
    company: string;
    position: string;
    period: string;
    logo: string;
    responsibilities: string[];
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
    logo?: string;
}

export interface Course {
    name: string;
    provider: string;
    date?: string;
    link?: string;
}

export interface Language {
    language: string;
    proficiency: string;
    flag: string;
}

export interface Recommendation {
    name: string;
    role: string;
    text: string;
    linkedin: string;
}