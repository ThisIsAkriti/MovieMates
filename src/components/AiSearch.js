import AiSearchBar from './AiSearchBar';
import bg_img3 from '../images/bg_img3.jpg';
import AiMovieSuggestions from './AiMovieSuggestions';
const AiSearch = () => {
  return (
    <>
      <div className='fixed -z-10 '>
          <img className='h-screen md:h-min object-cover' src= {bg_img3} alt='backgroundImage'/>
        </div>
      <div className=''>
        <AiSearchBar/>
        <AiMovieSuggestions/>
      </div>
    </>
  )
}
export default AiSearch;
