import { 
    FETCH_SERIES_SEARCH_REQUEST,
    FETCH_SERIES_SEARCH_SUCCESS,
    FETCH_SERIES_SEARCH_FAILURE
} from "./seriesSearchTypes";

const initialState = {
    loading: false,
    seriesSearch: [],
    error: '',
}

const fetchSeriesSearchReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_SERIES_SEARCH_REQUEST : return{
            ...state,
            loading: true
        }
        case FETCH_SERIES_SEARCH_SUCCESS : return{
            ...state,
            loading: false,
            seriesSearch: action.payload
        }
        case FETCH_SERIES_SEARCH_FAILURE : return{
            ...state,
            loading: false,
            error: action.payload
        }
        default : return state
    }
}

export default fetchSeriesSearchReducer