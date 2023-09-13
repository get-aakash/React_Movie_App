import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shows:{}
}

const showSlice = createSlice({
    name:"shows",
    initialState,
    reducers:{
        addShows:(state, {payload})=>{
            state.shows = payload
        }
    }
})

export const {addShows} = showSlice.actions

export default showSlice.reducer