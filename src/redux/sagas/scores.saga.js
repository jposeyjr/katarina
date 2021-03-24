import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getScores() {
  try {
    const results = yield axios.get('/api/scores');
    yield put({ type: 'SET_SCORES', payload: results.data });
  } catch (error) {
    console.log('Error with getting scores from db:', error);
  }
}

function* addScore(action) {
  try {
    yield axios.post('/api/score', action.payload);
  } catch (error) {
    console.log('Error with adding the score to db: ', error);
  }
}

function* updateScore(action) {
  try {
    yield axios.put('/api/score', action.payload);
    yield getScores();
  } catch (error) {
    console.log('Error adding new score to db: ', error);
  }
}

function* deleteScore() {
  try {
    yield put({ type: 'CLEAR_SCORES' });
  } catch (error) {
    console.log('Error clearing score data: ', error);
  }
}

function* ScoreSaga() {
  yield takeLatest('GET_SCORES', getScores);
  yield takeLatest('ADD_SCORE', addScore);
  yield takeLatest('UPDATE_SCORE', updateScore);
  yield takeLatest('DELETE_SCORE', deleteScore);
}

export default ScoreSaga;
