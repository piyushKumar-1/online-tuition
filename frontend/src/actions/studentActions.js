import axios from 'axios';

import { GOT_ENR_COURSES, RESET_FEEDS, RESET_CHAT, GOT_FEED, POST_FEED, RESET_FEED, GOT_EVENTS, ADDED_COURSE, ADDED_MYCOURSE, GOT_CHAT, POST_CHAT, SYLLABUS_UPLOAD } from './types.js';

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


export const resetChat = () => (dispatch) => {
    dispatch({type: RESET_CHAT})
}


export const resetFeeds = () => (dispatch) => {
    dispatch({type: RESET_FEEDS})
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


export const delCourse = (EnrCourseId) => (dispatch, getState) => {



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
        .delete(`/api/auth/student/mycourses/${EnrCourseId}`, config)
        .then(()=>{
            axios
                .get('/api/auth/student/courses', config)
                .then(res => {
                    dispatch({
                        type: GOT_ENR_COURSES,
                        payload: res.data
                    })
                })
                .catch(err => console.log(err))
            })
}




export const getChat = (teacher_id) => (dispatch, getState) => {

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
        .get(`/api/auth/student/chat/${teacher_id}`, config)
        .then(res => {
            dispatch({
                type: GOT_CHAT,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}


export const postChat = (teacher_id, msg) => (dispatch, getState) => {

    const token = getState().auth.token;


    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    let data = {'msg':msg, 'teacher_id':teacher_id}
    axios
        .post(`/api/auth/student/chat`, data, config)
        .then(res => {
            dispatch({
                type: POST_CHAT,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}





export const postSyllabus = (FD) => (dispatch, getState) => {

    const token = getState().auth.token;


    const config = {
        headers: {
            'Content-type': 'multipart/form-data'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    axios
        .post('/api/auth/student/upload', FD, config)
        .then(res => {
            dispatch({
                type: SYLLABUS_UPLOAD,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}




export const getSyllabus = (FD) => (dispatch, getState) => {

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
        .get('/api/auth/student/upload', config)
        .then(res => {
            dispatch({
                type: SYLLABUS_UPLOAD,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}








export const postFeed = (department_id, conceptClearity, aboutSession, aboutInstructor, star_c, techLevel, anyCom) => (dispatch, getState) => {

    const token = getState().auth.token;


    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    let data = {'anyCom':anyCom, 'techLevel':techLevel, 'star_c':star_c, 'course_enrolled':department_id, 'concept':conceptClearity, 'about_session': aboutSession, 'about_instructor':aboutInstructor}
    axios
        .post(`/api/auth/student/feedback`, data, config)
        .then(res => {
            dispatch({
                type: POST_FEED,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}



export const refresh = () => (dispatch) => {

    dispatch({type: RESET_FEED});

}



export const getFeed = (c_id) => (dispatch, getState) => {

    const token = getState().auth.token;


    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }   
    console.log(c_id, "in axioas")
    axios
        .get(`/api/auth/student/feedback/${c_id}`, config)
        .then(res => {
            dispatch({
                type: GOT_FEED,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}
