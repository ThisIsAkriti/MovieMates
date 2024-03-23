import gray_search_icon from '../images/gray_search_icon.png';
import lang from './languageConstants';

const AiSearchBar = () => {
  return (
    <div className="pt-[10%]  flex justify-center">
      
      <form className=" bg-black bg-opacity-80 p-4 mx-6 grid grid-cols-12
      rounded-md w-1/2 ">
 
        <input type="text" placeholder= {lang.hindi.aiSearchPlaceholder}
        className=" col-span-8 px-6 py-2 m-2 rounded-lg  outline-none  bg-gray-100" 
        />
          <img className='mt-[16%] rounded-lg ml-[-30px] bg-gray-100 px-2 py-2 size-10' src={gray_search_icon} alt="search"/>
         <button className='px-4 my-2 bg-red-600 rounded-lg col-span-3 ml-[-20px]'>
          {lang.hindi.search}</button>  
      </form>
    </div>
  )
}
export default AiSearchBar;