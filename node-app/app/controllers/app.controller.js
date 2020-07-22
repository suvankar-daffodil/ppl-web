const userModel = require('mongoose').model('user');
const postModel = require('mongoose').model('post');

module.exports = {
  getAllPosts: async (req, res) => {
    try {
      const posts = await postModel.find({}, {}).exec();
      res.json(posts);
    } catch (err) {
      console.log(err);
    }
  },

  addPost: async (req, res) => {
    try {
      const post = req.body;
      post.picture = req.file.filename;
      const result = await postModel.create(post);
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  },

  addCategory: async (req, res) => {
    try {
      let data = [{ name: req.body.category, picture: req.file.filename }];
      const result = await userModel
        .findByIdAndUpdate(
          req.body.user,
          { $push: { categories: { $each: data, $position: 0 } } },
          { returnOriginal: false, useFindAndModify: false }
        )
        .exec();
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  updatePostById: async (req, res) => {
    try {
      const updatedPost = await postModel.findByIdAndUpdate(
        req.body._id,
        req.body,
        {
          returnOriginal: false,
          useFindAndModify: false,
        }
      );
      res.json(updatedPost);
    } catch (err) {
      console.log(err);
    }
  },
};
