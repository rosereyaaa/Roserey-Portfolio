import React from 'react';
import styles from './style.module.css';

const navitem = ({ text }) => {
  return (
    <li className={styles.navItem}>
      <a href={`#${text.toLowerCase().replace(' ', '-')}`}>{text}</a>
    </li>
  );
};

export default navitem;