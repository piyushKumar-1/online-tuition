import axios from 'axios';

import { GOT_COURSES, GOT_SUB_COURSES, ENQ_POST_SUCCESS } from './types.js';



export const getCourses = () => dispatch => {
    axios
        .get('/api/get/courses')
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
        .get('/api/get/sub_courses')
        .then(res => {
            dispatch({
                type: GOT_SUB_COURSES,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}


export const enqPost = ({ name, email, password, phone, std, country, department, year, service, subject, subject_code, language, instruct, time_suit, day_suit, upload }) => dispatch => {

    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, password, phone, std, country, department, year, service, subject, subject_code, language, instruct, time_suit, day_suit, upload })


    axios
        .post('/api/post/enquiry', body, config)
        .then(res => {
            dispatch({
                type: ENQ_POST_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

