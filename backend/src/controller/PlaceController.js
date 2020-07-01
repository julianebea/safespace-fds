import Place from '../model/PlaceSchema';

class PlaceController {
  async store(req, res) {
    const place = await Place.create(req.body);
    return res.json(place);
  }
}

export default new PlaceController();
