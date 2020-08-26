import { GOT_EVENTS, GOT_ENR_COURSES, ADDED_MYCOURSE, ADDED_COURSE, MATERIAL_UPLOAD_SUCCESS, MATERIAL_UPLOAD_FAIL, SET_UPLOAD_DEFAULT } from '../actions/types.js';


const initialState = {
	uploaded:false,
	message: null,
	fail:false
}





export default function(state = initialState, action){
	switch(action.type){
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
		default:
			return state;
	}
}