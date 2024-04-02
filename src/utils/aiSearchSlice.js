import { createSlice } from "@reduxjs/toolkit";

const aiSearchSlice = createSlice({
    name: "aiSearch",
    initialState: {
        showAiSearch : false,
<<<<<<< HEAD
        movieResults : null,
        movieNames: null,
=======
>>>>>>> 5f4541f27e62b1ab4b4877d07eb074ed7887041a
    },
    reducers: {
        toggleAiSearchView : (state) => {
            state.showAiSearch = !state.showAiSearch;
<<<<<<< HEAD
        },
        addAiMovieResults : (state , action) => {
            const {movieNames , movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;

        },
    }
});
export const {toggleAiSearchView ,addAiMovieResults} = aiSearchSlice.actions;
=======
        }
    }
});
export const {toggleAiSearchView} = aiSearchSlice.actions;
>>>>>>> 5f4541f27e62b1ab4b4877d07eb074ed7887041a
export default aiSearchSlice.reducer;