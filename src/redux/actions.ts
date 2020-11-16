import { SET_All_GAMES, SET_CURRENT_GAME, SET_SCORE, SET_USER, TOGGLE_VOLUME } from './actionTypes';

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

export const setAllGames = (content: IGame[]) : {
  type: string,
  payload: IGame[]
} => ({
  type: SET_All_GAMES,
  payload: content
});

export const setCurrentGame = (content: IGame) : {
  type: string,
  payload: IGame
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


export const toggleSound = () : {
  type: string
} => ({
  type: TOGGLE_VOLUME
});

export const changeScore = (content: ILaunchedGame) : {
  type: string;
  payload: ILaunchedGame
} => ({
  type: SET_SCORE,
  payload: content
});