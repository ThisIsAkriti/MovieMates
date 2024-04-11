import React from 'react';
import play_icon from '../images/play_icon.png';
import icon_info2 from '../images/icon_info2.png';
const VideoTitle = ({title , overview}) => {
  return (
    <div className=' pt-[24%] xl:pt-[14%] lg:pt-[18%] px-12 absolute text-white bg-gradient-to-r from-black 
      w-screen aspect-video '>
      <h1 className=' xl:text-4xl lg:text-3xl text-xl font-bold mb-4 xl:mb-0'>{title}</h1>
      <p className='hidden xl:inline-block py-6 text-lg w-1/3'>{overview}</p>
      <div className='flex '>
        <button className='flex items-center bg-gray-100 font-semibold text-black xl:px-4 px-2 py-2 
          border-gray-200 border-2 rounded-lg mr-4 
          hover:opacity-80 '>
          <img className='mr-1 xl:size-6 size-4' src={play_icon} alt="play_icon" />
          Play
        </button>
        
        <button className='flex items-center bg-gray-900 font-semibold text-white xl:px-4 px-2 py-2
          border-gray-900   
          border-2 rounded-lg mr-4
          bg-opacity-75 hover:bg-black hover:bg-opacity-90'>
          <img className='mr-1 xl:size-6 size-5' src={icon_info2} alt="info-icon" />
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle;
