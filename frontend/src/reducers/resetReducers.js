import { RESET_SUCCESS, RESET_ERROR,SET_DEFAULT, CHANGED_ERROR, CHANGED_SUCCESS, CHECK_SUCCESS, CHECK_ERROR  } from '../actions/types.js';


const initialState = {
	message: null,
	isSent: false,
	chk: false,
}


export default function(state = initialState, action){
	switch(action.type){
	    case CHECK_SUCCESS:
            return {
                ...state,
                isSent: false,
                chk: action.payload['success'],

            }
        case CHECK_ERROR:
            return {
                ...state,
                chkerr:true,
                chk: true
            }
        case CHANGED_SUCCESS:
            return {
                ...state,
                message: action.payload['success'],
                isSent: true,
            }
        case CHANGED_ERROR:
            return {
                ...state,
                message: "<h3>"+action.payload['error']+"&nbsp;&nbsp;&nbsp;<i class='fa fa-times-circle red'></i> </h3>",
                isSent: true,

            }
        case RESET_SUCCESS:
            return {
                ...state,
                message: "<h3>"+action.payload['success']+"&nbsp;&nbsp;&nbsp;<i class='fa fa-check-circle green'></i> </h3>",
                isSent: true
            }
        case RESET_ERROR:

            return {
                ...state,
                message: "<h3>User Not Registered &nbsp;&nbsp;&nbsp;<i class='fa fa-times-circle red'></i> </h3>",
                isSent: true
            }
        case SET_DEFAULT:
        return {
                ...state,
                message: null,
                isSent: null
            }
        default:
            return state;

      }

}