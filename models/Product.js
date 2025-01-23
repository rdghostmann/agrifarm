// /models/Product.js
import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default models.Product || model('Product', ProductSchema);
