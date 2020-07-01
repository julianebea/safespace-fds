import User from '../model/UserSchema';

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  }
}

export default new UserController();
