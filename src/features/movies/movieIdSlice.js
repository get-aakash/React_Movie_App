import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie:{}
}

const movieIdSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        addMovie:(state, {payload})=>{
            state.movie = payload
        }
    }
})

export const {addMovie} = movieIdSlice.actions

export default movieIdSlice.reducer