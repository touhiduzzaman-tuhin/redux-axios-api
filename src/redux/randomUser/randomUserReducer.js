import { FETCH_RANDOM_USER_ERROR, FETCH_RANDOM_USER_REQUEST, FETCH_RANDOM_USER_SUCCESS } from "./randomUserType"

const initialState = { 
    loading : true,
    randomUsers : [],
    error : ''
}

export const randomUserReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_RANDOM_USER_REQUEST:
            return {
                ...state,
                loading : false
            }
        
        case FETCH_RANDOM_USER_SUCCESS:
            return {
                ...state,
                loading : true,
                randomUsers : action.payload
            }

        case FETCH_RANDOM_USER_ERROR:
            return {
                ...state,
                loading : true,
                error : action.payload
            }

        default:
            return state;
    }
}