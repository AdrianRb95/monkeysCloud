import React from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import './style.scss';

import AppInput from '../../components/form/appInput';
import AppForm from '../../components/form/appForm';
import Button from '../../components/form/button';
import Google from '../../assets/logo/logo-google.png';
import Monkey from '../../assets/logo/monkey.png';
import Logo from '../../assets/logo/logo.png';

import useAuth from '../../store/auth/actions';

const initialState = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label('Email'),
  password: Yup.string().required().label('Password'),
});

const Login = () => {
  const { login, googleLogin } = useAuth();

  const onSubmit = async values => {
    await login(values);
  };

  const onGoogleLogin = response => googleLogin(response.tokenId);

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
          <h2 className='title'>Sign In</h2>
          <h3 className='subtitle'>Please enter your credentials.</h3>
          <AppForm
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <AppInput label='EMAIL ADDRESS' name='email' />
            <AppInput
              label={
                <p className='password-label'>
                  PASSWORD <Link to='/'>Forgot password?</Link>
                </p>
              }
              name='password'
              type='password'
            />
            <Button title='Sign in' />
          </AppForm>
          <div className='dont-have-account'>
            <h3 className='subtitle font-gray'>
              Dont’ have an account? <Link to='/'>Sign up</Link>
            </h3>
          </div>
          <div className='img-container'>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText=''
              onSuccess={onGoogleLogin}
              onFailure={onGoogleLogin}
              cookiePolicy={'single_host_origin'}
              className='google-btn'
              icon={false}
            >
              <img src={Google} alt='google' className='google' />
            </GoogleLogin>
          </div>
        </div>
      </div>
      <div className='img-background'></div>
    </div>
  );
};

export default Login;
