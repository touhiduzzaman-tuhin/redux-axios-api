import { FETCH_COUNTRY_ERROR, FETCH_COUNTRY_REQUEST, FETCH_COUNTRY_SUCCESS } from "./restCountryType"

const initialState = {
    loading : true,
    restCountry : [],
    error : ''
}

export const restCountryReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_COUNTRY_REQUEST:
            return {
                ...state,
                loading : false
            }
        
        case FETCH_COUNTRY_SUCCESS:
            console.log(action);
            return {
                ...state,
                loading : true,
                restCountry : action.payload
            }

        case FETCH_COUNTRY_ERROR:
            return {
                ...state,
                loading : true,
                error : action.payload
            }
        default:
            return state;
    }
}