import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addPriceItem(action) {
  try {
    yield axios.post('/api/pricelist', action.payload);
    yield getPriceList();
  } catch (error) {
    console.log('Error with adding baby list data: ', error);
  }
}

function* addPriceImage(action) {
  try {
    yield put({ type: 'SET_PRICE_IMAGE', payload: action.payload });
  } catch (error) {
    console.log('Error with adding image to price list: ', error);
  }
}

function* updatePriceList(action) {
  try {
    yield axios.put('/api/pricelist', action.payload);
    yield getPriceList();
    // yield put({ type: 'ADD_PRICE_LIST', payload: results.data });
    // yield put({ type: 'SET_PRICE_LIST', payload: results.data });
  } catch (error) {
    console.log('Error adding new item to list: ', error);
  }
}

function* getPriceList() {
  try {
    const results = yield axios.get('/api/pricelist');
    yield put({ type: 'SET_PRICE_LIST', payload: results.data });
  } catch (error) {
    console.log('Error with getting baby list data:', error);
  }
}

function* clearPriceImage() {
  try {
    yield put({ type: 'CLEAR_PRICE_IMAGE' });
  } catch (error) {
    console.log('Error clearing price images: ', error);
  }
}

function* PriceListSaga() {
  yield takeLatest('GET_PRICE_LIST', getPriceList);
  yield takeLatest('ADD_ITEM', addPriceItem);
  yield takeLatest('UPDATE_LIST', updatePriceList);
  yield takeLatest('ADD_ITEM_IMAGE', addPriceImage);
  yield takeLatest('DELETE_IMAGE', clearPriceImage);
}

export default PriceListSaga;
