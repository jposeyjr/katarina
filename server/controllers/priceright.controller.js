import { PriceRightDB } from '../models/priceright.js';
import mongoose from 'mongoose';

export const getPriceRightList = async (req, res) => {
  try {
    const data = await PriceRightDB.find({ host_id: req.user._id });
    res.status(200).json(data[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const createList = async (req, res) => {
  const { itemName, itemPrice, itemImage, user_id } = req.body;
  const newList = new PriceRightDB({ host_id: user_id });
  newList.items.push({
    name: itemName,
    price: itemPrice,
    image: itemImage,
  });
  try {
    await newList.save();
    res.status(201).json(newList);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
};

export const updateList = async (req, res) => {
  const { id } = req.params;
  const { itemName, itemPrice, itemImage } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No list with id: ${id}`);

  const updatedList = {
    name: itemName,
    price: itemPrice,
    image: itemImage,
  };

  //possible alternative
  //   const list = await PriceRightDB.findOne({host_id: id});
  //   list.items.push({
  //       name: itemName,
  //       price: itemPrice,
  //       image: itemImage
  //   })

  //const updatedList = await list.save();

  await PriceRightDB.findByIdAndUpdate(
    id,
    { $addToSet: { items: updatedList } },
    function (err, result) {
      if (err) {
        res.status(400).send('Error updating list: ', err);
      }
    }
  );
  res.json(updatedList);
};

export const deleteList = async (req, res) => {
  const { item_id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(item_id))
    return res.status(404).send(`No item in list with that id: ${item_id}`);

  const result = await PriceRightDB.findByIdAndUpdate(
    item_id,
    {
      $pull: {
        items: { _id: con_id },
      },
    },
    { new: true }
  );

  if (result) console.log(result);

  res.status(200).json({ message: 'List removed successfully.' });
};
