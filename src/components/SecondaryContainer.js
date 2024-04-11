import MovieList from "./MovieList";
import {useSelector} from "react-redux"
const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    return (
    <div className="bg-black text-white ">
        <div className="-mt-6 md:-mt-40 sm:-mt-32 xl:-mt-60 relative z-20 ">
        <MovieList title = {"Now Playing"} movies ={movies.playingMovies}/>
        <MovieList title = {"Popular"} movies ={movies.popularMovies}/>
        <MovieList title = {"Upcoming movies"} movies ={movies.upcomingMovies}/>
        <MovieList title = {"Trending"} movies ={movies.trendingMovies}/>
        <MovieList title = {"Top Rated"} movies ={movies.topRated}/>
        <MovieList title = {"Top TV Series"} movies ={movies.series}/>
        <MovieList title = {"On The Air Series"} movies ={movies.onTheAir}/></div>
        
    </div>
    )
}
export default SecondaryContainer;