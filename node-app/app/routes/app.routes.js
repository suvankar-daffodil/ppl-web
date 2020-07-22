const router = require('express').Router();
const multer = require('multer');

const controller = require('../controllers/app.controller');
const upload = multer({ dest: './public/uploads/' });

module.exports = () => {
  router
    .route('/posts')
    .post(upload.single('image'), controller.addPost)
    .get(controller.getAllPosts);

  router.route('/posts/:postId').put(controller.updatePostById);

  router
    .route('/categories')
    .post(upload.single('image'), controller.addCategory);

  return router;
};
