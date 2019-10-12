// all é para lidar com varios sagas
import { all, takeLatest } from 'redux-saga/effects';

import { getUserAPI } from './getUser';

import { Types as getUserTypes } from '../Ducks/getUser';

// * é uma função generator do js
// generator: maneira de lidar com requisições assincronas é parecido com async await, mas é mais poderoso
export default function* rootSaga() {
    // yield é como se fosse o await
    // dentro do all vão ficar as funções do saga que vão ouvir as actions disparadas
    yield all([
    // takeLatest: se tiver uma requisição acontecendo ele cancela e pega a ultima requisição
    // takeEvery permite executar todas as requisições que o usuarios ativou
    // primiero parametro é o nome do type do action que queremos ouvir
    // vai disparar a função getUser
        takeLatest(getUserTypes.REQUEST, getUserAPI),
    ]);
}
