import React from 'react';
import './style.css';

const navitem = ({ text }) => {
  return (
    <li className="navItem">
      <a href={`#${text.toLowerCase().replace(' ', '-')}`}>{text}</a>
    </li>
  );
};

export default navitem;