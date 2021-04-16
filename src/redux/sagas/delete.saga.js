import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SHELF" actions
function* deleteItem( action ) {
    try {
        let id = action.payload.id;
        // let user_id = action.payload.user_id;
        console.log( 'in deleteItem saga', action.payload, id )
        const response = yield axios.delete( '/api/shelf/' + id, {params: { user_id: action.payload.user_id }} );
        // yield put({ type: 'ADD_ITEM', payload: response.data });
    } catch (error) {
        console.log('deleteItem request failed', error);
    }
}

function* deleteSaga() {
    yield takeLatest( 'DELETE_ITEM', deleteItem );
}

export default deleteSaga;