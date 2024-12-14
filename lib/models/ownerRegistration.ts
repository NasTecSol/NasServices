// models/Subscription.js

import mongoose from 'mongoose';

const ownerRegistrationSchema = new mongoose.Schema({
    companyName: { type: String, required: true }, // e.g., "Basic", "Pro", "Enterprise"
    userName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true }, // in days or months
    phoneNumber: { type: String, required: true },
    userPhoto: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.ownerRegistrationSchema || mongoose.model('ownerRegistration', ownerRegistrationSchema);
