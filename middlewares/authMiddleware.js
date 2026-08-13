// Filename: middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ============================================================================
// 1. PROTECT MIDDLEWARE (The Security Guard)
// ============================================================================
// This function runs BEFORE any sensitive route (like viewing medical history).
// It checks if the user has a valid JWT cookie.
const protect = async (req, res, next) => {
  let token;

  // 1. Check if the token exists in the incoming cookies
  if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  // 2. If there is no token, reject the request immediately
  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: 'Not authorized, no token provided. Please log in.' 
    });
  }

  try {
    // 3. Verify the token using our secret key. 
    // If a hacker tampered with it, this will throw an error and go to the catch block.
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Fetch the user from the database using the ID hidden inside the token.
    // We use .select('-password') because we NEVER want the password hash floating around in our app's memory during requests.
    req.user = await User.findById(decoded.userId).select('-password');

    if (!req.user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Not authorized, the user belonging to this token no longer exists.' 
      });
    }

    // 5. Everything is secure. Move on to the next function (the actual controller).
    next();
  } catch (error) {
    console.error(`[Auth Middleware Error]: ${error.message}`);
    return res.status(401).json({ 
      success: false, 
      message: 'Not authorized, token failed or expired.' 
    });
  }
};

// ============================================================================
// 2. AUTHORIZE MIDDLEWARE (The VIP Bouncer)
// ============================================================================
// Designing for the Future: We will use this later for the Doctor/Admin Dashboards.
// Example usage in a route: router.get('/doctor-data', protect, authorize('doctor', 'admin'), fetchDoctorData)
const authorize = (...roles) => {
  return (req, res, next) => {
    // If the user's role (e.g., 'user') is NOT in the allowed list (e.g., ['doctor', 'admin'])
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        success: false, 
        message: `User role '${req.user.role}' is not authorized to access this route.` 
      });
    }
    // If they have the right role, let them pass
    next();
  };
};

module.exports = { protect, authorize };