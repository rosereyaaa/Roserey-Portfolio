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
    
    return (
    <section className={styles.skillsSection}>
        <div className={styles.mainContent}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.sectionTitle}>Technical Skills</h2>
                <div className={styles.skillsContainer}>
                    <div className={styles.pinkBox}>
                        <SkillSection title="Programming Languages" skills={programmingLanguages} />
                        <SkillSection title="Frameworks" skills={frameworks} />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default TechnicalSkills;