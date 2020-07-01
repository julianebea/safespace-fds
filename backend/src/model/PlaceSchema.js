import mongoose from 'mongoose';

const Place = new mongoose.Schema({
  place_name: {
    type: String,
    required: true
  },
  place_location,
  average_rating: {
    type: Number
  },
  isFriendlyFlag: {
    type: Boolean,
    default: false
  }
});
