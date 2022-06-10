import React, { useEffect /* , useState */ } from 'react';
import Movie from './Movie';

import styles from '../styles/MoviesGrid.module.scss';

const MoviesGrid = () => {
  // const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch('/movies');
      const movies = await res.json();
      // do not set movies twice
      if (!ignore) {
        // setMovies(movies);
      }
      console.log(movies);
    };

    let ignore = false;

    getMovies();

    return () => {
      ignore = true;
    };
  }, []);
  return (
    <div className={styles.movies__container}>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
  );
};

export default MoviesGrid;
