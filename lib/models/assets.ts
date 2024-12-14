import mongoose, { model, models } from 'mongoose';

const AssetsSchema = new mongoose.Schema(
  {}, // Empty schema to allow schema-less behavior
  { strict: false, timestamps: true } // strict: false allows schema-less
);

const Assets = models.Assets || model('Assets', AssetsSchema);

export default Assets;
