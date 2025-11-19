import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import DifficultyPage from './pages/DifficultyPage/DifficultyPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import GamePage from './pages/GamePage/GamePage';
import ResultPage from './pages/ResultPage/ResultPage';
import { ROUTES } from './utils/constants';
import './styles/variables.css';
import './styles/globals.css';
import './App.css';

function App() {
  const basename = import.meta.env.MODE === 'production' ? '/frosty_guess' : '';
  
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path={ROUTES.HOME} element={<LandingPage />} />
        <Route path={ROUTES.DIFFICULTY} element={<DifficultyPage />} />
        <Route path={ROUTES.CATEGORY} element={<CategoryPage />} />
        <Route path={ROUTES.GAME} element={<GamePage />} />
        <Route path={ROUTES.RESULT} element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
