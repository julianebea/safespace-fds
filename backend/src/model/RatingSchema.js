import mongoose from 'mongoose';

const RatingSchema = new mongoose.Schema({
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
  },
  rate_date: {
    type: Date,
    required: true
  }
});

export default mongoose.model('Rating', RatingSchema);
