const mongoose = require('mongoose');

const config = require('./');
require('../app/models/post.model');
require('../app/models/user.model');

module.exports = async () => {
  try {
    const db = await mongoose.connect(config.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `DB running at http://${db.connection.host}:${db.connection.port}`
    );

    return db;
  } catch (err) {
    throw err;
  }
};
