import React from 'react';
import './style.css';
import NavItem from './navitem';

const Navbar = () => {
  const navItems = ['About Me', 'Projects', 'Contacts', 'Resume'];

  return (
    <header className="navbarSection">
      <nav className="navbarRectangle">
        <a className='rc-logo'>
          <img 
          loading="lazy" 
          src="./rc-logo.svg" 
          className="logo" 
        />
        </a>
        <div className="navLinks">
          {navItems.map((item, index) => (
            <NavItem key={index} text={item} />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;