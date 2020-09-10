/** @format */

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const requiredNumber = {
  type: Number,
  required: true,
};

const logEntrySchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    comment: { type: String },
    image: { type: String },
    rating: { type: Number, min: 0, max: 10, default: 0 },
    latitude: { ...requiredNumber, min: -90, max: 90 },
    longitude: { ...requiredNumber, min: -180, max: 180 },
    visitedDate: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = model('LogEntry', logEntrySchema);
