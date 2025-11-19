import { useEffect } from 'react';
import { ALPHABET } from '../utils/constants';

const useKeyboardInput = (onKeyPress, enabled = true) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = event => {
      const key = event.key.toUpperCase();
      
      // Check if it's a letter
      if (ALPHABET.includes(key)) {
        event.preventDefault();
        onKeyPress(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onKeyPress, enabled]);
};

export default useKeyboardInput;
