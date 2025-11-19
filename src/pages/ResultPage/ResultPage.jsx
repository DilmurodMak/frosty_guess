import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './ResultPage.module.css';
import { ROUTES } from '../../utils/constants';

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { hasWon, targetWord, difficulty, category } = location.state || {};

  // Redirect if no game data
  React.useEffect(() => {
    if (hasWon === undefined || !targetWord) {
      navigate(ROUTES.HOME);
    }
  }, [hasWon, targetWord, navigate]);

  const handlePlayAgain = () => {
    navigate(ROUTES.GAME, { state: { difficulty, category } });
  };

  const handleBackToMenu = () => {
    navigate(ROUTES.HOME);
  };

  if (hasWon === undefined) {
    return null;
  }

  return (
    <div className={`${styles.resultPage} ${hasWon ? styles.won : styles.lost}`}>
      <div className={styles.icon}>{hasWon ? '🎉' : '😢'}</div>
      
      <h1 className={styles.title}>
        {hasWon ? 'Congratulations!' : 'Game Over'}
      </h1>
      
      <p className={styles.message}>
        {hasWon
          ? 'You guessed the word correctly!'
          : 'Better luck next time!'}
      </p>
      
      <div className={styles.word}>
        {targetWord}
      </div>

      <div className={styles.buttonContainer}>
        <Button
          onClick={handlePlayAgain}
          variant="primary"
          size="large"
          ariaLabel="Play again with same settings"
        >
          Play Again
        </Button>
        <Button
          onClick={handleBackToMenu}
          variant="outline"
          size="large"
          ariaLabel="Return to main menu"
        >
          Main Menu
        </Button>
      </div>
    </div>
  );
};

export default ResultPage;
