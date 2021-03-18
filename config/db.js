const mongoose = require("mongoose");

// Defining mongoose options
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreatIndex: true,
  useUnifiedTopology: true,
};

// Connects to Mongo DB
module.exports = mongoose.connect(process.env.MONGODB_URI | "mongodb://localhost/coincreatif", options)