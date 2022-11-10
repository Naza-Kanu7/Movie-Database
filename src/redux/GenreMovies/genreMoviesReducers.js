import { 
    FETCH_GENRE_MOVIES_REQUEST, 
    FETCH_GENRE_MOVIES_SUCCESS, 
    FETCH_GENRE_MOVIES_FAILURE 
} from "./genreMoviesTypes";

const initialState = {
    loading: false,
    genreMovies: [],
    error: '',
}

const fetchGenreMoviesReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_GENRE_MOVIES_REQUEST : return{
            ...state,
            loading: true
        }
        case FETCH_GENRE_MOVIES_SUCCESS : return{
            ...state,
            loading: false,
            genreMovies: action.payload
        }
        case FETCH_GENRE_MOVIES_FAILURE : return{
            ...state,
            loading: false,
            error: action.payload
        }
        default : return state
    }
}


export default fetchGenreMoviesReducer