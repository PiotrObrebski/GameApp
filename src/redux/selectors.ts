export const getUserState = (store: { user: User; }): User => store.user;

export const getAllGames = (store: { games: { allGames: IGame[]; }; }): IGame[] => store.games.allGames;

export const getCurrentGame = (store: { games: { currentGame: IGame; }; }): IGame => store.games.currentGame;
