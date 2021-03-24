import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

/**
 * Will be fired on "LOGIN" action
 * @param {Object} action Action payload that holds the username and password to send to server
 * It will then log them in after if no errors, then gets the info to validate from the server
 * */
function* loginUser(action) {
  try {
    // clear any existing error on the login page
    console.log('this is called?, put');
    yield put({ type: 'CLEAR_LOGIN_ERROR' });
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    yield axios.post('/api/user/login', action.payload, config);
    console.log('this is called?');
    yield put({ type: 'FETCH_USER' });
  } catch (error) {
    console.log('Error with user login:', error.message);
    if (error.response.status === 401) {
      yield put({ type: 'LOGIN_FAILED' });
    } else {
      yield put({ type: 'LOGIN_FAILED_NO_CODE' });
    }
  }
}

/**
 * Will be fired on "LOGOUT" action
 *
 * */

function* logoutUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    yield axios.post('/api/user/logout', config);
    yield put({ type: 'UNSET_USER' });
  } catch (error) {
    console.log('Error with user logout:', error);
  }
}

function* loginSaga() {
  yield takeLatest('LOGIN', loginUser);
  yield takeLatest('LOGOUT', logoutUser);
}

export default loginSaga;
