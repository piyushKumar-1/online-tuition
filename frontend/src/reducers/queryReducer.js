 import { GET_QUERIES } from '../actions/types.js'

const initialState = {
    queries: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_QUERIES:
        return{
            ...state,
            queries: action.payload
        }
        default:
         return state;
    }
}