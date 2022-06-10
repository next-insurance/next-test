import React from 'react';
// import logo from '../assets/logo-big.png';

import styles from '../styles/Movie.module.scss';

const Movie = () => {
  return (
    <div className={styles.container}>
      <img src="" alt="" />
      <label>movie title</label>
      <label>movie rating</label>
      <button>read more</button>
    </div>
  );
};

export default Movie;
