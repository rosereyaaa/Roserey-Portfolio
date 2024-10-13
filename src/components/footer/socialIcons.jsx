import React from 'react';
import styles from './style.module.css';

const SocialIcons = ({ platform, alt, src, href }) => {
    const iconClasses = `${styles.socialIcon} ${styles[platform]}`;
    const imageClasses = `${styles.iconImage} ${styles[`${platform}Image`]}`;
    
    return (
        <a href={href} target="_blank" rel="noopener norefferer" className={iconClasses}>
            <img loading="lazy" src={src} alt={alt} className={imageClasses}/>
        </a>
    );
};

export default SocialIcons;