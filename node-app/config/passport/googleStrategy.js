const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');

const config = require('../');

module.exports = () => {
  const userModel = mongoose.model('user');

  passport.use(
    new googleStrategy(
      {
        callbackURL: config.GOOGLE_AUTH_CALLBACK_URL,
        clientID: config.GOOGLE_AUTH_CLIENT_ID,
        clientSecret: config.GOOGLE_AUTH_CLIENT_SECRET,
      },
      async (accessToken, refreshToken, profileData, done) => {
        try {
          const user = await userModel
            .findOne({ googleId: profileData.id })
            .exec();
          if (!user) {
            const newUser = {
              name: profileData.displayName,
              email: profileData.emails[0].value,
              googleId: profileData.id,
              picture: profileData.photos[0].value,
            };
            const result = await userModel.create(newUser);
            done(null, result);
          } else {
            done(null, user);
          }
        } catch (err) {
          console.log(err);
        }
      }
    )
  );
};
