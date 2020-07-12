import { combineReducers } from 'redux';
import queries from './queryReducer.js';
import auth from './authReducer.js';
import reset from './resetReducers.js';

export default  combineReducers({
   queries,
   auth,
   reset
});