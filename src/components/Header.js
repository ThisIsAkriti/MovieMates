import { useEffect} from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import logo2 from '../images/logo2.jpeg';
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser , removeUser } from "../utils/userSlice";
import search_icon from "../images/search_icon.png"
import { toggleAiSearchView } from "../utils/aiSearchSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/languageSlice";
//import user from '../images/user.png'
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

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
    dispatch(toggleAiSearchView());
  }

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className='absolute w-full h-16 z-10 bg-gradient-to-b from-black md:flex justify-between '>
      <img className='md:mx-4 w-40 mx-auto mt-4 ml-8' src={logo2} alt='Logo'/>
      {user &&            
        <div className='flex md:p-4 pl-8 pt-4'>
          
          <select className="pl-2 pb-1 bg-black outline-none border border-purple-700  text-white font-bold rounded-sm shadow-md shadow-purple-900 hover:bg-purple-800
           hover:shadow-none"
           
           onChange={handleLangChange}
           
          >
            {SUPPORTED_LANGUAGES.map(lang => 
            
            <option key={lang.identifier}
             value={lang.identifier}>
             {lang.name}
            </option>)}

          </select>
          
          <button
          onClick={handleAISearchClick}
          className="md:bg-transparent bg-black hover:bg-purple-800 text-white font-semibold
           hover:text-white  px-2 mx-4 border border-purple-700 flex items-center
            hover:border-transparent rounded active:bg-blue-700  active:border-blue-800 shadow-purple-700  shadow-md active:shadow-none">
              <img className="mr-2 size-4" src={search_icon} alt="Search_icon"/>
              ai</button>

          <img 
          className=' md:w-10 w-6 object-cover h-full rounded-full mr-2 md:visible lg:visible xl:visible 2xl:visible invisible' 
          src= {user?.photoURL} alt='user'/>
          
          <button className=' -ml-8 md:-ml-0 lg:-ml-0 xl:-ml-0 2xl:-ml-0  font-semibold text-white bg-black px-2 border rounded shadow-purple-700 shadow-md border-purple-700' onClick={handleSignOut}>Sign Out</button>
        </div>
      }

    </div>
  )
}
//"https://th.bing.com/th/id/OIP.h9Tm9XL_WtYQax_ApXOJXQHaLI?rs=1&pid=ImgDetMain"
export default Header;
