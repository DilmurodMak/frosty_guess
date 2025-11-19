import { useState, useCallback, useEffect } from 'react';
import { selectWord } from '../utils/wordSelector';
import {
  isCorrectGuess,
  getGameStatus,
  getDisplayWord,
  countWrongGuesses,
} from '../utils/gameLogic';
import { GAME_STATUS, DIFFICULTY_CONFIG } from '../utils/constants';

const useGameState = (category, difficulty) => {
  const [targetWord, setTargetWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.PLAYING);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const maxWrongGuesses = DIFFICULTY_CONFIG[difficulty]?.maxWrongGuesses || 6;

  // Initialize game
  useEffect(() => {
    if (category && difficulty) {
      const word = selectWord(category, difficulty);
      setTargetWord(word);
      setGuessedLetters(new Set());
      setGameStatus(GAME_STATUS.PLAYING);
      setWrongGuesses(0);
    }
  }, [category, difficulty]);

  // Guess a letter
  const guessLetter = useCallback(
    letter => {
      if (gameStatus !== GAME_STATUS.PLAYING) return;
      if (guessedLetters.has(letter.toUpperCase())) return;

      const newGuessedLetters = new Set(guessedLetters);
      newGuessedLetters.add(letter.toUpperCase());
      setGuessedLetters(newGuessedLetters);

      // Check if guess is correct
      if (!isCorrectGuess(letter, targetWord)) {
        setWrongGuesses(prev => prev + 1);
      }

      // Update game status
      const newStatus = getGameStatus(
        targetWord,
        newGuessedLetters,
        countWrongGuesses(newGuessedLetters, targetWord),
        maxWrongGuesses
      );
      setGameStatus(newStatus);
    },
    [gameStatus, guessedLetters, targetWord, maxWrongGuesses]
  );

  // Reset game
  const resetGame = useCallback(() => {
    const word = selectWord(category, difficulty);
    setTargetWord(word);
    setGuessedLetters(new Set());
    setGameStatus(GAME_STATUS.PLAYING);
    setWrongGuesses(0);
  }, [category, difficulty]);

  // Get display word with blanks
  const displayWord = getDisplayWord(targetWord, guessedLetters);

  // Check if game is over
  const isGameOver =
    gameStatus === GAME_STATUS.WON || gameStatus === GAME_STATUS.LOST;

  // Check if player won
  const hasWon = gameStatus === GAME_STATUS.WON;

  // Get remaining attempts
  const remainingAttempts = maxWrongGuesses - wrongGuesses;

  return {
    targetWord,
    guessedLetters,
    gameStatus,
    wrongGuesses,
    maxWrongGuesses,
    guessLetter,
    resetGame,
    displayWord,
    isGameOver,
    hasWon,
    remainingAttempts,
  };
};

export default useGameState;
