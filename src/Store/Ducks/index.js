// registrar reducer dentro do store
import { combineReducers } from 'redux';
// combineReducers: combina todos os reducers em um grande reducer
import getUserData from './getUserData';
import getUserRepos from './getUserRepos';

export default combineReducers({
    getUserData,
    getUserRepos,
});
