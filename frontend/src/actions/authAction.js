import axios from 'axios';
import { USER_LOADED, USER_LOADING, REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS, AUTH_ERROR, RESET_SUCCESS, RESET_ERROR, SET_DEFAULT, CHANGED_ERROR, CHANGED_SUCCESS, CHECK_SUCCESS, CHECK_ERROR } from './types.js';



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
		console.log(res)
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


export const register = ({email, password, first_name, last_name, is_parent, education, occupation, course, department, year } ) => dispatch => {

	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}
	console.log({email, password, first_name, last_name, is_parent, education, occupation, course, department, year }, 'yhi gand hai');
	let resp = {email, password, first_name, last_name, is_parent, education:{course:course,department:department,year:year}, occupation:{occupation:occupation}}
	console.log(resp, 'yhi gand hai');
	const body = JSON.stringify(resp);
	console.log(body)
	axios.post('/api/auth/register', body, config)
	.then(res => {
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		});
	}).catch(err => {
	console.log(err, err.response);
		window.alert(err.response.data.email[0]);
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



export const resetPass = (email) => (dispatch) => {


    const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}
	const body = JSON.stringify({email})

	axios
	.post('/api/auth/reset', body, config)
    .then((res) => {
      dispatch({
        type: RESET_SUCCESS,
        payload: res.data,
      });
    }).catch(err => {
        dispatch({
            type: RESET_ERROR,
        });
	})
}



export const setDefaultReset = () => (dispatch) => {

    dispatch({type: SET_DEFAULT});

}


export const resetPassword = ({password, token, uidb64 }) => dispatch => {

	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}
	const body = JSON.stringify({password, token, uidb64})

	axios.patch('/api/auth/reset/final', body, config)
	.then(res => {
		dispatch({
			type: CHANGED_SUCCESS,
			payload: res.data
		});
	}).catch(err => {
	    dispatch({
			type: CHANGED_ERROR,
		});
	})
}



export const checkToken = ( token, uidb64 ) => dispatch => {

	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}

    console.log(token, uidb64)

	axios.get('/api/auth/reset/'+uidb64+'/'+token, config)
	.then(res => {
		dispatch({
			type: CHECK_SUCCESS,
			payload: res.data
		});
	}).catch(err => {
	    dispatch({
			type: CHECK_ERROR,
		});
	})
}


