const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageUpload = new Schema(
  {
    image: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const image = mongoose.model("ImageUpload", ImageUpload);

module.exports = image;
