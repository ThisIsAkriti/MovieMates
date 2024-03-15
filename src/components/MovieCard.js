import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className=' w-52 h-40  pr-4'>
      <img src={IMG_CDN + posterPath} alt='Movie_Card'/>
    </div>
  )
}

export default MovieCard
