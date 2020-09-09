import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../actions/video_actions';

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
    default:
      return state;
  }
}

export default videosReducer;