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
  const { hair, eyes, lbs, oz, time, day } = req.body;
  const name = req.user.name;
  const newGuess = new BabyGuessDB({
    name,
    hair,
    eyes,
    lbs,
    oz,
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
