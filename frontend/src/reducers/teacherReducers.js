import { TSYLLABUS_UPLOAD, PROFILE, GOT_EVENTS, GOT_ENR_COURSES, ADDED_MYCOURSE, ADDED_COURSE, MATERIAL_UPLOAD_SUCCESS, MATERIAL_UPLOAD_FAIL, SET_UPLOAD_DEFAULT, T_GOT_CHAT, T_POST_CHAT } from '../actions/types.js';


const initialState = {
	uploaded:false,
	message: null,
	fail:false,
	chat: [],
	isChatLoading: true,
	profile: null,
	isProfileLoading:true,
	isStuUpLoading:true,
	stuUploads:null,

}





export default function(state = initialState, action){
	switch(action.type){
		case TSYLLABUS_UPLOAD:
			return {
				...state,
				isStuUpLoading: false,
				stuUploads:action.payload
			}
		case PROFILE:
			return {
				...state,
				isProfileLoading: false,
				profile: action.payload
			}
		case MATERIAL_UPLOAD_SUCCESS:
		 	return {
		 		...state,
		 		uploaded: true,
		 		fail: false,
		 		message: "Uploaded Successfully"
		 	}
		case MATERIAL_UPLOAD_FAIL:
			return {
		 		...state,
		 		uploaded: true,
		 		fail: true,
		 		message: "Uploaded Failed"
		 	}
		case SET_UPLOAD_DEFAULT:
            return {
                ...state,
                message: null,
                fail: false,
                uploaded: false
            }
        case T_GOT_CHAT:
        case T_POST_CHAT:
        	return {
        		...state,
        		isChatLoading:false,
        		chat: action.payload
        	}
		default:
			return state;
	}
}