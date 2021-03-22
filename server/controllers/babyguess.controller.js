import { BabyGuessDB } from '../models/babyguess.js';
import mongoose from 'mongoose';

export const getGuessList = async (req, res) => {
  try {
    const data = await BabyGuessDB.find({});
    res.status(200).json(data[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const createList = async (req, res) => {
  const { name, hair, eye, weight, time, day } = req.body;
  const newList = new BabyGuessDB({ host_id: user_id });
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
