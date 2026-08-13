// Filename: models/HealthProfile.js

const mongoose = require('mongoose');

// We define the rules for a user's medical and emergency data.
const healthProfileSchema = new mongoose.Schema(
  {
    // 1. LINKING TO THE USER
    // This connects this specific health profile to a specific login account.
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Points to the 'User' model we created earlier
      required: true,
    },

    // 2. BASIC VITALS
    bloodGroup: {
      type: String,
      // We force the data to be one of these exact strings to prevent typos like "O positive" vs "O+"
      enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'Unknown'],
      default: 'Unknown',
    },
    age: {
      type: Number,
    },
    height: {
      type: Number, // Stored in cm
    },
    weight: {
      type: Number, // Stored in kg
    },

    // 3. THE "CONTEXT ENGINE" DATA (Crucial for our AI)
    allergies: [
      { type: String } // e.g., ["Penicillin", "Peanuts", "Dust"]
    ],
    medicalConditions: [
      { type: String } // e.g., ["Diabetes", "Asthma", "Hypertension"]
    ],
    
    // --- DESIGNING FOR THE FUTURE MODULES ---

    // For the "Medicine Reminder" and "AI Context" modules
    medications: [
      {
        name: { type: String, required: true },
        dosage: { type: String }, // e.g., "500mg"
        frequency: { type: String }, // e.g., "Twice a day"
      }
    ],

    // For the "Auto-SOS" and "Emergency Dispatch" modules
    emergencyContacts: [
      {
        name: { type: String, required: true },
        relation: { type: String, required: true }, // e.g., "Father", "Spouse"
        phone: { type: String, required: true },
      }
    ],

    // For the "Insurance Assistant" module later
    insuranceDetails: {
      provider: { type: String },
      policyNumber: { type: String },
    },

    isOrganDonor: {
      type: Boolean,
      default: false,
    },

    // For the "AI Health Score" (out of 100) that you requested
    profileCompletionScore: {
      type: Number,
      default: 10, // Starts at 10% just for signing up
    }
  },
  {
    // Automatically adds 'createdAt' and 'updatedAt'
    timestamps: true,
  }
);

module.exports = mongoose.model('HealthProfile', healthProfileSchema);