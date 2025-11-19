import React from 'react';
import styles from './Snowman.module.css';

const Snowman = ({ wrongGuesses, maxWrongGuesses, remainingAttempts }) => {
  // Define which parts to show based on wrong guesses
  const showBase = wrongGuesses >= 1;
  const showBody = wrongGuesses >= 2;
  const showHead = wrongGuesses >= 3;
  const showFace = wrongGuesses >= 4;
  const showArms = wrongGuesses >= 5;
  const showButtons = wrongGuesses >= 6;

  return (
    <div className={styles.snowmanContainer}>
      <div className={styles.snowman}>
        {/* Head with Face */}
        {showHead && (
          <div className={`${styles.head} ${styles.part}`}>
            {showFace && (
              <div className={`${styles.face} ${styles.part}`}>
                <div className={styles.eyes}>
                  <div className={styles.eye}></div>
                  <div className={styles.eye}></div>
                </div>
                <div className={styles.nose}></div>
                <div className={styles.mouth}></div>
              </div>
            )}
          </div>
        )}

        {/* Body with Buttons */}
        {showBody && (
          <div className={`${styles.body} ${styles.part}`}>
            {showButtons && (
              <div className={`${styles.buttons} ${styles.part}`}>
                <div className={styles.button}></div>
                <div className={styles.button}></div>
              </div>
            )}
          </div>
        )}

        {/* Base */}
        {showBase && <div className={`${styles.base} ${styles.part}`}></div>}

        {/* Arms */}
        {showArms && (
          <div className={`${styles.arms} ${styles.part}`}>
            <div className={`${styles.arm} ${styles.leftArm}`}></div>
            <div className={`${styles.arm} ${styles.rightArm}`}></div>
          </div>
        )}
      </div>

      {/* Game Info */}
      <div className={styles.info}>
        <div className={styles.attempts}>
          Attempts Remaining: {remainingAttempts}
        </div>
        <div className={styles.wrongCount}>
          Wrong Guesses: {wrongGuesses} / {maxWrongGuesses}
        </div>
      </div>
    </div>
  );
};

export default Snowman;
