import React from 'react';
import styles from './style.module.css';

const NavItem = ({ text, link }) => {
  return (
    <div>
      <a href={link}>{text}</a>
    </div>
  );
};

export default NavItem;