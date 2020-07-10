import axios from 'axios';

import { USER_LOADED, USER_LOADING, REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS, AUTH_ERROR } from './types.js';



export const loadUser = () => (dispatch, getState) => {

	dispatch({type: USER_LOADING});


	const token = getState().auth.token;


	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

	axios.get('/api/auth/user', config)
	.then(res => {
		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	}).catch(err => {
	dispatch({
			type: AUTH_ERROR
		});
	})
}


export const login = (email, password) => (dispatch) => {

	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}
	const body = JSON.stringify({email, password})

	axios
	.post('/api/auth/login', body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    }).catch(err => {
	console.log(err)
		window.alert("Login Failed");
	})
}


export const register = ({email, password, first_name, last_name, is_parent, education, occupation }) => dispatch => {

	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}
	const body = JSON.stringify({email, password, first_name, last_name, is_parent, education, occupation})

	axios.post('/api/auth/register', body, config)
	.then(res => {
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		});
	}).catch(err => {
		window.alert("Registration Failed");
	})
}



export const logoutUser = () => (dispatch, getState) => {

	dispatch({type: USER_LOADING});


	const token = getState().auth.token;


	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}

	if(token){
		config.headers['Authorization'] = `Token ${token}`;
	}

	axios.post('/api/auth/logout/', null, config)
	.then(res => {
		dispatch({
			type: LOGOUT_SUCCESS,
			payload: res.data
		});
	}).catch(err => {
		window.alert("not logged out");
	})
}