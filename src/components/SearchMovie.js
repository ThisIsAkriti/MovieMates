import { useEffect, useState } from "react";
import MovieCards from "./MovieCards";
import gray_search_icon from '../images/gray_search_icon.png';
import { api_Key } from "../utils/constants"
const SearchMovie = () => {
    const [movieSearch , setMovieSearch] = useState([]);
    const [search , setSearch] = useState("");

    const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${api_Key}`;

    const searchMovie = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovieSearch(data.Search);
        
    }

    useEffect(() => {
        searchMovie("Avengers")
    } , [])
    return (
        <>
            <div className="flex  justify-center md:pt-[10%] pt-[40%] absolute w-full  ">
                <div className="bg-black bg-opacity-80 p-4 mx-6 grid grid-cols-12 rounded-md w-full md:w-1/2 overflow-hidden">
                    <input className="col-span-8 px-6 py-2 m-2 rounded-lg  outline-none  bg-gray-100" type="text" placeholder="Enter Movie Name!" value={search} 
                    onChange={(e) => setSearch(e.target.value)} />
                    <img className='lg:mt-[18%] md:mt-[34%] md:ml-[-50px] md:size-8 mt-[45%] ml-[-110%] size-6' src={gray_search_icon} alt="search"/>
                    <button className="px-4 my-2 bg-red-600 rounded-lg col-span-3 ml-[-20px]" onClick={()=>searchMovie(search)}>Search</button>
                </div>
            </div>

            <div className="pt-[60%] sm:pt-[54%] md:pt-[24%] lg:pt-[18%] pb-1 ">
            {movieSearch?.length > 0 ? (
                
                    <div className="py-10 px-2 m-4 mx-3 rounded-lg bg-black relative text-white bg-opacity-80 flex flex-wrap gap-x-6 gap-y-8 justify-center
                 ">
                    {movieSearch.map((movie) => (
                        <MovieCards key={movie.title} movie={movie}/>        
                    ))}
                </div>
                ) :(
                    <div className=" py-10 px-2 m-4 mx-3 rounded-lg text-center font-semibold text-2xl bg-black bg-opacity-80 text-white">Nothing To Display!</div>
                )
            }
            </div>
            
                
        </>
       
  )
}

export default SearchMovie
