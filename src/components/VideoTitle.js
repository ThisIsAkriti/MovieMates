import React, { useEffect, useState } from 'react';
import play_icon from '../images/play_icon.png';
import icon_info2 from '../images/icon_info2.png';
import { useNavigate } from 'react-router-dom';
import useReview from '../hooks/useReview';

const VideoTitle = ({title , overview , movieId}) => {
  
  const [showReview , setShowReview] = useState(false);
  const navigate = useNavigate();
  const reviewsData = useReview(movieId);
  const [firstReview, setFirstReview] = useState(null);

  useEffect(() => {
    if (reviewsData.length > 0) {
      setFirstReview(reviewsData[0]);
    }
  }, [reviewsData]);

  const handleClickReview  = () => {
    setShowReview(!showReview)
  }
  const handleClickPlay = () => {
    navigate("/watchTrailer")
  }
  
  return (
    <div className=' pt-[24%] xl:pt-[14%] lg:pt-[18%]  px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video md:mt-0 -mt-10 '>
      <h1 className=' xl:text-4xl lg:text-3xl text-xl font-bold mb-4 xl:mb-0'>{title}</h1>
      <p className='hidden xl:inline-block py-6 text-lg w-1/3'>{overview}</p>
      
      <div className='flex '>
        <button
        onClick={handleClickPlay} 
        className='flex items-center bg-gray-100 font-semibold text-black xl:px-4 px-3 py-2 border-purple-600 border rounded-lg mr-4 hover:bg-purple-400 hover:bg-opacity-80 hover:shadow-md hover:shadow-purple-800 hover:border-none'>
          <img className='mr-1 xl:size-6 size-4' src={play_icon} alt="play_icon" />
          Play
        </button>
        
        <button
        onClick={handleClickReview}
        className='flex items-center bg-purple-900 font-semibold text-white xl:px-4 px-2 py-2
          border-purple-900   
          border-2 rounded-lg mr-4
          bg-opacity-75 hover:bg-purple-800 hover:bg-opacity-90'>
          <img className='mr-1 xl:size-6 size-5' src={icon_info2} alt="info-icon" />
          Review
        </button>
      </div>
      {showReview && firstReview &&
      (<div className='bg-black opacity-90 h-56 md:w-[500px] xl:-mt-[20%] md:ml-44 sm:ml-28 mt-4 md:-mt-[10%] relative rounded-lg py-2 px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-800 scrollbar-track-black z-30'>
      {reviewsData.length > 0 ? (
        reviewsData.map((review, id) => (
          <div key={id} className='py-2' >
            <p className='font-bold mb-2'>● {review.author}</p>
            <p className=' overflow-y-auto h-[78px] scrollbar-thin px-2 border-b border-purple-800 '>{review.content}</p>
          </div>
        ))
        ) : (
          <p className='font-bold p-2'>No reviews available</p>
        )}
      </div>)}
    </div>
  )
}

export default VideoTitle;
