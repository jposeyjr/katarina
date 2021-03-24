import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import {  } from './styles';

const DontSay = () => {
  const [caughtUser, setUser] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <p>Babies: X X X</p>
      <p>Total Caught: 0</p>
    </div>
  );
};

export default DontSay;
