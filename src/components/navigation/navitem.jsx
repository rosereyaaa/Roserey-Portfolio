import React from 'react';

const NavItem = ({ text, link }) => {
  const handleClick = (e) => {
    if (link.startsWith('http')) {
      // Allow default link behavior for external URLs
      return;
    }
    e.preventDefault();
    const targetElement = document.querySelector(link);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div>
      <a href={link} target={link.startsWith('http') ? '_blank' : '_self'} onClick={handleClick}>{text}</a>
    </div>
  );
};

export default NavItem;