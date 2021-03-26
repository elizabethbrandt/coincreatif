const router = require("express").Router();
const cartController = require("../controllers/CartController");

router.route("/cart")
.post(cartController.addToCart)
.get(cartController.getCart)
.delete(cartController.deleteItem)

module.exports = router;