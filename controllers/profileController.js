// Filename: controllers/profileController.js
const HealthProfile = require('../models/HealthProfile');

// @desc    Get current user's health profile
// @route   GET /api/profile
// @access  Private (Requires JWT token)
const getProfile = async (req, res) => {
  try {
    // req.user._id is securely provided by our authMiddleware
    const profile = await HealthProfile.findOne({ user: req.user._id });

    if (!profile) {
      return res.status(404).json({ success: false, message: 'Health profile not found' });
    }

    res.status(200).json({ success: true, profile });
  } catch (error) {
    console.error(`[Profile Error - Get]: ${error.message}`);
    res.status(500).json({ success: false, message: `Server Error: ${error.message}` });
  }
};

// @desc    Update user's health profile & recalculate readiness score
// @route   PUT /api/profile
// @access  Private
const updateProfile = async (req, res) => {
  try {
    let profile = await HealthProfile.findOne({ user: req.user._id });

    if (!profile) {
      return res.status(404).json({ success: false, message: 'Health profile not found' });
    }

    // Update fields dynamically based on what the frontend sends
    const updatableFields = [
      'bloodGroup', 'height', 'weight', 'dateOfBirth', 'allergies', 
      'medicalConditions', 'medications', 'pastSurgeries', 'implants', 
      'vaccinations', 'lifestyle', 'familyHistory', 'emergencyContacts', 
      'insuranceDetails', 'isOrganDonor'
    ];

    updatableFields.forEach(field => {
      if (req.body[field] !== undefined) {
        profile[field] = req.body[field];
      }
    });

    // --- WOW FEATURE: AI READINESS SCORE CALCULATION ---
    let score = 10; // Base score for just registering

    // 1. Basic Vitals (+20)
    if (profile.bloodGroup && profile.bloodGroup !== 'Unknown') score += 10;
    if (profile.height && profile.weight) score += 10;

    // 2. Critical Context (+20)
    if (profile.allergies && profile.allergies.length > 0) score += 10;
    if (profile.medicalConditions && profile.medicalConditions.length > 0) score += 10;

    // 3. Medications & specialized data (+15)
    if (profile.medications && profile.medications.length > 0) score += 10;
    if (profile.vaccinations && profile.vaccinations.length > 0) score += 5;

    // 4. Lifestyle & Genetics (+15)
    if (profile.lifestyle && profile.lifestyle.smokingStatus !== 'Never') score += 5;
    if (profile.familyHistory && profile.familyHistory.length > 0) score += 10;

    // 5. Emergency Logistics (+20)
    if (profile.emergencyContacts && profile.emergencyContacts.length > 0) score += 15;
    if (profile.insuranceDetails && profile.insuranceDetails.provider) score += 5;

    // Cap the score at 100
    profile.profileCompletionScore = Math.min(score, 100);

    // Save the updated profile to the database
    await profile.save();

    res.status(200).json({ success: true, profile, message: 'Vault updated securely.' });
  } catch (error) {
    console.error(`[Profile Error - Update]: ${error.message}`);
    res.status(500).json({ success: false, message: `Server Error: ${error.message}` });
  }
};

module.exports = {
  getProfile,
  updateProfile,
};