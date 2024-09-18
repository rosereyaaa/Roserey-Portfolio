import React from 'react';
import ProjectCard from './projectCard';
import styles from './style.module.css';

const projectsData = [
    { 
        name: "Treats Delight",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3812f051b9a2ca7f86061b4ee155a8520841a2a2a2d3c81c9722d060880ed551?placeholderIfAbsent=true&apiKey=34e9e65e881d49b1ab7778333f519a8d",
        description: "This project partially fulfills the requirement for our undergraduate degree under the IT Capstone course at the Technological University of the Philippines-Taguig. The comprehensive system goes beyond simple canteen management. It encompasses efficient ordering and administrative control systems to ensure smooth operations between the canteen staff, students, faculty, and admin staff of TUP-Taguig.",
        technologies: ["React", "TypeScript", "TailwindCSS", "NodeJS", "ExpressJS", "Vite", "MongoDB"]
    },
    {
        name: "BhieCycle",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc6c4d75ebc39ad0948ded4b06d67c90532c6b4b449102214797e17dfc12f5a1?placeholderIfAbsent=true&apiKey=34e9e65e881d49b1ab7778333f519a8d",
        description: "A web development project that is a requirement for the Programming Language-Design and Implementation course at the Technological University of the Philippines-Taguig. It is an e-commerce platform designed for bike enthusiasts and regular cyclists. Users have the option to create accounts and purchase bike accessories and services.",
        technologies: ["React", "JavaScript", "NodeJS", "MongoDB"]
    },
    {
        name: "WonderPets",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/afd74cbfa6841a49555dc9e343422e7bcdd7243051ca6450603311a9b5e125e3?placeholderIfAbsent=true&apiKey=34e9e65e881d49b1ab7778333f519a8d",
        description: "WonderPets is an e-commerce management system project during my sophomore year for the Advance Web Application course at the Technological University of the Philippines - Taguig. The system provides a range of services tailored to the needs of pet owners, including grooming and regular check-ups to ensure the well-being of their beloved pets.",
        technologies: ["Laravel", "PHP"]
    }
];

const projectSection = () => {
    return (
        <div id="projects">
            <div className={styles.line} role="presentation" />
            <section className={styles.projectSection}>
                <div className={styles.projectContainer}>
                    <h2 className={styles.projectTitle}>Projects</h2>
                    <div className={styles.projectGrid}>
                        {projectsData.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default projectSection;