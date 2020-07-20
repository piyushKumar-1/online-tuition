import { GOT_COURSES, GOT_SUB_COURSES, ENQ_POST_SUCCESS } from '../actions/types.js';




const initialState = {
    isCLoading: false,
    isSCLoading: false,
	courses: null,
	subCourses: null,
	enqMsg: null,
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
		case ENQ_POST_SUCCESS:
			return {
				...state,
				enqMsg: action.payload,
			}
		default:
		    return state
    }
}