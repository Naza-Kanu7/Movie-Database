import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'

import './components.css'
import { fetchMoviesDetails } from '../redux/Details/detailsAction'



function MovieDetails({ moviesDetails, fetchMoviesDetails }) {
    const { type, detailsID } = useParams()
    const urlId = detailsID
    console.log(urlId)

    const typeOf = type

    const { poster_path, original_title, genres, release_date, runtime, tagline, vote_average, overview, status, original_language, original_name, number_of_episodes, number_of_seasons, homepage } = moviesDetails.moviesDetails

    function timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return rhours + "h " + rminutes + "mins.";
    }


    useEffect(() => {
        fetchMoviesDetails(typeOf, urlId)
    }, [])

    const navigate = useNavigate();

    return moviesDetails.loading ? (
        <h2 className='trending-movies-container'><PacmanLoader color="rgb(172, 10, 172)" margin={6} size={50} /></h2>
    ) : moviesDetails.error ? (
        <h2>{moviesDetails.error}</h2>
    ) : (
        <div>
            <button className='back-button' onClick={() => navigate(-1)}>Go back</button>
            {moviesDetails &&
            moviesDetails.moviesDetails &&
            <div className='details-container'>
                <div className='details-img-container'>
                    <img src={poster_path !== null ? `https://image.tmdb.org/t/p/w400/${poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'} />
                </div>
                <div className='details-text-container'>
                    <div className='details-text-first-para'>
                        <h2>{original_title ? original_title : original_name} <p>{release_date && <p>({release_date?.slice(0, 4)})</p>}</p></h2>

                        <span>&#x2022;{release_date && release_date} </span>

                        <span>{genres?.map(genre => <span key={genre.id}>{genre.name} &#x2022; </span>)}</span>
                        <span>{runtime && timeConvert(runtime)} </span>
                        <p className='tag'>{tagline}</p>
                    </div>
                    <div className='details-text-second-para'>
                        <div className='vote-div'>
                            <h3 className='vote'>{String(vote_average)?.slice(0, 1) + String(vote_average)?.charAt(2)}% </h3>
                        </div>
                        <p>User <span >Score</span></p>
                    </div>
                    <div className='details-text-third-para'>
                        <h3>OVERVIEW</h3>
                        <p>{overview}</p>
                        <div className='details-flex'>
                            <div>
                                <p className='stat'>Status: {status}</p>
                                <p className='stat'>Original Language: {original_language === 'en' ? 'English' : original_language}</p>
                            </div>
                            <div>
                                <p className='stat'> {number_of_episodes && <p>Number of Episodes: {number_of_episodes}</p>}</p>
                                <p className='stat'> {number_of_seasons && <p>Number of Seasons: {number_of_seasons}</p>}</p>
                            </div>
                        </div>
                    </div>
                    <div className='link'>
                        {homepage && <a href={homepage} target="_blank">
                            Click To Go To The Official Website
                        </a>}
                        <br />
                        <a href={`https://nzdworld.com/?s=${original_title ? original_title : original_name}`} target="_blank">
                            Click To Download on NZDWORLD
                        </a>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        moviesDetails: state.details,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMoviesDetails: (type, urlId) => dispatch(fetchMoviesDetails(type, urlId)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)