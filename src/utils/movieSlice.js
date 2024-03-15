import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'Movies',
    initialState : {
        playingMovies : null,
        popularMovies : null,
        trailerVideo : null
       
    },
    reducers : {
        addPlayingMovies : (state , action) => {
            state.playingMovies = action.payload;
        },
        addPopularMovies : (state , action) => {
            state.popularMovies = action.payload;
        },
        addTrailerVideo : (state , action) => {
            state.trailerVideo = action.payload;
        }
    }
})
export const {addPlayingMovies  , addTrailerVideo , addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;