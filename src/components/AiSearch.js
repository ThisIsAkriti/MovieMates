import AiSearchBar from './AiSearchBar';
import bg_img3 from '../images/bg_img3.jpg';
import AiMovieSuggestions from './AiMovieSuggestions';
const AiSearch = () => {
  return (
    <>
      <div className='fixed -z-10 '>
        <img className='h-screen lg:h-screen lg:w-screen md:h-screen object-cover xl:h-screen 2xl:h-screen 2xl:w-screen' src= {bg_img3} alt='backgroundImage'/>
      </div>
      <div>
        <AiSearchBar/>
        <AiMovieSuggestions/>
      </div>
    </>
  )
}
export default AiSearch;
