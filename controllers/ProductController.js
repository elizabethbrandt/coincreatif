const Item = require("../models/item");
const productController = {
    saveProduct: function(req, res) {
        Item.create(req.body)
        .then(function(results) {
            res.json(results)
        })
    },
    getProduct: function(req, res) {
        Item.find()
        .then(function(results) {
            res.json(results)
        })
    },
    getItem: function(req, res) {
        Item.findOne({_id:req.params.id})
        .then(function(results) {
            res.json(results)
        })
    },
    deleteProduct: function(req, res) {
        Item.deleteOne({_id:req.params.id})
        .then(function(results) {
            res.json(results)
        })
    }
}

module.exports = productController;