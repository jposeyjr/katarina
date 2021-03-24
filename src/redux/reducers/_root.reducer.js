import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import time from './time.reducer';
import socketGuest from './socket.reducer';
import price from './price.reducer';
import priceImage from './priceImage.reducer';
import guessReducer from './guessbaby.reducer';
import scoreReducer from './score.reduer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

const rootReducer = combineReducers({
  errors,
  user,
  time,
  socketGuest,
  price,
  priceImage,
  guessReducer,
  scoreReducer,
});

export default rootReducer;
