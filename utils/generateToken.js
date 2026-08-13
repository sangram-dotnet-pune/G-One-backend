// Filename: utils/generateToken.js

const jwt = require('jsonwebtoken');

// This function takes the User's ID and the response object (res)
const generateToken = (res, userId) => {
  // 1. Create the VIP Wristband (Token)
  // We sign it with our secret key so nobody can fake it.
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d', // Token lasts for 7 days
  });

  // 2. Attach the wristband to the user's browser as a secure cookie
  res.cookie('jwt', token, {
    httpOnly: true, // Crucial: Prevents hackers from reading this cookie via JavaScript
    secure: process.env.NODE_ENV !== 'development', // In production (HTTPS), this forces the cookie to be encrypted over the wire
    sameSite: 'strict', // Prevents CSRF attacks (making sure requests come from our actual frontend)
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
  });
};

module.exports = generateToken;