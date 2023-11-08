import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard'
import { addMovies } from '../../features/movies/movieSlice'
import "./MovieDetail.scss"
import { getMovieorShow } from '../../common/apis/movieApi'
import { addMovie } from '../../features/movies/movieIdSlice'
import DefaultLayout from '../layout/DefaultLayout'

const MovieDetail = () => {
  const {movie} = useSelector(state => state.movie)
const dispatch = useDispatch()
  
  const {imdbID}  = useParams()
  useEffect(()=>{
    const displayMovieorShows = async(imdbID)=>{
      const showResponse = await getMovieorShow(imdbID)
      
      dispatch(addMovie(showResponse))

    }
  
  displayMovieorShows(imdbID)
    
  },[])
  
 console.log(movie.Title)
  
 
  
  return (
    <DefaultLayout>
      <div className='movie-section'>
     
      {Object.keys(movie).length === 0 ?(
      <div>Loading...</div>
      ):(
        <>
        <div className="section-left">
    <div className="movie-title">{movie.Title}</div>
    <div className="movie-rating">
      <span>
        IMDB Rating <i className='fa fa-star'></i>: {movie.imdbRating}
      </span>
      <span>
        IMDB Votes <i className='fa fa-thumbs-up'></i>: {movie.imdbVotes}
      </span>
      <span>
        Runtime <i className='fa fa-film'></i>: {movie.Runtime}
      </span>
      <span>
        Year <i className='fa fa-calendar'></i>: {movie.Year}
      </span>
    </div>
    <div className="movie-plot">{movie.Plot}</div>
    <div className="movie-info">
      <div>
        <span>Director</span>
        <span>{movie.Director}</span>
      </div>
      <div>
        <span>Stars</span>
        <span>{movie.Actors}</span>
      </div>
      <div>
        <span>Genre</span>
        <span>{movie.Genre}</span>
      </div>
      <div>
        <span>Language</span>
        <span>{movie.Language}</span>
      </div>
      <div>
        <span>Awards</span>
        <span>{movie.Awards}</span>
      </div>
    </div>
    </div>
    <div className="section-right">
      <img src={movie.Poster} alt={movie.Title} />
    </div>
    </>
      )}
     
    
    </div>
    </DefaultLayout>
    
      
    
  )
}

export default MovieDetail
