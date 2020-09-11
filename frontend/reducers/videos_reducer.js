import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../actions/video_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

function videosReducer(state = {} , action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return Object.assign({}, action.videos);

    case RECEIVE_VIDEO:
      newState[action.video.id] = action.video;
      return newState;

    case REMOVE_VIDEO:
      delete newState[action.videoId];
      return newState;

    case RECEIVE_COMMENT:
      newState[action.comment.video_id]["comments"] = newState[action.comment.video_id]["comments"] || {};
      newState[action.comment.video_id]["comments"][action.comment.id] = action.comment;
      return newState;

    // case REMOVE_COMMENT:
    //   delete newState[action.commentId];
    //   return newState;

    default:
      return state;
  }
}

export default videosReducer;