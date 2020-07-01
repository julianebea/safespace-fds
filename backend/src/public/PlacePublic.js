import Place from '../model/PlaceSchema';

class PlacePublic {
  async index(req, res) {
    const places = await Place.find();
    return res.json(places);
  }
}

export default PlacePublic;
