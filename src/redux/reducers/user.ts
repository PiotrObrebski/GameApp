import { SET_USER } from '../actionTypes';

const initialState = {
  id: '',
  name: '',
  email: ''
};

export default function(state = initialState, action: { type: string, payload: User }): User {
  switch (action.type) {
    case SET_USER: {
      const { id, name, email } = action.payload;
      return {
        ...state,
        id,
        name,
        email
      
      }
    }
    default: {
      return state;
    }
  }
}