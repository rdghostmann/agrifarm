import mongoose from 'mongoose';

const CropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Crop name is required'],
    trim: true,
  },
  species: {
    type: String,
    required: [true, 'Species is required'],
  },
  land: {
    type: String,
    required: [true, 'Land is required'],
  },
  seed: {
    type: Number,
    default: 0,
  },
  date_start: {
    type: Date,
    required: [true, 'Start date is required'],
  },
  date_end: {
    type: Date,
    required: [true, 'End date is required'],
  },
  photo: {
    type: String,
    default: null,
  },
  notes: {
    type: String,
    trim: true,
    default: '',
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

const Crop = mongoose.models.Crop || mongoose.model("Crop", CropSchema);

export default Crop;
