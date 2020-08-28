// Dependencies
const { Schema, model, Types } = require('mongoose');
const moment = require('moment');
// Create Thought Schema with Mongoose
const ThoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
      },
      username: {
          type: String,
          required: true
      },
      // use ReactionSchema to validate data for a reaction
      reactions: [ReactionSchema]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );
  // Virtual to get total count of reactions in reaction array
  ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  // Create the thought model using the ThoughtSchema
  const Thought = model('Thought', ThoughtSchema);
  // MODULE EXPORT
  module.exports = Thought;