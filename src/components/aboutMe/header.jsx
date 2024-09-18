import React from "react";
import styles from './style.module.css';

function HeaderSection() {
  return (
    <header className={styles.headerSection} id="about-me">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textColumn}>
            <div className={styles.textContent}>
              <h1 className={styles.greeting}>Hello, I'm</h1>
              <h2 className={styles.name}>Rosérey</h2>
              <p className={styles.description}>
                A 21-year-old motivated designer & developer residing in Taguig City, Metro Manila, Philippines.
              </p>
              <p className={styles.education}>
                I'm currently in my last year of studying Information Technology at Technological University of the Philippines - Taguig.
              </p>
            </div>
          </div>
          <div className={styles.imageColumn}>
            <img 
              loading="lazy" 
              src="./memoji.png" 
              className={styles.profileImage} 
              alt="Rosérey's profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;