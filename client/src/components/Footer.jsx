import React from 'react';
import styles from '../styles/Footer.module.scss';
import favicon from '../assets/favicon.svg';

import facebook from '../assets/social/facebook-share-icon.svg';
import linkedin from '../assets/social/linkedin-share-icon.svg';
import twitter from '../assets/social/twitter-share-icon.svg';
import instagram from '../assets/social/instagram-share-icon.svg';
import youtube from '../assets/social/youtube-share-icon.svg';
const socialLinks = [
  { logo: facebook, src: 'https://www.facebook.com/NextInsuranceIL' },
  { logo: linkedin, src: 'https://www.linkedin.com/company/nextinsurance' },
  { logo: twitter, src: 'https://twitter.com/nextInsurance1' },
  { logo: instagram, src: 'https://www.instagram.com/nextinsurance/' },
  { logo: youtube, src: 'https://www.youtube.com/channel/UCXKL3pilHs2KJPLaICWskmQ' }
];
const Footer = () => (
  <footer className={styles.footer}>
    <img className={styles.favicon} width={40} height={40} src={favicon} alt="Next favicon" />
    <div className={styles.contact__container}>
      Contact us
      <div className={styles.contact__details}>
        support@nextmovies.com <br /> Mon – Fri | 6: 00am – 5: 00 pm PT{' '}
      </div>
      <div className={styles.contact__social}>
        {socialLinks.map((link, index) => (
          <a className={styles.social__logo} key={index} href={link.src}>
            <img src={link.logo} alt="social logo" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
