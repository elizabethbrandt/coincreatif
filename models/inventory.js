const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InventorySchema = new Schema({
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

const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory;
