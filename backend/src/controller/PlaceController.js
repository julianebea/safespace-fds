import Place from '../model/PlaceSchema';
import Rating from '../model/RatingSchema';

class PlaceController {
  async store(req, res) {
    const place = await Place.create(req.body);
    return res.json(place);
  }

  async average(req, res) {
    const { placename } = req.body;
    const ratings = await Rating.find({
      placename: { placename }
    });
    const average = ratings.reduce((total, { user_rate }) => {
      return (total + user_rate, 0) / ratings.length();
    });
    return res.json({ placename, average });
  }
}

export default new PlaceController();
