import './GamePage.css';

import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { GAMES_END_POINT } from '../../api-end-points';
import { getDataFromServer } from '../../api-helper';
import { setCurrentGame } from '../../redux/actions';
import descImage from './desc-img/double-trouble-desc.png';

interface IGamePageProps extends RouteComponentProps<{ name: string}> {
  allGames: { gamesArray: Game[] };
  currentGame: Game;
  setCurrentGame: (content: Game) => void;
}

const GamePage = (props: IGamePageProps): ReactElement => {
  useEffect(() => {

    const Game:Game[] = props.allGames.gamesArray.filter(
      obj => {
        return obj.name === props.match.params.name
      }
    );

    getDataFromServer(GAMES_END_POINT+Game[0].id)
    .then( response => {
      props.setCurrentGame(response)
    })
    
  }, []);
  return (
    <div className="game-page">
      <p className="game-page-header">Instructions</p>
      <p className="intro-text">{props.currentGame.intro_text}</p>
      <img className="desc-img"
      src={props.currentGame.name === "Double Trouble" ? descImage : "" } alt="game-description"/>
      <button className="btn-confirm">I understand</button>
    </div>
  )
}

const mapStateToProps = (
  state: {
    user: User;
    allGames: { gamesArray: Game[] };
    currentGame: Game;
  }
) => {
  const { user, allGames, currentGame } = state;
  return { user, allGames, currentGame };
}

export default connect(
  mapStateToProps, 
  {
    setCurrentGame
  }
)(GamePage);