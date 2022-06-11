import React from 'react';
import styles from '../styles/Modal.module.scss';
import Button from './Button';
import Rating from './Rating';

function prettifyDuration(duration) {
  if (!duration) {
    return;
  }
  const durations = duration.split('h');
  durations[1] = durations[1] + 'in';
  return durations.join('h ');
}

const Modal = ({ setOpenModal, data }) => {
  const { largeimage, title, synopsis, runtime, rating } = data;
  return (
    <div className={styles.modal__background}>
      <div className={styles.modal__container}>
        <div className={styles.modal__image}>
          <img src={largeimage} alt={title} />
        </div>
        <div className={styles.modal__body}>
          <div className={styles.top}>
            <div className={styles.main_title}>{title}</div>
            <div className={styles.duration}>{prettifyDuration(runtime)}</div>
            <Rating rating={rating ? `${rating}/10` : null} />
            {/* this dangerouslySetInnerHTML is used to decode the html entity that returns from the api.
                I use it because I trust that this text is not coming from the user input, but from the server
             */}
            <p className={styles.description} dangerouslySetInnerHTML={{ __html: `${synopsis}` }} />
          </div>
          <div className={styles.bottom}>
            <Button text="Back to list" reverseOrder clickHandler={setOpenModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
