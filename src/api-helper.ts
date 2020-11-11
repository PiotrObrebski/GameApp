const API_SERVER = 'https://virtserver.swaggerhub.com/selfdecode.com/game-challenge/1.0.0/';
const USER_END_POINT = `${API_SERVER}user/`;

export async function getUserFromServer(): Promise<User> {
  return fetch(USER_END_POINT)
    .then(data => data.json())
    .catch(e => {
      console.log(e);
      return e;
    });
}