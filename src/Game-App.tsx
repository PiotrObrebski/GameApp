import './Game-App.css';

import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GamePage from './components/GamePage/GamePage';
import LandingPage from './components/LandingPage/LandingPage';

const GameApp: FC = (): ReactElement => {
  return (
    
    <div className="wrapper game-app">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/:name" component={GamePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default GameApp;
