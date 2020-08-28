// Dependencies
const { Schema, model } = require('mongoose');
// Create User Schema with Mongoose
const UserSchema = new Schema(
    {
      username: {
        type: String,
        required: 'You need to provide a username!',
        trim: true,
        unique:true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
      },
      thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
      ],
      friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
      ],
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );
// Virtual to get total count of friends in friend array
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});
// Create the user model using the userSchema
const User = model('User', UserSchema);
// MODULE EXPORT
module.exports = User;