import  { useEffect } from 'react';
import { API_options } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

const useTrailer = (movieId) => {

  const dispatch = useDispatch();

  const TrailerVideo = useSelector(store => store.movies.addTrailerVideo);

  const getMovieVideos = async () => {

    const data = await fetch(
      'https://api.themoviedb.org/3/movie/'
      + movieId + 
      '/videos?language=en-US' ,
      API_options
    );

    const json = await data.json();



    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length?filterData[0] : json.results[0];
    
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !TrailerVideo && getMovieVideos();
  } , [])
};
export default useTrailer;