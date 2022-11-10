import React, {useState} from 'react'
import TrendingMoviesContainer from './trendingMovies/TrendingMoviesContainer.component'
import MovieSearch from './movieSearch/MovieSearch.component'
import SeriesSearch from './seriesSearch/SeriesSearch.component'
import GenreListContainer from './genres/Genre.component'
import { FaListUl } from 'react-icons/fa'

import './components.css'

function Home() {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    if (isClicked === true) {
      setIsClicked(false)
    } else {
      setIsClicked(true)
    }
  }
  return (
    <div className='home-container'>
      <span className='mobile-icon' onClick={handleClick}><FaListUl /></span>
      <div className='mobile-genre' style={{display: isClicked ? 'block' : 'none'}}>
        <GenreListContainer />
      </div>
      <div className='genre-sidebar'>
        <GenreListContainer />
      </div>
      <div className='main-content'>
        <TrendingMoviesContainer />
        <MovieSearch />
        <SeriesSearch />
      </div>
    </div>
  )
}

export default Home