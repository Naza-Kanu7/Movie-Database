import axios from "axios";

import { 
    FETCH_GENRE_MOVIES_REQUEST, 
    FETCH_GENRE_MOVIES_SUCCESS, 
    FETCH_GENRE_MOVIES_FAILURE 
} from "./genreMoviesTypes";


export const fetchGenreMoviesRequest = () => {
    return{
        type: FETCH_GENRE_MOVIES_REQUEST
    }
}

export const fetchGenreMoviesSuccess = genresMovies => {
    return{
        type: FETCH_GENRE_MOVIES_SUCCESS,
        payload: genresMovies
    }
}

export const fetchGenreMoviesFailure = error => {
    return{
        type: FETCH_GENRE_MOVIES_FAILURE,
        payload: error
    }
}


export const fetchGenreMoviesSearch = (page, genre) => {
    
    return(dispatch) => {
        dispatch(fetchGenreMoviesRequest())
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=4494f93985c7c8fe2083cd68cd48b574&language=en-US&page=${page}&with_genres=${genre}`)
        .then(response => {
            const genreMovies = response.data
            dispatch(fetchGenreMoviesSuccess(genreMovies))
        })
        .catch(error => {
            dispatch(fetchGenreMoviesFailure(error.message))
        })
    }
}
