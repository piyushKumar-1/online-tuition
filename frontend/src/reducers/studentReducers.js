import { GOT_EVENTS, GOT_ENR_COURSES,ADDED_EVENTS, ADDED_MYCOURSE, ADDED_COURSE, SET_DEFAULT_COURSES, GOT_CHAT, POST_CHAT } from '../actions/types.js';


const initialState = {
	events: null,
	isEvLoading: true,
	couresEnrolled: null,
	isCrsEnLoading: true,
    isSubEnLoading: true,
    info:null,
	chlaJa:false,
	chat: [],
	isChatLoading: true,
}





export default function(state = initialState, action){
	switch(action.type){
		case ADDED_EVENTS:
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
		case SET_DEFAULT_COURSES:
			return {
				...state,
				isSubEnLoading: true,
			}
		case GOT_CHAT:
        case POST_CHAT:
        	return {
        		...state,
        		isChatLoading:false,
        		chat: action.payload
        	}
		default:
			return state;
	}
}