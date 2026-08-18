// Filename: controllers/authController.js

const User = require('../models/User');
const HealthProfile = require('../models/HealthProfile');
const generateToken = require('../utils/generateToken');

// @desc    Register a new user & initialize their Health Profile
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Validate input data
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide name, email, and password' });
    }

    // 2. Check if user already exists to prevent duplicate accounts
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists with this email' });
    }

    // 3. Create the User in the database
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      // 4. TOP-NOTCH ARCHITECTURE: Immediately initialize their Health Profile
      // This ensures our AI Context Engine never encounters a "null" profile during an emergency.
      await HealthProfile.create({
        user: user._id, // Link to the newly created user
        bloodGroup: 'Unknown',
        profileCompletionScore: 10, // Starting score
      });

      // 5. Generate secure HTTP-Only cookie token
      generateToken(res, user._id);

      // 6. Send success response with user data (excluding password)
      res.status(201).json({
        success: true,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } else {
      res.status(400).json({ success: false, message: 'Invalid user data received' });
    }
  } catch (error) {
    console.error(`[Auth Error - Register]: ${error.message}`);
    // EXPOSING THE EXACT ERROR TO THE FRONTEND
    res.status(500).json({ success: false, message: `Server Error: ${error.message}` });
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    // 2. Find user by email. We use '+password' because we set 'select: false' in the schema for security.
    const user = await User.findOne({ email }).select('+password');

    // 3. Check if user exists AND if the password matches our hashed password
    if (user && (await user.matchPassword(password))) {
      // 4. Generate secure HTTP-Only cookie token
      generateToken(res, user._id);

      // 5. Send success response (strip out the password before sending to frontend)
      res.status(200).json({
        success: true,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(`[Auth Error - Login]: ${error.message}`);
    // EXPOSING THE EXACT ERROR TO THE FRONTEND
    res.status(500).json({ success: false, message: `Server Error: ${error.message}` });
  }
};

// @desc    Logout user & clear cookie
// @route   POST /api/auth/logout
// @access  Private (Logged in users only)
const logoutUser = async (req, res) => {
  try {
    // Top-Notch Security: Overwrite the cookie with a blank payload that expires immediately
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    console.error(`[Auth Error - Logout]: ${error.message}`);
    // EXPOSING THE EXACT ERROR TO THE FRONTEND
    res.status(500).json({ success: false, message: `Server Error: ${error.message}` });
  }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  try {
    // req.user is automatically set by our 'protect' middleware
    res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    console.error(`[Auth Error - GetMe]: ${error.message}`);
    // EXPOSING THE EXACT ERROR TO THE FRONTEND
    res.status(500).json({ success: false, message: `Server Error: ${error.message}` });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
};