import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'Movies',
    initialState : {
        playingMovies : null,
        trailerVideo : null
    },
    reducers : {
        addPlayingMovies : (state , action) => {
            state.playingMovies = action.payload;
        },
        addTrailerVideo : (state , action) => {
            state.trailerVideo = action.payload;
        }
    }
})
export const {addPlayingMovies  , addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;