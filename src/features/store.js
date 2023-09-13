import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice"
import showReducer from "./movies/showSlice"

export const store = configureStore({
    reducer:
    {
        movies:moviesReducer,
        shows:showReducer
    }
})

