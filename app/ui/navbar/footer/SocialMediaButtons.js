// components/SocialMediaButtons.js

import React from 'react';
import styles from './SocialMediaButtons.module.css';

const SocialMediaButtons = () => {
  const facebookUrl = 'https://www.facebook.com/profile.php?id=61553383681025';
  return (
    
    <div className={styles.wrapper}>
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
        <div className={styles.icon}>
          <i className="fab fa-facebook-f"></i>
        </div>
        <span>Facebook</span>
      </a>
      <a href="mailto:vuatiengviet.work@gmail.com?subject=Góp ý&body=Tôi có ý kiến về Vựa Tiếng Việt, liên quan tới vấn đề..." className={styles.button}>
        <div className={styles.icon}>
          <i className="fas fa-envelope"></i>
          {/* <i className="fab fa-mailchimp"></i> */}
        </div>
        <span>Email</span>
      </a>
      {/* <div className={styles.button}>
        <div className={styles.icon}>
          <i className="fab fa-twitter"></i>
        </div>
        <span>Twitter</span>
      </div>
      <div className={styles.button}>
        <div className={styles.icon}>
          <i className="fab fa-instagram"></i>
        </div>
        <span>Instagram</span>
      </div>
      <div className={styles.button}>
        <div className={styles.icon}>
          <i className="fab fa-github"></i>
        </div>
        <span>Github</span>
      </div>
      <div className={styles.button}>
        <div className={styles.icon}>
          <i className="fab fa-youtube"></i>
        </div>
        <span>YouTube</span>
      </div> */}
    </div>
  );
};
export default SocialMediaButtons;