import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SHELF" actions
function* addItem( action ) {
    try {
        console.log( 'in addItem' );
        const response = yield axios.post('/api/shelf', action.payload );
        // yield put({ type: 'ADD_ITEM', payload: response.data });
    } catch (error) {
        console.log('addItem request failed', error);
    }
}

function* addSaga() {
    yield takeLatest( 'SEND_ITEM', addItem );
}

export default addSaga;