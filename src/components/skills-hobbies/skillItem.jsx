import React from 'react';
import styles from './style.module.css';

const SkillItem = ({ name, imageSrc, style }) => {
  return (
    <div className={styles.skillItem} style={style}>
      <img loading="lazy" src={imageSrc} alt={`${name} icon`} className={styles.skillIcon} />
      <div>{name}</div>
    </div>
  );
};

export default SkillItem;