const mongoose = require("mongoose");

// Connects to Mongo DB
module.exports = mongoose.connect(process.env.MONGODB_URI | "mongodb://localhost/coincreatif");