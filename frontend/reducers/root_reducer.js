import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import videosReducer from './videos_reducer';
import commentsReducer from './comments_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  videos: videosReducer,
  comments: commentsReducer,
  ui: uiReducer,
});

export default rootReducer;