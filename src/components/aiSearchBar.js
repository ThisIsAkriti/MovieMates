import { useDispatch, useSelector } from 'react-redux';
import gray_search_icon from '../images/gray_search_icon.png';
import lang from '../utils/languageConstants';
import { useRef } from 'react';
import openai from '../utils/openai';
import { API_options } from '../utils/constants';
import { addAiMovieResults } from '../utils/aiSearchSlice';
const AiSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector(store => store.language.lang);
 const searchText = useRef(null);  

  const searchMovieList = async(movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_options);
    const json = await data.json();
    return json.results;
  }

  const handleAIsearchClick = async() => {
    console.log(searchText.current.value);

    const aiQuery = 
    "Act as a movie recommendation system and suggest some movies for the query :" + searchText.current.value + ". only give name of 5 movies , comma separated like the example Result given ahead. Example Result : Damsel , Elemental , No way up , Arcane , Spirited away";
    //make api call to ai and get movie results
    
    const aiResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content : aiQuery}],
      model: 'gpt-3.5-turbo',
    });
    
    !aiResults.choices ? 
    console.log("Error") 
      : 
    console.log(aiResults?.choices?.[0]?.message?.content) ;
    
    const aiMovies = aiResults.choices?.[0]?.message?.content?.split(",");
    
    const promiseArray = aiMovies.map((movie) => searchMovieList(movie));
    
    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(addAiMovieResults({movieNames: aiMovies , movieResults : tmdbResults}));
  }

  return (
    <div className="pt-[10%]  flex justify-center">
      
      <form className=" bg-black bg-opacity-80 p-4 mx-6 grid grid-cols-12
      rounded-md w-1/2 "
      onSubmit={(e) => e.preventDefault()} 
      >
 
        <input type="text"
        ref={searchText}
        placeholder={lang[langKey].aiSearchPlaceholder}
        className=" col-span-8 px-6 py-2 m-2 rounded-lg  outline-none  bg-gray-100" 
        />
        <img className='mt-[18%]  ml-[-50px]  size-8' src={gray_search_icon} alt="search"/>
        <button 
         className='px-4 my-2 bg-red-600 rounded-lg col-span-3 ml-[-20px]'
         onClick={handleAIsearchClick}
        >
        {lang[langKey].search}</button>  
      </form>
    </div>
  );

};
export default AiSearchBar;