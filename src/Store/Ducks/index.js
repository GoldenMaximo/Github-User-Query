// registrar reducer dentro do store
import { combineReducers } from 'redux';
// combineReducers: combina todos os reducers em um grande reducer
import getUser from './getUser';

export default combineReducers({
    getUser,
});
