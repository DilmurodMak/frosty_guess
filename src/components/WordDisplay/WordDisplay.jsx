import React from 'react';
import styles from './WordDisplay.module.css';

const WordDisplay = ({ displayWord }) => {
  return (
    <div className={styles.wordDisplay} aria-label="Word display">
      {displayWord.split('').map((char, index) => {
        if (char === ' ') {
          return <div key={`space-${index}`} className={styles.space} />;
        }
        
        const isBlank = char === '_';
        return (
          <span
            key={index}
            className={isBlank ? styles.blank : styles.letter}
            aria-label={isBlank ? 'blank letter' : `letter ${char}`}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default WordDisplay;
