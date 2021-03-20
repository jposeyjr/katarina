import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EyeIcon, InputHolder, InputReg, Card } from './UserForm.styles';

const UserForm = () => {
  const errors = useSelector((redux) => redux.errors);
  const initState = {
    username: '',
    password: '',
    confirm: '',
    firstName: '',
    lastName: '',
  };
  const [newUser, setNewUser] = useState(initState);
  const [showPass, setPass] = useState(false);
  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
    const { username, password, confirm, firstName, lastName } = newUser;
    if (confirm !== password) {
      dispatch({ type: 'REGISTRATION_CONFIRM_ERROR' });
    } else if (username && password && password === confirm) {
      dispatch({
        type: 'REGISTER',
        payload: {
          username,
          password,
          firstName,
          lastName,
        },
      });
    }
  };

  useEffect(() => {
    dispatch({ type: 'CLEAR_REGISTRATION_ERROR' });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Card>
      <h3>Sign Up</h3>
      {errors.registrationMessage && (
        <h3 className='alert' role='alert'>
          {errors.registrationMessage}
        </h3>
      )}
      <form onSubmit={handleSignup}>
        <InputHolder>
          <InputReg
            type='text'
            name='firstName'
            placeholder='First Name'
            aria-label='first name'
            value={newUser.firstName}
            required
            onChange={(e) =>
              setNewUser({ ...newUser, firstName: e.target.value })
            }
          />
        </InputHolder>
        <InputHolder>
          <InputReg
            type='text'
            name='lastName'
            placeholder='Last Name'
            aria-label='last name'
            value={newUser.lastName}
            required
            onChange={(e) =>
              setNewUser({ ...newUser, lastName: e.target.value })
            }
          />
        </InputHolder>
        <InputHolder>
          <InputReg
            type='text'
            name='username'
            placeholder='Email'
            aria-label='email'
            value={newUser.username}
            required
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
          />
        </InputHolder>
        <InputHolder>
          <InputReg
            type={showPass ? 'text' : 'password'}
            name='password'
            placeholder='Password'
            aria-label='password'
            value={newUser.password}
            required
            error={errors.registrationMessage}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
          <EyeIcon
            onClick={() => setPass(!showPass)}
            className='far fa-eye-slash'
          ></EyeIcon>
        </InputHolder>
        <InputHolder>
          <InputReg
            type={showPass ? 'text' : 'password'}
            name='confirmPassword'
            placeholder='Confirm Password'
            aria-label='confirm password'
            value={newUser.confirm}
            required
            error={errors.registrationMessage}
            onChange={(e) =>
              setNewUser({ ...newUser, confirm: e.target.value })
            }
          />
        </InputHolder>
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
    </Card>
  );
};

export default UserForm;
