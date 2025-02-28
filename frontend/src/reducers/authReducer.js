import { USER_LOADED, USER_LOADING, LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT_SUCCESS, AUTH_ERROR, RESET_SUCCESS } from '../actions/types.js';


const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: false,
	isLoading: true,
	user: null
}





export default function(state = initialState, action){
	switch(action.type){
		
		case USER_LOADING:
			return {
				...state,
				isLoading: true
			}

		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload,
			}

		case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
          localStorage.setItem('token', action.payload.token);
          return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false,
          };
        case AUTH_ERROR:
		case LOGOUT_SUCCESS:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false
			}
		default:
			return state;
	}
}