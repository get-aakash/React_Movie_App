import React, { useEffect } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import MovieListing from '../MovieListing/MovieListing'
import movieApi, { fetchData, fetchMovies, fetchShows } from "../../common/apis/movieApi"
import {APIKey} from "../../common/apis/MovieApiKey"
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'
import { addShows } from '../../features/movies/showSlice'
 const Home = () => {
  const dispatch = useDispatch()
  const movieName = "harry"
  const showName = "friends"
  useEffect(()=>{
    
  const  displayMovie = async(movieName)=>{
    const movieResponse = await fetchMovies(movieName)
    dispatch(addMovies(movieResponse))
  }
    const displayShows = async(showName)=>{
      const showResponse = await fetchShows(showName)
      dispatch(addShows(showResponse))
    }
    

    
    displayMovie(movieName)
    displayShows(showName)
  },[])
  return (
    <DefaultLayout>
      <div className="banner-img"></div>
      <MovieListing />
    </DefaultLayout>
  )
}

export default Home
