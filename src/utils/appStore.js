import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './movieSlice';
import aiSearchReducer from './aiSearchSlice';
import languageReducer from './languageSlice';
const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            aiSearch: aiSearchReducer, 
            language : languageReducer,
        }
    }
);
export default appStore ;