import { combineReducers } from 'redux'
import fetchTrendingMoviesReducer from './TrendingMovie/movieReducer'
import fetchMoviesDetailsReducer from './Details/detailsReducer'
import fetchMoviesSearchReducer from './MovieSearch/movieSearchReducer'
import fetchSeriesSearchReducer from './SeriesSearch/seriesSearchReducer'
import fetchGenresReducer from './Genres/genresReducer'
import fetchGenreMoviesReducer from './GenreMovies/genreMoviesReducers'


const rootReducer = combineReducers({
    trendingMovie: fetchTrendingMoviesReducer,
    details: fetchMoviesDetailsReducer,
    movieSearch: fetchMoviesSearchReducer,
    seriesSearch: fetchSeriesSearchReducer,
    genreList: fetchGenresReducer,
    genreMovie: fetchGenreMoviesReducer
})

export default rootReducer