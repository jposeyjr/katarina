import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

/**
 * Fetches guest data from the DB so we can add points and send a message with their name
 * @param {Number} action Action payload that holds the guests id
 * Server will send back corresponding info to be stored in redux state
 * May look like a duplicate of select guest, this one is for the guest side
 * */

function* getSocketGuest(action) {
  const id = action.payload;
  try {
    const results = yield axios.get(`/api/games/winner/${id}`);
    yield put({ type: 'SET_SOCKET_GUEST', payload: results.data });
  } catch (error) {
    console.log('Error with getting socket guest data:', error);
  }
}

function* socketSaga() {
  yield takeLatest('GET_SOCKET_GUEST', getSocketGuest);
}

export default socketSaga;
