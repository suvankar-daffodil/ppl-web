const router = require('express').Router();
const passport = require('passport');

const controller = require('../controllers/auth.controller');

module.exports = () => {
  router.route('/signup').post(controller.addUser);

  router.route('/login').post(controller.loginUser);

  router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  router.get(
    '/google/redirect',
    passport.authenticate('google'),
    controller.redirectAfterLogin
  );

  return router;
};
