import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './LandingPage.module.css';
import { ROUTES } from '../../utils/constants';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(ROUTES.DIFFICULTY);
  };

  return (
    <div className={styles.landingPage}>
      <div className={styles.snowflake}>⛄</div>
      <h1 className={styles.title}>Frosty Guess</h1>
      <p className={styles.subtitle}>
        Guess the word letter by letter before the snowman is complete!
      </p>
      <div className={styles.buttonContainer}>
        <Button
          onClick={handleStart}
          variant="primary"
          size="large"
          ariaLabel="Start new game"
        >
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
