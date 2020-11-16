import { SET_SCORE, TOGGLE_VOLUME } from '../actionTypes';

const initialState = {
  volume: true,
  score: 0,
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
    default:
      return state
  }
}
