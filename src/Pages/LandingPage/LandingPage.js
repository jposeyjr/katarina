import React from 'react';
import { useDispatch } from 'react-redux';

const LandingPage = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <div className='root'>
      <h1>Welcome!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LandingPage;
