import mongoose from 'mongoose';

const PlaceSchema = new mongoose.Schema({
  place_name: {
    type: String,
    required: true
  },
  place_location: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  ratings: [],
  average_rating: {
    type: Number
  },
  isFriendlyFlag: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model('Place', PlaceSchema);
