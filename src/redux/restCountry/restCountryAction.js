import axios from "axios"
import { FETCH_COUNTRY_ERROR, FETCH_COUNTRY_REQUEST, FETCH_COUNTRY_SUCCESS } from "./restCountryType"

export const fetchCountryRequest = () => {
    return {
        type : FETCH_COUNTRY_REQUEST
    }
}

export const fetchCountrySuccess = (country) => {
    return {
        type : FETCH_COUNTRY_SUCCESS,
        payload : country
    }
}

export const fetchCountryError = (error) => {
    return {
        type : FETCH_COUNTRY_ERROR,
        payload : error
    }
}

export const fetchCountry = () => {
    return (dispatch) => {
        dispatch(fetchCountryRequest())
        return axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            const country = response.data;
            console.log(country);
            dispatch(fetchCountrySuccess(country))
        })
        .catch(error => {
            const errorMessage = error.message;
            dispatch(fetchCountryError(errorMessage))
        })
    }
}