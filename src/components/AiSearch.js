import AiSearchBar from './aiSearchBar';
import bg_img3 from '../images/bg_img3.jpg';
import AiMovieSuggestions from './AiMovieSuggestions';
const AiSearch = () => {
  return (
    <div>
      <div className='fixed -z-10 '>
        <img src= {bg_img3} alt='backgroundImage'/>
      </div>
      <AiSearchBar/>
      <AiMovieSuggestions/>
    </div>
  )
}
export default AiSearch;
