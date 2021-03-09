import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

/**
 * Sends email to the supplied address using nodemailer on the server
 * @param {Object} action Action payload that holds a email
 * */

function* emailGuest(action) {
  try {
    yield axios.post(`/api/invites/email`, action.payload);
  } catch (error) {
    console.log('Error with sending email with Guest data:', error);
  }
}

function* emailSaga() {
  yield takeLatest('INVITE_GUEST', emailGuest);
}

export default emailSaga;
