import { createSlice } from "@reduxjs/toolkit";

const aiSearchSlice = createSlice({
    name: "aiSearch",
    initialState: {
        showAiSearch : false,
    },
    reducers: {
        toggleAiSearchView : (state) => {
            state.showAiSearch = !state.showAiSearch;
        }
    }
});
export const {toggleAiSearchView} = aiSearchSlice.actions;
export default aiSearchSlice.reducer;