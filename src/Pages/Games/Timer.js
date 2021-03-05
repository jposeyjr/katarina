import React, { useState, useEffect, useContext } from 'react';
import { UseTime } from '../../UseTime';

const Timer = () => {
  const { time, setTime } = useContext(UseTime);

  const formatTime = (time) =>
    `${String(Math.floor(time / 60)).padStart(2, '0')}:${String(
      time % 60
    ).padStart(2, '0')}`;

  const timeRemaining = 120 - (time % 120);

  useEffect(() => {
    let timerId = null;
    if (time !== 120) {
      timerId = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [time]);
  return <h3>Time {formatTime(timeRemaining)}</h3>;
};

export default Timer;
