import { call, put } from 'redux-saga/effects';

import api from '../../Services/api';
import { Creators as getUserActions } from '../Ducks/getUser';

export function* getUserAPI(action) {
    try {
        const { data } = yield call(api.get, `/users/${action.payload.username}`);

        //   const userData = {
        //     id: data.id,
        //     name: data.full_name,
        //     repos: data.repositories,
        //     url: data.html_url,
        //   };

        yield put(getUserActions.getSuccess(data));
    } catch (err) {
        yield put(getUserActions.getFailure());
    }
}
