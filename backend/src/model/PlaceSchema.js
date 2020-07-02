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
  ratings: []
});

export default mongoose.model('Place', PlaceSchema);
