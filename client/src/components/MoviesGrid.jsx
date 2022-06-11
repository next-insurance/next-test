import React, { useEffect, useState } from 'react';
import useFetch from 'use-http';
import Movie from './Movie';

import styles from '../styles/MoviesGrid.module.scss';

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const { get, response, loading, error } = useFetch();

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    try {
      const movieData = await get('/movies');
      console.log('movieData', movieData);
      if (response.ok) {
        setMovies(movieData);
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (error) {
    return <div className={styles.error}>Error: {error?.name}</div>;
  }

  if (loading) {
    return <div className={styles.loading}>Loading Movies...</div>;
  }

  return (
    <>
      <div className={styles.movies__container}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movieId={movie.id}
            title={movie.title}
            released={movie.released}
            rating={movie.rating}
            image={movie.image}
          />
        ))}
      </div>
    </>
  );
};

export default MoviesGrid;
