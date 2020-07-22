const mongoose = require('mongoose');

let userSchema = mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    gender: String,
    googleId: String,
    password: String,
    email: String,
    phone: Number,
    picture: String,
    categories: {
      type: [{ name: String, picture: String }],
      default: [
        { name: 'CATS', picture: 'icon_01.png' },
        { name: 'DOGS', picture: 'icon_02.png' },
        { name: 'BIRDS', picture: 'icon_03.png' },
        { name: 'RABBITS', picture: 'icon_04.png' },
        { name: 'OTHERS', picture: 'icon_05.png' },
      ],
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('user', userSchema);
