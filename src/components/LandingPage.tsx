import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';

import { getUserFromServer } from '../api-helper';
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
    getUserFromServer().then( response => {
      props.setUser(response)}
    )
    
    const newGames = fetchAllGamesData();
    props.setAllGames(newGames);
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

const fetchAllGamesData = () => {
  return  [
    {
      id: "c77f35e3-d41c-446c-af63-80f430a962d0",
      name: "Double Trouble",
      intro_text: "See what color the top word is. Select that color from the two options below. DON’T pay attention to what the top word says or the color of the two options below. It’s important to match the color of the top word with the meaning of the word below.",
      farewell_text: "We will reach you as soon as we carefully review your interview.",
      time: 120
    },
  ]
}

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