import { SET_All_GAMES, SET_CURRENT_GAME, SET_USER } from './actionTypes';

export const setUser = (content: User) : {
  type: string,
  payload: User
} => ({
  type: SET_USER,
  payload: {
    id: content.id,
    name: content.name,
    email: content.email
  }
});

export const setAllGames = (content: Game[]) : {
  type: string,
  payload: Game[]
} => ({
  type: SET_All_GAMES,
  payload: content
});

export const setCurrentGame = (content: Game) : {
  type: string,
  payload: Game
} => ({
  type: SET_CURRENT_GAME,
  payload: {
    id: content.id,
    name: content.name,
    intro_text: content.intro_text,
    farewell_text: content.farewell_text,
    time: content.time
  }
});
