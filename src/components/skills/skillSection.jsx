import React from 'react';
import SkillItem from './skillItem';
import styles from './style.module.css';

const SkillSection = ({ title, skills }) => {
  return (
    <>
      <h3 className={styles.categoryTitle}>{title}</h3>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <SkillItem key={index} iconSrc={skill.iconSrc} name={skill.name} />
        ))}
      </div>
    </>
  );
};

export default SkillSection;