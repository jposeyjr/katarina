import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ImageHolder,
  ItemCard,
  ItemInfo,
  ItemList,
  ItemTitle,
} from './PriceRight.styles';

const PriceRight = () => {
  const dispatch = useDispatch();
  const priceList = useSelector((redux) => redux.price.items);

  useEffect(() => {
    dispatch({ type: 'GET_PRICE_LIST' });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='root'>
      <div>
        <h1>The Price Is Right</h1>
      </div>
      {priceList ? (
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
      )}
    </div>
  );
};

export default PriceRight;
