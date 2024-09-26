import React from 'react';
import SkillSection from './skillSection';
import styles from './style.module.css';

const TechnicalSkills = () => {
    const programmingLanguages = [
        { iconSrc: "./html-logo.svg", name: "HTML" },
        { iconSrc: "./css-logo.svg", name: "CSS" },
        { iconSrc: "./javascript-logo.svg", name: "JavaScript" },
        { iconSrc: "./php-logo.svg", name: "PHP" },
        { iconSrc: "./java-logo.svg", name: "Java" }
    ];

    const frameworks = [
        { iconSrc: "./react-logo.svg", name: "React" },
        { iconSrc: "./nodejs-logo.svg", name: "NodeJS" },
        { iconSrc: "./laravel-logo.svg", name: "Laravel" }
    ];
    
    const databases = [
        {iconSrc: "./mysql-logo.svg", name: "MySQL"},
        {iconSrc: "./mongodb-logo.svg", name: "MongoDB"}
    ];

    const pmt = [
        {iconSrc: "./jira-logo.svg", name: "Jira"},
        {iconSrc: "./github-logo.svg", name: "GitHub"}
    ];

    const designTools = [
        {iconSrc: "./figma-logo.svg", name: "Figma"},
        {iconSrc: "./canva-logo.svg", name: "Canva"}
    ];

    const productivitySuites = [
        {iconSrc: "./g-docs-logo.svg", name: "Google Docs"},
        {iconSrc: "./g-slides-logo.svg", name: "Google Slides"},
        {iconSrc: "./g-sheets-logo.svg", name: "Google Sheets"},
        {iconSrc: "./ms-word-logo.svg", name: "Microsoft Word"},
        {iconSrc: "./ms-ppt-logo.svg", name: "Microsoft PowerPoint"},
        {iconSrc: "./ms-excel-logo.svg", name: "Microsoft Excel"},
    ];


    return (
    <section className={styles.skillsSection}>
        <div className={styles.mainContent}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.sectionTitle}>Technical Skills</h2>
                <div className={styles.skillsContainer}>
                    <div className={styles.pinkBox}>
                        <SkillSection title="Programming Languages" skills={programmingLanguages} />
                        <SkillSection title="Frameworks" skills={frameworks} />
                        <SkillSection title="Databases" skills={databases} />
                        <SkillSection title="Project Management Tools" skills={pmt} />
                        <SkillSection title="Design Tools" skills={designTools} />
                        <SkillSection title="Productivity Suites" skills={productivitySuites} />
                    </div>
                </div>
            </div>
            <div className={styles.pinkLine} />
        </div>
    </section>
    );
};

export default TechnicalSkills;