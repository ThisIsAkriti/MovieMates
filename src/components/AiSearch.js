import AiSearchBar from "./AiSearchBar";
import bg_img3 from '../images/bg_img3.jpg';

const AiSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src= {bg_img3} alt='backgroundImage'/>
      </div>
    <AiSearchBar/>
    </div>
  )
}
export default AiSearch
