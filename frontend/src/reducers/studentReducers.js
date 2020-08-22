import { GOT_EVENTS, GOT_ENR_COURSES, ADDED_MYCOURSE, ADDED_COURSE } from '../actions/types.js';


const initialState = {
	events: null,
	isEvLoading: true,
	couresEnrolled: null,
	isCrsEnLoading: true,
    isSubEnLoading: true,
    info:null,
	chlaJa:false,
}





export default function(state = initialState, action){
	switch(action.type){
		
		case GOT_EVENTS:
			return {
				...state,
				isEvLoading: false,
				events: action.payload,
			}
		case GOT_ENR_COURSES:
		    return {
		        ...state,
		        isCrsEnLoading: false,
		        couresEnrolled: action.payload,
		    }
		case ADDED_COURSE:
			return {
			    ...state,
				chlaJa: true,
			}
		case ADDED_MYCOURSE:
			return {
			    ...state,
			    isSubEnLoading: false,
				info: action.payload,
			}
		default:
			return state;
	}
}