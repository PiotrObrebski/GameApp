import './DoubleTrouble.css';

import React, { useEffect } from 'react';
import { ReactElement } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { startGame, stopGame } from '../../../redux/actions';
import ScoreControl from '../ScoreControl/ScoreControl';
import SoundControl from '../SoundControl/SoundControl';
import TimeControl from '../TimeControl/TimeControl';
import PrepareForGame from './PrepareForGame';

interface IDoubleTroubleProps extends RouteComponentProps<{ name: string}> {
  currentGame: IGame;
  launchedGame: ILaunchedGame;
  startGame: () => void;
  stopGame: () => void;
}
const DoubleTrouble = (props: IDoubleTroubleProps): ReactElement => {
  useEffect(()=>{
    if (props.launchedGame.gameActive){
      const timer = setTimeout(() => {
        
        props.stopGame()
      }, props.currentGame.time*100);
      return () => clearTimeout(timer);
    }

  },[props.launchedGame.gameActive]);
  
  // console.log(props.launchedGame.gameActive)
  return (
    <div className="game-double-trouble">
      
      <div className="game-double-trouble-body">
        {!props.launchedGame.gameActive ? 
          <PrepareForGame startGame={props.startGame} name={props.currentGame.name}/> : 
          <div onClick={props.stopGame} className="launched-game">
            Go!
          </div>
        }
      </div>
      
      <div className="game-double-trouble-aside">
        
        <div className="aside-timer dark-gradient">
          <TimeControl active={props.launchedGame.gameActive}/>
        </div>
        
        <div className="aside-score dark-gradient">
          <ScoreControl/>
        </div>
        <div className="aside-sound dark-gradient">
          <SoundControl/>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (
  state: {
    currentGame: IGame;
    launchedGame: ILaunchedGame;
  }
) => {
  const { currentGame, launchedGame } = state;
  return { currentGame, launchedGame };
}

export default connect(
  mapStateToProps, 
  {
    startGame,
    stopGame
  }
)(DoubleTrouble);