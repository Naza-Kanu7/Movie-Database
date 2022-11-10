import axios from "axios";

import { 
    FETCH_DETAILS_REQUEST, 
    FETCH_DETAILS_SUCCESS, 
    FETCH_DETAILS_FAILURE 
} from "./detailsTypes";

export const fetchDetailsRequest = () => {
    return{
        type: FETCH_DETAILS_REQUEST,
    }
}

export const fetchDetailsSuccess = moviesDetails => {
    return{
        type: FETCH_DETAILS_SUCCESS,
        payload: moviesDetails
    }
}

export const fetchDetailsFailure = error => {
    return{
        type: FETCH_DETAILS_FAILURE,
        payload: error
    }
}

export const fetchMoviesDetails = (type, paramId) => {
    return(dispatch) => {
        dispatch(fetchDetailsRequest())
        axios.get(`https://api.themoviedb.org/3/${type}/${paramId}?api_key=4494f93985c7c8fe2083cd68cd48b574`)
        .then(response => {
            const moviesDetails = response.data
            dispatch(fetchDetailsSuccess(moviesDetails))
        })
        .catch(error => {
            dispatch(fetchDetailsFailure(error.message))
        })
    }
}