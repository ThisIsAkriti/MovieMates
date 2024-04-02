import AiSearchBar from './aiSearchBar';
import bg_img3 from '../images/bg_img3.jpg';
<<<<<<< HEAD
import AiMovieSuggestions from './AiMovieSuggestions';
const AiSearch = () => {
  return (
    <div>
      <div className='fixed -z-10 '>
        <img src= {bg_img3} alt='backgroundImage'/>
      </div>
      <AiSearchBar/>
      <AiMovieSuggestions/>
=======

const AiSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src= {bg_img3} alt='backgroundImage'/>
      </div>
      <AiSearchBar/>
>>>>>>> 5f4541f27e62b1ab4b4877d07eb074ed7887041a
    </div>
  )
}
export default AiSearch;
