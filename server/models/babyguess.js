import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const guessSchema = new Schema({
  name: { type: String, trim: true, required: true },
  hair: { type: String, required: true },
  eye: { type: String, required: true },
  lbs: { type: Number, required: true },
  oz: { type: Number, required: true },
  time: { type: String, required: true },
  day: { type: String, required: true },
});

const BabyGuessSchema = new Schema(
  {
    guess: { guessSchema },
    host_id: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: 'people',
    },
  },
  {
    timestamps: true,
  }
);

export const BabyGuessDB = mongoose.model('BabyGuess', BabyGuessSchema);
