import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null; 
  return (

    <div className=' w-36 xl:w-48 rounded-xl mx-2 p-1 border border-purple-700 shadow-md shadow-purple-900 my-4 cursor-pointer hover:shadow-none hover:border-2'>
    
      <img  className= "rounded-xl"  src={IMG_CDN + posterPath} alt='Movie_Card'/>
    
    </div>
  )
}

export default MovieCard
