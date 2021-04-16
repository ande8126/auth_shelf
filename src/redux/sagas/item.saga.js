import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SHELF" actions
function* fetchShelf() {
  try {
    console.log( 'in fetchItem' );
    const response = yield axios.get('/api/shelf');
    yield put({ type: 'SET_SHELF', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* itemSaga() {
  yield takeLatest( 'FETCH_SHELF', fetchShelf );
}

export default itemSaga;