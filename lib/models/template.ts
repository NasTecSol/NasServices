import mongoose, { model, models } from 'mongoose';

const TemplateSchema = new mongoose.Schema(
  {}, // Empty schema to allow schema-less behavior
  { strict: false, timestamps: true } // strict: false allows schema-less
);

const Template = models.Template || model('Template', TemplateSchema);

export default Template;
