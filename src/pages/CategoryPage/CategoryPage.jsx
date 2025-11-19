import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './CategoryPage.module.css';
import {
  ROUTES,
  CATEGORIES,
  CATEGORY_LABELS,
} from '../../utils/constants';

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const difficulty = location.state?.difficulty;

  // Redirect if no difficulty selected
  React.useEffect(() => {
    if (!difficulty) {
      navigate(ROUTES.DIFFICULTY);
    }
  }, [difficulty, navigate]);

  const handleCategorySelect = category => {
    navigate(ROUTES.GAME, { state: { difficulty, category } });
  };

  const handleBack = () => {
    navigate(ROUTES.DIFFICULTY);
  };

  const categoryOptions = [
    { key: CATEGORIES.ANIMALS, icon: '🐾', label: CATEGORY_LABELS[CATEGORIES.ANIMALS] },
    { key: CATEGORIES.FRUITS, icon: '🍎', label: CATEGORY_LABELS[CATEGORIES.FRUITS] },
    { key: CATEGORIES.COUNTRIES, icon: '🌍', label: CATEGORY_LABELS[CATEGORIES.COUNTRIES] },
    { key: CATEGORIES.STATES, icon: '🗽', label: CATEGORY_LABELS[CATEGORIES.STATES] },
    { key: CATEGORIES.COMPANIES, icon: '🏢', label: CATEGORY_LABELS[CATEGORIES.COMPANIES] },
  ];

  return (
    <div className={styles.categoryPage}>
      <Button
        onClick={handleBack}
        variant="outline"
        size="small"
        className={styles.backButton}
        ariaLabel="Go back to difficulty selection"
      >
        ← Back
      </Button>

      <h1 className={styles.title}>Choose a Category</h1>
      <p className={styles.description}>
        Pick a topic for your word guessing game
      </p>

      <div className={styles.categoryGrid}>
        {categoryOptions.map(option => (
          <div
            key={option.key}
            className={styles.categoryCard}
            onClick={() => handleCategorySelect(option.key)}
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCategorySelect(option.key);
              }
            }}
            aria-label={`Select ${option.label} category`}
          >
            <div className={styles.categoryIcon}>{option.icon}</div>
            <h2 className={styles.categoryName}>{option.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
