import React, { useEffect } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import MovieListing from '../MovieListing/MovieListing'
import movieApi, { fetchData } from "../../common/apis/movieApi"
import {APIKey} from "../../common/apis/MovieApiKey"
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'
const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    const movieName = "Harry"
    
    const display = async(movieName)=>{
      const response = await fetchData(movieName)

      dispatch(addMovies(response))
    }
    display(movieName)
  },[])
  return (
    <DefaultLayout>
      <div className="banner-img"></div>
      <MovieListing />
    </DefaultLayout>
  )
}

export default Home
