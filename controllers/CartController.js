const Cart = require("../models/cart");
const cartController = {
    addToCart: function(req, res) {
        Cart.findOneAndUpdate(req.body)
        .then(function(results) {
            res.json(results)
        })
    },

    getCart: function(req, res) {
        Cart.find()
        .then(function(results) {
            res.json(results)
        })
    },

    deleteItem: function(req, res) {
        Cart.deleteOne({_id:req.params.id})
        .then(function(results) {
            res.json(results)
        })
    }
}

module.exports = cartController;