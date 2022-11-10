import axios from "axios";

import { 
    FETCH_TRENDING_MOVIES_REQUEST, 
    FETCH_TRENDING_MOVIES_SUCCESS, 
    FETCH_TRENDING_MOVIES_FAILURE
} from "./movieTypes";

export const fetchTrendingMoviesRequest = () => {
    return{
        type: FETCH_TRENDING_MOVIES_REQUEST
    }
}

export const fetchTrendingMoviesSuccess = trendingMovies => {
    return{
        type: FETCH_TRENDING_MOVIES_SUCCESS,
        payload: trendingMovies
    }
}

export const fetchTrendingMoviesFailure = error => {
    return{
        type: FETCH_TRENDING_MOVIES_FAILURE,
        payload: error
    }
}


export const fetchTrendingMovies = () => {
    
    return(dispatch) => {
        dispatch(fetchTrendingMoviesRequest())
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=4494f93985c7c8fe2083cd68cd48b574')
        .then(response => {
            const trendingMovies = response.data
            dispatch(fetchTrendingMoviesSuccess(trendingMovies))
        })
        .catch(error => {
            dispatch(fetchTrendingMoviesFailure(error.message))
        })
    }
}
