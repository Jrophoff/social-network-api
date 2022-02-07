const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: 'You must provide a user name!',
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      require: 'You must provide your email!',
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address!'],
    },
    thoughts: [
        {
            ref: 'Thought'
        }
    ],
    friends: [
        {
            ref: 'User'
        }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});
