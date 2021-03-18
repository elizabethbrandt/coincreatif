const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item"
    }
  ]
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
