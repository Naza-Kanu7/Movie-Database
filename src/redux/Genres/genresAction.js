import axios from "axios";

import { 
    FETCH_GENRES_REQUEST, 
    FETCH_GENRES_SUCCESS, 
    FETCH_GENRES_FAILURE 
} from "./genresTypes";


export const fetchGenresRequest = () => {
    return{
        type: FETCH_GENRES_REQUEST
    }
}

export const fetchGenresSuccess = genresList => {
    return{
        type: FETCH_GENRES_SUCCESS,
        payload: genresList
    }
}

export const fetchGenresFailure = error => {
    return{
        type: FETCH_GENRES_FAILURE,
        payload: error
    }
}


export const fetchGenresSearch = () => {
    
    return(dispatch) => {
        dispatch(fetchGenresRequest())
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=4494f93985c7c8fe2083cd68cd48b574&language=en-US')
        .then(response => {
            const genresResult = response.data
            dispatch(fetchGenresSuccess(genresResult))
        })
        .catch(error => {
            dispatch(fetchGenresFailure(error.message))
        })
    }
}
