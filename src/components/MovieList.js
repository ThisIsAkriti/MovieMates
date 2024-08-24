import React, { useState } from 'react'
import MovieCard from './MovieCard';
import play_icon from '../images/play_icon.png';
import icon_info2 from '../images/icon_info2.png';
import { useNavigate} from 'react-router-dom';
import useReview from '../hooks/useReview';
import Modal from './Modal';

const MovieList = ({title , movies}) => {
  const navigate = useNavigate();
  const [showReview , setShowReview] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handlePlay = (movie) => {
    navigate(`/watchTrailer/${movie.id}` ) 
  }

  const handleReview  = (movieId) => {
    
    setSelectedMovieId(movieId);
    setShowReview(!showReview)
  }

  
  const closeModal = () => {
    setShowReview(!showReview);
  };
  
  const reviewsData = useReview(selectedMovieId)

  return (
    <div className=' px-4 sm:bg-transparent bg-black -mt-14 sm:mt-0'>
      <h1 className='text-2xl font-semibold py-2'>{title}</h1>
      <div className='flex  overflow-x-scroll no-scrollbar'>
        <div className='flex'>
          {movies?.map((movie) => 
          <div key={movie.id}>
            <MovieCard posterPath = {movie.poster_path}/>
            <div className='flex relative sm:mb-10 mb-20 -mt-16 ml-4'>
              <button
              onClick={() => handlePlay(movie)}
                className='flex items-center bg-gray-100 font-semibold text-black py-1 px-1 border-purple-600 border rounded-lg mr-2 hover:bg-purple-200 hover:bg-opacity-80'>
                  <img className=' size-6' src={play_icon} alt="play_icon" />
              </button>
              <button
                onClick={() => handleReview(movie.id)}
                className='flex items-center bg-purple-900 font-semibold text-white py-1 px-1 border-purple-900 border-2 rounded-lg mr-2 bg-opacity-75 hover:bg-purple-800 hover:bg-opacity-90'>
                <img className='mr-1 size-6' src={icon_info2} alt="info-icon" />
              </button>
            </div>



            {showReview && selectedMovieId === movie.id && (
            <div className='scrollbar-thin'>
              <Modal show={showReview} onClose={closeModal}>
              {reviewsData.length > 0 ? (
              reviewsData.map((review, id) => (
                <div key={id} className='py-2 ' >
                  <p className='font-bold mb-2'>● {review.author}</p>
                  <p className=' overflow-y-auto h-[78px] scrollbar-thin px-2 border-b border-purple-800 '>{review.content}</p>
                </div>
                ))
              ) : (
                <p className='font-bold p-2'>No Reviews Found . . .</p>
              )}
               </Modal>
            </div>)}

          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieList
