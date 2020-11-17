import './DoubleTrouble.css';

import React from 'react';
import { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';

import { startGame } from '../../../redux/actions';
import ScoreControl from '../ScoreControl/ScoreControl';
import SoundControl from '../SoundControl/SoundControl';
import TimeControl from '../TimeControl/TimeControl';

interface IDoubleTroubleProps extends RouteComponentProps<{ name: string}> {
  currentGame: IGame;
  launchedGame: ILaunchedGame;
  startGame: () => void;
}
const DoubleTrouble = (props: IDoubleTroubleProps): ReactElement => {
  
  return (
    <div className="game-double-trouble">
      
      <div className="game-double-trouble-body">
        {!props.launchedGame.gameActive ? 
          <div className="prepare-for-game">
            <div className="play-wrapper">
              <div onClick={props.startGame} className="play-button">
                <i className="fas fa-play"></i>
              </div>
            </div>
            <div className="start-text">Start the game</div>
            <Link
              className="back-to-desc"
              to={`/${props.currentGame.name}`}
            >
              Instructions
            </Link>
          </div> : 
          <div className="launched-game">
            Go!
          </div>
        }
      </div>
      
      <div className="game-double-trouble-aside">
        
        <div className="aside-timer dark-gradient">
          <TimeControl/>
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
    startGame
  }
)(DoubleTrouble);