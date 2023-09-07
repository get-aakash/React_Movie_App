import React, { useEffect } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from "../../common/apis/movieApi"
import {APIKey} from "../../common/apis/MovieApiKey"
const Home = () => {

  useEffect(()=>{
    const movieText = "Harry"
    const fetchMovies = async ()=>{
      const response = await  movieApi.get(`?apiKeys = ${APIKey} &s=${movieText}&type=movie`
      )
      .catch((err)=>{
        console.log("Err :", err)
      });
      console.log("The Response From API ", response)
    }
    fetchMovies()
  },[])
  return (
    <DefaultLayout>
      <div className="banner-img"></div>
      <MovieListing />
    </DefaultLayout>
  )
}

export default Home
