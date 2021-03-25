const router = require("express").Router();
const productController = require("../controllers/ProductController");

router.route("/products")
.post(productController.saveProduct)
.get(productController.getProduct)


router.route("/products/:id")
.get(productController.getItem)
.delete(productController.deleteProduct)

module.exports = router;