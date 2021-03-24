import { PriceRightDB } from '../models/priceright.js';
import mongoose from 'mongoose';

export const getPriceRightList = async (req, res) => {
  try {
    // const data = await PriceRightDB.find({ host_id: req.user._id });
    //hard coded for now until users are fully done
    const data = await PriceRightDB.find({
      host_id: '604ccbc6b5a372335c86e91b',
    });
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
/**
 *
 * @param {*} req.body receives name, price and image from front-end of item
 * deconstructed it for easier usability than assign it to a new object to be pushed into
 * an array. It uses the host_id to create the relationship to the document.
 */

export const updateList = async (req, res) => {
  const host_id = req.user._id;
  const { itemName, itemPrice, itemImage } = req.body;

  const updatedList = {
    name: itemName,
    price: itemPrice,
    image: itemImage,
  };
  const list = await PriceRightDB.find({ host_id });

  await PriceRightDB.updateOne(
    list._id,
    { $addToSet: { items: updatedList } },
    function (err, result) {
      if (err) {
        console.log('Error updating list: ', err.message);
        res.status(400).send('Error updating list: ', err);
      }
      res.status(200).json(result);
    }
  );
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
