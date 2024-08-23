import { useSelector } from 'react-redux';

const useTotalMovies = () => {
  const playingMovies = useSelector((store) => store.movies?.playingMovies || []);
  const popularMovies = useSelector((store) => store.movies?.popularMovies || []);
  const topRatedMovies = useSelector((store) => store.movies?.topRated || []);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies || []);
  const trendingMovies = useSelector((store) => store.movies?.trendingMovies || []);
  const series = useSelector((store) => store.movies?.series || []);
  const onTheAir = useSelector((store) => store.movies?.onTheAir || []);
 

  const totalMovies = [
    ...playingMovies,
    ...popularMovies,
    ...topRatedMovies,
    ...upcomingMovies,
    ...trendingMovies,
    ...series,
    ...onTheAir,
  ];

  return totalMovies;
};

export default useTotalMovies;
