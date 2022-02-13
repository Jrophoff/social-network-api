const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

// GET all /api/thoughts
router.route('/').get(getAllThought);

// POST /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// GET one, PUT, and DELETE /api/thoughts/<thoughtsId>
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// POST  /api/thoughts/<thoughtsId>/reactions
router.route('/:id/reactions').post(addReaction);

// DELETE /api/thoughts/<thoughtsId>/reactions/<reactionId>
router.route('/:id/reactions/:reactionId').delete(removeReaction);

module.exports = router;
