import { GAME_STATUS } from './constants';

/**
 * Check if a letter guess is correct
 * @param {string} letter - The guessed letter
 * @param {string} word - The target word
 * @returns {boolean} True if the letter is in the word
 */
export const isCorrectGuess = (letter, word) => {
  return word.toUpperCase().includes(letter.toUpperCase());
};

/**
 * Get all positions where a letter appears in the word
 * @param {string} letter - The letter to find
 * @param {string} word - The target word
 * @returns {number[]} Array of indices where the letter appears
 */
export const getLetterPositions = (letter, word) => {
  const positions = [];
  const upperWord = word.toUpperCase();
  const upperLetter = letter.toUpperCase();
  
  for (let i = 0; i < upperWord.length; i++) {
    if (upperWord[i] === upperLetter) {
      positions.push(i);
    }
  }
  
  return positions;
};

/**
 * Check if the game is won (all letters guessed)
 * @param {string} word - The target word
 * @param {Set<string>} guessedLetters - Set of guessed letters
 * @returns {boolean} True if all letters have been guessed
 */
export const checkWin = (word, guessedLetters) => {
  const upperWord = word.toUpperCase();
  const uniqueLetters = new Set(upperWord.split('').filter(char => char !== ' '));
  
  for (const letter of uniqueLetters) {
    if (!guessedLetters.has(letter.toUpperCase())) {
      return false;
    }
  }
  
  return true;
};

/**
 * Check if the game is lost (too many wrong guesses)
 * @param {number} wrongGuesses - Number of wrong guesses
 * @param {number} maxWrongGuesses - Maximum allowed wrong guesses
 * @returns {boolean} True if the game is lost
 */
export const checkLose = (wrongGuesses, maxWrongGuesses) => {
  return wrongGuesses >= maxWrongGuesses;
};

/**
 * Get the current game status
 * @param {string} word - The target word
 * @param {Set<string>} guessedLetters - Set of guessed letters
 * @param {number} wrongGuesses - Number of wrong guesses
 * @param {number} maxWrongGuesses - Maximum allowed wrong guesses
 * @returns {string} The game status (playing, won, lost)
 */
export const getGameStatus = (word, guessedLetters, wrongGuesses, maxWrongGuesses) => {
  if (checkWin(word, guessedLetters)) {
    return GAME_STATUS.WON;
  }
  
  if (checkLose(wrongGuesses, maxWrongGuesses)) {
    return GAME_STATUS.LOST;
  }
  
  return GAME_STATUS.PLAYING;
};

/**
 * Get the display version of the word with blanks and revealed letters
 * @param {string} word - The target word
 * @param {Set<string>} guessedLetters - Set of guessed letters
 * @returns {string} The word with blanks for unguessed letters
 */
export const getDisplayWord = (word, guessedLetters) => {
  return word
    .toUpperCase()
    .split('')
    .map(char => {
      if (char === ' ') return ' ';
      return guessedLetters.has(char) ? char : '_';
    })
    .join(' ');
};

/**
 * Count wrong guesses
 * @param {Set<string>} guessedLetters - Set of guessed letters
 * @param {string} word - The target word
 * @returns {number} Number of wrong guesses
 */
export const countWrongGuesses = (guessedLetters, word) => {
  let wrong = 0;
  const upperWord = word.toUpperCase();
  
  guessedLetters.forEach(letter => {
    if (!upperWord.includes(letter.toUpperCase())) {
      wrong++;
    }
  });
  
  return wrong;
};
