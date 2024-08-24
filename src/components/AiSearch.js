/*import AiSearchBar from './aiSearchBar';

import AiMovieSuggestions from './AiMovieSuggestions';*/
import bg_img3 from '../images/bg_img3.jpg';
import SearchMovie from './SearchMovie';
const AiSearch = () => {
  return (
    <>
      <div className='fixed -z-10 -mt-[64px] '>
        <img className='h-screen lg:h-screen lg:w-screen md:h-screen object-cover xl:h-screen 2xl:h-screen 2xl:w-screen' src= {bg_img3} alt='backgroundImage'/>
      </div>
      <div>
        {/*<AiSearchBar/>
        <AiMovieSuggestions/>*/}
        <SearchMovie/>
        
      </div>
    </>
  )
}
export default AiSearch;
