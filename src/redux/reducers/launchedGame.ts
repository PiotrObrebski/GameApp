import { SET_SCORE, START_GAME, TOGGLE_VOLUME } from '../actionTypes';

const initialState = {
  volume: true,
  score: 0,
  gameActive: false
}

export default function(
  state = initialState,
  action: {
    type: string,
    payload: ILaunchedGame
}) : ILaunchedGame {
  switch (action.type) {
    case TOGGLE_VOLUME: 
      return {
        ...state,
        volume: !state.volume
      };
    case SET_SCORE: 
      return {
        ...state,
        score: action.payload.score
      };
      
    case START_GAME: 
    return {
      ...state,
      gameActive: true
    };
    default:
      return state
  }
}
