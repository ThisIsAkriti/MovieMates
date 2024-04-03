import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/movieSlice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const topRated = useSelector(store => store.movies.addTopRated)

    const getTopRatedMovies = async() => {
       const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_options);
       const json = await data.json();
     
      
       dispatch(addTopRated(json.results));
    }
    useEffect(() => {
        !topRated && getTopRatedMovies();
    } , [])
}
export default useTopRatedMovies;