import React from 'react';
import styles from './style.module.css';
import NavItem from './navitem';

const Navbar = () => {
  const navItems = ['About Me', 'Projects', 'Contacts', 'Resume'];

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
            <NavItem key={index} text={item} />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;