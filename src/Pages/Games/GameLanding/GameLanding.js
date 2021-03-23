import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './GameLanding.css';

const GameLanding = () => {
  const user = useSelector((store) => store.user);
  const priceList = useSelector((store) => store.price.items);
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
          The game that seems so simply how could you not win right!? Each guess
          will try not to say baby while trying to catch others in the act, most
          points win! Click the link for more details.
        </p>
      </div>
      <div className='gameHolder'>
        <Link className='gameLink' to='/wordscramble'>
          <h3>Word Scrambled</h3>
        </Link>
        <p>
          You will get a baby word that is scrambled, try to spell as many baby
          words as possible! Hints will appear overtime if you start getting
          stuck!
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
        <Link className='gameLink' to='/babyguess'>
          <h3>Guess The Baby</h3>
        </Link>
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
