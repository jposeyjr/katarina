import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ImageUpload from '../../../Panels/ImageUpload/ImageUpload';

const PriceRightInput = () => {
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
    <div>
      <h1>Setting up the Price Right Game</h1>
      <p>
        Please add images, item name and prices below to have a fully custom
        Price Right game. Or you can choose to use our pre-loaded list based off
        of most common baby registry items. Simply hit the check box to add it
        to the game!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Item name'
          aria-placeholder='item name'
        ></input>
        <input
          type='text'
          placeholder='Item price'
          aria-placeholder='item price'
        ></input>
        <ImageUpload
          accept='.jpg, .png, .jpeg'
          label='Price Right Image'
          updateFilesCb={updateUploadedFile}
        />
        <button type='submit'>Add Item</button>
      </form>
    </div>
  );
};

export default PriceRightInput;
