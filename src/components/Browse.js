
import Header from './Header';
import usePlayingMovies from '../hooks/usePlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';

const Browse = () => {
//fetch data from tmdb api and update a store 
  usePlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/*
      main container
       - video bg
       - video title
      secondary container
       - MovieList * n
       - cards * n
      */ }
    </div>
  )
}

export default Browse;
