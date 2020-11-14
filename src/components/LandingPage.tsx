import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';

import { GAMES_END_POINT, USER_END_POINT } from '../api-end-points';
import { getDataFromServer } from '../api-helper';
import { setAllGames, setUser } from '../redux/actions';

const LandingPage = (
  props: {
    setUser: (content: User) => void;
    setAllGames: (content: Game[]) => void;
    user: User;
    allGames: {
      gamesArray: Game[]
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
  }, []);

  return (
  <div className="todo-app">
    <h1>Hello {props.user.name}</h1>
    <div>What would you like to play today?</div>
    {props.allGames.gamesArray.map(
      (game, id)=>{
        return(
          <div key={id}>
            {game.name}
          </div>
        )
      }
    )}
  </div>
  )
};

const mapStateToProps = (
  state: {
    user: User;
    allGames: {
      gamesArray: Game[];
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