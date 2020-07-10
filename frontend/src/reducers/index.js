import { combineReducers } from 'redux';
import queries from './queryReducer.js';
import auth from './authReducer.js';

export default  combineReducers({
   queries,
   auth
});