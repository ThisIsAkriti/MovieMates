
import Header from './Header';
import usePlayingMovies from '../hooks/usePlayingMovies';
import MainContainer from './MainContainer';
import AiSearch from "./AiSearch"
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useSeries from '../hooks/useSeries';
import useOnTheAir from '../hooks/useOnTheAir';
import { useSelector } from 'react-redux';

const Browse = () => {
//fetch data from tmdb api and update a store 
 const showAiSearch = useSelector(store => store.aiSearch.showAiSearch);
  usePlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useSeries();
  useOnTheAir();
  
  return (
    <div>
      <Header/>
      {
        showAiSearch ?
        ( <AiSearch/> )
         : 
        ( <><MainContainer/> <SecondaryContainer/></> )
      }
    </div>
  )
}

export default Browse;
