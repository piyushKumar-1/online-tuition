import { GOT_COURSES, GOT_SUB_COURSES } from '../actions/types.js';




const initialState = {
    isCLoading: false,
    isSCLoading: false,
	courses: null,
	subCourses: null
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
		default:
		    return state
    }
}