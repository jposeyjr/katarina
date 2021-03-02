import React from 'react';
import { Link } from 'react-router-dom';

const UserForm = () => {
  const handleSignup = () => {
    //stuff
  };
  return (
    <div className='formHolder'>
      <h3>Sign Up</h3>
      <form onSubmit={handleSignup} className='formArea'>
        <div className='inputHolder'>
          <input
            className='inputLogin'
            type='text'
            name='firstName'
            placeholder='First Name'
            aria-label='first name'
          />
        </div>
        <div className='inputHolder'>
          <input
            className='inputLogin'
            type='text'
            name='lastName'
            placeholder='Last Name'
            aria-label='last name'
          />
        </div>
        <input
          className='inputLogin'
          type='text'
          name='email'
          placeholder='Email'
          aria-label='email'
        />
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
            Sign Up
          </button>
        </div>
      </form>
      <div className='memberArea'>
        <p>Already a member?</p>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default UserForm;
