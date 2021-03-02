import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='navBar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/games'>Games</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
