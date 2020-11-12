/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export async function getDataFromServer(endPoint: string) {
  return fetch(endPoint)
    .then(data => data.json())
    .catch(e => {
      console.log(e);
      return e;
    });
}