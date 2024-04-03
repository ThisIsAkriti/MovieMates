import  { useEffect } from 'react'
import { API_options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addSeries } from '../utils/movieSlice';

const useSeries = () => {
    const dispatch = useDispatch();
    const Series = useSelector(store => store.movies.addSeries)
   const getSeries = async() => {
    const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_options);
    const json = await data.json();
    dispatch(addSeries(json.results));
   }
   useEffect(() => {
    !Series && getSeries();
   })
}

export default useSeries;
