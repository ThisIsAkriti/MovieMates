import { useSelector } from "react-redux";
import  VideoTitle  from "./VideoTitle";
import  VideoBackground  from "./VideoBackground";
import Shimer from "./Shimer";
const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.playingMovies);
    if(!movies) return <Shimer/> ;
    const mainMovie = movies[0];
    

    const {original_title , overview , id} = mainMovie;
    return (
    <div>
        <VideoTitle title = { original_title} overview = {overview}/>
        <VideoBackground movieId = {id}/>
    </div>
    );
}
export default MainContainer; 

