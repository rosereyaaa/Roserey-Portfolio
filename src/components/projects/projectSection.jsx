import React from 'react';
import ProjectCard from './projectCard';
import styles from './style.module.css';

const projectsData = [
    { 
        name: "Treats Delight",
        image: "./github-button.svg",
        link:"DoMAAA21/TreatsDelightTS",
        description: "This project partially fulfills the requirement for our undergraduate degree under the IT Capstone course at the Technological University of the Philippines-Taguig. The comprehensive system goes beyond simple canteen management. It encompasses efficient ordering and administrative control systems to ensure smooth operations between the canteen staff, students, faculty, and admin staff of TUP-Taguig.",
        technologies: ["React", "TypeScript", "TailwindCSS", "NodeJS", "ExpressJS", "Vite", "MongoDB"]
    },
    {
        name: "BhieCycle",
        image: "./github-button.svg",
        link:"rosereyaaa/BhieCycle",
        description: "A web development project that is a requirement for the Programming Language-Design and Implementation course at the Technological University of the Philippines-Taguig. It is an e-commerce platform designed for bike enthusiasts and regular cyclists. Users have the option to create accounts and purchase bike accessories and services.",
        technologies: ["React", "JavaScript", "NodeJS", "MongoDB"]
    },
    {
        name: "WonderPets",
        image: "./github-button.svg",
        link:"rosereyaaa/WonderPets",
        description: "WonderPets is an e-commerce management system project during my sophomore year for the Advance Web Application course at the Technological University of the Philippines - Taguig. The system provides a range of services tailored to the needs of pet owners, including grooming and regular check-ups to ensure the well-being of their beloved pets.",
        technologies: ["Laravel", "PHP"]
    }
];

const projectSection = () => {
    return (
        <div id="projects">
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