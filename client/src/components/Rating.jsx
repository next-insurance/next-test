import React from 'react';

import styles from '../styles/Rating.module.scss';

const Rating = ({ rating }) => (
  <label className={`${styles.movie__rating} ${rating ? '' : styles.no_rating}`}>
    <i className={styles.star} />
    {rating ? rating : 'No Rating Available'}
  </label>
);

export default Rating;
