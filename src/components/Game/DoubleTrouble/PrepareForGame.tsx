import React from 'react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';


interface IPrepareForGame {
  startGame: () => void;
  name: string
}
const PrepareForGame = (props: IPrepareForGame): ReactElement => {
  return(
  <div className="prepare-for-game">
    <div className="play-wrapper">
      <div onClick={props.startGame} className="play-button">
        <i className="fas fa-play"></i>
      </div>
    </div>
    <div className="start-text">Start the game</div>
    <Link
      className="back-to-desc"
      to={`/${props.name}`}
    >
      Instructions
    </Link>
  </div>
  )
}
export default PrepareForGame