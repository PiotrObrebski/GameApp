import { SET_All_GAMES, SET_CURRENT_GAME } from '../actionTypes';

type GamesStore = {
  allGames: Game[],
  currentGame: Game
}
const initialState = {
  allGames: [{id:'',name:'',intro_text:'', farewell_text:'', time: 0}],
  currentGame: {id:'',name:'',intro_text:'', farewell_text:'', time: 0}
};

export default function(state = initialState, action: {type: string, payload: GamesStore}): GamesStore {
  switch (action.type) {
    case SET_All_GAMES: {
      return {
        ...state,
        allGames: action.payload.allGames
      };
    }
    case SET_CURRENT_GAME: {
      const { id, name, intro_text, farewell_text, time } = action.payload.currentGame
      if (state.allGames.find(element => element.id === id)){
        return state
      }
      return {
        ...state,
        currentGame: {
          id,
          name,
          intro_text,
          farewell_text,
          time
        }
      };
    }
    default:
      return state;
  }
}
