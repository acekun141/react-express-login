import {push} from 'connected-react-router';
import {put, takeLatest, all} from 'redux-saga/effects';
import {SET_USER, SIGNIN} from './actionTypes';
import API from '../../utils/API';

function* fetchSigninData(action) {
    try {
        const response = yield API.get(`/users/${action.user.email}-${action.user.password}`);
        yield put({type: SET_USER, payload: response.data});
        yield put(push("/"));
    } catch (err) {
        console.log(err);
    };
};

function* watchSigin() {
    yield takeLatest(SIGNIN, fetchSigninData);
};

export default function* rootSaga() {
    yield all([watchSigin()])
};
