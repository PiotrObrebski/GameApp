export const getUserState = (store: { user: User; }): User => store.user;

export const getAllGames = (store: { games: { allGames: Game[]; }; }): Game[] => store.games.allGames;

export const getCurrentGame = (store: { games: { currentGame: Game; }; }): Game => store.games.currentGame;
