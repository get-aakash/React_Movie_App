import React, { useEffect } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import MovieListing from '../MovieListing/MovieListing'
import movieApi, { fetchData } from "../../common/apis/movieApi"
import {APIKey} from "../../common/apis/MovieApiKey"
const Home = () => {

  useEffect(()=>{
    const movieName = "Harry"
    const display = async(movieName)=>{
      const response = await fetchData(movieName)
      console.log(response)
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
