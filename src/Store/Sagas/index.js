import { all, takeEvery } from 'redux-saga/effects';

import { getUserData } from './getUserData';
import { getUserRepos } from './getUserRepos';

import { Types as getUserDataTypes } from '../Ducks/getUserData';
import { Types as getUserReposTypes } from '../Ducks/getUserRepos';

export default function* rootSaga() {
    yield all([
        takeEvery(getUserDataTypes.USERDATAREQUEST, getUserData),
        takeEvery(getUserReposTypes.USERREPOSREQUEST, getUserRepos),
    ]);
}
