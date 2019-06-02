const { User } = require('../models');

class UserController {
  async store(req, res) {
    const { email } = req.body;

    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { filename: avatar } = req.file;

    const user = await User.create({ ...req.body, avatar });

    return res.status(200).json(user);
  }
}

module.exports = new UserController();
