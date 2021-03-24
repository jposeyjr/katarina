import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  ImageHolder,
  ItemCard,
  ItemInfo,
  ItemList,
  ItemTitle,
  PriceRightInput,
  GuessSubmit,
  PriceRightRoot,
  AboutText,
} from './PriceRight.styles';

const PriceRight = () => {
  const dispatch = useDispatch();
  const priceList = useSelector((store) => store.price.items);
  const [randomItem, setRandom] = useState(null);
  const [copyArr, setCopy] = useState([]);
  const [itemGuess, setItemGuess] = useState('');
  const [score, setScore] = useState(0);

  const getRandomItem = () => {
    const randItem = copyArr[Math.floor(Math.random() * copyArr.length)];
    setRandom(randItem);
    let newArr = copyArr.filter((item) => item._id !== randItem._id);
    setCopy(newArr);
    console.log(copyArr);
  };

  useEffect(() => {
    if (!priceList) {
      dispatch({ type: 'GET_PRICE_LIST' });
    }
    if (priceList?.length && copyArr.length < 1) {
      setCopy(priceList);
    }
    if (!randomItem) {
      getRandomItem();
    }
  }, [priceList, score, copyArr, itemGuess]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (e) => {
    e.preventDefault();

    if (copyArr.length === 1) {
      alert('Great job your score has been submitted!');
      const scoreData = {
        score: score,
        game: 'Price Right',
      };
      dispatch({ type: 'ADD_SCORE', payload: scoreData });
    }

    if (randomItem && itemGuess === randomItem.price) {
      setScore(score + 2);
      getRandomItem();
      setItemGuess('');
    } else if (randomItem && itemGuess == randomItem.price - 1) {
      setScore(score + 0.5);
      getRandomItem();
      setItemGuess('');
    } else {
      getRandomItem();
      setItemGuess('');
    }
  };

  return (
    <PriceRightRoot>
      <h1>The Price Is Right</h1>
      <AboutText>
        Try to guess the price of the item pictured below. Prices will always be
        rounded to nearest dollar. If the item is normal $8.79 it would be $9.
        If it where $6.50 it would be $6 as it would round down! You get half a
        point for a guess within a dollar two points if you guess is spot on!
        Your limited to 10 seconds per an item to discourage looking items up!
        Please enter your name below to begin! Once you enter your name the game
        will start, have fun!
      </AboutText>
      <h3>Score: {score} </h3>
      <Form onSubmit={handleSubmit}>
        <PriceRightInput
          type='text'
          placeholder='Item price'
          aria-placeholder='item price'
          value={itemGuess || ''}
          required
          onChange={(e) => setItemGuess(e.target.value)}
        />
        <GuessSubmit size={'100px'}>Submit</GuessSubmit>
      </Form>
      {randomItem && (
        <ItemList>
          <ItemCard key={randomItem._id}>
            <ImageHolder>
              <img src={randomItem.image} alt={randomItem.name}></img>
            </ImageHolder>
            <ItemTitle>
              <ItemInfo>{randomItem.name}</ItemInfo>
            </ItemTitle>
          </ItemCard>
        </ItemList>
      )}

      {/* {priceList ? (
        <ItemList>
          {priceList.map((item) => (
            <ItemCard key={item._id}>
              <ImageHolder>
                <img src={item.image} alt={item.name}></img>
              </ImageHolder>
              <ItemTitle>
                <ItemInfo>{item.name}</ItemInfo>
                <ItemInfo>${item.price}</ItemInfo>
              </ItemTitle>
            </ItemCard>
          ))}
        </ItemList>
      ) : (
        <h3>Default List</h3>
      )} */}
    </PriceRightRoot>
  );
};

export default PriceRight;
