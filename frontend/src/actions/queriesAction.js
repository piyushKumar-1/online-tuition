import axios from 'axios';

import { GET_QUERIES, DELETE_QUERY } from './types.js';

export const getQueries = () => dispatch => {
    axios
        .get('/api/query')
        .then(res => {
            dispatch({
                type: GET_QUERIES,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}


export const deleteQuery = (id) => {
    axios
        .delete(`/api/query/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_QUERY,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}