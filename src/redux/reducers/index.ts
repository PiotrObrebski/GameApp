import { combineReducers } from 'redux';

import allGames from './allGames';
import currentGame from './currentGame';
import user from './user';

export default combineReducers({ user, currentGame, allGames });
