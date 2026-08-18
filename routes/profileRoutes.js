// Filename: routes/profileRoutes.js
const express = require('express');
const router = express.Router();

const { getProfile, updateProfile } = require('../controllers/profileController');
const { protect } = require('../middlewares/authMiddleware');

// @route   GET /api/profile
// @desc    Get current user's medical profile
// @access  Private (Requires JWT Cookie)
router.get('/', protect, getProfile);

// @route   PUT /api/profile
// @desc    Update medical profile & recalculate AI Readiness Score
// @access  Private
router.put('/', protect, updateProfile);

module.exports = router;