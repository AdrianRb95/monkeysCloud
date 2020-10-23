import React from 'react';
import Monkey from '../../assets/logo/monkey.png';
import Logo from '../../assets/logo/logo.png';
import Registro from "../../components/registerForm";
import './style.scss';


const Signup = () => {
  
  return (
    <div className='login-page'>
      <div className='login-main-content'>
        <div className='login-content'>
          <div className='img-container'>
            <img src={Monkey} alt='monkey' className='monkey' />
          </div>
          <div className='img-container'>
            <img src={Logo} alt='logo' className='logo' />
          </div>
          <h2 className='title'>Sign Up</h2>
          <Registro/>
        </div>
      </div>
      <div className='img-background'></div>
    </div>
  );
};

export default Signup;