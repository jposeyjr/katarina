import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, trim: true, required: true, unique: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
});

const PriceRightSchema = new Schema(
  {
    items: [itemSchema],
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

export const PriceRightDB = mongoose.model('PriceRight', PriceRightSchema);
