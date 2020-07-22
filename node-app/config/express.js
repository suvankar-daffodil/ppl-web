const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cors = require('cors');
const passport = require('passport');

const config = require('../config');
const authRouter = require('../app/routes/auth.routes')();
const appRouter = require('../app/routes/app.routes')();

module.exports = () => {
  const app = express();

  app.use(cors());

  if (config.IS_DEV) {
    app.use(morgan('dev'));
  } else {
    app.use(compression());
  }

  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({
      extended: true,
    })
  );

  app.use(
    cookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: [config.SESSION_KEY],
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/auth', authRouter);
  app.use('/app', appRouter);
  app.use(express.static('./public'));

  return app;
};
