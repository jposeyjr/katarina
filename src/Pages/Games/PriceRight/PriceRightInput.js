import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageUpload from '../../../Panels/ImageUpload/ImageUpload';
import {
  AboutText,
  Button,
  Column,
  Form,
  PriceRightInput,
  PriceRightRoot,
  Row,
} from './PriceRight.styles';

const PriceRightPriceRightInput = () => {
  const dispatch = useDispatch();
  const priceImage = useSelector((redux) => redux.priceImage);

  const [newItem, setItem] = useState({
    itemImage: [],
    itemPrice: '',
    itemName: '',
  });

  const updateUploadedFile = (files) => {
    setItem({ ...newItem, itemImage: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { itemName, itemPrice } = newItem;
    if (priceImage.base64 && itemName && itemPrice) {
      dispatch({
        type: 'ADD_ITEM',
        payload: priceImage.base64,
        itemName,
        itemPrice,
      });
    }
  };
  return (
    <PriceRightRoot>
      <h1>Setting up the Price Right Game</h1>
      <AboutText>
        Please add images, item name and prices below to have a fully custom
        Price Right game. Or you can choose to use our pre-loaded list based off
        of most common baby registry items. Simply hit the check box to add it
        to the game!
      </AboutText>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Column size={'33%'}>
            <PriceRightInput
              type='text'
              placeholder='Item name'
              aria-placeholder='item name'
              value={newItem.itemName || ''}
              required
              onChange={(e) =>
                setItem({ ...newItem, itemName: e.target.value })
              }
            />
            <PriceRightInput
              type='text'
              placeholder='Item price'
              aria-placeholder='item price'
              value={newItem.itemPrice || ''}
              required
              onChange={(e) =>
                setItem({ ...newItem, itemPrice: e.target.value })
              }
            />
            <Button>Submit</Button>
          </Column>
          <Column size={'65%'}>
            <ImageUpload
              accept='.jpg,.png,.jpeg'
              label='Price Right Image'
              updateFilesCb={updateUploadedFile}
            />
          </Column>
        </Row>
      </Form>
    </PriceRightRoot>
  );
};

export default PriceRightPriceRightInput;
