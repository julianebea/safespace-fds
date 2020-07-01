import User from '../model/UserSchema';

class UserPublic {
  async index(req, res) {
    const users = await User.find();
    const publicData = users.map(({ username, birthdate }) => ({
      username,
      birthdate
    }));
    return res.json(publicData);
  }
}
export default new UserPublic();
