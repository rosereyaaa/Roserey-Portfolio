import React from 'react';
import styles from './style.module.css';

const projectCard = ({ name, image, link, description, technologies }) => {
    return (
    <article className={styles.projectCard}>
        <div className={styles.projectHeader}>
            <h3 className={styles.projectName}>{name}</h3>
            <a href={`https://github.com/${link}`} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={`${name} project icon`} className={styles.projectIcon} />
            </a>
        </div>
        <p className={styles.projectDescription}>{description}</p>
        <ul className={styles.technologiesList}>
            {technologies.map((tech, index) => (
                <li key={index} className={styles.technologyItem}>{tech}</li>
            ))}
        </ul>
    </article>
    );
};

export default projectCard;