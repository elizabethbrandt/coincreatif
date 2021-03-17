const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageUpload = new Schema(
  {
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("imageUpload", ImageUpload);

module.exports = User;
