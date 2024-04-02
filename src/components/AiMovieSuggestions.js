<<<<<<< HEAD
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

export default AiMovieSuggestions;

=======
import React from 'react'

const aiMovieSuggestions = () => {
  return (
    <div>
      
    </div>
  )
}

export default aiMovieSuggestions
>>>>>>> 5f4541f27e62b1ab4b4877d07eb074ed7887041a
