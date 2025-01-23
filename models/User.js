// /models/User.js
import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now },
});

export default models.User || model('User', UserSchema);
