import React from 'react';

const Timer = (time) => {
  const formatTime = (time) =>
    `${String(Math.floor(time / 60)).padStart(2, '0')}:${String(
      time % 60
    ).padStart(2, '0')}`;

  return <h3>Time left: {formatTime(time.time)}</h3>;
};

export default Timer;
