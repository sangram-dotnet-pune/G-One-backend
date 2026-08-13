// Filename: config/db.js

// Import Mongoose. Mongoose is a tool that allows Node.js to talk to MongoDB easily.
const mongoose = require('mongoose');

// We create an asynchronous function because connecting to a database over the internet takes a little time.
// The code needs to 'await' (wait for) the connection to finish before moving on.
const connectDB = async () => {
  try {
    // We tell Mongoose to connect using the secret URL stored in our .env file.
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    // If successful, we print a success message to the terminal with the database host name.
    console.log(`[Database] Success! MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // If it fails (e.g., wrong password, no internet), we print the error.
    console.error(`[Database] Connection Error: ${error.message}`);
    
    // We exit the process with a "1" (which means 'exit with failure'). 
    // If the database doesn't connect, our app shouldn't keep running.
    process.exit(1);
  }
};

// We export this function so we can use it in our main server.js file.
module.exports = connectDB;