import axios from "axios"
import { FETCH_RANDOM_USER_ERROR, FETCH_RANDOM_USER_REQUEST, FETCH_RANDOM_USER_SUCCESS } from "./randomUserType"

export const fetchRandomUserRequest = () => {
    return {
        type : FETCH_RANDOM_USER_REQUEST
    }
}

export const fetchRandomUserSuccess = (users) => {
    return {
        type : FETCH_RANDOM_USER_SUCCESS,
        payload : users
    }
}

export const fetchRandomUserError = (error) => {
    return {
        type : FETCH_RANDOM_USER_ERROR,
        payload : error
    }
}

export const fetchRandomUsers = () => {
    return (dispatch) => {
        dispatch(fetchRandomUserRequest())
        return axios.get('https://randomuser.me/api/?results=50')
        .then(response => {
            const users = response.data;
            // console.log(users);
            dispatch(fetchRandomUserSuccess(users))
        })
        .catch(error => {
            const errorMessage = error.message;
            dispatch(fetchRandomUserError(errorMessage))
        })
    }
}