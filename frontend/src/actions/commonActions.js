import axios from 'axios';

import { GOT_COURSES, GOT_SUB_COURSES } from './types.js';



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

