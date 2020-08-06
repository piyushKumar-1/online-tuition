import axios from 'axios';

import { GOT_ENR_COURSES, GOT_EVENTS } from './types.js';

export const getEvents = () => dispatch => {
    axios
        .get('/api/student/events')
        .then(res => {
            dispatch({
                type: GOT_EVENTS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}



export const getEnrCourses = () => dispatch => {
    axios
        .get('/api/student/courses')
        .then(res => {
            dispatch({
                type: GOT_ENR_COURSES,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}


