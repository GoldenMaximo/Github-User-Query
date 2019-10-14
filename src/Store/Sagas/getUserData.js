import { call, put } from 'redux-saga/effects';

import api from '../../Services/api';
import { Creators as getUserActions } from '../Ducks/getUserData';

export function* getUserData(action) {
    try {
        const { data } = yield call(api.get, `/users/${action.payload.username}`);

        yield put(getUserActions.getSuccess(data));
    } catch (err) {
        yield put(getUserActions.getFailure());
    }
}
