// Dependencies
const router = require('express').Router();
// Instead of importing the entire object and having to do userController.getAllUsers(), 
// we can simply destructure the method names out of the imported object and use those names directly.
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
  } = require('../../controllers/user-controller');
// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);
// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);
// Set up POST and DELETE at /api/users/:userId/friends/:friendId  
router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);
// Export Module
module.exports = router;