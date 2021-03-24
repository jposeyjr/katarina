import { ScoreDB } from '../models/score.js';
import mongoose from 'mongoose';

export const getScore = async (req, res) => {
  try {
    const data = await ScoreDB.find();
    res.status(200).json(data[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const createScore = async (req, res) => {
  const { score, game } = req.body;
  const newScore = new ScoreDB({
    score: score,
    game: game,
    name: req.user.name,
  });
  try {
    await newScore.save();
    res.status(201).json(newScore);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
};

export const updateScore = async (req, res) => {
  const user_id = req.user._id;
  const { score, game } = req.body;

  if (!mongoose.Types.ObjectId(isValid(user_id)))
    return res.status(404).send("No scores for that user's id");

  const updatedScore = {
    name: req.user.name,
    score: score,
    game: game,
  };

  try {
    await ScoreDB.findByIdAndUpdate(id, updatedScore, { new: true });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 *
 * @todo finish this if needed, if not than we will delete. Might need to change schema to account for this.
 */

export const deleteScore = async (req, res) => {
  const { user_id } = req.user._id;
  if (!mongoose.Types.ObjectId.isValid(item_id))
    return res.status(404).send(`No item in list with that id: ${item_id}`);

  res.status(200).json({ message: 'Score removed successfully.' });
};
