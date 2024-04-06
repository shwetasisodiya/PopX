import React from 'react';
import "./loginform.css";

const LoginForm = () => {
  return (
    <>
    <section className='loginpage'>
    <div className='container-2'>
      <div>
      <h2 className='firstheading'>Signin to your PopX account </h2> 
      <p className='secondheading'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
 
      

    <div class="input-group">
        <input type="email" required/>
        <label for="">Email</label>
    </div>
    <div class="input-group">
        <input type="password" required/>
        <label for="">Password</label>
    </div>

      <div>
        <button className='login-btn1'>Login</button>
      </div>
    </div>
    </section>

    </>
  )
}

export default LoginForm
