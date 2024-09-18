import React from "react";
import styles from './style.module.css';

function HeaderSection() {
  return (
    <header className={styles.headerSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textColumn}>
            <div className={styles.textContent}>
              <h1 className={styles.greeting}>Hello, I'm</h1>
              <h2 className={styles.name}>Rosérey</h2>
              <p className={styles.description}>
                A 21-year-old motivated self-taught designer & developer residing in Taguig City, Metro Manila, Philippines.
              </p>
              <p className={styles.education}>
                I'm currently in my last year of studying Information Technology at Technological University of the Philippines - Taguig.
              </p>
            </div>
          </div>
          <div className={styles.imageColumn}>
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd5bd0061884ec662f44ffe451e6586a7ab3a9d2a361061757302a16e17cfc0c?placeholderIfAbsent=true&apiKey=34e9e65e881d49b1ab7778333f519a8d" 
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