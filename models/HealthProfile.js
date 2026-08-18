// Filename: models/HealthProfile.js

const mongoose = require('mongoose');

// We define the rules for a user's deep medical and lifestyle data.
// Everything is optional by default (except the user link) to allow "Progressive Profiling".
const healthProfileSchema = new mongoose.Schema(
  {
    // --- 1. CORE IDENTITY ---
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    profileCompletionScore: {
      type: Number,
      default: 10, // Base score just for registering
    },

    // --- 2. BASIC VITALS (Essential for Drug Dosages & Triage) ---
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'Unknown'],
      default: 'Unknown',
    },
    height: { type: Number }, // In cm
    weight: { type: Number }, // In kg
    dateOfBirth: { type: Date }, 

    // --- 3. CRITICAL MEDICAL CONTEXT (The "Do Not Kill Me" Data) ---
    allergies: [{ type: String }], // e.g., ["Penicillin", "Peanuts", "Latex"]
    medicalConditions: [{ type: String }], // e.g., ["Type 2 Diabetes", "Asthma"]
    
    medications: [
      {
        name: { type: String, required: true },
        dosage: { type: String }, // e.g., "50mg"
        frequency: { type: String }, // e.g., "Once daily"
      }
    ],

    // --- 4. SURGICAL & SPECIALIZED DATA (For AI Context in Emergencies) ---
    pastSurgeries: [
      {
        procedure: { type: String },
        year: { type: Number },
      }
    ],
    implants: [{ type: String }], // e.g., ["Pacemaker", "Metal plate in left arm"] - Crucial for MRI warnings
    vaccinations: [{ type: String }], // e.g., ["COVID-19", "Tetanus"]

    // --- 5. LIFESTYLE & HABITS (For Everyday AI Health Queries) ---
    lifestyle: {
      dietType: { 
        type: String, 
        enum: ['Standard', 'Vegan', 'Vegetarian', 'Keto', 'Diabetic', 'Other'],
        default: 'Standard' 
      },
      smokingStatus: { 
        type: String, 
        enum: ['Never', 'Former', 'Current', 'Occasional'],
        default: 'Never' 
      },
      alcoholConsumption: { 
        type: String, 
        enum: ['None', 'Occasional', 'Moderate', 'Heavy'],
        default: 'None' 
      },
      activityLevel: {
        type: String,
        enum: ['Sedentary', 'Light', 'Moderate', 'Active', 'Athlete'],
        default: 'Moderate'
      }
    },

    // --- 6. FAMILY & GENETICS (For Predictive Risk Alerts) ---
    familyHistory: [
      {
        relation: { type: String }, // e.g., "Father"
        condition: { type: String }, // e.g., "Heart Attack before 50"
      }
    ],

    // --- 7. EMERGENCY LOGISTICS ---
    emergencyContacts: [
      {
        name: { type: String },
        relation: { type: String },
        phone: { type: String },
      }
    ],
    insuranceDetails: {
      provider: { type: String },
      policyNumber: { type: String },
    },
    isOrganDonor: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true, // Automatically tracks createdAt and updatedAt
  }
);

module.exports = mongoose.model('HealthProfile', healthProfileSchema);