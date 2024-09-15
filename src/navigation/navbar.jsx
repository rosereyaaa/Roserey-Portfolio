import React from 'react';
import './style.css';
import NavItem from './navitem';

const Navbar = () => {
  const navItems = ['About Me', 'Projects', 'Contacts', 'Resume'];

  return (
    <header className="navbarSection">
      <nav className="navbarRectangle">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/78a440521ecab22b8e4b7621289cb77af9e39b6ffeee2c1aaebd39dc541e906a?placeholderIfAbsent=true&apiKey=34e9e65e881d49b1ab7778333f519a8d" 
          className="logo" 
          alt="Company logo" 
        />
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