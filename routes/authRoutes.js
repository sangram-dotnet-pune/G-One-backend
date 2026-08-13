// Filename: routes/authRoutes.js

const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
} = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

// @route   POST /api/auth/register
// @desc    Register a new user and initialize Health Profile
router.post('/register', registerUser);

// @route   POST /api/auth/login
// @desc    Authenticate user and issue JWT cookie
router.post('/login', loginUser);

// @route   POST /api/auth/logout
// @desc    Clear the JWT cookie to end the session
router.post('/logout', logoutUser);

// @route   GET /api/auth/me
// @desc    Get current user data (used for page refreshes)
router.get('/me', protect, getMe);

module.exports = router;