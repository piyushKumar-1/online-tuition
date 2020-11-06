import axios from 'axios';

import { HOST, GOT_COURSES, CON_POST_RESET, CON_POST_SUCCESS, GOT_SUB_COURSES, GOT_SUBJECTS, ENQ_POST_SUCCESS, JOB_POST_SUCCESS } from './types.js';



export const getCourses = () => dispatch => {
    axios
        .get(HOST+'/api/get/courses')
        .then(res => {
            dispatch({
                type: GOT_COURSES,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}


export const getSubCourses = () => dispatch => {
    axios
        .get(HOST+'/api/get/sub_courses')
        .then(res => {
            dispatch({
                type: GOT_SUB_COURSES,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}


export const getSubjects = () => dispatch => {
    axios
        .get(HOST+'/api/get/subjects')
        .then(res => {
            dispatch({
                type: GOT_SUBJECTS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

export const resetPost = () => dispatch => {
    dispatch({
                type: CON_POST_RESET
            })
}


export const contactPost = (name, subject, email, message) => dispatch => {

    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify({name, subject, email, message})

    axios
        .post(HOST+'/api/post/contactus', body, config)
        .then(res => {
            dispatch({
                type: CON_POST_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}


export const enqPost = (FD) => dispatch => {

    const config = {
        headers: {
            'Content-type': 'multipart/form-data'
        }
    }
    console.log(FD)
    axios
        .post(HOST+'/api/post/enquiry', FD, config)
        .then(res => {
            dispatch({
                type: ENQ_POST_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

export const jobPost = (FD) => dispatch => {

    const config = {
        headers: {
            'Content-type': 'multipart/form-data'
        }
    }
    console.log(FD)
    axios
        .post(HOST+'/api/post/join', FD, config)
        .then(res => {
            dispatch({
                type: JOB_POST_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}
