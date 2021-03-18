const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    sellerId: {
        type: String,
        required: true,
        ref: "User"
    },
    itemName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Art", "Jewelry", "Clothing", "Home Decor", "Entertainment"]
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    imageId: {
        type: String,
        required: true
    },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

// Will need to $push and $pull to inventory collection, look into populate