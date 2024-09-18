import React from 'react';
import styles from './style.module.css';

const projectCard = ({ name, image, description, technologies }) => {
    return (
    <article className={styles.projectCard}>
        <div className={styles.projectHeader}>
            <h3 className={styles.projectName}>{name}</h3>
            <img src={image} alt={`${name} project icon`} className={styles.projectIcon} />
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