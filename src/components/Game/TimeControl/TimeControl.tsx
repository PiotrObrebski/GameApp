import './TimeControl.css';

import React from 'react';
import { ReactElement } from 'react';
import { connect } from 'react-redux';

const TimeControl = (props:{ currentGame: IGame}): ReactElement => {
  return(
  <div className="time-control">
    <div className="time-control-top">
      <div className="time-control-slider">
        <div className="slider-bar"></div>
      </div>
    </div>
    <div className="time-control-bottom">
      <div className="time-control-bottom-content">
        <div className="time-control-text">time</div>
        <div className="time-control-number">
          {props.currentGame.time}
        </div>
      </div>
    </div>
  </div>
)}

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
)(TimeControl);