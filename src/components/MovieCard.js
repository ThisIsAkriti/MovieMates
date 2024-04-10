import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null; 
  return (

    <div className=' w-36 md:w-48 rounded-xl border-gray-900 border-2 p-1 m-x-2'>
    
      <img  className= "rounded-xl"  src={IMG_CDN + posterPath} alt='Movie_Card'/>
    
    </div>
  )
}

export default MovieCard
