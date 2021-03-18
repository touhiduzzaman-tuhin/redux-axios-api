import axios from "axios"
import { FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userType"

export const fetchUserRequest = () => {
    return {
        type : FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type : FETCH_USER_SUCCESS,
        payload : users
    }
}

export const fetchUserError = (error) => {
    return {
        type : FETCH_USER_ERROR,
        payload : error
    }
}

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data;
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            const errorMessage = error.message;
            dispatch(fetchUserError(errorMessage))
        })
    }
}