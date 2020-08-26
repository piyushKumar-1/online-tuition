import axios from 'axios';

import { GOT_ENR_COURSES, GOT_EVENTS, ADDED_COURSE, ADDED_MYCOURSE } from './types.js';

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




export const addCourse = (CourseId, subId) => (dispatch, getState) => {

    const token = getState().auth.token;


    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    let data = {'CourseId': CourseId, 'subId': subId}
    axios
        .post('/api/auth/student/courses',data, config)
        .then(res => {
            dispatch({
                type: ADDED_COURSE,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
    window.location="/student/courses"
}


export const myCourse = (EnrCourseId) => (dispatch, getState) => {



    const token = getState().auth.token;


    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    let data = {'EnrCourseId': EnrCourseId}
    axios
        .post('/api/auth/student/mycourses',data, config)
        .then(res => {
            dispatch({
                type: ADDED_MYCOURSE,
                payload: res.data
            })
        })
}



