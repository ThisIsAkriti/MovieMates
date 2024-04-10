import AiSearchBar from './AiSearchBar';
import bg_img3 from '../images/bg_img3.jpg';
import AiMovieSuggestions from './AiMovieSuggestions';
const AiSearch = () => {
  return (
    <>
      <div className='fixed -z-10 '>
          <img className='h-screen lg:h-min md:h-screen object-cover xl:h-min' src= {bg_img3} alt='backgroundImage'/>
        </div>
      <div className=''>
        <AiSearchBar/>
        <AiMovieSuggestions/>
      </div>
    </>
  )
}
export default AiSearch;
