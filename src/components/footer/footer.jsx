import React from 'react';
import styles from './style.module.css';
import SocialIcons from './socialIcons';

const Footer = () => {
    
    const socialIcons = [
        { platform: 'linkedIn',  alt: 'LinkedIn', src: './linkedin-logo.svg', href:'https://www.linkedin.com/in/rrr-calicdan/'},
        { platform: 'github',  alt: 'GitHub', src: './github-icon.svg', href:'https://github.com/rosereyaaa/'},
        { platform: 'gmail', alt:'Gmail', src: './gmail-logo.svg', href:'mailto:rhyearaven@gmail.com'}
    ];
    
    return (
        <div id="contacts">
            <footer className={styles.footer}>
                <div className={styles.pinkLine} />
                <section className={styles.contactSection}> 
                    <div className={styles.contactContents}>
                        <h2 className={styles.textColumn}>Let's get in touch !</h2>
                        <div className={styles.contactIcons}>
                            {socialIcons.map((icon, index) => (
                                <SocialIcons key={index} {...icon} />
                            ))}
                        </div>
                    </div>
                </section>
                <div className={styles.copyrightSection}>
                    <p className={styles.copyrightText}>©2024, Rosérey</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;