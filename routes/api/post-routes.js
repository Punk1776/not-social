const router = require("express").Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  addReaction,
  removeReaction,
} = require("../../controllers/post-controller");

// /api/posts
router.route("/").get(getAllPosts).post(createPost);

// /api/posts/:id
router
  .route("/:id")
  .get(getPostById)
  .put(updatePost)
  .delete(deletePost);

// /api/posts/:postId/reactions
router.route("/:postId/reactions").post(addReaction);

// /api/posts/:postId/reactions/:reactionId
router.route("/:postId/reactions/:reactionId").delete(removeReaction);

module.exports = router;