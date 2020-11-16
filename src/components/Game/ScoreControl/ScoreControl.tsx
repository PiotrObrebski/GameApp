import './ScoreControl.css';

import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';

import { changeScore } from '../../../redux/actions';

const ScoreControl = (props:{
  launchedGame: ILaunchedGame;
  changeScore: (content: ILaunchedGame) => void;
}): ReactElement => {
  
  useEffect(()=>{
    const newGameState = (value = 0) => ({
      ...props.launchedGame,
      score: props.launchedGame.score + value
    })
    props.changeScore(newGameState());
  },[])

  return(
    <div className="score-control">
      <div className="score-control-content">
        <div className="score-text">score</div>
        <div className="score-display">
          {props.launchedGame.score}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (
  state: {
    launchedGame: ILaunchedGame;
  }
) => {
  const { launchedGame } = state;
  return { launchedGame };
}

export default connect(
  mapStateToProps, 
  {
    changeScore
  }
)(ScoreControl);