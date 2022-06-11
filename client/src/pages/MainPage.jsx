import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MoviesGrid from '../components/MoviesGrid';
import Modal from '../components/Modal';

import styles from '../styles/MainPage.module.scss';

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <div className={styles.container}>
        <Header />
        <title className={styles.main__title}>
          Explore your next
          <br /> Movies and tv shows
        </title>
        <MoviesGrid />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
