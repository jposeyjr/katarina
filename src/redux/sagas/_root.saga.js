import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import babyListSaga from './babylist.reducer';
import socketSaga from './socket.saga';
import priceSage from './price.saga';
import scoreSaga from './scores.saga';
import guessSaga from './guessbaby.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    babyListSaga(),
    socketSaga(),
    priceSage(),
    scoreSaga(),
    guessSaga(),
  ]);
}
