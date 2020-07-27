import { GOT_COURSES, GOT_SUB_COURSES, GOT_SUBJECTS, ENQ_POST_SUCCESS, JOB_POST_SUCCESS } from '../actions/types.js';




const initialState = {
    isCLoading: false,
    isSCLoading: false,
    isSLoading: false,
	courses: null,
	subCourses: null,
	subjects:null,
	enqMsg: false,
	joinMsg: false,
}





export default function(state = initialState, action){
	switch(action.type){
		case GOT_COURSES:
			return {
				...state,
				isCLoading: true,
				courses: action.payload,
			}
		case GOT_SUB_COURSES:
		    return {
		        ...state,
		        isSCLoading: true,
		        subCourses: action.payload,
		    }
		case GOT_SUBJECTS:
			return {
				...state,
				isSLoading: true,
				subjects: action.payload,
			}
		case ENQ_POST_SUCCESS:
			return {
				...state,
				enqMsg: action.payload,
			}
		case JOB_POST_SUCCESS:
			return {
				...state,
				joinMsg: action.payload,
			}
		default:
		    return state
    }
}