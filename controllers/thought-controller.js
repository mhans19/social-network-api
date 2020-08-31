// Dependencies
const { User, Thought } = require('../models');
// Create the Thought controller
const thoughtController = {
    // GET all Thoughts
    getAllThought(req, res) {
      Thought.find({})
        // Populate Reactions
        .populate({
          path: 'reactions',
          select: '-__v'
        })
        .select('-__v')
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    },
    // GET a single Thought by ID
    getThoughtById({ params }, res) {
      Thought.findOne({ _id: params.id })
        // Populate reactions
        .populate({
            path: 'reactions',
            select: '-__v'
          })
        .select('-__v')
        .then(dbThoughtData => {
            if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought found with this ID!' });
            return;
            }
            res.json(dbThoughtData);
        })
    },
    // POST new Thought and push to User's thought list
    createThought({ params, body }, res) {
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                {_id: params.userId}, 
                { $push: { thoughts: _id } }, 
                { new: true });
        })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
            res.status(404).json({ message: 'No user found with this ID!' });
            return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },
    // PUT User by ID
    updateThought({ params, body }, res) {
      Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        // Populate reactions
        .populate({
            path: 'reactions',
            select: '-__v'
          })
        .select('-__v')
        .then(dbThoughtData => {
          if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought found with this ID!' });
            return;
          }
          res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },
    // DELETE Thought
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought found with this ID!' });
            return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },
    // POST new reaction
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: body } },
        { new: true, runValidators: true }
        )
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .then(dbThoughtData => {
            if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought found with this ID!' });
            return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },
    // DELETE reaction by ID
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: { reactions: { reactionId: params.reactionId } } },
        { new: true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought found with this ID!' });
            return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    }
  }
// Module Export
module.exports = thoughtController;