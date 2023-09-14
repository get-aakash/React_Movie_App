import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice"
import showReducer from "./movies/showSlice"
import movieReducer from "./movies/movieIdSlice"

export const store = configureStore({
    reducer:
    {
        movies:moviesReducer,
        shows:showReducer,
        movie:movieReducer,
    }
})

