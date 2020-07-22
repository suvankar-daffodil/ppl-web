const userModel = require('mongoose').model('user');

module.exports = {
  addUser: async (req, res) => {
    try {
      const user = await userModel.findOne({ email: req.body.email }).exec();
      if (user) {
        res.end(null);
      } else {
        let result = await userModel.create(req.body);
        res.json(result);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },

  loginUser: async (req, res) => {
    try {
      const user = await userModel.findOne(req.body).exec();
      res.json(user);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  redirectAfterLogin: async (req, res) => {
    res.end('Done');
  },
};
