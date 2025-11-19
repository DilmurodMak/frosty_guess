import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import WordDisplay from '../../components/WordDisplay/WordDisplay';
import Keyboard from '../../components/Keyboard/Keyboard';
import Snowman from '../../components/Snowman/Snowman';
import useGameState from '../../hooks/useGameState';
import useKeyboardInput from '../../hooks/useKeyboardInput';
import styles from './GamePage.module.css';
import {
  ROUTES,
  CATEGORY_LABELS,
  DIFFICULTY_CONFIG,
} from '../../utils/constants';

const GamePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const difficulty = location.state?.difficulty;
  const category = location.state?.category;
  const [showQuitModal, setShowQuitModal] = useState(false);

  // Redirect if no difficulty or category selected
  useEffect(() => {
    if (!difficulty || !category) {
      navigate(ROUTES.DIFFICULTY);
    }
  }, [difficulty, category, navigate]);

  const {
    targetWord,
    guessedLetters,
    wrongGuesses,
    maxWrongGuesses,
    guessLetter,
    displayWord,
    isGameOver,
    hasWon,
    remainingAttempts,
  } = useGameState(category, difficulty);

  // Navigate to result page when game is over
  useEffect(() => {
    if (isGameOver) {
      setTimeout(() => {
        navigate(ROUTES.RESULT, {
          state: {
            hasWon,
            targetWord,
            difficulty,
            category,
          },
        });
      }, 1500);
    }
  }, [isGameOver, hasWon, targetWord, difficulty, category, navigate]);

  // Handle keyboard input
  useKeyboardInput(guessLetter, !isGameOver);

  const handleQuitClick = () => {
    setShowQuitModal(true);
  };

  const handleQuitConfirm = () => {
    setShowQuitModal(false);
    navigate(ROUTES.HOME);
  };

  const handleQuitCancel = () => {
    setShowQuitModal(false);
  };

  if (!difficulty || !category) {
    return null;
  }

  return (
    <div className={styles.gamePage}>
      <div className={styles.header}>
        <div className={styles.gameInfo}>
          <h1 className={styles.category}>
            {CATEGORY_LABELS[category]}
          </h1>
          <p className={styles.difficulty}>
            {DIFFICULTY_CONFIG[difficulty].label} Mode
          </p>
        </div>
        <Button
          onClick={handleQuitClick}
          variant="outline"
          size="small"
          className={styles.quitButton}
        >
          Quit
        </Button>
      </div>

      <Modal
        isOpen={showQuitModal}
        onClose={handleQuitCancel}
        onConfirm={handleQuitConfirm}
        title="Quit Game?"
        message="Are you sure you want to quit? Your progress will be lost."
      />

      <div className={styles.content}>
        <div className={styles.gameArea}>
          <div className={styles.leftColumn}>
            <WordDisplay displayWord={displayWord} />
            <Keyboard
              guessedLetters={guessedLetters}
              onLetterGuess={guessLetter}
              targetWord={targetWord}
              disabled={isGameOver}
            />
          </div>

          <div className={styles.rightColumn}>
            <Snowman
              wrongGuesses={wrongGuesses}
              maxWrongGuesses={maxWrongGuesses}
              remainingAttempts={remainingAttempts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
