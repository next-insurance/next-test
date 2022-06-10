import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

import styles from '../styles/MainPage.module.scss';

const MainPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <title className={styles.main__title}>
          Explore your next
          <br /> Movies and tv shows
        </title>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
