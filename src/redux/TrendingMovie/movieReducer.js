import { 
    FETCH_TRENDING_MOVIES_REQUEST, 
    FETCH_TRENDING_MOVIES_SUCCESS, 
    FETCH_TRENDING_MOVIES_FAILURE 
} from "./movieTypes";

const initialState = {
    loading: false,
    trendingMovies: [],
    error: '',
}

const fetchTrendingMoviesReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_TRENDING_MOVIES_REQUEST : return{
            ...state,
            loading: true
        }
        case FETCH_TRENDING_MOVIES_SUCCESS : return{
            ...state,
            loading: false,
            trendingMovies: action.payload
        }
        case FETCH_TRENDING_MOVIES_FAILURE : return{
            ...state,
            loading: false,
            error: action.payload
        }
        default : return state
    }
}

export default fetchTrendingMoviesReducer