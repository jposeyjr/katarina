import { BabyGuessDB } from '../models/babyguess.js';
import mongoose from 'mongoose';
import userEvent from '@testing-library/user-event';

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
  const newGuess = new BabyGuessDB({
    name,
    hair,
    eye,
    weight,
    time,
    day,
  });
  try {
    await newGuess.save();
    res.status(201).json(newGuess);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
};
