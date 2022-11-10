import { 
    FETCH_MOVIES_SEARCH_REQUEST,
    FETCH_MOVIES_SEARCH_SUCCESS,
    FETCH_MOVIES_SEARCH_FAILURE
} from "./movieSearchTypes";

const initialState = {
    loading: false,
    moviesSearch: [],
    error: '',
}

const fetchMoviesSearchReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIES_SEARCH_REQUEST : return{
            ...state,
            loading: true
        }
        case FETCH_MOVIES_SEARCH_SUCCESS : return{
            ...state,
            loading: false,
            moviesSearch: action.payload
        }
        case FETCH_MOVIES_SEARCH_FAILURE : return{
            ...state,
            loading: false,
            error: action.payload
        }
        default : return state
    }
}

export default fetchMoviesSearchReducer