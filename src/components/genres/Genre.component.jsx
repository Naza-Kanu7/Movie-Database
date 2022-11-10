import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import '../components.css'
import { fetchGenresSearch } from '../../redux/Genres/genresAction'


function GenreListContainer({ genreListData, fetchGenreList }) {

    useEffect(() => {
        fetchGenreList()
    }, [])



    return genreListData.loading ? (
        <h2>
            <p></p>
        </h2>
    ) : genreListData.error ? (
        <h2>{genreListData.error}</h2>
    ) : (
        <div className='genre-list'>
            <div>{genreListData &&
                genreListData.genresList &&
                genreListData.genresList.genres &&
                genreListData.genresList.genres.map(genre =>
                    <div className='genre-name-container' key={genre.id}>
                        <Link to={`/genre/${genre.name}/${genre.id}`}><p>{genre.name}</p></Link>
                    </div>
                )}
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        genreListData: state.genreList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGenreList: () => dispatch(fetchGenresSearch()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreListContainer)
