import { RECEIVE_CURRENT_USER }  from '../actions/session_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });

    case RECEIVE_ALL_USERS:
      return Object.assign({}, state, action.users)

    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
      
    default:
      return state;
  }
};

export default usersReducer;