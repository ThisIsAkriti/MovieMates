
import React, {useRef, useState } from 'react'
import Header from './Header';
import bg_img2 from '../images/bg_img2.jpg'
import { checkValidData } from '../utils/validate';

const Login = () => {

  const[isSignInForm , setIsSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null)  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () => {
    // Validate the form data 
    
    const message = checkValidData(name.current.value, email.current.value , password.current.value);
    setErrorMessage(message);
  }

  return (
    <div>
      <div className='absolute'>
        <Header/>
        <img src= {bg_img2} alt='Background'/>
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

        <div className='my-4 cursor-pointer' onClick={toggleSignUpForm}>{isSignInForm ? "New to Netflix? Sign Up" : "Already Regestered? Sign In"}  Now.</div>
      </form>
    </div>
  )
}

export default Login;
