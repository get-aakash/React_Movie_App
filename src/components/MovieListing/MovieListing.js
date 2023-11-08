import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieListing.scss"
import { Settings } from '../../common/settings'
import Slider from "react-slick";
const MovieListing = () => {
  
  const { movies } = useSelector(state => state.movies)
  const  {shows}  = useSelector(state => state.shows)
  
 

  return (
    <div className='movie-wrapper'>
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{movies.Response === "True" ? (
        movies.Search.map((movie,index)=>(
          <MovieCard key={index} data={movie} />
        ))
        
      ) : (
        <div className='movies-error'>
          <h3>{movies.Error}</h3>
        </div>
      )}</Slider>

        
        </div>
        </div>
        <div className="show-list">
        <h2>Series</h2>
        <div className="movie-container">
          <Slider {...Settings}>{shows.Response === "True" ? (
        shows.Search.map((show,index)=>(
          <MovieCard key={index} data={show} />
        ))
        
      ) : (
        <div className='movies-error'>
          <h3>{shows.Error}</h3>
        </div>
      )}</Slider>
        
        </div>
        </div>
    </div>
  )
}

export default MovieListing
