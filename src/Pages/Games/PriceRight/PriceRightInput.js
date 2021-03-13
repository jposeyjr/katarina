import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
            />
            <PriceRightInput
              type='text'
              placeholder='Item price'
              aria-placeholder='item price'
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
