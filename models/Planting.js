// /models/Planting.js
import { Schema, model, models } from 'mongoose';

const PlantingSchema = new Schema({
  cropName: { type: String, required: true },
  field: { type: String, required: true }, // Field or plot identifier
  plantingDate: { type: Date, required: true },
  expectedHarvestDate: { type: Date },
  quantityPlanted: { type: Number },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default models.Planting || model('Planting', PlantingSchema);
