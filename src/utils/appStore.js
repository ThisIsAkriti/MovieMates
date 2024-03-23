import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './movieSlice';
import aiSearchReducer from './aiSearchSlice';
const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            aiSearch: aiSearchReducer, 
        }
    }
);
export default appStore 