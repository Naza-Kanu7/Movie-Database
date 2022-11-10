import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'
import { FaAsterisk } from "react-icons/fa"

import '../components.css'
import { fetchGenreMoviesSearch } from '../../redux/GenreMovies/genreMoviesActions'

function GenreMovies({ genreMovies, fetchGenreMoviesSearch }) {

    const { genreName, genreID } = useParams()
    const linkId = genreID
    // console.log(linkId)

    const [page, setPage] = useState(1)

    useEffect(() => {
        fetchGenreMoviesSearch(page, linkId)
    }, [page])
    return genreMovies.loading ? (
        <h2 className='trending-movies-container'>
            <PacmanLoader color="rgb(172, 10, 172)" margin={6} size={50} />
        </h2>
    ) : genreMovies.error ? (
        <h2>{genreMovies.error}</h2>
    ) : (
        <div className='trending-movies-container'>
            <h2 className='trending-header'>{genreName} Movies</h2>
            <div className='category-dropdown'>
                <h4>Page: </h4>
                <input onChange={(e) => setPage(e.target.value)} type='number' value={page} />
            </div>
            <div className='trending-movies-list'>
                {genreMovies &&
                    genreMovies.genreMovies &&
                    genreMovies.genreMovies.results &&
                    genreMovies.genreMovies.results.map(genreMovie =>
                        <div className='trending-single-movie' key={genreMovie.id}>
                            <Link to={`/details/movie/${genreMovie.id}`}><img src={genreMovie.poster_path !== null ? `https://image.tmdb.org/t/p/w400/${genreMovie.poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'} /></Link>
                            <p>{genreMovie.title ? genreMovie.title : genreMovie.name}</p>
                            {/* <span>Popularity: {movie.popularity}</span> */}
                            <div className='trending-movie-span'>
                                <span><FaAsterisk /> {genreMovie.vote_average}</span>
                                <span><FaAsterisk /> {genreMovie.release_date}</span>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        genreMovies: state.genreMovie,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGenreMoviesSearch: (page, genreId) => dispatch(fetchGenreMoviesSearch(page, genreId)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GenreMovies)