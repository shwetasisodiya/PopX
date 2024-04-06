import React from 'react';
import "./landingscreen.css";
import {useNavigate} from "react-router-dom";


const LandingScreen = ( ) => {
    const navigate = useNavigate();

    function handleClick () {
      navigate('/Registration')
    }

    function handleClickbtn () {
      navigate('/LoginForm')
    }
  return (
    <>
    <section className='landingscreen'>
    <div className='container-1'>
      <div>
      <h2 className='firstheading'>Welcome to PopX</h2> 
      <p className='secondheading'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
 
    
      <div>
        <button className='signup-btn' onClick={handleClick}> Create Account</button>
      </div>

      <div>
        <button className='login-btn' onClick={handleClickbtn}>Already Registered? Login</button>
      </div>
    </div>
    </section>

    </>
  )
}

export default LandingScreen