import React from 'react';
import { useDispatch } from 'react-redux';
import { AboutText, Button, LandingRoot } from './styles';

const LandingPage = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <LandingRoot>
      <h1>Welcome!</h1>
      <AboutText>
        Scores will be displayed here once you have started playing games!
      </AboutText>
      <Button onClick={handleLogout}>Logout</Button>
    </LandingRoot>
  );
};

export default LandingPage;
