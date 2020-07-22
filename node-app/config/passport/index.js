const passport = require('passport');
const mongoose = require('mongoose');

module.exports = () => {
  const userModel = mongoose.model('user');

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await userModel.findById(id).exec();
    done(null, user);
  });

  require('./googleStrategy')();
};
