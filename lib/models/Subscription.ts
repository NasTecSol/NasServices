// models/Subscription.js

import mongoose from 'mongoose';

const SubscriptionSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., "Basic", "Pro", "Enterprise"
  features: [String], // e.g., ["5 companies", "Unlimited storage"]
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // in days or months
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Subscription || mongoose.model('Subscription', SubscriptionSchema);
