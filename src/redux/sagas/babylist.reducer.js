import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addBabyList(action) {
  try {
    yield axios.post('/api/babylist', action.payload);
    yield getBabyList();
  } catch (error) {
    console.log('Error with adding baby list data: ', error);
  }
}

function* editBabyList(action) {
  try {
    yield axios.put('/api/babylist/id', action.payload);
    yield getBabyList();
  } catch (error) {
    console.log('Error updating baby list with new info: ', error);
  }
}

function* getBabyList() {
  try {
    const results = yield axios.get('/api/babylist');
    yield put({ type: 'SET_BABYLIST', payload: results.data });
  } catch (error) {
    console.log('Error with getting baby list data:', error);
  }
}

function* removeBabyList(action) {
  const id = action.payload;
  try {
    yield axios.delete(`/api/babylist/${id}`);
    yield getBabyList();
  } catch (error) {
    console.log('Error updating BabyList with new info: ', error);
  }
}

function* BabyListSaga() {
  yield takeLatest('GET_BABYLIST', getBabyList);
  yield takeLatest('ADD_BABYLIST', addBabyList);
  yield takeLatest('EDIT_BABYLIST', editBabyList);
  yield takeLatest('REMOVE_BABYLIST', removeBabyList);
}

export default BabyListSaga;
