import React from 'react';

import styles from '../styles/Movie.module.scss';

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
      <label className={`${styles.movie__rating} ${rating ? '' : styles.no_rating}`}>
        <i className={styles.star} />
        {rating ? rating : 'No Rating Available'}
      </label>
      <button className={styles.show_more} onClick={() => handleReadMore(movieId)}>
        Read more
      </button>
    </div>
  );
};

export default Movie;
