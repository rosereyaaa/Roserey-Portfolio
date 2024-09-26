import React from 'react';
import styles from './style.module.css';

const SkillItem = ({ iconSrc, name }) => {
  return (
    <div className={styles.skillItem}>
      <img loading="lazy" src={iconSrc} alt="" className={styles.skillIcon} />
      <div className={styles.skillName}>{name}</div>
    </div>
  );
};

export default SkillItem;