import MovieList from "./MovieList"
import { useSelector } from 'react-redux';

const AiMovieSuggestions = () => {
  const {movieNames , movieResults} = useSelector((store) => store.aiSearch);
 
 if(!movieNames) return null; // show shimmer ui in place of null

 return <div className='p-4 m-4  bg-black text-white bg-opacity-80'>
    <div>
      {movieNames.map((movieName , index) => (<MovieList key={movieName} title = {movieName} movies = {movieResults[index]}/>))}
    </div>
  </div>
}

<<<<<<< HEAD
export default AiMovieSuggestions;
=======
export default AiMovieSuggestions;


>>>>>>> 68bf24752841dd03bcfdcbb5a2949e84db2d4a61
