import { useEffect } from 'react'
import { API_options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPlayingMovies } from "../utils/movieSlice";

const usePlayingMovies = () => {
  const dispatch = useDispatch();

  const PlayingMovies = useSelector(store => store.movies.addPlayingMovies);

  const getPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options);
    const json = await data.json();

    dispatch(addPlayingMovies(json.results));
  }
  useEffect(() => {
    if(!PlayingMovies) getPlayingMovies()
  } , []);
}

export default usePlayingMovies;