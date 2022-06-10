import React from 'react';
import useFetch from 'use-http';
import Movie from './Movie';

import styles from '../styles/MoviesGrid.module.scss';

const MoviesGrid = () => {
  const { loading, error, data = [] } = useFetch('/movies', {}, []);

  console.log(data);
  if (error) {
    return <div className={styles.error}>Error: {error?.name}</div>;
  }

  if (loading) {
    return <div className={styles.loading}>Loading Movies...</div>;
  }

  return (
    <>
      {/* {error && 'Error!'} */}
      {loading && 'Loading...'}
      <div className={styles.movies__container}>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </>
  );
};

export default MoviesGrid;
