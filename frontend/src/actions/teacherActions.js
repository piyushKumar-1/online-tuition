import axios from 'axios';

import { GOT_ENR_COURSES, GOT_EVENTS, ADDED_COURSE, ADDED_MYCOURSE, MATERIAL_UPLOAD_SUCCESS, MATERIAL_UPLOAD_FAIL, SET_UPLOAD_DEFAULT, SET_DEFAULT_COURSES } from './types.js';

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
        .get('/api/auth/teacher/courses', config)
        .then(res => {
        console.log(res);
            dispatch({
                type: GOT_ENR_COURSES,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
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
    axios
        .get(`/api/auth/teacher/mycourses/${EnrCourseId}`, config)
        .then(res => {
            dispatch({
                type: ADDED_MYCOURSE,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}


export const resetUpload = () => dispatch =>{
    dispatch({
        type: SET_UPLOAD_DEFAULT,
    })
}


export const uploadMaterial = (FD) => dispatch => {
    dispatch({
        type: SET_DEFAULT_COURSES,
    })

    const config = {
        headers: {
            'Content-type': 'multipart/form-data'
        }
    }
    console.log(FD)
    axios
        .post('/api/auth/teacher/upload', FD, config)
        .then(res => {
            dispatch({
                type: MATERIAL_UPLOAD_SUCCESS,
            })
        })
        .catch(err => {
            dispatch({
                type: MATERIAL_UPLOAD_FAIL,
            })
        });
}

