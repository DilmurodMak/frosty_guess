import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DifficultyPage.module.css';
import { ROUTES, DIFFICULTIES, DIFFICULTY_CONFIG } from '../../utils/constants';

const DifficultyPage = () => {
  const navigate = useNavigate();

  const handleDifficultySelect = difficulty => {
    navigate(ROUTES.CATEGORY, { state: { difficulty } });
  };

  const difficultyOptions = [
    {
      key: DIFFICULTIES.EASY,
      icon: '🌟',
      ...DIFFICULTY_CONFIG[DIFFICULTIES.EASY],
      className: styles.easy,
    },
    {
      key: DIFFICULTIES.MEDIUM,
      icon: '⚡',
      ...DIFFICULTY_CONFIG[DIFFICULTIES.MEDIUM],
      className: styles.medium,
    },
    {
      key: DIFFICULTIES.HARD,
      icon: '🔥',
      ...DIFFICULTY_CONFIG[DIFFICULTIES.HARD],
      className: styles.hard,
    },
  ];

  return (
    <div className={styles.difficultyPage}>
      <h1 className={styles.title}>Choose Your Difficulty</h1>
      <p className={styles.description}>
        Select a challenge level to start playing
      </p>

      <div className={styles.cards}>
        {difficultyOptions.map(option => (
          <div
            key={option.key}
            className={`${styles.card} ${option.className}`}
            onClick={() => handleDifficultySelect(option.key)}
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleDifficultySelect(option.key);
              }
            }}
            aria-label={`Select ${option.label} difficulty`}
          >
            <div className={styles.cardIcon}>{option.icon}</div>
            <h2 className={styles.cardTitle}>{option.label}</h2>
            <p className={styles.cardDescription}>{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DifficultyPage;
