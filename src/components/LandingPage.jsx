import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setAllGames, setUser } from '../redux/actions';

const LandingPage = (props) => {  
  useEffect(()=>{
    const newUser = fetchUserData();
    const newGames = fetchAllGamesData();
    props.setUser(newUser);
    props.setAllGames(newGames);
  }, []);

  return (
  <div className="todo-app">
    <h1>Hello {props.user.name}</h1>
    <div>List of all games:</div>
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

const fetchUserData = () => {
  return {
    id: "f7bbbdd9-5a55-4a32-b53e-b5b74b4d24b4",
    name: "John Doe",
    email: "john@selfdecode.com"
  }
}

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

const mapStateToProps = state => {
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