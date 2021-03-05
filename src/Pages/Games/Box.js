import React from 'react';

const Box = ({ value, onClick }) => {
  return <button onClick={onClick}>{value}</button>;
};

export default Box;
