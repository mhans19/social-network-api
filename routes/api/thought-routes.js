// Dependencies
const router = require('express').Router();
// Instead of importing the entire object and having to do userController.getAllUsers(), 
// we can simply destructure the method names out of the imported object and use those names directly.
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');
// Set up GET all at /api/thoughts
router
.route('/')
.get(getAllThought);
// Set up POST at /api/thoughts/:userId
router
.route('/:userId')
.post(createThought);
// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);
// Set up POST reaction at /api/thoughts/:thoughtId/reactions 
router
  .route('/:thoughtId/reactions')
  .post(addReaction);
// Set up DELETE reaction at /api/thoughts/:thoughtId/reactionId
router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);
// Export Module
module.exports = router;