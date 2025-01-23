// /models/Category.js
import { Schema, model, models } from 'mongoose';

const CategorySchema = new Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default models.Category || model('Category', CategorySchema);
