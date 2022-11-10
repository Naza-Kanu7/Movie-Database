import axios from "axios";

import { 
    FETCH_MOVIES_SEARCH_REQUEST,
    FETCH_MOVIES_SEARCH_SUCCESS,
    FETCH_MOVIES_SEARCH_FAILURE
} from "./movieSearchTypes";


export const fetchMoviesSearchRequest = () => {
    return{
        type: FETCH_MOVIES_SEARCH_REQUEST
    }
}

export const fetchMoviesSearchSuccess = moviesSearch => {
    return{
        type: FETCH_MOVIES_SEARCH_SUCCESS,
        payload: moviesSearch
    }
}

export const fetchMoviesSearchFailure = error => {
    return{
        type: FETCH_MOVIES_SEARCH_FAILURE,
        payload: error
    }
}


export const fetchMoviesSearch = searchKey => {
    
    return(dispatch) => {
        dispatch(fetchMoviesSearchRequest())
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4494f93985c7c8fe2083cd68cd48b574&language=en-US&query=${searchKey}&page=1&include_adult=false`)
        .then(response => {
            const moviesResult = response.data
            dispatch(fetchMoviesSearchSuccess(moviesResult))
        })
        .catch(error => {
            dispatch(fetchMoviesSearchFailure(error.message))
        })
    }
}
