import Rating from '../model/RatingSchema';

class RatingController {
  async addNewRating(req, res) {
    const { username, placename, user_rate, user_comment } = req.body;
    const currentDate = new Date();

    await Rating.create({
      username,
      placename,
      user_rate,
      user_comment,
      currentDate
    });

    return res.json({ message: 'New rating submited' });
  }
}

export default new RatingController();
