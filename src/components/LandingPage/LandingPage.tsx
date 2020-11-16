import './LandingPage.css';

import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';

import { GAMES_END_POINT, USER_END_POINT } from '../../api-end-points';
import { getDataFromServer } from '../../api-helper';
import { setAllGames, setUser } from '../../redux/actions';
import { GamesList } from '../GamesList/GamesList';

const LandingPage = (
  props: {
    setUser: (content: User) => void;
    setAllGames: (content: IGame[]) => void;
    user: User;
    allGames: {
      gamesArray: IGame[]
    }
  }
): ReactElement => {  
  useEffect(() => {
    getDataFromServer(USER_END_POINT)
    .then( response => {
      props.setUser(response)
    })
    
    getDataFromServer(GAMES_END_POINT)
    .then( response => {
      props.setAllGames(response)
    })
    // TODO:
    // IGame End -> request
    // putScoreOnServer(SCORE_END_POINT, {
    //   "user_id": "f7bbbdd9-5a55-4a32-b53e-b5b74b4d24b4",
    //   "score": '48',
    //   "game_id": "c77f35e3-d41c-446c-af63-80f430a962d0"
    // })
    // .then( response => console.log(response));
  }, []);

  return (
  <div className="landing-page">
    <h1>Hello {props.user.name}</h1>
    <div>What would you like to play today?</div>
    <GamesList allGames={props.allGames}/>
  </div>
  )
};

const mapStateToProps = (
  state: {
    user: User;
    allGames: {
      gamesArray: IGame[];
    }
  }
) => {
  const { user, allGames } = state;
  return { user, allGames };
}

export default connect(
  mapStateToProps, 
  {
    setUser,
    setAllGames
  }
)(LandingPage);