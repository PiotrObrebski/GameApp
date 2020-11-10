import { SET_All_GAMES, SET_CURRENT_GAME, SET_USER } from './actionTypes';

export const setUser = (content: User) => ({
  type: SET_USER,
  payload: {
    id: content.id,
    name: content.name,
    email: content.email
  }
});

export const setAllGames = (content: { games: Game[]; }) => ({
  type: SET_All_GAMES,
  payload: {
    games: content.games
  }
});
export const setCurrentGame = (content: { currentGame: Game; }) => ({
  type: SET_CURRENT_GAME,
  payload: {
    currentGame: content.currentGame
  }
});