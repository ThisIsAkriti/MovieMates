import{ useEffect } from 'react'
import { API_options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrendingMovies } from '../utils/movieSlice';

const useTrendingMovies = () => {
   const dispatch = useDispatch();

    const getTrendingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_options);
        const json = await data.json();

        dispatch(addTrendingMovies(json.results));
    }
    useEffect(() => {
        getTrendingMovies();
    } ,[])
}

export default useTrendingMovies;
