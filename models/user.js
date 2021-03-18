const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;