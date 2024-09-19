import React from 'react';
import styles from './style.module.css';
import SkillItem from './skillItem';

const TechnicalSkills = () => {
    const skills = [
        { name: 'HTML', imageSrc: './html-icon.svg' },
        { name: 'CSS', imageSrc: './css-icon.svg' },
        { name: 'JavaScript', imageSrc: './javascript-icon.svg'},
        { name: 'PHP', imageSrc: './php-icon.svg'},
        { name: 'Java', imageSrc: './java-icon.svg'},
    ];
    return (
    <section className={styles.container}>
        <h2 className={styles.heading}>Technical Skills</h2>
        <div className={styles.skillsContainer}>
            <div className={styles.skillsBox}>
                <div className={styles.languageFrame}>
                <select className={styles.languageSelector} role="button" tabIndex="0">
                    <option value="PL">Programming Language</option>
                    <option value="Frameworks">Frameworks</option>
                    <option value="Databases">Databases</option>
                    <option value="PMT">Project Management Tools</option>
                    <option value="Design">Design Tools</option>
                    <option value="PS">Productivity Suites</option>
                </select>
                </div>
                <div className={styles.Grid}>
                    {skills.map((skill, index) => (
                        <SkillItem key={index} {...skill} />
                    ))}
        </div>
            </div>
        </div>
        
    </section>
    );
};

export default TechnicalSkills;