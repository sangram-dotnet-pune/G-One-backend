// Filename: server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

// Initialize Express App
const app = express();

// ==========================================
// 1. MIDDLEWARES (CRITICAL FOR CORS)
// ==========================================
// Configure CORS to accept requests from our Vite frontend
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true, // Crucial for sending/receiving HTTP-only cookies (JWT)
}));

// Parse incoming JSON payloads and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse cookies attached to the client request object
app.use(cookieParser());

// ==========================================
// 2. API ROUTES
// ==========================================
// Base health check route to verify server is running
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'G-ONE AI LifeGuard API is online.',
    timestamp: new Date().toISOString(),
  });
});

// We will mount our feature routers here as we build them:
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/profile', require('./routes/profileRoutes')); // <-- ADDED THIS LINE
// app.use('/api/emergency', require('./routes/emergencyRoutes'));
// app.use('/api/ai', require('./routes/aiRoutes'));

// ==========================================
// 4. ERROR HANDLING
// ==========================================
// 3. ERROR HANDLING
// ==========================================
// Handle undefined routes safely without crashing
app.use((req, res, next) => {
  res.status(404).json({ 
    success: false, 
    message: `API Route not found: ${req.originalUrl}` 
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(`[Server Error]: ${err.stack}`);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(statusCode).json({
    success: false,
    message: message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});

// ==========================================
// 4. SERVER INITIALIZATION
// ==========================================
const PORT = process.env.PORT || 5000;

// Connect to the database, then start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`[Server] G-ONE running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  });
});