import React, { useEffect, useState } from 'react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';


interface IPrepareForGame {
  startGame: () => void;
  name: string;
  active: boolean;
}
const PrepareForGame = (props: IPrepareForGame): ReactElement => {
  const [launch, setLaunch] = useState(false);

  useEffect(() => {
    if(launch){
      const timerToLaunch = setTimeout(() => {
        props.startGame()
      }, 3000);

      return () => {
        clearTimeout(timerToLaunch)
      };
    }
  },[launch]);

  const setLaunchToTrue = () => {
    setLaunch(true)
  }

  if (props.active){
    return(
      <div className="prepare-for-game">
        <div className="play-wrapper">
          <div className="play-button">
          </div>
        </div>
      </div>
      )
  } else {
    return(
      <div className="prepare-for-game">
        <div className="play-wrapper">
          <div onClick={setLaunchToTrue} className="play-button">
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
  
}
export default PrepareForGame