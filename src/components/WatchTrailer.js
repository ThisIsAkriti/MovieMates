import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import useTrailer from '../hooks/useTrailer';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useTotalMovies from '../hooks/useTotalMovies';

const WatchTrailer = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClickHome = () => {
    navigate("/browse");
  }
  
  let movieClicked;
  const totalMovies = useTotalMovies();
  if (id) {
    movieClicked = totalMovies.find((movie) => movie.id === parseInt(id));
  } else {
    movieClicked = totalMovies[0]; 
  }

  const {original_title , original_name, overview , release_date , first_air_date, vote_average , popularity ,vote_count} = movieClicked; 

  useTrailer(movieClicked?.id);
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  
  const stars = Math.round(vote_average / 2);

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = vote_count;
    const duration = 4000; // 2 seconds
    const increment = end / (duration / 100);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.round(start));
      }
    }, 100);

    return () => clearInterval(timer);
  }, [vote_count]);

  const maxPopularity = 10000; // Assuming 10000 is the max for context
  const percentage = (popularity / maxPopularity) * 100;
  
  return (
    <div className='bg-black text-white min-h-screen md:flex md:flex-col md:items-center  '>
      <img className='mx-4 pt-4 w-32 md:w-44 mb-4 cursor-pointer' src='/myLogo.svg' alt='Logo' onClick={handleClickHome}/>
      {trailerVideo && 
      <div className='flex flex-col items-center justify-center'>
        <div  className=' w-full md:w-fit md:h-[500px] h-full p-1'>
          <iframe 
            className='aspect-video rounded-xl border-4 border-purple-700 shadow-md shadow-purple-600 w-full h-full'
            src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>

          </iframe>
        </div>
      </div>}
      <p className='text-center font-bold text-3xl md:text-5xl mb-4 mt-8'>{original_title || original_name}</p>
      <p className='text-center my-4 mx-8 md:text-2xl lg:w-[800px]'>{overview}</p>
      <div className=' flex justify-center items-center flex-wrap gap-x-12 mb-8 md:w-[800px] mt-4'>
        
        <p><span>Premiere Date : </span>{release_date || first_air_date}</p>
        <p><span>Avg Rating : </span>{'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</p>
        <p><span>Hype Level : </span>More popular than {Math.round(percentage)}% of movies</p>
        <p><span>Total Votes : </span>{count.toLocaleString()}</p>
      </div>
      <p className='text-center font-semibold py-4'>Crafted with Precision💫</p>
    </div>
  )
}

export default WatchTrailer






/*
{
  "adult": false,
  "backdrop_path": null,
  "belongs_to_collection": null,
  "budget": 0,
  "genres": [
    {
      "id": 99,
      "name": "Documentary"
    }
  ],
  "homepage": "",
  "id": 242099,
  "imdb_id": "tt1013608",
  "origin_country": [
    "PT"
  ],
  "original_language": "pt",
  "original_title": "A Ilha de Moraes",
  "overview": "This film, made as a \"twin\" of A ilha dos amores, was planned as a poetic documentary on the enigmatic life of Wenceslau de Moraes (1855-1929), the great Portuguese writer who lived in the Far East. Verbal testimony, photographs, manuscripts, images of Lisbon, Macao, Kobe and Tokushima in Moraes' time are set side by side with A ilha dos amores and with de Moraes' writings. The director, Paulo Rocha, visited places where Moraes was still remembered, interviewed the writers descendants, consulted archives, rummaged through memories, appointment books, postcards, diaries and calendars from the private life of the 19th century. And above all he set out on a new journey, from Lisbon to Macao to Kobe until he reached Tokushima, where Moraes lived through the final ruin of his life and where Rocha tracks down, between the city and the cemetery, the living presence of places and the memories of individuals.",
  "popularity": 0.953,
  "poster_path": "/l0R9M2sDhlHuBgvI2yhb3gZlcWm.jpg",
  "production_companies": [
    {
      "id": 18645,
      "logo_path": null,
      "name": "Suma Filmes",
      "origin_country": "PT"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "JP",
      "name": "Japan"
    }
  ],
  "release_date": "1984-09-10",
  "revenue": 0,
  "runtime": 100,
  "spoken_languages": [
    {
      "english_name": "Japanese",
      "iso_639_1": "ja",
      "name": "日本語"
    },
    {
      "english_name": "Portuguese",
      "iso_639_1": "pt",
      "name": "Português"
    }
  ],
  "status": "Released",
  "tagline": "",
  "title": "A Ilha de Moraes",
  "video": false,
  "vote_average": 5,
  "vote_count": 3
}*/