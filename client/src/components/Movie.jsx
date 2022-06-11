import React from 'react';

import styles from '../styles/Movie.module.scss';
import Button from './Button';
import Rating from './Rating';

const Movie = ({ movieId, title, released, rating, image }) => {
  const generatMovieTitle = () => title + (released ? ` (${released})` : '');

  const handleReadMore = (id) => {
    console.log('id', id);
  };

  return (
    <div className={styles.container}>
      <img src={image} alt={title} title={title} />
      <label className={styles.movie__title} title={generatMovieTitle()}>
        {generatMovieTitle()}
      </label>
      <Rating rating={rating} />
      {/* <button className={styles.show_more} onClick={() => handleReadMore(movieId)}>
        Read more
      </button> */}
      <Button text="Read More" clickHandler={() => handleReadMore(movieId)} />
    </div>
  );
};

export default Movie;
