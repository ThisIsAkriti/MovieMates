import MovieList from "./MovieList";
import {useSelector} from "react-redux"
const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    return (
    <div className="bg-black text-white">
        <div className=" -mt-52 relative z-20 ">
        <MovieList title = {"Now Playing"} movies ={movies.playingMovies}/>
        <MovieList title = {"Popular"} movies ={movies.popularMovies}/>
        <MovieList title = {"Top Rated"} movies ={movies.playingMovies}/>
        <MovieList title = {"Now Playing"} movies ={movies.playingMovies}/>
        <MovieList title = {"Now Playing"} movies ={movies.playingMovies}/>
        <MovieList title = {"Now Playing"} movies ={movies.playingMovies}/>
        <MovieList title = {"Now Playing"} movies ={movies.playingMovies}/></div>
        
    </div>
    )
}
export default SecondaryContainer;