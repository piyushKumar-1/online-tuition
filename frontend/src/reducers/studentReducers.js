import { GOT_EVENTS, GOT_ENR_COURSES } from '../actions/types.js';


const initialState = {
	events: null,
	isEvLoading: true,
	couresEnrolled: null,
	isCrsEnLoading: true,
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
		default:
			return state;
	}
}