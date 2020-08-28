// Dependencies
const { User } = require('../models');
// Create the User controller
const userController = {
    // GET all Users
    getAllUser(req, res) {
      User.find({})
        // Populate thoughts
        .populate({
          path: 'thoughts',
          select: '-__v'
        })
        // Populate friends
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    },
    // GET a single User by ID
    getUserById({ params }, res) {
      User.findOne({ _id: params.id })
        // Populate thoughts
        .populate({
            path: 'thoughts',
            select: '-__v'
          })
          // Populate friends
          .populate({
              path: 'friends',
              select: '-__v'
          })
        .select('-__v')
        .then(dbUserData => {
            if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this ID!' });
            return;
            }
            res.json(dbUserData);
        })
    },
    // POST new User
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },
    // PUT User by ID
    updateUser({ params, body }, res) {
      User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this ID!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
    // DELETE User
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this ID!' });
            return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
    // POST new friend to a User's friend array
    addFriend({ params }, res) {
        User.findOneAndUpdate(
        { _id: params.id },
        { $push: { friends: params.friendId } },
        { new: true }
        )
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this ID!' });
            return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
    // DELETE friend from a user's friend array
    removeFriend({ params }, res) {
        User.findOneAndUpdate(
        { _id: params.id },
        { $pull: { friends: params.friendId} },
        { new: true }
        )
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .then(dbUserData => {
            if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this ID!' });
            return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    }
  }
// Module Export
module.exports = userController;