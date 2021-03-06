import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Timer from '../Utilz/Timer';
import Letter from './Letter';
import { AboutText, InputGuess, InputHolder } from './style';
import { toast } from 'react-toastify';
import './WordScamble.css';
import { useHistory } from 'react-router';

const WordScramble = () => {
  const [words, setWord] = useState([
    'baby',
    'bassinet',
    'bath',
    'bibs',
    'blanket',
    'booties',
    'bottle',
    'bouncer',
    'burp',
    'carriage',
    'changing',
    'colic',
    'cradle',
    'crib',
    'daddy',
    'diaper',
    'doll',
    'ducky',
    'formula',
    'gates',
    'humidifier',
    'infant',
    'labor',
    'lactation',
    'maternity',
    'milk',
    'mommy',
    'monitor',
    'newborn',
    'nursing',
    'pacifier',
    'pediatrician',
    'playpen',
    'rash',
    'rattles',
    'registry',
    'stork',
    'stroller',
    'swaddle',
    'swing',
    'teether',
    'thermometer',
    'wipes',
  ]);
  const [score, setScore] = useState(0);
  const [scramble, setScramble] = useState('');
  const [key, setKey] = useState('');
  const [end, setEnd] = useState(false);
  const [start, setStart] = useState(false);
  const [newHint, setNewHint] = useState(0);
  const [hint, setHint] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const timer = useSelector((store) => store.time);
  const [time, setTime] = useState(null);
  const options = {
    onClose: () => history.push('/games'),
  };

  useEffect(() => {
    if (time === null && start) {
      dispatch({ type: 'SET_TIMER', payload: 120 });
      setTime(timer.time);
    }
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
    if (time === 0 && !end) {
      setEnd(true);
      toast.error('🎮 Game over, I hope you had fun!', options);
      const scoreData = {
        score: score,
        game: 'Word Scramble',
      };
      dispatch({ type: 'ADD_SCORE', payload: scoreData });
    } else if (time === 120) {
      getWord();
    }
    giveHint();
  }, [score, end, time, timer, start]); // eslint-disable-line react-hooks/exhaustive-deps

  const getWord = () => {
    const randNum = Math.floor(Math.random() * words.length);
    //splits random word to scramble it later
    let wordArr = words[randNum].split('');
    //removed the word we found from the list of possible words
    let newArr = words.filter((word) => word !== words[randNum]);
    setWord(newArr);
    //saves the word before scramble to check if they are right
    setKey(wordArr.join('').toUpperCase());
    const len = wordArr.length;
    let scrambled = '';
    //scrambles the word
    for (let i = 0; i < len; i++) {
      let charIndex = Math.floor(Math.random() * wordArr.length);
      scrambled += wordArr[charIndex];
      wordArr.splice(charIndex, 1);
    }
    setScramble(scrambled.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let guess = e.target.guess.value;
    guess = guess.toUpperCase();
    if (guess === key && key.length >= 10) {
      setScore(score + 3);
      getWord();
      setNewHint(0);
    } else if (guess === key && key.length >= 8) {
      setScore(score + 2);
      getWord();
      setNewHint(0);
    } else if (guess === key && key.length <= 7) {
      setScore(score + 1);
      getWord();
      setNewHint(0);
    }
    document.getElementById('myForm').reset();
  };

  const giveHint = () => {
    //
    if (time % 20 === 0 && !end && time !== 120) {
      setHint(key.substring(0, newHint));
      setNewHint(newHint + 1);
    } else if (newHint === 0) {
      setHint('');
    }
  };

  const newWord = () => {
    getWord();
    setNewHint(0);
    setHint('');
  };

  return (
    <div className='root'>
      <div className='rootHolder'>
        <h1>Word Scramble</h1>
        {start ? (
          <>
            <div className='timeHolder'>
              <Timer time={time} />
              <h3>Score: {score}</h3>
            </div>
            {hint && (
              <div className='hintHolder'>
                <h3>Hint: {hint}</h3>
                <button className='btnHint' onClick={() => newWord()}>
                  New Word
                </button>
              </div>
            )}
            <div className='letterHolder'>
              {Array.from(scramble).map((char, i) => (
                <Letter value={char} key={i}></Letter>
              ))}
            </div>
            <form onSubmit={handleSubmit} id='myForm' className='formArea'>
              <InputHolder>
                <InputGuess
                  type='text'
                  name='guess'
                  autoFocus
                  placeholder='Input Guess'
                  aria-label='guess'
                />
              </InputHolder>
              <div className='bottomArea'>
                <button className='btnGuess' type='submit' disabled={end}>
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <AboutText>
              Once you click on start game you will have two minutes to try to
              guess random baby related words that are scrambled up! After a
              short time if your stuck you will start to get hints and the
              ability to get a new word.
            </AboutText>
            <button className='btnGuess' onClick={() => setStart(true)}>
              Start Game!
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WordScramble;
