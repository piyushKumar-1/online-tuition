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
        .get('/api/auth/student/events', config)
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




export const addCourse = (id) => (dispatch, getState) => {

    const token = getState().auth.token;


    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    let data = {'id': id}
    axios
        .post('/api/auth/student/courses',data, config)
        .then(res => {
            dispatch({
                type: ADDED_COURSE,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}



