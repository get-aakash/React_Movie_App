import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const MovieDetail = () => { 
  const [movieList, setMovieList] = useState([])
  const {imdbID} = useParams()
  const { movies } = useSelector(state => state.movies)
  setMovieList(...movies, movies)
    console.log(movies)
  
  
  return (
    <div>
      MovieDetail
    </div>
  )
}

export default MovieDetail
