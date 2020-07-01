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
  ratings: [
    {
      username: {
        type: String,
        required: true,
        unique: true
      },
      user_rate: {
        type: Number,
        required: true,
        min: 1,
        max: 5
      },
      user_comment: {
        type: String
      }
    }
  ],
  average_rating: {
    type: Number
  },
  isFriendlyFlag: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Place', PlaceSchema);
