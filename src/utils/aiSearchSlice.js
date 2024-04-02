import { createSlice } from "@reduxjs/toolkit";

const aiSearchSlice = createSlice({
    name: "aiSearch",
    initialState: {
        showAiSearch : false,
        movieResults : null,
        movieNames: null,
    },
    reducers: {
        toggleAiSearchView : (state) => {
            state.showAiSearch = !state.showAiSearch;
        },
        addAiMovieResults : (state , action) => {
            const {movieNames , movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;

        },
    }
});
export const {toggleAiSearchView ,addAiMovieResults} = aiSearchSlice.actions;
export default aiSearchSlice.reducer;