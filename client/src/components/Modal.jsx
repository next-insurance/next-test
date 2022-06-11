import React from 'react';
import styles from '../styles/Modal.module.scss';
import Button from './Button';
import Rating from './Rating';

function Modal(/* { setOpenModal } */) {
  return (
    <div className={styles.modal__background}>
      <div className={styles.modal__container}>
        <div className={styles.modal__image}>
          <img
            src={
              'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbjUFYCF6qVcxBNZXhL_HIGhaNXLosDyYyg6v3WP9H1FLsGMBtJx1uy9R8pEMgz0gGzPLlcF9lgH5WjpB_jl4p6DmlDw.jpg?r=43c'
            }
            alt=""
          />
        </div>
        <div className={styles.modal__body}>
          <div className={styles.top}>
            <div className={styles.main_title}>Fight Club</div>
            <div className={styles.duration}>2h 19min</div>
            {/* <div>8.8/10</div> */}
            <Rating rating={'8.8'} />
            <p className={styles.description}>
              An insomniac office worker and a devilmay-care soapmaker form an underground fight
              club that evolves into something much, much more.
            </p>
          </div>
          <div className={styles.bottom}>
            {/* <button type="button" className={styles.close_btn}>
              Back to list
            </button> */}
            <Button
              text="Back to list"
              reverseOrder
              clickHandler={() => {
                console.log('close');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
