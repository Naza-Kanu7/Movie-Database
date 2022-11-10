import { 
    FETCH_DETAILS_REQUEST, 
    FETCH_DETAILS_SUCCESS, 
    FETCH_DETAILS_FAILURE 
} from "./detailsTypes";

const initialState = {
    loading: false,
    moviesDetails: [],
    error: '',
}

const fetchMoviesDetailsReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_DETAILS_REQUEST : return{
            ...state,
            loading: true
        }
        case FETCH_DETAILS_SUCCESS : return{
            ...state,
            loading: false,
            moviesDetails: action.payload
        }
        case FETCH_DETAILS_FAILURE : return{
            ...state,
            loading: false,
            error: action.payload
        }
        default : return state
    }
}

export default fetchMoviesDetailsReducer
