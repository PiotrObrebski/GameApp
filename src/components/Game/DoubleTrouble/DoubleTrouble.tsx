import './DoubleTrouble.css';

import React from 'react';
import { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';

import ScoreControl from '../ScoreControl/ScoreControl';
import SoundControl from '../SoundControl/SoundControl';
import TimeControl from '../TimeControl/TimeControl';

interface IDoubleTroubleProps extends RouteComponentProps<{ name: string}> {
  currentGame: IGame;
}
const DoubleTrouble = (props: IDoubleTroubleProps): ReactElement => {
  return (
    <div className="game-double-trouble">
      
      <div className="game-double-trouble-body">
        <div className="play-wrapper">
          <div className="play-button">
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
  }
) => {
  const { currentGame } = state;
  return { currentGame };
}

export default connect(
  mapStateToProps, 
  {}
)(DoubleTrouble);