const userModel = require("../models/userSchema");
const postModel = require("../models/postSchema");

module.exports = {
  getAllPosts: () =>
    new Promise((resolve, reject) => {
      postModel.find({}, {}, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    }),
  getAllUsers: () =>
    new Promise((resolve, reject) => {
      userModel.find({}, {}, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    }),

  getUser: userData =>
    new Promise((resolve, reject) => {
      userModel.findOne(userData, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    }),

  getUserByEmail: userEmail =>
    new Promise((resolve, reject) => {
      userModel.findOne({ email: userEmail }, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    }),

  getUserByGoogleId: userGoogleId =>
    new Promise((resolve, reject) => {
      userModel.findOne({ googleId: userGoogleId }, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    }),

  getUserById: userId =>
    new Promise((resolve, reject) => {
      userModel.findById(userId, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    }),

  addUser: newUser =>
    new Promise((resolve, reject) => {
      new userModel(newUser).save((err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    }),

  addPost: newPost =>
    new Promise((resolve, reject) => {
      new postModel(newPost).save((err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    }),

  addCategory: (userId, newCategory) =>
    new Promise((resolve, reject) => {
      userModel.findByIdAndUpdate(
        userId,
        { $push: { categories: { $each: newCategory, $position: 0 } } },
        { returnOriginal: false, useFindAndModify: false },
        (err, data) => {
          if (err) reject(err);
          else resolve(data);
        }
      );
    }),

  updatePostById: post =>
    new Promise((resolve, reject) => {
      postModel.findByIdAndUpdate(
        post._id,
        post,
        { returnOriginal: false, useFindAndModify: false },
        (err, data) => {
          if (err) reject(err);
          else resolve(data);
        }
      );
    })
};
