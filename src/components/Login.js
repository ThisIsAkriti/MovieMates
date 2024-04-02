import React, {useRef, useState } from 'react'
import {useNavigate} from "react-router-dom"
import {updateProfile } from "firebase/auth";
import Header from './Header';
import bg_img3 from '../images/bg_img3.jpg'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword ,  signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser } from "../utils/userSlice"

const Login = () => {
   
  const navigate = useNavigate();
  const[isSignInForm , setIsSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  


  const handleButtonClick = () => {
    // Validate the form data 
    
    const message = checkValidData(email.current.value , password.current.value);
    setErrorMessage(message);
    if(message) return;
    
    if(!isSignInForm){
      // Do Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value ,
        password.current.value
      )
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name.current.value , 
          photoURL: "https://th.bing.com/th/id/OIP.h9Tm9XL_WtYQax_ApXOJXQHaLI?rs=1&pid=ImgDetMain"
        })
        
        .then(() => {
          const {uid , email , displayName , photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName , photoURL: photoURL}));
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.message)
        });
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +" - "+ errorMessage);
        navigate("/");
      });
    }
    else{
      // Do Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value ,
        password.current.value)
      .then((userCredential) => {
        
        const user = userCredential.user;
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }         
  };

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <div className='absolute'>
        <Header/>
        <img src= {bg_img3} alt='backgroundImage'/>
      </div>
      
      <form  
      onSubmit={(e)=> e.preventDefault()}
      className='absolute rounded-lg w-3/12 p-12 bg-black bg-opacity-90 
      my-36  mx-auto right-0 left-0 text-white'>
               
        <h1 className=' font-bold text-2xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"} </h1>
        
        {!isSignInForm && <input 
        ref = {name}
        type='text' placeholder='Name' className='py-2 px-4 my-4 w-full text-lg  bg-gray-700 rounded-lg'/>}

        <input
         ref={email}
         type='text' placeholder='Email Address' className='py-2 px-4 my-4 w-full text-lg  bg-gray-700 rounded-lg'/>
        
        <input
         ref={password}
         type='Password' placeholder='Password' className=' py-2 px-4 my-4 w-full text-lg rounded-lg bg-gray-700'/>
        
        <p className='text-lg p-2 text-red-600'>{errorMessage}</p>

        <button className='p-2 my-2 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"} </button>

        <div className='my-4 cursor-pointer' onClick={toggleSignUpForm}>{isSignInForm ? "New to Movieflix? Sign Up" : "Already Regestered? Sign In"}  Now.</div>
      </form>
    </div>
  )
}

export default Login;
