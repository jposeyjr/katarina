import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ScoreSchema = new Schema(
  {
    name: { type: String, trim: true, required: true },
    score: { type: Number, required: true },
    game: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const ScoreDB = mongoose.model('Scores', ScoreSchema);
