import { combineReducers } from 'redux';
import queries from './queryReducer.js';
import auth from './authReducer.js';
import reset from './resetReducers.js';
import common from './commonReducers.js';
import student from './studentReducers.js';
import teacher from './teacherReducers.js';

export default  combineReducers({
   queries,
   auth,
   reset,
   common,
   student,
   teacher
});