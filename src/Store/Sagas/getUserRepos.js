import { call, put } from 'redux-saga/effects';

import api from '../../Services/api';
import { Creators as getUserReposActions } from '../Ducks/getUserRepos';

export function* getUserRepos(action) {
    try {
        const { data } = yield call(api.get, `/users/${action.payload.login}/repos`);

        yield put(getUserReposActions.getSuccess(data));
    } catch (err) {
        yield put(getUserReposActions.getFailure());
    }
}
