import {  useSelector } from 'react-redux';
import useTrailer from '../hooks/useTrailer';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useTrailer(movieId);
  return (
    <div  className='w-screen bg-black -mt-10 sm:mt-0'>
      <iframe 
        className='w-full aspect-video h-full'
       width="560"
       height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>

      </iframe>
    </div>
  )
}

export default VideoBackground;
