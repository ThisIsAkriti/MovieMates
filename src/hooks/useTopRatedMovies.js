import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/movieSlice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const getTopRatedMovies = async() => {
       const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_options);
       const json = await data.json();
       console.log("hello Json" );
       console.log( json);
       dispatch(addTopRated(json.results));
    }
    useEffect(() => {
        getTopRatedMovies();
    } , [])
}
export default useTopRatedMovies;