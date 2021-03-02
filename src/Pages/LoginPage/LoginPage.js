import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const handleLogin = () => {
    //stuff
  };
  return (
    <div className='root'>
      <h1>Login Page</h1>
      <div className='formHolder'>
        <form onSubmit={handleLogin} className='formArea'>
          <div className='inputHolder'>
            <input
              className='inputLogin'
              type='text'
              name='username'
              placeholder='Username'
              aria-label='username'
            />
          </div>
          <div className='inputHolder'>
            <input
              className='inputLogin'
              type='password'
              name='password'
              placeholder='Password'
              aria-label='password'
            />
          </div>
          <div>
            <button className='form-submit' type='submit'>
              Login
            </button>
          </div>
        </form>
        <div className='memberArea'>
          <p>Not a member?</p>
          <Link to='/signup'>Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
