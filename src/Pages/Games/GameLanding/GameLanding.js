import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './GameLanding.css';

const GameLanding = () => {
  const user = useSelector((store) => store.user);
  return (
    <div className='gameRoot'>
      <div className='gameHolder'>
        <Link className='gameLink' to='/priceisright'>
          <h3>The Price Is Right</h3>
        </Link>
        <p>
          Show different items and each person guesses price for items the total
          will be added and closest person or group wins.
        </p>
        {user.role === 'host' && (
          <Link className='gameLink' to='/pricerightinput'>
            <h3>Create List</h3>
          </Link>
        )}
      </div>
      <div className='gameHolder'>
        <h3>Don't Say Baby</h3>
        <p>
          Each guest will have baby attached to them if they say baby the host
          or someone else will take it.
        </p>
      </div>
      <div className='gameHolder'>
        <Link className='gameLink' to='/wordscramble'>
          <h3>Word Scrambled</h3>
        </Link>
        <p>
          You will get a baby word that is scrambled, try to spell as many baby
          words as possible!
        </p>
      </div>
      <div className='gameHolder'>
        <h3>Which Parent Game</h3>
        <p>
          Create customs questions or use are pre-loaded questions to guess what
          parent fits the question best!
        </p>
      </div>
      <div className='gameHolder'>
        <h3>Guess The Baby</h3>
        <p>
          Everyone will guess weight, height, hair color, eye color, birth date,
          time and when the day comes we will help you pick the winner.
        </p>
      </div>
      <div className='gameHolder'>
        <h3>Mommy or Daddy</h3>
        <p>
          Based on the statements guess if it is mommy or daddy who said it!
          Most correct answers wins!
        </p>
      </div>
    </div>
  );
};

export default GameLanding;
