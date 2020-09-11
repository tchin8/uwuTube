import { 
  RECEIVE_COMMENT, 
  REMOVE_COMMENT, 
  RECEIVE_ALL_COMMENTS } from '../actions/comment_actions';

function commentsReducer(state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return Object.assign({}, action.comments);

    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;

    case REMOVE_COMMENT:
      delete newState[action.commentId];
      return newState;

    default:
      return state;
  }
}

export default commentsReducer;