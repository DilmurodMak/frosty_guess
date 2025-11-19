import React from 'react';
import styles from './Keyboard.module.css';
import { ALPHABET } from '../../utils/constants';

const Keyboard = ({ guessedLetters, onLetterGuess, targetWord, disabled }) => {
  const isCorrectGuess = letter => {
    return targetWord.toUpperCase().includes(letter);
  };

  const getKeyClass = letter => {
    if (!guessedLetters.has(letter)) {
      return styles.key;
    }
    
    if (isCorrectGuess(letter)) {
      return `${styles.key} ${styles.correct}`;
    }
    
    return `${styles.key} ${styles.wrong}`;
  };

  return (
    <div className={styles.keyboard} role="group" aria-label="Letter keyboard">
      {ALPHABET.map(letter => (
        <button
          key={letter}
          className={getKeyClass(letter)}
          onClick={() => onLetterGuess(letter)}
          disabled={disabled || guessedLetters.has(letter)}
          aria-label={`Letter ${letter}`}
          aria-pressed={guessedLetters.has(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
