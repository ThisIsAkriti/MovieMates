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

  return (
    <div className='absolute w-full h-16 z-10 bg-gradient-to-b from-black flex justify-between'>
      <img className=' w-40 mt-4 ml-8 ' src={logo2} alt='Logo'/>
      {user &&            
        <div className='flex p-4'>

          <button className="bg-transparent hover:bg-purple-800 text-white font-semibold
           hover:text-white  px-2 mx-4 border border-purple-700 flex items-center
            hover:border-transparent rounded active:bg-blue-700  active:border-blue-800 shadow-gray-700  shadow-md active:shadow-none">
              <img className="mr-2 size-4" src={search_icon} alt="Search_icon"/>
              ai</button>

          <img 
          className=' w-10 object-cover h-full rounded-full mr-2' 
          src= {user?.photoURL} alt='user'/>
          
          <button className='font-semibold text-white' onClick={handleSignOut}>Sign Out</button>
        </div>
      }

    </div>
  )
}
//"https://th.bing.com/th/id/OIP.h9Tm9XL_WtYQax_ApXOJXQHaLI?rs=1&pid=ImgDetMain"
export default Header;
