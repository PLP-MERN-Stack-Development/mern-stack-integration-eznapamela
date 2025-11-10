const mongoose=require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please enter a username'],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      match: [/.+\@.+\..+/, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minlength: 6,
    },
    bio: {
      type: String,
      maxlength: [250, 'Bio cannot exceed 250 characters'],
    },
    profilePicture: {
      type: String,
      default: 'default-profile.jpg',
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
