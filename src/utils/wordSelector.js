import wordsData from '../data/words.json';
import { DIFFICULTY_CONFIG } from './constants';

/**
 * Select a random word based on category and difficulty
 * @param {string} category - The word category
 * @param {string} difficulty - The difficulty level
 * @returns {string} A random word matching the criteria
 */
export const selectWord = (category, difficulty) => {
  const words = wordsData[category]?.[difficulty];
  
  if (!words || words.length === 0) {
    console.error(`No words found for category: ${category}, difficulty: ${difficulty}`);
    return 'ERROR';
  }

  const config = DIFFICULTY_CONFIG[difficulty];
  
  // Filter words by length if needed
  const filteredWords = words.filter(word => {
    const length = word.length;
    return length >= config.wordLengthMin && length <= config.wordLengthMax;
  });

  if (filteredWords.length === 0) {
    // Fallback to unfiltered words if no matches
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toUpperCase();
  }

  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  return filteredWords[randomIndex].toUpperCase();
};

/**
 * Get all available words for a category and difficulty
 * @param {string} category - The word category
 * @param {string} difficulty - The difficulty level
 * @returns {string[]} Array of words
 */
export const getWords = (category, difficulty) => {
  return wordsData[category]?.[difficulty] || [];
};
