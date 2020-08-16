import axios from 'axios';

import { GOT_ENR_COURSES, GOT_EVENTS } from './types.js';

export const getEvents = () => (dispatch, getState) => {
    const token = getState().auth.token;


    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios
        .get('/api/auth/student/events')
        .then(res => {
            dispatch({
                type: GOT_EVENTS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}



export const getEnrCourses = () => (dispatch, getState) => {

    const token = getState().auth.token;


    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios
        .get('/api/auth/student/courses', config)
        .then(res => {
            dispatch({
                type: GOT_ENR_COURSES,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}


