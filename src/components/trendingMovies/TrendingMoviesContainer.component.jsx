import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { FaAsterisk } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'

import '../components.css'
import { fetchTrendingMovies } from '../../redux/TrendingMovie/movieActions'

function TrendingMoviesContainer({ trendingMoviesData, fetchTrendingMovies }) {
  
  // const [period, setPeriod] = useState('day')

  useEffect(() => {
    fetchTrendingMovies()
  }, [])
  
  return trendingMoviesData.loading ? (
    <h2 className='trending-movies-container'><PacmanLoader color="rgb(172, 10, 172)" margin={6} size={50} /></h2>
  ) : trendingMoviesData.error ? (
    <h2>{trendingMoviesData.error}</h2>
  ) : (
    <div className='trending-movies-container'>
      <h2 className='trending-header'>Trending Movies Today</h2>
      {/* <div className='category-dropdown'>
        <select onChange={(e) => setPeriod(e.target.value)}>
          <option value='day'>Today</option>
          <option value='week'>All Week</option>
        </select>
      </div> */}
      <div className='trending-movies-list'>{trendingMoviesData &&
        trendingMoviesData.trendingMovies &&
        trendingMoviesData.trendingMovies.results &&
        trendingMoviesData.trendingMovies.results.map(movie =>
          <div className='trending-single-movie' key={movie.id}>
            <Link to={`/details/movie/${movie.id}`}><img src={movie.poster_path !== null ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'} /></Link>
            <p>{movie.title ? movie.title : movie.name}</p>
            <div className='trending-movie-span'>
              <span><FaAsterisk /> {movie.vote_average}</span>
              <span><FaAsterisk /> {movie.release_date}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    trendingMoviesData: state.trendingMovie,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTrendingMovies: () => dispatch(fetchTrendingMovies()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingMoviesContainer)
