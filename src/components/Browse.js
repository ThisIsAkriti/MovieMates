
import Header from './Header';
import usePlayingMovies from '../hooks/usePlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
//fetch data from tmdb api and update a store 
  usePlayingMovies();
  
  return (
    <div className='flex '>
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
