import axios from 'axios';

import { GOT_ENR_COURSES, GOT_EVENTS, ADDED_EVENTS, ADDED_COURSE, ADDED_MYCOURSE, MATERIAL_UPLOAD_SUCCESS, MATERIAL_UPLOAD_FAIL, SET_UPLOAD_DEFAULT, SET_DEFAULT_COURSES, T_GOT_CHAT, T_POST_CHAT } from './types.js';

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
        .get('/api/auth/teacher/events', config)
        .then(res => {
            dispatch({
                type: GOT_EVENTS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}



export const postEvents = (event_time, date, student_id, url, topic) => (dispatch, getState) => {

    const token = getState().auth.token;


    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    let data = {'event_time':event_time, 'event_date':date, 'student_id':student_id, 'live_link':url, 'topic': topic}
    axios
        .post(`/api/auth/teacher/events`, data, config)
        .then(res => {
            dispatch({
                type: ADDED_EVENTS,
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





export const getChat = (student_id) => (dispatch, getState) => {

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
        .get(`/api/auth/teacher/chat/${student_id}`, config)
        .then(res => {
            dispatch({
                type: T_GOT_CHAT,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}


export const postChat = (student_id, msg) => (dispatch, getState) => {

    const token = getState().auth.token;


    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    let data = {'msg':msg, 'student_id':student_id}
    axios
        .post(`/api/auth/teacher/chat`, data, config)
        .then(res => {
            dispatch({
                type: T_POST_CHAT,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}