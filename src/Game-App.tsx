import './Game-App.css';

import React, { FC, ReactElement } from 'react';

import LandingPage from './components/LandingPage';

const GameApp: FC = (): ReactElement => {
  return (
    <div className="game-app">
      <LandingPage/>
    </div>
  );
}

export default GameApp;
