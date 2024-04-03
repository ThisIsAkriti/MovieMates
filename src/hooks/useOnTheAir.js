import { useEffect } from 'react'
import { API_options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addOnTheAir } from '../utils/movieSlice';

const useOnTheAir = () => {
   const dispatch = useDispatch();
   const onAir = useSelector(store => store.movies.addOnTheAir)
    const getOnTheAir = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', API_options);
        const json = await data.json();

        dispatch(addOnTheAir(json.results));
    }
    useEffect(() => {
       !onAir && getOnTheAir();
    })
}

export default useOnTheAir;
