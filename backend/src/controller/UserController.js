import User from '../model/UserSchema';

class UserController {
  async store(req, res) {
    const { username, useremail, birthdate } = await User.create(req.body);
    return res.json({
      username,
      useremail,
      birthdate
    });
  }
}

export default new UserController();
