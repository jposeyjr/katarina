import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Nav = () => {
  const user = useSelector((store) => store.user);
  return (
    <nav className='navBar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {user._id && (
          <>
            <li>
              <Link to='/games'>Games</Link>
            </li>
            <li>
              <Link to='firstyear'>Video</Link>
            </li>
            <li>Logged In</li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
