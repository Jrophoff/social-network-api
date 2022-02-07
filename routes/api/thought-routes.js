const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thought-controller');

// GET all /api/thoughts
router.route('/').get(getAllThought);

// POST /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// GET one, PUT, and DELETE at api/thoughts/:id
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);


module.exports = router;
