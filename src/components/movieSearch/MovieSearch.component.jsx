import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { FaAsterisk, FaSearch, FaRedo } from "react-icons/fa"
import { Link } from 'react-router-dom'

import '../components.css'
import { fetchMoviesSearch } from '../../redux/MovieSearch/movieSearchAction'

function MovieSearch({ moviesSearchData, fetchMoviesSearch }) {

    const [searchKey, setSearchKey] = useState('')

    const [toSearch, setToSearch] = useState('america')

    const toSearchHandler = () => {
        setToSearch(searchKey)
        console.log(toSearch)
    }

    useEffect(() => {
        fetchMoviesSearch(toSearch)
    }, [toSearch])

    return moviesSearchData.loading ? (
        <h2 className='trending-movies-container'>
            <p></p>
        </h2>
    ) : moviesSearchData.error ? (
        <h2>{moviesSearchData.error}</h2>
    ) : (
        <div className='trending-movies-container'>
            <div className='trending-movies-input-container'>
                <input className='trending-input search' type='text' placeholder='Search Movies' onChange={(e) => setSearchKey(e.target.value.toLocaleUpperCase())} />
                <span onClick={() => toSearchHandler()}><FaSearch /></span>
            </div>
            <div className='trending-movies-list'>{moviesSearchData &&
                moviesSearchData.moviesSearch &&
                moviesSearchData.moviesSearch.results?.length > 0 ?
                moviesSearchData.moviesSearch.results.map(movie =>
                    <div className='trending-single-movie' key={movie.id}>
                        <Link to={`/details/movie/${movie.id}`}><img src={movie.poster_path !== null ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'} /></Link>
                        <p>{movie.title ? movie.title : movie.name}</p>
                        <div className='trending-movie-span'>
                            <span><FaAsterisk /> {movie.vote_average}</span>
                            <span><FaAsterisk /> {movie.release_date}</span>
                        </div>
                    </div>
                ) : <div className='redo-container'><h2>No Results <span onClick={() => setToSearch('america')}> <FaRedo /> </span> </h2> </div>}
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        moviesSearchData: state.movieSearch,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMoviesSearch: (searchKey) => dispatch(fetchMoviesSearch(searchKey)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch)
