import axios from "axios";

export const fetchMovies = async(movieName)=>{
    const url = `https://www.omdbapi.com/?apikey=7d7f6780&s=${movieName}&type=movie`
    try{
        const {data} = await axios.get(url)
        return data
    }catch(error){
        console.log(error)
    }
}

export const fetchShows = async(showName)=>{
    const url = `https://www.omdbapi.com/?apikey=7d7f6780&s=${showName}&type=series`
    try{
        const {data} = await axios.get(url)
        return data
    }catch(error){
        console.log(error)
    }
}

export const getMovieorShow = async(imdbID)=>{
    const url = `https://www.omdbapi.com/?apikey=7d7f6780&i=${imdbID}&Plot=full`
    try{
        const {data} = await axios.get(url)
        
        return data
    }catch(error){
        console.log(error)
    }
}