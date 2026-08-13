// Filename: models/User.js

// Mongoose helps us talk to MongoDB. 
// bcryptjs is a library used to encrypt (hash) passwords so they aren't stored as plain text.
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// We define the rules for what a "User" must look like.
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true, // No two users can have the same email
      lowercase: true, // Always convert emails to lowercase to avoid login issues
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 6, // Force users to have a somewhat secure password
      select: false, // Security feature: when we fetch a user, DON'T send the password back by default
    },
    
    // --- DESIGNING FOR THE FUTURE ---
    
    role: {
      type: String,
      enum: ['user', 'doctor', 'admin'],
      default: 'user', // Everyone starts as a standard user
    },
    familyGroupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Family', // We will use this in the future "Family Health Tree" module
      default: null,
    },
    isEmailVerified: {
      type: Boolean,
      default: false, // Useful later if we want to send verification emails
    }
  },
  {
    // This automatically adds 'createdAt' and 'updatedAt' timestamps to every user
    timestamps: true,
  }
);

// This is a "hook". It runs automatically right BEFORE we save a user to the database.
userSchema.pre('save', async function (next) {
  // If the password wasn't changed (e.g., they only updated their name), skip this step.
  if (!this.isModified('password')) {
    return next();
  }

  // Generate a 'salt' (random characters) and hash the password with it.
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// This is a custom helper function we attach to every user. 
// When they log in, we use this to check if the typed password matches the encrypted one.
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// We export this so we can use it in our login/register logic later.
module.exports = mongoose.model('User', userSchema);