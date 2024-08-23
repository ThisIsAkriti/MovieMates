import { useEffect, useState } from 'react';
import { API_options } from '../utils/constants';

const useReview = (selectedMovieId) => {
  const [currentReviews, setCurrentReviews] = useState([]);

  const review = async () => {
    if (selectedMovieId) {
      try {
        
        const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedMovieId}/reviews?language=en-US&page=1`, API_options);
        const json = await response.json();
        if (json.success === false) {
          console.error('Error fetching reviews:', json.status_message);
        } else {
          setCurrentReviews(json.results);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    } else {
      console.warn('No movie ID provided for fetching reviews');
    }
  };

  useEffect(() => {
    if(selectedMovieId){
        review();
    }
  }, [selectedMovieId]);

  return currentReviews;
};

export default useReview;
