import React from 'react';
import logo from '../assets/logo-big.png';

import styles from '../styles/Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <img className={styles.logo} width={260} height={80} src={logo} alt="Next Movies Logo" />
  </header>
);

export default Header;
