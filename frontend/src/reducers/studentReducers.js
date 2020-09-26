import { POST_FEED, RESET_FEEDS, RESET_CHAT, GOT_FEED, RESET_FEED, GOT_EVENTS, GOT_ENR_COURSES,ADDED_EVENTS, ADDED_MYCOURSE, ADDED_COURSE, SET_DEFAULT_COURSES, GOT_CHAT, POST_CHAT, SYLLABUS_UPLOAD } from '../actions/types.js';


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
	isSylabusLoading:true,
	isFeedLoading: true,
	status:null,
	syllabus:[],
	feeds: null
}





export default function(state = initialState, action){
	switch(action.type){
		case RESET_FEEDS:
			return {
				...state,
				feeds: [],
				isFeedLoading: true,

			}
		case RESET_CHAT:
			return {
				...state,
				chat: [],
				isChatLoading: false
			}
		case GOT_FEED:
			return {
				...state,
				feeds: action.payload,
				isFeedLoading: false,
			}
		case RESET_FEED:
			return{
				...state,
				status: null
			}
		case POST_FEED:
			return {
				...state,
				status: "success",
				feeds: action.payload
			}
		case SYLLABUS_UPLOAD:
			return {
				...state,
				isSylabusLoading: false,
				syllabus: action.payload,
			}
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