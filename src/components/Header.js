import { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser , removeUser } from "../utils/userSlice";
import search_icon from "../images/search_icon.png"
import { toggleAiSearchView } from "../utils/aiSearchSlice";
//import { SUPPORTED_LANGUAGES } from "../utils/constants";
//import { changeLanguage } from "../utils/languageSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const [isAi, setIsAi] = useState(true);

  const handleSignOut = () => {  
    signOut(auth)
    .then(() => {})
    .catch((error) => {
       navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email , displayName , photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName , photoURL: photoURL}));

        navigate("/browse");
        
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe will be called when the componenet will unmount
    return () => unsubscribe();
  } , []);

  const handleAISearchClick = () => {
    //ai search functionality
    setIsAi(!isAi);
    dispatch(toggleAiSearchView());
  }

  //const handleLangChange = (e) => {
  //  dispatch(changeLanguage(e.target.value));
  //};

  return (
    <div className=' sticky top-1 w-[98%] mx-auto h-16 flex rounded-lg justify-between z-50'>
      <img className='md:w-44 w-36 p-2 mb-2  bg-black rounded-lg opacity-85' src='/myLogo.svg' alt='Logo'/>
      {user &&            
        <div className='flex md:p-4 items-center'>
          
          {/*<select className="pl-2 pb-1 bg-black outline-none border border-purple-700 text-white font-bold rounded-sm shadow-md shadow-purple-900 hover:bg-purple-800
           hover:shadow-none bg-opacity-80 hover:bg-opacity-80 "
           
           onChange={handleLangChange}
           
          >
            {SUPPORTED_LANGUAGES.map(lang => 
            
            <option key={lang.identifier}
             value={lang.identifier}>
             {lang.name}
            </option>)}

          </select>*/}
          
          <button
          onClick={handleAISearchClick}
          className=" bg-black bg-opacity-90 hover:bg-opacity-90 hover:bg-purple-800 text-white font-semibold
           hover:text-white  px-2 mx-4 py-1 border border-purple-700 flex items-center
            hover:border-transparent rounded active:bg-blue-700  active:border-blue-800 shadow-purple-700  shadow-md active:shadow-none overflow-x-hidden line-clamp-1">
            {isAi? <img className="mr-2 size-4" src={search_icon} alt="Search_icon"/> : null}
            {isAi ? "ai"  : "Home"}
          </button>
          
          <button className=' md:mr-0 -mr-10 py-1 font-semibold text-white bg-black px-2 border rounded shadow-purple-700 shadow-md border-purple-700 hover:bg-purple-700 bg-opacity-90 hover:bg-opacity-90 overflow-x-hidden line-clamp-1 ' onClick={handleSignOut}>Sign Out</button>
          <img 
          className=' w-10 h-10 border shadow-purple-700 shadow-md border-purple-700 hover:bg-purple-700 object-cover rounded-full ml-4 md:mr-4 md:visible invisible' 
          src= {user?.photoURL} alt='user'/>
        </div>
      }

    </div>
  )
}
//"https://th.bing.com/th/id/OIP.h9Tm9XL_WtYQax_ApXOJXQHaLI?rs=1&pid=ImgDetMain"
export default Header;
