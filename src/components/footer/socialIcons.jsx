import React from 'react';
import styles from './style.module.css';

const SocialIcons = ({ src, alt, width, href}) => {
    return (
        <div className={styles.iconWrapper} style={{ width }}>
            <a href={href} target="_blank" rel="noopener norefferer">
                <img loading="lazy" src={src} alt={alt} className={styles.icon} style={{ width }} />
            </a>
        </div>
    );
};

export default SocialIcons;