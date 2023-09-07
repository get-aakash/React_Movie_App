import axios from "axios";

export const fetchData = async(movieName)=>{
    const url = `https://www.omdbapi.com/?apikey=7d7f6780&t=${movieName}`
    try{
        const {data} = await axios.get(url)
        return data
    }catch(error){
        console.log(error)
    }
}