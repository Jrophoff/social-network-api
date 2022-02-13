const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// GET all and POST at /api/users
router.route('/').get(getAllUser).post(createUser);

// GET one, PUT, and DELETE at api/users/userId
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Put and delete at api/user/userId/frindsId
router.route('/:id/friends/:friendId').put(addFriend).delete(removeFriend);

module.exports = router;
