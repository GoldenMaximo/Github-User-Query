import { call, put } from 'redux-saga/effects';

import api from '../../Services/api';
import { Creators as getUserActions } from '../Ducks/getUser';

export function* getUserAPI(action) {
    console.log('entrou aqui');
    try {
        console.log('entrou aqui');
        console.log(action.payload.username);

        const { data } = yield call(api.get, `/users/${action.payload.username}`);

        console.log(data);

        // aqui tem acesso ao state
        // const isDuplicated = yield select(state => state.favorites.data.find(favorite => favorite.id === data.id));

        // if (isDuplicated) {
        //   yield put(FavoriteActions.addFavoriteFailued('Repositório já adicionado'));
        // } else {
        //   const repositoryData = {
        //     id: data.id,
        //     name: data.full_name,
        //     description: data.description,
        //     url: data.html_url,
        //   };

        //   // put faz o papel de enviar a action para os reducers da aplicação e fazer as ações necessarias em cada reducer
        //   yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
        // }

        yield put(getUserActions.getSuccess(data));
    } catch (err) {
        yield put(getUserActions.getFailure());
    }
}
