import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './Ducks';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

// then run the saga
sagaMiddleware.run(rootSaga);

export default Store;
