import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addGuess(action) {
  try {
    yield axios.post('/api/guesslist', action.payload);
    yield getGuessList();
  } catch (error) {
    console.log('Error with adding guess to the list data: ', error);
  }
}

function* getGuessList() {
  try {
    const results = yield axios.get('/api/guesslist');
    yield put({ type: 'SET_GUESS_LIST', payload: results.data });
  } catch (error) {
    console.log('Error with getting guess list data:', error);
  }
}

function* GuessBabySaga() {
  yield takeLatest('GET_GUESSES', getGuessList);
  yield takeLatest('ADD_GUESS', addGuess);
}

export default GuessBabySaga;
