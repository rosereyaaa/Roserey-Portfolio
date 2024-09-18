import React from 'react';
import styles from './style.module.css';
import NavItem from './navitem';

const navbar = () => {
  const navItems = [
    { text: 'About Me', link: '/about-me' },
    { text: 'Projects', link: '#projects' },
    { text: 'Contacts', link: '/contacts' },
    { text: 'Resume', link: '/resume' },
  ];

  return (
    <header className={styles.navbarSection}>
      <nav className={styles.navbarRectangle}>
        <a className="rc-logo">
          <img 
          loading="lazy" 
          src="./rc-logo.svg" 
          className={styles.logo} 
        />
        </a>
        <div className={styles.navLinks}>
          {navItems.map((item, index) => (
            <NavItem key={index} text={item.text} link={item.link} />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default navbar;