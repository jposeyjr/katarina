import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  InputLogin,
  LoginCard,
  LoginHolder,
  EyeIcon,
} from './LoginPage.styles';

const LoginPage = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [showPass, setPass] = useState(false);
  const dispatch = useDispatch();
  const errors = useSelector((redux) => redux.errors);

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = user;
    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username,
          password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  const handleInputChangeFor = (propertyName) => (event) => {
    setUser({
      ...user,
      [propertyName]: event.target.value,
    });
  };

  return (
    <div className='root'>
      <h1>Login Page</h1>
      {errors.loginMessage && (
        <h3 className='alert' role='alert'>
          {errors.loginMessage}
        </h3>
      )}
      <LoginCard>
        <form onSubmit={handleLogin}>
          <LoginHolder>
            <InputLogin
              className='inputLogin'
              type='text'
              name='username'
              value={user.username}
              required
              error={errors.loginMessage}
              placeholder='Username'
              onChange={handleInputChangeFor('username')}
              aria-label='username'
            />
          </LoginHolder>
          <LoginHolder>
            <InputLogin
              className='inputLogin'
              type={showPass ? 'text' : 'password'}
              name='password'
              required
              value={user.password}
              onChange={handleInputChangeFor('password')}
              placeholder='Password'
              aria-label='password'
            />
            <EyeIcon
              onClick={() => setPass(!showPass)}
              className='far fa-eye-slash'
            ></EyeIcon>
          </LoginHolder>
          <div>
            <button className='form-submit' type='submit'>
              Login
            </button>
          </div>
        </form>
        <div className='memberArea'>
          <p>Not a member?</p>
          <Link to='/'>Signup</Link>
        </div>
      </LoginCard>
    </div>
  );
};

export default LoginPage;
