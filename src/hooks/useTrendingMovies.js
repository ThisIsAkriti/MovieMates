import{ useEffect } from 'react'
import { API_options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrendingMovies } from '../utils/movieSlice';

const useTrendingMovies = () => {
   const dispatch = useDispatch();
   const trendingMovies = useSelector(store => store.movies.addTrendingMovies);

    const getTrendingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_options);
        const json = await data.json();

        dispatch(addTrendingMovies(json.results));
    }
    useEffect(() => {
        !trendingMovies && getTrendingMovies();
    } ,[])
}

export default useTrendingMovies;
