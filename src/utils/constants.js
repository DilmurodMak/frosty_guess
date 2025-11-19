// Game constants
export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const GAME_STATUS = {
  PLAYING: 'playing',
  WON: 'won',
  LOST: 'lost',
};

export const ROUTES = {
  HOME: '/',
  DIFFICULTY: '/difficulty',
  CATEGORY: '/category',
  GAME: '/game',
  RESULT: '/result',
};

export const DIFFICULTIES = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
};

export const CATEGORIES = {
  ANIMALS: 'animals',
  FRUITS: 'fruits',
  COUNTRIES: 'countries',
  STATES: 'states',
  COMPANIES: 'companies',
};

export const CATEGORY_LABELS = {
  [CATEGORIES.ANIMALS]: 'Animals',
  [CATEGORIES.FRUITS]: 'Fruits',
  [CATEGORIES.COUNTRIES]: 'Countries',
  [CATEGORIES.STATES]: 'US States',
  [CATEGORIES.COMPANIES]: 'Company Names',
};

export const DIFFICULTY_CONFIG = {
  [DIFFICULTIES.EASY]: {
    wordLengthMin: 3,
    wordLengthMax: 5,
    maxWrongGuesses: 6,
    label: 'Easy',
    description: '3-5 letters, 6 attempts',
  },
  [DIFFICULTIES.MEDIUM]: {
    wordLengthMin: 6,
    wordLengthMax: 8,
    maxWrongGuesses: 6,
    label: 'Medium',
    description: '6-8 letters, 6 attempts',
  },
  [DIFFICULTIES.HARD]: {
    wordLengthMin: 9,
    wordLengthMax: 99,
    maxWrongGuesses: 6,
    label: 'Hard',
    description: '9+ letters, 6 attempts',
  },
};
