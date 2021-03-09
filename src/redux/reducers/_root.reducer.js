import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
// import games from './games.reducer';
import time from './time.reducer';
import emailReducer from './email.reducer';
import socketGuest from './socket.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

const rootReducer = combineReducers({
  errors,
  user,
  // games,
  time,
  socketGuest,
  emailReducer,
});

export default rootReducer;
