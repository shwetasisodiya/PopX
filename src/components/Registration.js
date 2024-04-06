import React from "react";
import "./registration.css";

const Registration = () => {
    return (
      <>
      <section className='signuppage'>
      <div className='container-3'>
        <div>
        <h2 className='firstheading'>Create your PopX account </h2> 
        </div>
   
        
  
      <div class="input-group">
          <input type="text" required/>
          <label for="">Full Name*</label>
      </div>
      <div class="input-group">
          <input type="tel" required/>
          <label for="">Phone number*</label>
      </div>
      <div class="input-group">
          <input type="email" required/>
          <label for="">Email Address*</label>
      </div>
      <div class="input-group">
          <input type="password" required/>
          <label for="">Password*</label>
      </div>
      <div class="input-group">
          <input type="text" required/>
          <label for="">Company Name</label>
      </div>
  
      <div className="radio-btn">
         <p>Are you an agency ?</p>
          <input className="rd-1" type="radio" />Yes
          <input className="rd-2" type="radio" />No
      </div>

      <div>
        <button className='signup-btn-1'>Create Account</button>
      </div>
      </div>
      </section>
  
      </>
    )
  }
  
  export default Registration