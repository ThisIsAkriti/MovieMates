import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'Movies',
    initialState : {
        playingMovies : null,
        popularMovies : null,
        topRated : null,
        upcomingMovies: null,
        trailerVideo : null
       
    },
    reducers : {
        addPlayingMovies : (state , action) => {
            state.playingMovies = action.payload;
        },
        addPopularMovies : (state , action) => {
            state.popularMovies = action.payload;
        },
        addTopRated : ( state , action) => {
            state.topRated = action.payload;
        },
        addUpcomingMovies : (state , action ) => {
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo : (state , action) => {
            state.trailerVideo = action.payload;
        }
    }
})
export const {addPlayingMovies , addUpcomingMovies , addTrailerVideo , addPopularMovies , addTopRated} = movieSlice.actions;
export default movieSlice.reducer;