/* eslint-disable no-undef */
import React from 'react';
import { connect } from 'react-redux';

import { setUser } from '../redux/actions';
import { getUserState } from '../redux/selectors';

const LandingPage = ({currentUser, games}) => (
    <div className="todo-app">
      <h1>Hello {currentUser.name}</h1>
    </div>
);

const fetchUserData = () => {
  return {
    "id": "hash-value",
    "name": "John Doe",
    "email": "po@gmail.com"
  }
}

const mapStateToProps = state => {
  const { user, games } = state;
  console.log(state);
  const newUserData = fetchUserData();
  state.dispatch(setUser(newUserData));
  const currentUser = getUserState(state);
  
  console.log(currentUser);
  return { currentUser };
}

export default connect(mapStateToProps)(LandingPage);