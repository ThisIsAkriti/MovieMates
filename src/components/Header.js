import React from 'react';
import logo2 from '../images/logo2.jpeg';
const Header = () => {
  return (
    <div className='absolute z-10'>
      <img className=' w-40 mt-4 ml-8 ' src={logo2} alt='Logo'/>
    </div>
  )
}

export default Header;
