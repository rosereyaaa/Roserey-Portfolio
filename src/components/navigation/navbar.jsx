import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import NavItem from './navitem';

const Navbar = () => {
  const navItems = [
    { text: 'About Me', link: '#about-me' },
    { text: 'Projects', link: '#projects' },
    { text: 'Contacts', link: '/contacts' },
    { text: 'Resume', link: 'https://drive.google.com/file/d/1exNFp2ahis-XjLY3Jm0hrVrdB1HUZoz_/view?usp=sharing' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.navbarSection}>
      <nav className={styles.navbarRectangle}>

        <a className="rc-logo">
          <img loading="lazy" src="./rc-logo.svg" className={styles.logo} />
        </a>

        <div className={styles.navLinks} style={{ display: menuOpen || !isSmallScreen ? 'flex' : 'none' }}>
          {navItems.map((item, index) => (
            <NavItem key={index} text={item.text} link={item.link} />
          ))}
        </div>

        <img
          className={styles.menuBtn}
          src={menuOpen ? "./close-icon.svg" : "./menu-icon.svg"}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: isSmallScreen ? 'block' : 'none' }}
        />
        
      </nav>
    </header>
  );
};

export default Navbar;