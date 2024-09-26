import React from 'react';
import styles from './style.module.css';
import SocialIcons from './socialIcons';

const socialIcons = [
    { src: './linkedin-logo.svg', alt: 'LinkedIn', width: '94px', href:'https://www.linkedin.com/in/rrr-calicdan/'},
    { src: './github-icon.svg', alt: 'GitHub', width: '112px', href:'https://github.com/rosereyaaa/'},
    { src: './gmail-logo.svg', alt: 'Gmail', width: '102px', href:'mailto:rhyearaven@gmail.com'}
];

const Footer = () => {
    return (
        <div id="contacts">
            <footer className={styles.footer}>
            <div className={styles.pinkLine} />
                <section className={styles.contactSection}>
                    <div className={styles.contactWrapper}>
                        <div className={styles.contactContent}>
                            <div className={styles.textColumn}>
                                <h2 className={styles.contactHeading}>Let's get in touch !</h2>
                            </div>
                            <div className={styles.iconColumn}>
                                <nav className={styles.contactIcons}>
                                    {socialIcons.map((icon, index) => (
                                        <SocialIcons key={index} {...icon} />
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.copyrightSection}>
                    <p className={styles.copyrightText}>©2024, Rosérey</p>
                </section>
            </footer>
        </div>
    );
};

export default Footer;