import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user1 from "../../images/user1.jpg"
import "./Header.scss"
import { fetchMovies, fetchShows } from '../../common/apis/movieApi'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'
import { addShows } from '../../features/movies/showSlice'




const Header = () => {
  const dispatch = useDispatch()
  const [term, setTerm] = useState("")
 
  const submitHandler = async(e)=>{
    e.preventDefault()
    
    console.log(dispatch(addMovies(await fetchMovies(term))))
    console.log(dispatch(addShows(await fetchShows(term))))
    console.log(term)
  }
  return (
    <div className="header">
       <div className="logo">
        <Link to="/">
          Movie App
        </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" placeholder='Search Movies or Shows' onChange={(e) => setTerm(e.target.value)} />
          <button><i className='fa fa-search'></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src={user1} alt="user" />
      </div>
    </div>
  )
}

export default Header
