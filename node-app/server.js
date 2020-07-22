require('dotenv').config();

const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');
const configurePassport = require('./config/passport');

(async () => {
  await configureMongoose();
  const app = configureExpress();
  configurePassport();

  app.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
  });
})();
