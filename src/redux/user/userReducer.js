import { FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userType";

const initialState = {
    loading : true,
    users : [],
    error : ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading : false
            }

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading : true,
                users : action.payload
            }

        case FETCH_USER_ERROR:
            return {
                ...state,
                loading : true,
                error : action.payload
            }
        default:
            return state;
    }
}