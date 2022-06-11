import React from 'react';
import styles from '../styles/Button.module.scss';

const Button = ({ text, reverseOrder, clickHandler }) => (
  <button
    className={`${styles.button} ${reverseOrder ? styles.reverse_direction : ''}`}
    onClick={clickHandler}>
    {text}
  </button>
);

export default Button;
