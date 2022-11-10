import { 
    FETCH_GENRES_REQUEST, 
    FETCH_GENRES_SUCCESS, 
    FETCH_GENRES_FAILURE 
} from "./genresTypes";


const initialState = {
    loading: false,
    genresList: [],
    error: '',
}

const fetchGenresReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_GENRES_REQUEST : return{
            ...state,
            loading: true
        }
        case FETCH_GENRES_SUCCESS : return{
            ...state,
            loading: false,
            genresList: action.payload
        }
        case FETCH_GENRES_FAILURE : return{
            ...state,
            loading: false,
            error: action.payload
        }
        default : return state
    }
}

export default fetchGenresReducer