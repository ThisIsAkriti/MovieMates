import { useEffect } from 'react'
import { API_options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPlayingMovies } from '../utils/movieSlice';

const usePlayingMovies = () => {
    const dispatch = useDispatch();

  const getPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options);
    const json = await data.json();

    dispatch(addPlayingMovies(json.results));
  }
  useEffect(() => {
    getPlayingMovies()
  } , []);
}

export default usePlayingMovies;