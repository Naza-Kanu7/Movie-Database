import axios from "axios";

import { 
    FETCH_SERIES_SEARCH_REQUEST,
    FETCH_SERIES_SEARCH_SUCCESS,
    FETCH_SERIES_SEARCH_FAILURE
} from "./seriesSearchTypes";


export const fetchSeriesSearchRequest = () => {
    return{
        type: FETCH_SERIES_SEARCH_REQUEST
    }
}

export const fetchSeriesSearchSuccess = seriesSearch => {
    return{
        type: FETCH_SERIES_SEARCH_SUCCESS,
        payload: seriesSearch
    }
}

export const fetchSeriesSearchFailure = error => {
    return{
        type: FETCH_SERIES_SEARCH_FAILURE,
        payload: error
    }
}


export const fetchSeriesSearch = searchKey => {
    
    return(dispatch) => {
        dispatch(fetchSeriesSearchRequest())
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=4494f93985c7c8fe2083cd68cd48b574&language=en-US&page=1&query=${searchKey}&include_adult=false`)
        .then(response => {
            const seriesResult = response.data
            dispatch(fetchSeriesSearchSuccess(seriesResult))
        })
        .catch(error => {
            dispatch(fetchSeriesSearchFailure(error.message))
        })
    }
}
